import Image from "next/image"
import Link from "next/link"
import Header from "../_components/Header"
import { Footer } from "../_components/Footer"
import { RevealOnScroll } from "../_components/motion/RevealOnScroll"
import AboutHeroImage from "@/public/renewable-energy-park.jpg"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-100 font-sans text-slate-900">
      <Header />

      <section className="relative isolate min-h-[76vh] overflow-hidden px-6 pb-16 pt-28 sm:px-10 lg:px-14">
        <Image
          src={AboutHeroImage}
          alt="Equipe de engenharia da Helion em parque de energia renovável"
          fill
          priority
          className="-z-20 object-cover"
          sizes="100vw"
        />

        <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-r from-slate-950/80 via-slate-950/55 to-slate-950/30" />

        <div className="mx-auto flex h-full w-full max-w-7xl items-center">
          <RevealOnScroll className="max-w-3xl text-white" amount={0.35}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Sobre a Helion</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
              Nossa missão é liderar a transição energética com inteligência, impacto real e compromisso com o futuro.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-200 sm:text-xl">
              Nascemos para tornar energia renovável uma vantagem estratégica para empresas, comunidades e operações em
              crescimento no Brasil.
            </p>
            <Link
              href="/#contact-form"
              className="mt-8 inline-block rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 sm:text-base"
            >
              Fale com a nossa equipe
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <section className="px-6 py-12 sm:px-10 lg:px-14 lg:py-14">
        <RevealOnScroll className="mx-auto max-w-4xl text-center">
          <p className="text-lg leading-relaxed text-slate-700 sm:text-2xl">
            A Helion nasceu ao perceber que muitas empresas queriam migrar para energias renováveis, mas enfrentavam
            projetos complexos, baixa previsibilidade e falta de suporte técnico confiável. Transformamos esse cenário
            com uma abordagem que une engenharia aplicada, execução eficiente e acompanhamento contínuo.
          </p>
        </RevealOnScroll>
      </section>

      <section className="px-6 pb-20 sm:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <RevealOnScroll>
            <article className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">História</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                A Helion foi fundada para simplificar a jornada energética de negócios que precisavam reduzir custos sem
                abrir mão de segurança operacional. Começamos com projetos de geração solar e expandimos para soluções
                eólicas e gestão inteligente de performance.
              </p>
            </article>
          </RevealOnScroll>

          <RevealOnScroll delay={0.08}>
            <article className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">Missão</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Entregar soluções em energia renovável que aumentem a competitividade dos nossos clientes, com engenharia
                de excelência, dados em tempo real e suporte especializado durante todo o ciclo da operação.
              </p>
            </article>
          </RevealOnScroll>

          <RevealOnScroll delay={0.16}>
            <article className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">Visão</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                Ser a parceira de referência em transição energética no país, reconhecida por criar operações mais
                limpas, resilientes e economicamente sustentáveis para os próximos anos.
              </p>
            </article>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  )
}
