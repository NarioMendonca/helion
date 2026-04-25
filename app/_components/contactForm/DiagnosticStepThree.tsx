import { inputBaseClass } from "./formConfig"

export function DiagnosticStepThree() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label htmlFor="responsibleName" className="text-sm font-medium text-slate-700">
          Nome
          <input data-step="3" id="responsibleName" name="responsibleName" type="text" required placeholder="Seu nome" className={inputBaseClass} />
        </label>

        <label htmlFor="phone" className="text-sm font-medium text-slate-700">
          WhatsApp
          <input data-step="3" id="phone" name="phone" type="tel" required placeholder="(85) 99999-9999" className={inputBaseClass} />
        </label>

        <label htmlFor="workEmail" className="text-sm font-medium text-slate-700 sm:col-span-2">
          E-mail
          <input data-step="3" id="workEmail" name="workEmail" type="email" required placeholder="contato@empresa.com" className={inputBaseClass} />
        </label>
      </div>

      <label htmlFor="projectGoal" className="block text-sm font-medium text-slate-700">
        Objetivo principal (opcional)
        <textarea
          id="projectGoal"
          name="projectGoal"
          rows={4}
          placeholder="Ex.: reduzir custo em 30% e ampliar capacidade da operacao."
          className={`${inputBaseClass} resize-none`}
        />
      </label>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
        Ao enviar este formulario, voce confirma que autoriza o contato da equipe Helion.
      </div>
    </div>
  )
}
