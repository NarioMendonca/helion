import Image from "next/image"
import solarServiceImage from "@/public/placas-lg.jpg"
import windServiceImage from "@/public/eolic-park.jpeg"
import monitoringServiceImage from "@/public/renewable-energy-park.jpg"
import { BsCheckCircleFill } from "react-icons/bs"
import { ImageHoverZoom } from "./motion/ImageHoverZoom"
import { RevealOnScroll } from "./motion/RevealOnScroll"

const services = [
  {
    title: "Placas solares de alta performance",
    description:
      "Projetamos e instalamos sistemas fotovoltaicos com foco em estabilidade, economia e retorno consistente para residências, empresas e indústrias.",
    image: solarServiceImage,
    highlights: [
      "Dimensionamento técnico personalizado",
      "Instalação certificada e segura",
      "Suporte especializado pós-projeto",
    ],
  },
  {
    title: "Energia eólica para operações robustas",
    description:
      "Desenvolvemos soluções eólicas para ampliar a autonomia energética e reduzir custos operacionais com engenharia adaptada ao cenário local.",
    image: windServiceImage,
    highlights: [
      "Estudo de viabilidade e microclima",
      "Integração com sistemas já existentes",
      "Execução com padrão multinacional",
    ],
  },
  {
    title: "Monitoramento inteligente e otimização",
    description:
      "Acompanhamos o desempenho energético em tempo real para identificar ganhos de eficiência, antecipar falhas e maximizar a disponibilidade da operação.",
    image: monitoringServiceImage,
    highlights: [
      "Painéis com leitura de performance",
      "Alertas preventivos e diagnósticos",
      "Melhoria contínua baseada em dados",
    ],
  },
]

export default function OurServices() {
  return (
    <section id="our-services" className="relative overflow-hidden scroll-mt-28 px-6 py-20 sm:px-10 lg:px-14">

      <div className="relative mx-auto max-w-7xl">
        <RevealOnScroll className="mb-12 flex flex-col items-center gap-4 text-center">
          <h1 className="max-w-4xl text-4xl font-semibold text-slate-900 sm:text-5xl">
            Nossos serviços em energia renovável
          </h1>
          <div className="h-1 w-36 rounded-full bg-green-600" />
          <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
            Combinamos engenharia, tecnologia e operação inteligente para entregar
            projetos confiáveis e preparados para a expansão energética no interior
            do Ceará.
          </p>
        </RevealOnScroll>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            return (
              <RevealOnScroll key={service.title} delay={index * 0.08}>
                <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-56 overflow-hidden">
                    <ImageHoverZoom className="absolute inset-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="100%"
                        className="object-cover"
                      />
                    </ImageHoverZoom>
                    <div
                      className="pointer-events-none absolute inset-0 bg-[#00000023]"
                    />
                  </div>

                  <div className="space-y-4 p-6">
                    <h2 className="text-xl font-semibold text-slate-900">
                      {service.title}
                    </h2>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>

                    <ul className="space-y-2">
                      {service.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <BsCheckCircleFill className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </RevealOnScroll>
            )
          })}
        </div>

        <RevealOnScroll delay={0.12}>
          <div className="mt-10 grid gap-4 rounded-2xl p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Segurança operacional
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Protocolos técnicos e execução com foco em previsibilidade e qualidade.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Inovação aplicada
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Soluções orientadas por dados para elevar eficiência e performance energética.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Presença regional
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Estrutura para atender empresas e comunidades em toda a região do Ceará.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}