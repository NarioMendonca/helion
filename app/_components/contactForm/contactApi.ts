type ContactFormType = "quick" | "diagnostic"

type ContactRequestBody = {
  formType: ContactFormType
  data: Record<string, string>
}

type ContactApiError = {
  error?: string
}

export async function submitContactPayload(payload: ContactRequestBody) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    let message = "Nao foi possivel enviar o formulario."

    try {
      const parsed = (await response.json()) as ContactApiError
      if (parsed.error) {
        message = parsed.error
      }
    } catch {
      // Use default message when body is not JSON.
    }

    throw new Error(message)
  }
}
