"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

type IntegrationApp = {
  name: string
  logo: string
}

type IntegrationCarouselProps = {
  buttonText?: string
  buttonHref?: string
  title?: string
  subtitle?: string
  topRowApps?: IntegrationApp[]
  bottomRowApps?: IntegrationApp[]
}

const defaultTopRowApps: IntegrationApp[] = [
  {
    name: "Facebook",
    logo: "https://cdn.cdnlogo.com/logos/f/83/facebook.svg",
  },
  {
    name: "Instagram",
    logo: "https://cdn.cdnlogo.com/logos/i/4/instagram.svg",
  },
  {
    name: "Discord",
    logo: "https://cdn.cdnlogo.com/logos/d/43/discord.svg",
  },
  {
    name: "LinkedIn",
    logo: "https://cdn.cdnlogo.com/logos/l/66/linkedin-icon.svg",
  },
  {
    name: "YouTube",
    logo: "https://cdn.cdnlogo.com/logos/y/57/youtube-icon.svg",
  },
  {
    name: "OpenAI",
    logo: "https://static.cdnlogo.com/logos/c/52/chatgpt.svg",
  },
  {
    name: "Facebook",
    logo: "https://cdn.cdnlogo.com/logos/f/83/facebook.svg",
  },
  {
    name: "Instagram",
    logo: "https://cdn.cdnlogo.com/logos/i/4/instagram.svg",
  },
  {
    name: "Discord",
    logo: "https://cdn.cdnlogo.com/logos/d/43/discord.svg",
  },
  {
    name: "LinkedIn",
    logo: "https://cdn.cdnlogo.com/logos/l/66/linkedin-icon.svg",
  },
  {
    name: "Gemini",
    logo: "https://static.cdnlogo.com/logos/g/15/google-gemini_800.png",
  },
]

const defaultBottomRowApps: IntegrationApp[] = [
  {
    name: "Gmail",
    logo: "https://cdn.cdnlogo.com/logos/g/24/gmail-icon.svg",
  },
  {
    name: "Google Sheets",
    logo: "https://static.cdnlogo.com/logos/g/71/google-sheets.svg",
  },
  {
    name: "Notion",
    logo: "https://static.cdnlogo.com/logos/n/55/notion-1.svg",
  },
  {
    name: "Slack",
    logo: "https://static.cdnlogo.com/logos/s/40/slack-new.svg",
  },
  {
    name: "Webhook",
    logo: "https://static.cdnlogo.com/logos/w/68/webhooks_800.png",
  },
  {
    name: "Gmail",
    logo: "https://cdn.cdnlogo.com/logos/g/24/gmail-icon.svg",
  },
  {
    name: "Google Sheets",
    logo: "https://static.cdnlogo.com/logos/g/71/google-sheets.svg",
  },
  {
    name: "Notion",
    logo: "https://static.cdnlogo.com/logos/n/55/notion-1.svg",
  },
  {
    name: "Slack",
    logo: "https://static.cdnlogo.com/logos/s/40/slack-new.svg",
  },
  {
    name: "Webhook",
    logo: "https://static.cdnlogo.com/logos/w/68/webhooks_800.png",
  },
]

export const ServiceSection = ({
  buttonText = "Learn More",
  buttonHref = "#contact",
  title = "Connect your business to powerful automation.",
  subtitle = "We link your website, marketing channels, and business tools into automated workflows. From lead capture to email responses, everything runs automatically through event-driven automation.",
  topRowApps = defaultTopRowApps,
  bottomRowApps = defaultBottomRowApps,
}: IntegrationCarouselProps) => {
  const topRowRef = useRef<HTMLDivElement>(null)
  const bottomRowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let topAnimationId: number
    let bottomAnimationId: number
    let topPosition = 0
    let bottomPosition = 0

    const animateTopRow = () => {
      if (topRowRef.current) {
        topPosition -= 0.5
        if (Math.abs(topPosition) >= topRowRef.current.scrollWidth / 2) {
          topPosition = 0
        }
        topRowRef.current.style.transform = `translateX(${topPosition}px)`
      }
      topAnimationId = requestAnimationFrame(animateTopRow)
    }

    const animateBottomRow = () => {
      if (bottomRowRef.current) {
        bottomPosition -= 0.65
        if (Math.abs(bottomPosition) >= bottomRowRef.current.scrollWidth / 2) {
          bottomPosition = 0
        }
        bottomRowRef.current.style.transform = `translateX(${bottomPosition}px)`
      }
      bottomAnimationId = requestAnimationFrame(animateBottomRow)
    }

    topAnimationId = requestAnimationFrame(animateTopRow)
    bottomAnimationId = requestAnimationFrame(animateBottomRow)

    return () => {
      cancelAnimationFrame(topAnimationId)
      cancelAnimationFrame(bottomAnimationId)
    }
  }, [])

  return (
    <section id="service" className="relative max-w-7xl overflow-hidden bg-background py-24 mx-auto">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-6 mb-16"
        >
          <span className="w-fit rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Powerful Integrations
          </span>

          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl text-center max-w-4xl">
            Connect your business to <span className="text-primary">powerful automation</span>
          </h2>

          <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl text-center">
            {subtitle}
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex gap-4 mt-2"
          >
            <a
              href={buttonHref}
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 active:scale-95"
            >
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>

        <div className="h-[268px] max-w-7xl relative overflow-hidden mx-auto">
          <div
            ref={topRowRef}
            className="flex items-start gap-6 absolute top-6 whitespace-nowrap"
            style={{
              willChange: "transform",
            }}
          >
            {[...topRowApps, ...topRowApps].map((app, index) => (
              <div
                key={`top-${index}`}
                className="flex items-center justify-center w-24 h-24 rounded-3xl flex-shrink-0 bg-white shadow-lg"
              >
                <img src={app.logo || "/placeholder.svg"} alt={app.name} className="w-9 h-9 block object-contain" />
              </div>
            ))}
          </div>

          <div
            className="absolute top-0 right-0 bottom-0 w-60 h-[268px] z-10 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0), hsl(var(--background)))",
            }}
          />

          <div
            className="absolute top-0 left-0 bottom-0 w-60 h-[268px] z-10 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(90deg, hsl(var(--background)), rgba(255, 255, 255, 0))",
            }}
          />

          <div
            ref={bottomRowRef}
            className="flex items-start gap-6 absolute top-[148px] whitespace-nowrap"
            style={{
              willChange: "transform",
            }}
          >
            {[...bottomRowApps, ...bottomRowApps].map((app, index) => (
              <div
                key={`bottom-${index}`}
                className="flex items-center justify-center w-24 h-24 rounded-3xl flex-shrink-0 bg-white shadow-lg"
              >
                <img src={app.logo || "/placeholder.svg"} alt={app.name} className="w-9 h-9 block object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}