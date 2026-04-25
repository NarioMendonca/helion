"use client"

import { useState } from "react"
import Image from "next/image"
import HelionIcon from "@/public/helion-icon-no-bg.png"
import "./header.css"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/80 bg-white/95 px-4 py-3 backdrop-blur-sm">
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

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center justify-end gap-2 text-xs font-semibold text-slate-700 sm:gap-4 sm:text-sm">
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

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#contact-form"
            className="rounded-xl bg-cyan-700 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-cyan-800"
          >
            Solicitar análise
          </a>

          <button
            type="button"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-main-menu"
            onClick={() => setIsMenuOpen((prevState) => !prevState)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition hover:border-emerald-600 hover:text-emerald-700"
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${
                  isMenuOpen ? "translate-y-1.75 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.75 h-0.5 w-5 bg-current transition ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-3.5 h-0.5 w-5 bg-current transition ${
                  isMenuOpen ? "-translate-y-1.75 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-main-menu"
        aria-label="Menu mobile"
        className={`mx-auto w-full max-w-7xl transition-all duration-200 lg:hidden ${
          isMenuOpen ? "mt-3 max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 rounded-2xl border-slate-200 p-3 text-sm font-semibold text-slate-700">
          <li>
            <a
              href="#hero"
              onClick={closeMenu}
              className="block rounded-lg px-3 py-2 transition hover:bg-emerald-100 hover:text-emerald-700"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about-us"
              onClick={closeMenu}
              className="block rounded-lg px-3 py-2 transition hover:bg-emerald-100 hover:text-emerald-700"
            >
              Sobre nós
            </a>
          </li>
          <li>
            <a
              href="#our-services"
              onClick={closeMenu}
              className="block rounded-lg px-3 py-2 transition hover:bg-emerald-100 hover:text-emerald-700"
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              href="#footer"
              onClick={closeMenu}
              className="block rounded-lg px-3 py-2 transition hover:bg-emerald-100 hover:text-emerald-700"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}