import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left Side - Brand */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="">
                <Image 
                  src="/main-logo.png" 
                  alt="Logo" 
                  width={140} 
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Empowering modern businesses to scale through intelligent automation. We connect your tools, streamline your workflows, and deploy custom AI solutions that transform how you work.
            </p>
          </div>

          {/* Right Side - Creator Info */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-1">Created by</p>
              <p className="text-lg font-semibold text-foreground">AJ Castillo</p>
            </div>
            <Link
              href="https://ajcastillo.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
            >
              View Portfolio
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}