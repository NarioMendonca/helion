export const strategicPoints = [
  {
    title: "Estimativa de economia real",
    description: "Projeção técnica com cenários de retorno e redução de custos operacionais.",
  },
  {
    title: "Diagnóstico técnico confiável",
    description: "Equipe especializada em projetos solares e eólicos para operações de alto padrão.",
  },
  {
    title: "Plano de implantação sob medida",
    description: "Escopo adaptado ao perfil de consumo e à expansão da sua operação no Ceará.",
  },
]

export const inputBaseClass =
  "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-cyan-600 focus:ring-3 focus:ring-cyan-100"

export function isFormField(
  element: Element,
): element is HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement {
  return (
    element instanceof HTMLInputElement
    || element instanceof HTMLSelectElement
    || element instanceof HTMLTextAreaElement
  )
}
