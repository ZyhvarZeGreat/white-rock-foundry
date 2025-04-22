"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { getClientSupabaseClient } from "@/lib/supabase"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Search,
  Upload,
  Grid,
  List,
  MoreVertical,
  ImageIcon,
  Edit,
  Download,
  Copy,
  ExternalLink,
  Loader2,
  FileText,
  File,
  Trash2,
  X,
  CheckCircle2,
  AlertCircle,
} from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Progress } from "@/components/ui/progress"
import { useDropzone } from "react-dropzone"

type MediaItem = {
  id: string
  name: string
  url: string
  type: string
  size: number
  created_at: string
  metadata: {
    width?: number
    height?: number
    mimetype?: string
  }
}

type UploadingFile = {
  id: string
  file: File
  progress: number
  error?: string
  status: "uploading" | "success" | "error"
}

export default function MediaLibraryPage() {
  const [view, setView] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(null)
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false)
  const [isRenameDialogOpen, setIsRenameDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([])
  const [loading, setLoading] = useState(true)
  const [uploadingFiles, setUploadingFiles] = useState<UploadingFile[]>([])
  const [newName, setNewName] = useState("")
  const [mediaToDelete, setMediaToDelete] = useState<MediaItem | null>(null)
  const [mediaToRename, setMediaToRename] = useState<MediaItem | null>(null)
  const [activeTab, setActiveTab] = useState("all")
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    fetchMediaItems()
  }, [activeTab, searchQuery])

  const fetchMediaItems = async () => {
    setLoading(true)
    try {
      const supabase = getClientSupabaseClient()
      const { data, error } = await supabase.storage.from("images").list("", {
        sortBy: { column: "created_at", order: "desc" },
      })

      if (error) {
        console.error("Error fetching media items:", error)
        toast({
          title: "Error",
          description: "Failed to fetch media items",
          variant: "destructive",
        })
        return
      }

      // Filter out folders
      const files = data.filter((item) => !item.id.endsWith("/"))

      // Get URLs for each file
      const mediaWithUrls = await Promise.all(
        files.map(async (file) => {
          const { data: urlData } = supabase.storage.from("images").getPublicUrl(file.name)

          // Determine file type
          const extension = file.name.split(".").pop()?.toLowerCase() || ""
          let type = "file"
          if (["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(extension)) {
            type = "image"
          } else if (["mp4", "webm", "mov"].includes(extension)) {
            type = "video"
          } else if (["pdf", "doc", "docx", "txt"].includes(extension)) {
            type = "document"
          }

          return {
            id: file.id,
            name: file.name,
            url: urlData.publicUrl,
            type,
            size: file.metadata.size,
            created_at: file.created_at,
            metadata: file.metadata,
          } as MediaItem
        }),
      )

      // Filter by search query
      const filteredMedia = mediaWithUrls.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))

      // Filter by type if not "all"
      const typeFilteredMedia =
        activeTab === "all" ? filteredMedia : filteredMedia.filter((item) => item.type === activeTab)

      setMediaItems(typeFilteredMedia)
    } catch (error) {
      console.error("Error in fetchMediaItems:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Create uploading file objects
      const newUploadingFiles = acceptedFiles.map((file) => ({
        id: Math.random().toString(36).substring(2, 15),
        file,
        progress: 0,
        status: "uploading" as const,
      }))

      setUploadingFiles((prev) => [...prev, ...newUploadingFiles])

      // Upload each file
      newUploadingFiles.forEach((uploadingFile) => {
        uploadFile(uploadingFile)
      })
    },
    [setUploadingFiles],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp", ".svg"],
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      "text/plain": [".txt"],
      "video/mp4": [".mp4"],
      "video/webm": [".webm"],
      "video/quicktime": [".mov"],
    },
    maxSize: 10485760, // 10MB
  })

  const uploadFile = async (uploadingFile: UploadingFile) => {
    try {
      const supabase = getClientSupabaseClient()
      const file = uploadingFile.file
      const fileExt = file.name.split(".").pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${fileExt}`

      const { error } = await supabase.storage.from("images").upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
        onUploadProgress: (progress) => {
          const percentage = Math.round((progress.loaded / progress.total) * 100)
          setUploadingFiles((prev) =>
            prev.map((item) => (item.id === uploadingFile.id ? { ...item, progress: percentage } : item)),
          )
        },
      })

      if (error) {
        throw error
      }

      // Mark as success
      setUploadingFiles((prev) =>
        prev.map((item) => (item.id === uploadingFile.id ? { ...item, status: "success" } : item)),
      )

      // Refresh the media list after a short delay
      setTimeout(() => {
        fetchMediaItems()
        // Remove from uploading files list after success
        setUploadingFiles((prev) => prev.filter((item) => item.id !== uploadingFile.id))
      }, 1000)
    } catch (error: any) {
      console.error("Error uploading file:", error)

      // Mark as error
      setUploadingFiles((prev) =>
        prev.map((item) => (item.id === uploadingFile.id ? { ...item, status: "error", error: error.message } : item)),
      )
    }
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    // Convert FileList to array and use onDrop
    const filesArray = Array.from(files)
    onDrop(filesArray)
  }

  const handleDeleteMedia = async () => {
    if (!mediaToDelete) return

    try {
      const supabase = getClientSupabaseClient()
      const { error } = await supabase.storage.from("images").remove([mediaToDelete.name])

      if (error) {
        throw error
      }

      // Update local state
      setMediaItems(mediaItems.filter((item) => item.id !== mediaToDelete.id))

      if (selectedImage?.id === mediaToDelete.id) {
        setSelectedImage(null)
      }

      setIsDeleteDialogOpen(false)
      setMediaToDelete(null)

      toast({
        title: "Success",
        description: "File deleted successfully",
      })
    } catch (error) {
      console.error("Error deleting file:", error)
      toast({
        title: "Error",
        description: "Failed to delete file",
        variant: "destructive",
      })
    }
  }

  const handleRenameMedia = async () => {
    if (!mediaToRename || !newName) return

    try {
      const supabase = getClientSupabaseClient()

      // First, copy the file with the new name
      const fileExt = mediaToRename.name.split(".").pop()
      const newFileName = `${newName}.${fileExt}`

      // Download the file
      const { data: fileData, error: downloadError } = await supabase.storage
        .from("images")
        .download(mediaToRename.name)

      if (downloadError) throw downloadError

      // Upload with new name
      const { error: uploadError } = await supabase.storage.from("images").upload(newFileName, fileData, {
        cacheControl: "3600",
        upsert: false,
      })

      if (uploadError) throw uploadError

      // Delete the old file
      const { error: deleteError } = await supabase.storage.from("images").remove([mediaToRename.name])

      if (deleteError) throw deleteError

      // Refresh the media list
      await fetchMediaItems()

      setIsRenameDialogOpen(false)
      setMediaToRename(null)
      setNewName("")

      toast({
        title: "Success",
        description: "File renamed successfully",
      })
    } catch (error) {
      console.error("Error renaming file:", error)
      toast({
        title: "Error",
        description: "Failed to rename file",
        variant: "destructive",
      })
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied",
      description: "URL copied to clipboard",
    })
  }

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const getFileIcon = (type: string) => {
    switch (type) {
      case "image":
        return <ImageIcon className="h-6 w-6" />
      case "video":
        return <FileText className="h-6 w-6" />
      case "document":
        return <FileText className="h-6 w-6" />
      default:
        return <File className="h-6 w-6" />
    }
  }

  const cancelUpload = (id: string) => {
    setUploadingFiles((prev) => prev.filter((item) => item.id !== id))
  }

  // Filter media items based on search query
  const filteredMedia = mediaItems.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Media Library</h1>
            <p className="text-muted-foreground">Manage your images and media files.</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search media..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Dialog open={isUploadDialogOpen} onOpenChange={setIsUploadDialogOpen}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2 bg-[#0a3b25] hover:bg-[#0a3b25]/90">
                  <Upload className="h-4 w-4" />
                  <span>Upload</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Upload Media</DialogTitle>
                  <DialogDescription>Upload images and other media files to your library.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div
                    {...getRootProps()}
                    className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                      isDragActive ? "border-primary bg-primary/5" : "border-gray-300"
                    }`}
                  >
                    <input {...getInputProps()} />
                    <div className="flex flex-col items-center gap-2">
                      <Upload className="h-8 w-8 text-muted-foreground" />
                      <p className="font-medium">{isDragActive ? "Drop files here" : "Drag and drop files here"}</p>
                      <p className="text-sm text-muted-foreground">or click to browse files from your computer</p>
                      <Input
                        type="file"
                        className="hidden"
                        id="file-upload"
                        ref={fileInputRef}
                        multiple
                        onChange={handleFileUpload}
                      />
                      <Label
                        htmlFor="file-upload"
                        className="mt-2 cursor-pointer rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                      >
                        Select Files
                      </Label>
                    </div>
                  </div>

                  {uploadingFiles.length > 0 && (
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Uploading Files</h3>
                      <div className="space-y-3">
                        {uploadingFiles.map((file) => (
                          <div key={file.id} className="space-y-1">
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-2 truncate max-w-[80%]">
                                {file.status === "success" ? (
                                  <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                                ) : file.status === "error" ? (
                                  <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                                ) : (
                                  <Loader2 className="h-4 w-4 animate-spin flex-shrink-0" />
                                )}
                                <span className="truncate">{file.file.name}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span>
                                  {file.status === "success"
                                    ? "Complete"
                                    : file.status === "error"
                                      ? "Failed"
                                      : `${file.progress}%`}
                                </span>
                                {file.status !== "success" && (
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6"
                                    onClick={() => cancelUpload(file.id)}
                                  >
                                    <X className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>
                            </div>
                            {file.status === "uploading" && <Progress value={file.progress} className="h-1" />}
                            {file.status === "error" && (
                              <p className="text-xs text-red-500">{file.error || "Upload failed"}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsUploadDialogOpen(false)}>
                    Close
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full" value={activeTab} onValueChange={setActiveTab}>
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="all">All Media</TabsTrigger>
              <TabsTrigger value="image">Images</TabsTrigger>
              <TabsTrigger value="document">Documents</TabsTrigger>
              <TabsTrigger value="video">Videos</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-1">
              <Button
                variant={view === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setView("grid")}
                className="h-8 w-8"
              >
                <Grid className="h-4 w-4" />
                <span className="sr-only">Grid view</span>
              </Button>
              <Button
                variant={view === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setView("list")}
                className="h-8 w-8"
              >
                <List className="h-4 w-4" />
                <span className="sr-only">List view</span>
              </Button>
            </div>
          </div>

          <ScrollArea className="h-[calc(100vh-280px)]">
            <TabsContent value={activeTab} className="mt-4">
              {loading ? (
                <div className="flex justify-center items-center py-12">
                  <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : filteredMedia.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  No media files found. Upload some files to get started.
                </div>
              ) : view === "grid" ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {filteredMedia.map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative group">
                          {item.type === "image" ? (
                            <img
                              src={item.url || "/placeholder.svg"}
                              alt={item.name}
                              className="w-full aspect-square object-cover"
                            />
                          ) : (
                            <div className="w-full aspect-square bg-muted flex items-center justify-center">
                              {getFileIcon(item.type)}
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <Button
                              variant="secondary"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() => setSelectedImage(item)}
                            >
                              <ImageIcon className="h-4 w-4" />
                              <span className="sr-only">View</span>
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="secondary" size="icon" className="h-8 w-8">
                                  <MoreVertical className="h-4 w-4" />
                                  <span className="sr-only">More</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem
                                  className="flex items-center gap-2"
                                  onClick={() => {
                                    setMediaToRename(item)
                                    setNewName(item.name.split(".")[0])
                                    setIsRenameDialogOpen(true)
                                  }}
                                >
                                  <Edit className="h-4 w-4" /> Rename
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  className="flex items-center gap-2"
                                  onClick={() => window.open(item.url, "_blank")}
                                >
                                  <Download className="h-4 w-4" /> Download
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  className="flex items-center gap-2"
                                  onClick={() => copyToClipboard(item.url)}
                                >
                                  <Copy className="h-4 w-4" /> Copy URL
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  className="flex items-center gap-2 text-red-600"
                                  onClick={() => {
                                    setMediaToDelete(item)
                                    setIsDeleteDialogOpen(true)
                                  }}
                                >
                                  <Trash2 className="h-4 w-4" /> Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                        <div className="p-2">
                          <p className="text-sm font-medium truncate" title={item.name}>
                            {item.name}
                          </p>
                          <p className="text-xs text-muted-foreground">{formatFileSize(item.size)}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="rounded-md border">
                  <div className="grid grid-cols-[1fr_100px_100px_80px] md:grid-cols-[1fr_150px_150px_120px] gap-4 p-4 font-medium border-b">
                    <div>Name</div>
                    <div>Type</div>
                    <div>Size</div>
                    <div>Actions</div>
                  </div>
                  {filteredMedia.map((item) => (
                    <div
                      key={item.id}
                      className="grid grid-cols-[1fr_100px_100px_80px] md:grid-cols-[1fr_150px_150px_120px] gap-4 p-4 border-b items-center"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded overflow-hidden flex-shrink-0">
                          {item.type === "image" ? (
                            <img
                              src={item.url || "/placeholder.svg"}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="h-full w-full bg-muted flex items-center justify-center">
                              {getFileIcon(item.type)}
                            </div>
                          )}
                        </div>
                        <span className="truncate font-medium">{item.name}</span>
                      </div>
                      <div className="text-sm capitalize">{item.type}</div>
                      <div className="text-sm">{formatFileSize(item.size)}</div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setSelectedImage(item)}>
                          <ImageIcon className="h-4 w-4" />
                          <span className="sr-only">View</span>
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="h-4 w-4" />
                              <span className="sr-only">More</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              className="flex items-center gap-2"
                              onClick={() => {
                                setMediaToRename(item)
                                setNewName(item.name.split(".")[0])
                                setIsRenameDialogOpen(true)
                              }}
                            >
                              <Edit className="h-4 w-4" /> Rename
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="flex items-center gap-2"
                              onClick={() => window.open(item.url, "_blank")}
                            >
                              <Download className="h-4 w-4" /> Download
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="flex items-center gap-2"
                              onClick={() => copyToClipboard(item.url)}
                            >
                              <Copy className="h-4 w-4" /> Copy URL
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              className="flex items-center gap-2 text-red-600"
                              onClick={() => {
                                setMediaToDelete(item)
                                setIsDeleteDialogOpen(true)
                              }}
                            >
                              <Trash2 className="h-4 w-4" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </TabsContent>
          </ScrollArea>
        </Tabs>

        {/* Image Preview Dialog */}
        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>{selectedImage.name}</DialogTitle>
                <DialogDescription>
                  {selectedImage.type === "image" && selectedImage.metadata.width && selectedImage.metadata.height
                    ? `${selectedImage.metadata.width} × ${selectedImage.metadata.height} • `
                    : ""}
                  {formatFileSize(selectedImage.size)}
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-center">
                {selectedImage.type === "image" ? (
                  <img
                    src={selectedImage.url || "/placeholder.svg"}
                    alt={selectedImage.name}
                    className="max-h-[60vh] object-contain"
                  />
                ) : (
                  <div className="h-64 w-64 bg-muted flex items-center justify-center">
                    {getFileIcon(selectedImage.type)}
                  </div>
                )}
              </div>
              <DialogFooter className="flex justify-between items-center">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={() => {
                      setMediaToRename(selectedImage)
                      setNewName(selectedImage.name.split(".")[0])
                      setIsRenameDialogOpen(true)
                    }}
                  >
                    <Edit className="h-4 w-4" /> Rename
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={() => window.open(selectedImage.url, "_blank")}
                  >
                    <Download className="h-4 w-4" /> Download
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={() => copyToClipboard(selectedImage.url)}
                  >
                    <Copy className="h-4 w-4" /> Copy URL
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                    onClick={() => window.open(selectedImage.url, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4" /> Open
                  </Button>
                </div>
                <Button
                  variant="destructive"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={() => {
                    setMediaToDelete(selectedImage)
                    setIsDeleteDialogOpen(true)
                  }}
                >
                  <Trash2 className="h-4 w-4" /> Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}

        {/* Rename Dialog */}
        <Dialog open={isRenameDialogOpen} onOpenChange={setIsRenameDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Rename File</DialogTitle>
              <DialogDescription>Enter a new name for the file</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="new-name">File Name</Label>
                <Input
                  id="new-name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Enter new file name"
                />
                {mediaToRename && (
                  <p className="text-xs text-muted-foreground">
                    File extension will remain .{mediaToRename.name.split(".").pop()}
                  </p>
                )}
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsRenameDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleRenameMedia} disabled={!newName}>
                Rename
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this file? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleDeleteMedia}>
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
