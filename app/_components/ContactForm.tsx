import Image from "next/image"
import viabilityImage from "@/public/renewable-energy-park.jpg"
import { BsGraphUpArrow, BsLightningChargeFill } from "react-icons/bs"
import { RiShieldCheckLine } from "react-icons/ri"

const strategicPoints = [
  {
    icon: BsGraphUpArrow,
    title: "Estimativa de economia real",
    description: "Projeção técnica com cenários de retorno e redução de custos operacionais.",
  },
  {
    icon: RiShieldCheckLine,
    title: "Diagnóstico técnico confiável",
    description: "Equipe especializada em projetos solares e eólicos para operações de alto padrão.",
  },
  {
    icon: BsLightningChargeFill,
    title: "Plano de implantação sob medida",
    description: "Escopo adaptado ao perfil de consumo e à expansão da sua operação no Ceará.",
  },
]

const inputBaseClass =
  "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-cyan-600 focus:ring-3 focus:ring-cyan-100"

export default function ContactForm() {
  return (
    <section id="contact-form" className="relative overflow-hidden scroll-mt-28 bg-linear-to-br from-slate-950 to-slate-900 px-6 py-20 sm:px-10 lg:px-14">
      <div className="relative mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.35fr]">
        <aside className="overflow-hidden rounded-3xl bg-white/10 text-white backdrop-blur-sm">
          <div className="relative h-56">
            <Image
              src={viabilityImage}
              alt="Parque de energia renovável"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-900/50 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                Análise estratégica Helion
              </p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight">
                Solicite seu estudo de viabilidade energética empresarial
              </h2>
            </div>
          </div>

          <div className="space-y-4 p-6">
            <p className="text-sm leading-relaxed text-slate-200/90">
              Receba um diagnóstico completo para tomada de decisão com foco em
              previsibilidade financeira, segurança operacional e escalabilidade.
            </p>

            <ul className="space-y-4">
              {strategicPoints.map((point) => {
                const PointIcon = point.icon

                return (
                  <li key={point.title} className="flex gap-3">
                    <div className="flex items-center mt-0.5 rounded-lg bg-cyan-400/20 p-2 text-cyan-200">
                      <PointIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{point.title}</p>
                      <p className="text-sm text-slate-300">{point.description}</p>
                    </div>
                  </li>
                )
              })}
            </ul>

            <div className="rounded-xl border border-emerald-300/30 bg-emerald-500/10 p-4 text-sm text-emerald-100">
              Retorno inicial em até 1 dia útil com direcionamento técnico da nossa equipe.
            </div>
          </div>
        </aside>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Formulário de análise de viabilidade
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Preencha os dados abaixo para receber uma proposta técnica personalizada.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label htmlFor="companyName" className="text-sm font-medium text-slate-700">
                Empresa
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  placeholder="Ex.: Helion Indústria e Energia"
                  className={inputBaseClass}
                />
              </label>

              <label htmlFor="cnpj" className="text-sm font-medium text-slate-700">
                CNPJ
                <input
                  id="cnpj"
                  name="cnpj"
                  type="text"
                  placeholder="00.000.000/0000-00"
                  className={inputBaseClass}
                />
              </label>

              <label htmlFor="responsibleName" className="text-sm font-medium text-slate-700">
                Responsável pelo projeto
                <input
                  id="responsibleName"
                  name="responsibleName"
                  type="text"
                  placeholder="Nome e cargo"
                  className={inputBaseClass}
                />
              </label>

              <label htmlFor="workEmail" className="text-sm font-medium text-slate-700">
                E-mail corporativo
                <input
                  id="workEmail"
                  name="workEmail"
                  type="email"
                  placeholder="contato@empresa.com"
                  className={inputBaseClass}
                />
              </label>

              <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                Telefone / WhatsApp
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(85) 99999-9999"
                  className={inputBaseClass}
                />
              </label>

              <label htmlFor="city" className="text-sm font-medium text-slate-700">
                Cidade da operação
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Ex.: Sobral - CE"
                  className={inputBaseClass}
                />
              </label>

              <label htmlFor="segment" className="text-sm font-medium text-slate-700">
                Segmento da empresa
                <select id="segment" name="segment" defaultValue="" className={inputBaseClass}>
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option value="industrial">Industrial</option>
                  <option value="agronegocio">Agronegócio</option>
                  <option value="comercial">Comercial</option>
                  <option value="logistica">Logística</option>
                  <option value="setor-publico">Setor público</option>
                  <option value="outro">Outro</option>
                </select>
              </label>

              <label htmlFor="energySolution" className="text-sm font-medium text-slate-700">
                Solução de interesse
                <select id="energySolution" name="energySolution" defaultValue="" className={inputBaseClass}>
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option value="solar">Solar fotovoltaica</option>
                  <option value="eolica">Eólica</option>
                  <option value="hibrida">Híbrida (solar + eólica)</option>
                  <option value="eficiencia">Eficiência e monitoramento</option>
                </select>
              </label>

              <label htmlFor="monthlyConsumption" className="text-sm font-medium text-slate-700">
                Consumo médio mensal (kWh)
                <input
                  id="monthlyConsumption"
                  name="monthlyConsumption"
                  type="number"
                  placeholder="Ex.: 18000"
                  className={inputBaseClass}
                />
              </label>

              <label htmlFor="monthlyCost" className="text-sm font-medium text-slate-700">
                Gasto mensal com energia (R$)
                <input
                  id="monthlyCost"
                  name="monthlyCost"
                  type="number"
                  placeholder="Ex.: 65000"
                  className={inputBaseClass}
                />
              </label>

              <label htmlFor="availableArea" className="text-sm font-medium text-slate-700">
                Área disponível para implantação (m²)
                <input
                  id="availableArea"
                  name="availableArea"
                  type="number"
                  placeholder="Ex.: 2500"
                  className={inputBaseClass}
                />
              </label>

              <label htmlFor="deadline" className="text-sm font-medium text-slate-700">
                Prazo desejado para o projeto
                <select id="deadline" name="deadline" defaultValue="" className={inputBaseClass}>
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option value="imediato">Imediato</option>
                  <option value="90-dias">Até 90 dias</option>
                  <option value="6-meses">Até 6 meses</option>
                  <option value="planejamento">Em planejamento</option>
                </select>
              </label>
            </div>

            <label htmlFor="invoice" className="block text-sm font-medium text-slate-700">
              Fatura de energia (opcional)
              <input
                id="invoice"
                name="invoice"
                type="file"
                className="mt-2 block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-700 file:mr-4 file:rounded-lg file:border-0 file:bg-cyan-700 file:px-3 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-cyan-800 cursor-pointer"
              />
            </label>

            <label htmlFor="projectGoal" className="block text-sm font-medium text-slate-700">
              Objetivo principal da análise
              <textarea
                id="projectGoal"
                name="projectGoal"
                rows={4}
                placeholder="Descreva metas de economia, expansão da operação, exigências técnicas ou regulatórias."
                className={`${inputBaseClass} resize-none`}
              />
            </label>

            <label className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              <input type="checkbox" className="mt-1 h-4 w-4 accent-cyan-700" />
              Autorizo o uso das informações para elaboração do estudo de viabilidade e contato da equipe Helion.
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-slate-500">
                Seus dados são tratados com confidencialidade e foco exclusivo no diagnóstico energético.
              </p>
              <button
                type="submit"
                className="rounded-xl bg-cyan-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-800 cursor-pointer"
              >
                Solicitar análise de viabilidade
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}