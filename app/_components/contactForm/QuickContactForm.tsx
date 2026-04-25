"use client"

import { FormEvent, useState } from "react"
import { submitContactPayload } from "./contactApi"
import { inputBaseClass } from "./formConfig"

export function QuickContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleQuickSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitError(null)
    setIsSubmitting(true)

    const formElement = event.currentTarget
    const formData = new FormData(formElement)
    const normalizedData = Array.from(formData.entries()).reduce<Record<string, string>>((acc, [key, value]) => {
      if (typeof value === "string") {
        acc[key] = value.trim()
      }
      return acc
    }, {})

    try {
      await submitContactPayload({
        formType: "quick",
        data: normalizedData,
      })
      setSubmitted(true)
      formElement.reset()
    } catch (error) {
      const message = error instanceof Error ? error.message : "Falha ao enviar formulario."
      setSubmitError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleQuickSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm font-semibold text-slate-800">Contato rapido</p>
      <p className="text-xs text-slate-600">Se preferir, envie so seus dados e nosso time retorna com prioridade.</p>

      <label htmlFor="quickName" className="block text-sm font-medium text-slate-700">
        Nome
        <input id="quickName" name="quickName" type="text" required placeholder="Seu nome" className={inputBaseClass} />
      </label>

      <label htmlFor="quickPhone" className="block text-sm font-medium text-slate-700">
        WhatsApp
        <input id="quickPhone" name="quickPhone" type="tel" required placeholder="(85) 99999-9999" className={inputBaseClass} />
      </label>

      <label htmlFor="quickEmail" className="block text-sm font-medium text-slate-700">
        E-mail
        <input id="quickEmail" name="quickEmail" type="email" required placeholder="contato@empresa.com" className={inputBaseClass} />
      </label>

      {submitted ? (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
          Perfeito. Recebemos seu contato e vamos responder rapidamente.
        </div>
      ) : null}

      {submitError ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{submitError}</div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="cursor-pointer rounded-xl bg-cyan-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Enviando..." : "Enviar contato rapido"}
      </button>
    </form>
  )
}
