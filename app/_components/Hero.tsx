import Image from "next/image"
import heroBg from "@/public/hero-eolic-park.jpg"
import { RevealOnScroll } from "./motion/RevealOnScroll"

export default function Hero() {
  return (
    <section id="hero" className="hero h-lvh bg-black pt-20">
      <Image 
        src={heroBg}
        alt="Background"
        fill
        style={{ objectFit: "cover", opacity: ".5" }}
        priority
      />
      <div className="relative text-white z-1 flex flex-col items-center justify-center gap-8 h-full">
        <RevealOnScroll delay={0.1} amount={0.35}>
          <h1 className="text-7xl font-bold capitalize text-center">
            Soluções em energia renovável para um mundo mais eficiente.
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delay={0.22} amount={0.35}>
          <p className="text-2xl font-medium text-center">
            Infraestrutura moderna e soluções inteligentes para transformar a forma como você consome energia.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}