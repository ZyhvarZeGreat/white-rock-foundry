"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Loader2, FileText, Download } from "lucide-react"
import { PDFDocument, rgb, StandardFonts } from "pdf-lib"
import { saveAs } from "file-saver"

interface ExportPDFProps {
  quote: any
  isOpen: boolean
  onClose: () => void
}

export function ExportPDF({ quote, isOpen, onClose }: ExportPDFProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  const generatePDF = async () => {
    if (!quote) return

    setIsGenerating(true)
    try {
      // Create a new PDF document
      const pdfDoc = await PDFDocument.create()

      // Add a page to the document
      const page = pdfDoc.addPage([595.28, 841.89]) // A4 size

      // Get fonts
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
      const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

      // Set some styles
      const textSize = 10
      const titleSize = 16
      const subtitleSize = 12
      const margin = 50
      const lineHeight = 20

      // Draw company logo/header
      page.drawText("Verdantlam", {
        x: margin,
        y: page.getHeight() - margin,
        size: 24,
        font: helveticaBold,
        color: rgb(0.04, 0.23, 0.15), // #0a3b25
      })

      page.drawText("QUOTE REQUEST", {
        x: margin,
        y: page.getHeight() - margin - 30,
        size: titleSize,
        font: helveticaBold,
      })

      // Draw quote details
      let y = page.getHeight() - margin - 70

      // Quote reference
      page.drawText(`Quote Reference: #${quote.id}`, {
        x: margin,
        y,
        size: subtitleSize,
        font: helveticaBold,
      })

      y -= lineHeight * 1.5

      // Date
      const date = new Date(quote.created_at).toLocaleDateString()
      page.drawText(`Date: ${date}`, {
        x: margin,
        y,
        size: textSize,
        font: helveticaFont,
      })

      y -= lineHeight * 2

      // Contact Information Section
      page.drawText("CONTACT INFORMATION", {
        x: margin,
        y,
        size: subtitleSize,
        font: helveticaBold,
      })

      y -= lineHeight

      page.drawText(`Name: ${quote.name}`, {
        x: margin,
        y,
        size: textSize,
        font: helveticaFont,
      })

      y -= lineHeight

      page.drawText(`Company: ${quote.company || "N/A"}`, {
        x: margin,
        y,
        size: textSize,
        font: helveticaFont,
      })

      y -= lineHeight

      page.drawText(`Email: ${quote.email}`, {
        x: margin,
        y,
        size: textSize,
        font: helveticaFont,
      })

      y -= lineHeight

      page.drawText(`Phone: ${quote.phone || "N/A"}`, {
        x: margin,
        y,
        size: textSize,
        font: helveticaFont,
      })

      y -= lineHeight * 2

      // Project Details Section
      page.drawText("PROJECT DETAILS", {
        x: margin,
        y,
        size: subtitleSize,
        font: helveticaBold,
      })

      y -= lineHeight

      page.drawText(`Project Type: ${quote.project_type || "N/A"}`, {
        x: margin,
        y,
        size: textSize,
        font: helveticaFont,
      })

      y -= lineHeight

      page.drawText(`Timeline: ${quote.timeline || "N/A"}`, {
        x: margin,
        y,
        size: textSize,
        font: helveticaFont,
      })

      y -= lineHeight

      page.drawText(`Budget Range: ${quote.budget_range || "N/A"}`, {
        x: margin,
        y,
        size: textSize,
        font: helveticaFont,
      })

      y -= lineHeight * 2

      // Project Description
      page.drawText("PROJECT DESCRIPTION", {
        x: margin,
        y,
        size: subtitleSize,
        font: helveticaBold,
      })

      y -= lineHeight

      // Handle multi-line text for description
      const description = quote.project_description || "No description provided."
      const words = description.split(" ")
      let line = ""
      const maxWidth = page.getWidth() - margin * 2

      for (const word of words) {
        const testLine = line + word + " "
        const testLineWidth = helveticaFont.widthOfTextAtSize(testLine, textSize)

        if (testLineWidth > maxWidth) {
          page.drawText(line, {
            x: margin,
            y,
            size: textSize,
            font: helveticaFont,
          })
          y -= lineHeight
          line = word + " "
        } else {
          line = testLine
        }
      }

      // Draw the last line
      if (line.trim()) {
        page.drawText(line, {
          x: margin,
          y,
          size: textSize,
          font: helveticaFont,
        })
        y -= lineHeight
      }

      y -= lineHeight

      // Additional Information
      if (quote.additional_info) {
        page.drawText("ADDITIONAL INFORMATION", {
          x: margin,
          y,
          size: subtitleSize,
          font: helveticaBold,
        })

        y -= lineHeight

        // Handle multi-line text for additional info
        const additionalInfo = quote.additional_info
        const additionalWords = additionalInfo.split(" ")
        let additionalLine = ""

        for (const word of additionalWords) {
          const testLine = additionalLine + word + " "
          const testLineWidth = helveticaFont.widthOfTextAtSize(testLine, textSize)

          if (testLineWidth > maxWidth) {
            page.drawText(additionalLine, {
              x: margin,
              y,
              size: textSize,
              font: helveticaFont,
            })
            y -= lineHeight
            additionalLine = word + " "
          } else {
            additionalLine = testLine
          }
        }

        // Draw the last line
        if (additionalLine.trim()) {
          page.drawText(additionalLine, {
            x: margin,
            y,
            size: textSize,
            font: helveticaFont,
          })
          y -= lineHeight
        }
      }

      y -= lineHeight * 2

      // Status
      page.drawText(`Status: ${quote.status || "Pending"}`, {
        x: margin,
        y,
        size: textSize,
        font: helveticaBold,
        color:
          quote.status === "Approved"
            ? rgb(0, 0.5, 0)
            : quote.status === "Rejected"
              ? rgb(0.8, 0, 0)
              : rgb(0.5, 0.5, 0),
      })

      // Footer
      const footerY = margin + 30
      page.drawText("Verdantlam - Precision Engineering Solutions", {
        x: margin,
        y: footerY,
        size: 8,
        font: helveticaFont,
      })

      page.drawText("www.whiterockfoundry.com | info@whiterockfoundry.com | (555) 123-4567", {
        x: margin,
        y: footerY - 15,
        size: 8,
        font: helveticaFont,
      })

      // Serialize the PDF to bytes
      const pdfBytes = await pdfDoc.save()

      // Create a Blob from the PDF bytes
      const blob = new Blob([pdfBytes], { type: "application/pdf" })

      // Save the PDF
      saveAs(blob, `quote-request-${quote.id}.pdf`)
    } catch (error) {
      console.error("Error generating PDF:", error)
    } finally {
      setIsGenerating(false)
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Export Quote as PDF</DialogTitle>
          <DialogDescription>Generate a PDF document with all the details of this quote request.</DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center py-6">
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <FileText className="h-12 w-12 mx-auto text-[#0a3b25]" />
            <p className="mt-2 font-medium">Quote Request #{quote?.id}</p>
            <p className="text-sm text-gray-500">
              {quote?.name} - {quote?.company || "Individual"}
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={generatePDF}
            disabled={isGenerating}
            className="bg-[#0a3b25] hover:bg-[#0a3b25]/90 text-white"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
