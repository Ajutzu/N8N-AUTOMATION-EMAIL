"use client"

import type React from "react"
import { useState } from "react"
import { submitContactForm, type ContactFormData } from "../service/contact.service"
import { useToast } from "@/components/ui/toaster"

interface UseContactFormReturn {
  formData: ContactFormData
  isSubmitting: boolean
  handleChange: (field: keyof ContactFormData, value: string) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  resetForm: () => void
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  message: "",
}

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { addToast } = useToast()

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const resetForm = () => {
    setFormData(initialFormData)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      addToast({ title: "Missing Information", description: "Please fill in all fields before submitting.", type: "error" })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await submitContactForm(formData)

      if (response.success) {
        addToast({ title: "Success!", description: response.message, type: "success" })
        resetForm()
      }
    } catch (error) {
      addToast({ title: "Error", description: "Something went wrong. Please try again.", type: "error" })
      console.error("[v0] Contact form error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formData,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
  }
}
