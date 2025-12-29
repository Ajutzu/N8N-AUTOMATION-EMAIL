"use client"

import { motion } from "framer-motion"
import { ArrowRight, Twitter, Linkedin, Github, Instagram } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const floatingIcons = [
    { Icon: Twitter, color: "text-blue-400", delay: 0, x: "10%", y: "15%" },
    { Icon: Linkedin, color: "text-blue-700", delay: 0.5, x: "85%", y: "20%" },
    { Icon: Github, color: "text-gray-800", delay: 1, x: "15%", y: "75%" },
    { Icon: Instagram, color: "text-pink-500", delay: 1.5, x: "80%", y: "70%" },
  ]

  return (
    <section id="home" className="relative max-w-7xl overflow-hidden bg-background py-15 mx-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <span className="w-fit rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Next-Gen Business Automation
            </span>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Scale Your Operations with <span className="text-primary">Intelligent Automation</span>
            </h1>
            <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
              We empower modern businesses to reclaim thousands of hours by automating repetitive tasks, integrating
              workflows, and deploying custom AI solutions.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 active:scale-95"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#service"
                className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Our Services
              </a>
            </div>
          </motion.div>

          {/* Visual Element with Floating Icons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex aspect-square items-center justify-center"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[32px] bg-white shadow-2xl">
              <Image
                src="/hero-image.png"
                alt="Automation Illustration"
                fill
                className="object-contain"
              />

              {/* Floating Social Media Icons */}
              {floatingIcons.map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute rounded-2xl bg-white p-4 shadow-lg ${item.color}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: item.delay,
                    y: {
                      duration: 3 + Math.random() * 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    },
                  }}
                  style={{ left: item.x, top: item.y }}
                >
                  <item.Icon className="h-6 w-6" />
                </motion.div>
              ))}


            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
