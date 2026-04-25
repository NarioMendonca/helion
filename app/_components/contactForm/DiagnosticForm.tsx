"use client"

import { FormEvent, useRef, useState } from "react"
import { isFormField } from "./formConfig"
import { DiagnosticStepOne } from "./DiagnosticStepOne"
import { DiagnosticStepTwo } from "./DiagnosticStepTwo"
import { DiagnosticStepThree } from "./DiagnosticStepThree"
import { submitContactPayload } from "./contactApi"
import { CustomerType, EnergyInputMode } from "./types"

export function DiagnosticForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [customerType, setCustomerType] = useState<CustomerType>("")
  const [energyInputMode, setEnergyInputMode] = useState<EnergyInputMode>("")
  const formRef = useRef<HTMLFormElement>(null)
  const totalSteps = 3
  const progress = `${(currentStep / totalSteps) * 100}%`

  const validateCurrentStep = (step: number) => {
    const form = formRef.current

    if (!form) {
      return true
    }

    const stepFields = Array.from(form.querySelectorAll(`[data-step="${step}"]`))

    for (const field of stepFields) {
      if (isFormField(field) && !field.checkValidity()) {
        field.reportValidity()
        return false
      }
    }

    return true
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!validateCurrentStep(currentStep)) {
      return
    }

    if (currentStep < totalSteps) {
      setCurrentStep((previousStep) => previousStep + 1)
      return
    }

    const formElement = formRef.current
    if (!formElement) {
      return
    }

    setSubmitError(null)
    setIsSubmitting(true)

    const formData = new FormData(formElement)
    const normalizedData = Array.from(formData.entries()).reduce<Record<string, string>>((acc, [key, value]) => {
      if (typeof value === "string") {
        acc[key] = value.trim()
      }
      return acc
    }, {})

    try {
      await submitContactPayload({
        formType: "diagnostic",
        data: normalizedData,
      })
      setSubmitted(true)
    } catch (error) {
      const message = error instanceof Error ? error.message : "Falha ao enviar formulario."
      setSubmitError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <div className="mb-2 flex items-center justify-between text-xs font-semibold text-slate-500">
          <span>Etapa {currentStep} de {totalSteps}</span>
          <span>{Math.round((currentStep / totalSteps) * 100)}% concluido</span>
        </div>
        <div className="h-2 rounded-full bg-slate-200">
          <div className="h-2 rounded-full bg-cyan-700 transition-all duration-300" style={{ width: progress }} />
        </div>
      </div>

      {currentStep === 1 ? <DiagnosticStepOne customerType={customerType} onCustomerTypeChange={setCustomerType} /> : null}
      {currentStep === 2 ? <DiagnosticStepTwo energyInputMode={energyInputMode} onEnergyInputModeChange={setEnergyInputMode} /> : null}
      {currentStep === 3 ? <DiagnosticStepThree /> : null}

      {submitted ? (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
          Recebemos seus dados. Em ate 1 dia util, nossa equipe envia sua analise gratuita.
        </div>
      ) : null}

      {submitError ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">{submitError}</div>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">Seus dados sao confidenciais e usados apenas para seu diagnostico.</p>

        <div className="flex gap-2 self-end sm:self-auto">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={() => setCurrentStep((previousStep) => Math.max(previousStep - 1, 1))}
              disabled={isSubmitting}
              className="rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Voltar
            </button>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer rounded-xl bg-cyan-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-800 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting
              ? "Enviando..."
              : currentStep < totalSteps
                ? "Continuar diagnostico"
                : "Quero meu diagnostico gratuito"}
          </button>
        </div>
      </div>
    </form>
  )
}
