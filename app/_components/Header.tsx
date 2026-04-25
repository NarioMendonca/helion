import Image from "next/image"
import HelionIcon from "@/public/helion-icon-no-bg.png"
import "./header.css"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/80 bg-white/95 px-4 py-3 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
        <a href="#hero" className="flex items-center gap-2">
          <Image
            src={HelionIcon}
            alt="Logo da Helion"
            width={48}
            height={48}
            quality={95}
          />
          <span className="enterprise-logo bg-linear-90 from-emerald-500 to-cyan-700 text-3xl font-bold tracking-wide">
            HELION
          </span>
        </a>

        <nav aria-label="Navegação principal">
          <ul className="flex flex-wrap items-center justify-end gap-2 text-xs font-semibold text-slate-700 sm:gap-4 sm:text-sm">
            <li>
              <a href="#hero" className="text-lg rounded-md px-2 py-1 transition hover:text-emerald-700">
                Home
              </a>
            </li>
            <li>
              <a href="#about-us" className="text-lg rounded-md px-2 py-1 transition hover:text-emerald-700">
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#our-services" className="text-lg rounded-md px-2 py-1 transition hover:text-emerald-700">
                Serviços
              </a>
            </li>
            <li>
              <a href="#footer" className="text-lg rounded-md px-2 py-1 transition hover:text-emerald-700">
                Contato
              </a>
            </li>
            <li>
              <a
                href="#contact-form"
                className="text-lg rounded-xl bg-cyan-700 px-4 py-3 text-white transition hover:bg-cyan-800"
              >
                Solicitar análise
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}