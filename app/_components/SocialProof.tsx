import Image from "next/image"
import BackgroundImage from "@/public/paineis-socialproof.jpeg"
import { RevealOnScroll } from "./motion/RevealOnScroll"
import { CountUpMetric } from "./motion/CountUpMetric"

const socialProofMetrics = [
  {
    value: 95,
    suffix: "%",
    title: "economia média de energia",
    description: "Resultados reais em operações que migraram para uma estratégia energética mais eficiente.",
  },
  {
    value: 180,
    suffix: "+",
    title: "projetos entregues",
    description: "Implantações concluídas com engenharia personalizada e padrão técnico de alta confiabilidade.",
  },
  {
    value: 24,
    suffix: "/7",
    title: "suporte especializado",
    description: "Acompanhamento contínuo para manter performance, segurança operacional e disponibilidade.",
  },
]

export default function SocialProof() {
  return (
    <section
      aria-labelledby="social-proof-title"
      className="relative isolate overflow-hidden px-6 py-24 text-white sm:px-10 lg:px-14"
      style={{ clipPath: "inset(0 0 0 0)" }}
    >
      <div className="pointer-events-none fixed inset-0 -z-20">
        <Image
          src={BackgroundImage}
          alt="Parque solar com painéis em operação"
          fill
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-slate-950/70" />

      <div className="mx-auto w-full max-w-7xl">
        <RevealOnScroll className="mx-auto mb-12 max-w-3xl text-center">
          <h2 id="social-proof-title" className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            Números que comprovam impacto energético com segurança e escala.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-100 sm:text-lg">
            Combinamos tecnologia, engenharia e suporte contínuo para gerar economia previsível e confiança na operação.
          </p>
        </RevealOnScroll>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialProofMetrics.map((metric, index) => (
            <RevealOnScroll key={metric.title} delay={index * 0.08}>
              <article className="h-full rounded-2xl border border-white/25 bg-white/10 p-6 backdrop-blur-xs">
                <CountUpMetric
                  end={metric.value}
                  suffix={metric.suffix}
                  className="text-5xl font-semibold text-white sm:text-6xl"
                />
                <h3 className="mt-4 text-lg font-semibold text-white sm:text-xl">{metric.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">{metric.description}</p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
