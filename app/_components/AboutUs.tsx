import Image from "next/image"
import AboutUsImage from "@/public/installing-solar-energy.jpg"
import { BsCheckCircleFill } from "react-icons/bs"

const commitments = [
  "Projetos com engenharia personalizada para cada operação",
  "Implantação ágil com padrão técnico e segurança operacional",
  "Suporte contínuo para evolução e estabilidade energética",
]

const impactMetrics = [
  {
    value: "95%",
    label: "de redução média nos custos de energia",
  },
  {
    value: "120+",
    label: "operações atendidas com soluções renováveis",
  },
  {
    value: "24/7",
    label: "monitoramento e acompanhamento de performance",
  },
]

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <article className="order-2 space-y-6 lg:order-1">
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Engenharia energética que transforma custo em crescimento sustentável.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
            A Helion combina tecnologia, inteligência operacional e energia renovável para
            acelerar resultados reais. Entregamos projetos solares e eólicos orientados por
            eficiência, previsibilidade financeira e expansão de longo prazo.
          </p>

          <ul className="space-y-3">
            {commitments.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-700 sm:text-base">
                <BsCheckCircleFill className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 cursor-pointer sm:text-base">
            Fale com um especialista
          </button>
        </article>

        <aside className="order-1 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:order-2">
          <div className="relative h-64 sm:h-80">
            <Image
              src={AboutUsImage}
              alt="Parque de energia solar da Helion"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 44vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-900/25 to-transparent" />
          </div>

          <div className="grid gap-3 p-5 sm:grid-cols-3 sm:p-6">
            {impactMetrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-2xl font-semibold text-slate-900">{metric.value}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">{metric.label}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}