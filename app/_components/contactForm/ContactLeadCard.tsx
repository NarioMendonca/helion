"use client"

import { useState } from "react"
import { DiagnosticForm } from "./DiagnosticForm"
import { QuickContactForm } from "./QuickContactForm"
import { FormMode } from "./types"

export function ContactLeadCard() {
  const [formMode, setFormMode] = useState<FormMode>("diagnostic")

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
          Consultoria energética gratuita
        </h3>
        <p className="mt-2 text-sm text-slate-600">
          Descubra quanto sua operação pode economizar com uma análise guiada em poucos passos.
        </p>
      </div>

      <div className="mb-6 rounded-2xl py-4">
        <button
          type="button"
          onClick={() => setFormMode("diagnostic")}
          className={`w-full cursor-pointer rounded-xl px-4 py-3 text-left transition ${
            formMode === "diagnostic"
              ? "bg-cyan-700 text-white shadow-lg"
              : "bg-white text-slate-700 hover:bg-cyan-100"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.12em]">Opcao principal</p>
          <p className="mt-1 text-base font-semibold sm:text-lg">
            Quero meu diagnostico energetico gratuito em 3 passos
          </p>
        </button>

        <button
          type="button"
          onClick={() => setFormMode("quick")}
          className="mt-3 cursor-pointer text-xs font-semibold text-slate-500 transition hover:text-cyan-700"
        >
          Ou prefiro apenas enviar nome, WhatsApp e e-mail
        </button>
      </div>

      {formMode === "diagnostic" ? <DiagnosticForm /> : <QuickContactForm />}
    </div>
  )
}
