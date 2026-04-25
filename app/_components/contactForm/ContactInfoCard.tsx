import Image from "next/image"
import viabilityImage from "@/public/renewable-energy-park.jpg"
import { strategicPoints } from "./formConfig"
import { ImageHoverZoom } from "../motion/ImageHoverZoom"

export function ContactInfoCard() {
  return (
    <aside className="overflow-hidden rounded-3xl bg-white/10 text-white backdrop-blur-sm">
      <div className="relative h-56 overflow-hidden">
        <ImageHoverZoom className="absolute inset-0">
          <Image
            src={viabilityImage}
            alt="Parque de energia renovável"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </ImageHoverZoom>
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-900/50 to-transparent" />
        <div className="pointer-events-none absolute bottom-5 left-5 right-5">
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
                <div className="mt-0.5 flex items-center rounded-lg bg-cyan-400/20 p-2 text-cyan-200">
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

        <div className="rounded-xl p-4 text-sm text-white">
          Retorno inicial em até 1 dia útil com direcionamento técnico da nossa equipe.
        </div>
      </div>
    </aside>
  )
}
