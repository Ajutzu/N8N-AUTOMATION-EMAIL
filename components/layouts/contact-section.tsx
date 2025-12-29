"use client";

import { motion } from "framer-motion";
import { useContactForm } from "@/hooks/use-contact-form";
import { Send, Loader2, Sparkles } from "lucide-react";
import Image from "next/image";

export function ContactSection() {
  const { formData, isSubmitting, handleChange, handleSubmit } =
    useContactForm();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-24 px-4 md:px-10"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Side: Image (Hidden on small screens) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden aspect-square overflow-hidden rounded-3xl lg:block"
          >
            <Image
              src="/contact-image.png"
              alt="Automation Technology"
              fill
              className="object-cover"
            />
            {/* Overlay Gradient for consistency */}

            {/* Decorative Elements */}
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-background/80 p-6 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Efficiency Redefined
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Join 500+ businesses scaling with our AI tools.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <span className="w-fit rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary ">
                Contact Us
              </span>
              <h2 className="text-4xl mt-5 font-extrabold tracking-tight text-foreground sm:text-5xl">
                Start Your <span className="text-primary">Journey</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Tell us about your manual processes and we'll show you how to
                automate them in one click.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="John Doe"
                  className="w-full border-b border-border bg-transparent px-0 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-all"
                  disabled={isSubmitting}
                  required
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Work Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="john@company.com"
                  className="w-full border-b border-border bg-transparent px-0 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-all"
                  disabled={isSubmitting}
                  required
                />
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Your Requirements
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Tell us about the tasks you want to automate..."
                  rows={4}
                  className="w-full border-b border-border bg-transparent px-0 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-all resize-none"
                  disabled={isSubmitting}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group cursor-pointer relative mt-4 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-primary py-4 font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Send Request
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
