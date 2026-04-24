import Image from "next/image"
import ProcessImage from "@/public/installing-solar-energy.jpg"

const processSteps = [
  {
    title: "Solicite análise gratuita",
    description:
      "Nossa equipe avalia o seu cenário energético e identifica as melhores oportunidades para reduzir custos com segurança.",
  },
  {
    title: "Receba um projeto personalizado",
    description:
      "Você recebe um plano técnico sob medida, com previsibilidade de investimento, retorno e cronograma de implantação.",
  },
  {
    title: "Instalação e ativação",
    description:
      "Executamos a implantação com padrão técnico Helion e ativamos sua operação com acompanhamento especializado.",
  },
]

export default function SimpleProcess() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-14">
      <div className="mx-auto grid w-full gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <aside className="order-1 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-80 sm:h-125 lg:h-155">
            <Image
              src={ProcessImage}
              alt="Equipe instalando solução energética"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 54vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-900/25 to-transparent" />
          </div>
        </aside>

        <article className="order-2 space-y-6">
          <h2 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Processo simples, em poucos passos para sua empresa evoluir.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
            Da análise inicial à ativação, a Helion conduz cada etapa com método,
            velocidade e transparência para acelerar sua transição energética.
          </p>

          <ol className="grid gap-3 sm:gap-4">
            {processSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl p-4 shadow-sm transition sm:p-5"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-sm font-semibold text-cyan-800">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 sm:text-lg">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </article>
      </div>
    </section>
  )
}