import { inputBaseClass } from "./formConfig"
import { EnergyInputMode } from "./types"

type Props = {
  energyInputMode: EnergyInputMode
  onEnergyInputModeChange: (value: EnergyInputMode) => void
}

export function DiagnosticStepTwo({ energyInputMode, onEnergyInputModeChange }: Props) {
  return (
    <div className="space-y-4">
      <fieldset>
        <legend className="text-sm font-medium text-slate-700">
          Voce prefere informar consumo medio em kWh ou gasto mensal em R$?
        </legend>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          <label className="cursor-pointer rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-cyan-500">
            <input
              data-step="2"
              type="radio"
              name="energyInputMode"
              value="kwh"
              checked={energyInputMode === "kwh"}
              onChange={() => onEnergyInputModeChange("kwh")}
              required
              className="mr-2 accent-cyan-700"
            />
            Consumo medio (kWh)
          </label>

          <label className="cursor-pointer rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-cyan-500">
            <input
              data-step="2"
              type="radio"
              name="energyInputMode"
              value="cost"
              checked={energyInputMode === "cost"}
              onChange={() => onEnergyInputModeChange("cost")}
              required
              className="mr-2 accent-cyan-700"
            />
            Gasto mensal (R$)
          </label>
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        {energyInputMode === "kwh" ? (
          <label htmlFor="monthlyConsumption" className="text-sm font-medium text-slate-700 sm:col-span-2">
            Consumo medio mensal (kWh)
            <input data-step="2" id="monthlyConsumption" name="monthlyConsumption" type="number" required placeholder="Ex.: 18000" className={inputBaseClass} />
          </label>
        ) : null}

        {energyInputMode === "cost" ? (
          <label htmlFor="monthlyCost" className="text-sm font-medium text-slate-700 sm:col-span-2">
            Gasto mensal com energia (R$)
            <input data-step="2" id="monthlyCost" name="monthlyCost" type="number" required placeholder="Ex.: 65000" className={inputBaseClass} />
          </label>
        ) : null}

        <label htmlFor="energySolution" className="text-sm font-medium text-slate-700 sm:col-span-2">
          Solucao de interesse
          <select data-step="2" id="energySolution" name="energySolution" required defaultValue="" className={inputBaseClass}>
            <option value="" disabled>Selecione</option>
            <option value="solar">Solar fotovoltaica</option>
            <option value="eolica">Eolica</option>
            <option value="hibrida">Hibrida (solar + eolica)</option>
            <option value="eficiencia">Eficiencia e monitoramento</option>
          </select>
        </label>
      </div>
    </div>
  )
}
