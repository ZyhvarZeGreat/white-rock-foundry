"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Search, Plus, MoreHorizontal, FileText, Download, Eye, CheckCircle, XCircle } from "lucide-react"
import { getQuoteRequests, updateQuoteStatus } from "@/app/actions/quote-actions"
import { ExportPDF } from "./export-pdf"

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<any[]>([])
  const [filteredQuotes, setFilteredQuotes] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false)
  const [selectedQuote, setSelectedQuote] = useState<any>(null)
  const [isExportDialogOpen, setIsExportDialogOpen] = useState(false)
  const [isUpdating, setIsUpdating] = useState<number | null>(null)

  useEffect(() => {
    loadQuotes()
  }, [])

  useEffect(() => {
    filterQuotes()
  }, [quotes, searchQuery, activeTab])

  const loadQuotes = async () => {
    setIsLoading(true)
    try {
      const data = await getQuoteRequests()
      setQuotes(data)
    } catch (error) {
      console.error("Error loading quotes:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const filterQuotes = () => {
    let filtered = [...quotes]

    // Filter by status
    if (activeTab !== "all") {
      filtered = filtered.filter((quote) => quote.status?.toLowerCase() === activeTab)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (quote) =>
          quote.name?.toLowerCase().includes(query) ||
          quote.company?.toLowerCase().includes(query) ||
          quote.email?.toLowerCase().includes(query) ||
          quote.project_type?.toLowerCase().includes(query),
      )
    }

    setFilteredQuotes(filtered)
  }

  const handleStatusChange = async (quoteId: number, newStatus: string) => {
    setIsUpdating(quoteId)
    try {
      await updateQuoteStatus(quoteId, newStatus)
      setQuotes((prevQuotes) =>
        prevQuotes.map((quote) => (quote.id === quoteId ? { ...quote, status: newStatus } : quote)),
      )
    } catch (error) {
      console.error("Error updating quote status:", error)
    } finally {
      setIsUpdating(null)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getStatusBadge = (status: string) => {
    switch (status?.toLowerCase()) {
      case "approved":
        return <Badge className="bg-green-500">Approved</Badge>
      case "rejected":
        return <Badge className="bg-red-500">Rejected</Badge>
      case "in progress":
        return <Badge className="bg-blue-500">In Progress</Badge>
      default:
        return <Badge className="bg-yellow-500">Pending</Badge>
    }
  }

  const handleViewQuote = (quote: any) => {
    setSelectedQuote(quote)
    setIsViewDialogOpen(true)
  }

  const handleExportQuote = (quote: any) => {
    setSelectedQuote(quote)
    setIsExportDialogOpen(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="bg-[#0a3b25] text-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              White Rock Foundry
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/admin" className="text-white hover:text-yellow-300">
              Admin Dashboard
            </Link>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-sm px-4 py-2">
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold font-heading">Quote Requests</h1>
              <p className="text-gray-600">Manage and respond to customer quote requests</p>
            </div>
            <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white" onClick={() => setIsAddDialogOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Quote
            </Button>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <CardTitle>Quote Requests</CardTitle>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Search quotes..."
                      className="pl-8 w-full sm:w-[250px]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="mb-6">
                  <TabsTrigger value="all">All Quotes</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="in progress">In Progress</TabsTrigger>
                  <TabsTrigger value="approved">Approved</TabsTrigger>
                  <TabsTrigger value="rejected">Rejected</TabsTrigger>
                </TabsList>

                <TabsContent value={activeTab}>
                  {isLoading ? (
                    <div className="flex justify-center items-center py-12">
                      <Loader2 className="h-8 w-8 animate-spin text-[#0a3b25]" />
                      <span className="ml-2">Loading quotes...</span>
                    </div>
                  ) : filteredQuotes.length === 0 ? (
                    <div className="text-center py-12">
                      <FileText className="h-12 w-12 mx-auto text-gray-400" />
                      <h3 className="mt-4 text-lg font-medium">No quotes found</h3>
                      <p className="mt-1 text-gray-500">
                        {searchQuery
                          ? "No quotes match your search criteria."
                          : activeTab !== "all"
                            ? `You don't have any ${activeTab} quotes yet.`
                            : "You haven't received any quote requests yet."}
                      </p>
                      <Button
                        className="mt-4 bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white"
                        onClick={() => setIsAddDialogOpen(true)}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Quote Manually
                      </Button>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Company</TableHead>
                            <TableHead>Project Type</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredQuotes.map((quote) => (
                            <TableRow key={quote.id}>
                              <TableCell className="font-medium">#{quote.id}</TableCell>
                              <TableCell>{quote.name}</TableCell>
                              <TableCell>{quote.company || "—"}</TableCell>
                              <TableCell>{quote.project_type || "—"}</TableCell>
                              <TableCell>{formatDate(quote.created_at)}</TableCell>
                              <TableCell>{getStatusBadge(quote.status)}</TableCell>
                              <TableCell className="text-right">
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="sm">
                                      {isUpdating === quote.id ? (
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                      ) : (
                                        <MoreHorizontal className="h-4 w-4" />
                                      )}
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                    <DropdownMenuItem onClick={() => handleViewQuote(quote)}>
                                      <Eye className="h-4 w-4 mr-2" />
                                      View Details
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => handleExportQuote(quote)}>
                                      <Download className="h-4 w-4 mr-2" />
                                      Export as PDF
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuLabel>Change Status</DropdownMenuLabel>
                                    <DropdownMenuItem onClick={() => handleStatusChange(quote.id, "Pending")}>
                                      <Badge className="bg-yellow-500 mr-2">Pending</Badge>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => handleStatusChange(quote.id, "In Progress")}>
                                      <Badge className="bg-blue-500 mr-2">In Progress</Badge>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => handleStatusChange(quote.id, "Approved")}>
                                      <Badge className="bg-green-500 mr-2">Approved</Badge>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => handleStatusChange(quote.id, "Rejected")}>
                                      <Badge className="bg-red-500 mr-2">Rejected</Badge>
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* View Quote Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Quote Request Details</DialogTitle>
            <DialogDescription>
              Quote #{selectedQuote?.id} from {selectedQuote?.name}
            </DialogDescription>
          </DialogHeader>

          {selectedQuote && (
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">Contact Information</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
                    <div>
                      <p className="text-sm font-medium text-gray-500">Name</p>
                      <p>{selectedQuote.name}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Company</p>
                      <p>{selectedQuote.company || "—"}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <p>{selectedQuote.email}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Phone</p>
                      <p>{selectedQuote.phone || "—"}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-500">Status</p>
                  <div className="mt-1">{getStatusBadge(selectedQuote.status)}</div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Project Details</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Project Type</p>
                    <p>{selectedQuote.project_type || "—"}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Timeline</p>
                    <p>{selectedQuote.timeline || "—"}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Budget Range</p>
                    <p>{selectedQuote.budget_range || "—"}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Date Submitted</p>
                    <p>{formatDate(selectedQuote.created_at)}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold">Project Description</h3>
                <p className="mt-2 whitespace-pre-wrap">
                  {selectedQuote.project_description || "No description provided."}
                </p>
              </div>

              {selectedQuote.additional_info && (
                <div>
                  <h3 className="text-lg font-semibold">Additional Information</h3>
                  <p className="mt-2 whitespace-pre-wrap">{selectedQuote.additional_info}</p>
                </div>
              )}

              <div className="flex justify-between items-center pt-4 border-t">
                <div className="space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      handleStatusChange(selectedQuote.id, "Approved")
                      setIsViewDialogOpen(false)
                    }}
                    disabled={isUpdating === selectedQuote.id}
                    className="border-green-500 text-green-600 hover:bg-green-50"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Approve
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      handleStatusChange(selectedQuote.id, "Rejected")
                      setIsViewDialogOpen(false)
                    }}
                    disabled={isUpdating === selectedQuote.id}
                    className="border-red-500 text-red-600 hover:bg-red-50"
                  >
                    <XCircle className="h-4 w-4 mr-2" />
                    Reject
                  </Button>
                </div>
                <Button variant="outline" size="sm" onClick={() => handleExportQuote(selectedQuote)}>
                  <Download className="h-4 w-4 mr-2" />
                  Export as PDF
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Add Quote Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add New Quote Request</DialogTitle>
            <DialogDescription>Manually add a new quote request to the system.</DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" placeholder="Client name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Company name (optional)" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="client@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Phone number (optional)" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="project-type">Project Type *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="precision-casting">Precision Casting</SelectItem>
                    <SelectItem value="cnc-machining">CNC Machining</SelectItem>
                    <SelectItem value="metal-fabrication">Metal Fabrication</SelectItem>
                    <SelectItem value="prototyping">Prototyping</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeline">Timeline</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select timeline" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">Urgent (1-2 weeks)</SelectItem>
                    <SelectItem value="standard">Standard (3-4 weeks)</SelectItem>
                    <SelectItem value="flexible">Flexible (1-2 months)</SelectItem>
                    <SelectItem value="long-term">Long-term (3+ months)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-5k">Under $5,000</SelectItem>
                    <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                    <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                    <SelectItem value="over-50k">Over $50,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select defaultValue="pending">
                  <SelectTrigger>
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Project Description *</Label>
              <Textarea
                id="description"
                placeholder="Detailed description of the project requirements"
                rows={4}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="additional-info">Additional Information</Label>
              <Textarea id="additional-info" placeholder="Any other relevant information" rows={3} />
            </div>
          </form>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white">Add Quote</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Export PDF Dialog */}
      {selectedQuote && (
        <ExportPDF quote={selectedQuote} isOpen={isExportDialogOpen} onClose={() => setIsExportDialogOpen(false)} />
      )}

      {/* Footer */}
      <footer className="bg-[#0a3b25] text-white py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm">© 2023 White Rock Foundry Admin Portal. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
