"use client"

import { FormEvent, useState } from "react"
import { inputBaseClass } from "./formConfig"

export function QuickContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleQuickSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
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

      <button
        type="submit"
        className="cursor-pointer rounded-xl bg-cyan-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-800"
      >
        Enviar contato rapido
      </button>
    </form>
  )
}
