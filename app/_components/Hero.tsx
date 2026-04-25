import Image from "next/image"
import Link from "next/link"
import heroBg from "@/public/hero-eolic-park.jpg"
import { RevealOnScroll } from "./motion/RevealOnScroll"

export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden bg-black pt-20">
      <Image
        src={heroBg}
        alt="Parque eólico e infraestrutura de energia renovável"
        fill
        className="-z-20 object-cover"
        sizes="100vw"
        priority
      />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-r from-slate-950/80 via-slate-950/60 to-slate-900/40" />

      <div className="mx-auto flex min-h-[90svh] w-full max-w-7xl items-center px-6 py-14 text-white sm:min-h-screen sm:px-10 lg:px-14">
        <div className="max-w-4xl">
          <RevealOnScroll delay={0.16} amount={0.35}>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-balance sm:text-5xl lg:text-7xl">
              Solucoes em energia renovavel para empresas mais eficientes e competitivas.
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.24} amount={0.35}>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg lg:text-2xl">
              Infraestrutura moderna, dados em tempo real e suporte especializado para reduzir custos operacionais
              com previsibilidade.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.32} amount={0.35}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/#contact-form"
                className="inline-flex justify-center rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 sm:text-base"
              >
                Solicitar analise
              </Link>
              <Link
                href="/sobre-nos"
                className="inline-flex justify-center rounded-xl border border-white/50 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20 sm:text-base"
              >
                Conheca a Helion
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}