import { Button } from "@/components/ui/button"
import { Linkedin, FileDown } from "lucide-react"

interface ResumeActionsProps {
  linkedinUrl: string
  pdfUrl: string
  linkedinText: string
  downloadText: string
}

export default function ResumeActions({ linkedinUrl, pdfUrl, linkedinText, downloadText }: ResumeActionsProps) {
  return (
    <div className="flex space-x-4">
      <Button asChild variant="outline">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <Linkedin className="mr-2 h-4 w-4" />
          {linkedinText}
        </a>
      </Button>
      <Button asChild variant="outline">
        <a href={pdfUrl} download>
          <FileDown className="mr-2 h-4 w-4" />
          {downloadText}
        </a>
      </Button>
    </div>
  )
}

