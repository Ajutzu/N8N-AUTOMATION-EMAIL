export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface ContactResponse {
  success: boolean
  message: string
  data?: ContactFormData
}

/**
 * Sends contact form data to n8n Cloud webhook
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<ContactResponse> {
  console.info("[v1] submitContactForm called with:", data)

  const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL

  if (!webhookUrl) {
    console.error("[v1] Missing N8N webhook URL env variable")
    return {
      success: false,
      message: "Configuration error. Please try again later.",
    }
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const text = await response.text()
      console.error("[v1] Webhook request failed:", text)
      return {
        success: false,
        message: "Failed to send. Please try again later.",
      }
    }

    await response.json().catch(() => null)

    return {
      success: true,
      message: "Successfully sent! Please wait for our response. Thank you.",
      data,
    }
  } catch (error) {
    console.error("[v1] Error sending contact form:", error)
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    }
  }
}
