import { inputBaseClass } from "./formConfig"
import { CustomerType } from "./types"

type Props = {
  customerType: CustomerType
  onCustomerTypeChange: (value: CustomerType) => void
}

export function DiagnosticStepOne({ customerType, onCustomerTypeChange }: Props) {
  return (
    <div className="space-y-4">
      <fieldset>
        <legend className="text-sm font-medium text-slate-700">Essa analise e para:</legend>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          <label className="cursor-pointer rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-cyan-500">
            <input
              data-step="1"
              type="radio"
              name="customerType"
              value="residential"
              checked={customerType === "residential"}
              onChange={() => onCustomerTypeChange("residential")}
              required
              className="mr-2 accent-cyan-700"
            />
            Residencia pessoal
          </label>

          <label className="cursor-pointer rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-cyan-500">
            <input
              data-step="1"
              type="radio"
              name="customerType"
              value="business"
              checked={customerType === "business"}
              onChange={() => onCustomerTypeChange("business")}
              required
              className="mr-2 accent-cyan-700"
            />
            Empresa
          </label>
        </div>
      </fieldset>

      {customerType === "business" ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <label htmlFor="companyName" className="text-sm font-medium text-slate-700 sm:col-span-2">
            Empresa
            <input data-step="1" id="companyName" name="companyName" type="text" required placeholder="Ex.: Helion Industria e Energia" className={inputBaseClass} />
          </label>

          <label htmlFor="segment" className="text-sm font-medium text-slate-700">
            Segmento da empresa
            <select data-step="1" id="segment" name="segment" required defaultValue="" className={inputBaseClass}>
              <option value="" disabled>Selecione</option>
              <option value="industrial">Industrial</option>
              <option value="agronegocio">Agronegocio</option>
              <option value="comercial">Comercial</option>
              <option value="logistica">Logistica</option>
              <option value="setor-publico">Setor publico</option>
              <option value="outro">Outro</option>
            </select>
          </label>

          <label htmlFor="city" className="text-sm font-medium text-slate-700">
            Cidade da operacao
            <input data-step="1" id="city" name="city" type="text" required placeholder="Ex.: Sobral - CE" className={inputBaseClass} />
          </label>
        </div>
      ) : null}

      {customerType === "residential" ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <label htmlFor="residenceCity" className="text-sm font-medium text-slate-700">
            Cidade da residencia
            <input data-step="1" id="residenceCity" name="residenceCity" type="text" required placeholder="Ex.: Fortaleza - CE" className={inputBaseClass} />
          </label>

          <label htmlFor="propertyType" className="text-sm font-medium text-slate-700">
            Tipo de imovel
            <select data-step="1" id="propertyType" name="propertyType" required defaultValue="" className={inputBaseClass}>
              <option value="" disabled>Selecione</option>
              <option value="casa">Casa</option>
              <option value="apartamento">Apartamento</option>
              <option value="sitio">Sitio ou chacara</option>
              <option value="condominio">Condominio</option>
              <option value="outro">Outro</option>
            </select>
          </label>
        </div>
      ) : null}
    </div>
  )
}
