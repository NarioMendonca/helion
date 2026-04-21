import Image from "next/image"
import heroBg from "@/public/paineis-solares.jpeg"

export default function Hero() {
  return (
    <section className="hero h-lvh bg-black pt-20">
      <Image 
        src={heroBg}
        alt="Background"
        fill
        style={{ objectFit: "cover", opacity: ".5" }}
        priority
      />
      <div className="relative text-white z-1 flex flex-col items-center justify-center gap-8 h-full">
        <h1 className="text-7xl font-bold capitalize">
          O futuro da energia é renovável
        </h1>
        <p className="text-2xl font-medium">
          Fornecemos energia limpa com tecnologia de ponta para sua necessidade
        </p>
      </div>
    </section>
  )
}