import Image from "next/image"
import AboutUsImage from "@/public/solar-plates.jpg"
import { BsCheck } from "react-icons/bs"

export default function AboutUs() {
  return (
    <section className="px-14 py-18">
      <div className="flex flex-col items-center gap-2 mb-10">
        <h1 className="text-4xl capitalize">
          Sobre nós
        </h1>
        <div className="w-30 h-1 bg-green-600"></div>
      </div>
      <div className="flex gap-8">
        <div className=" flex-1 shadow-lg shadow-gray-500 outline-white p-4">
          <div>
            <Image 
              src={AboutUsImage}
              alt="paineis solares"
              width={1024}
              height={1024}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start flex-1 ">
          <h2 className="text-3xl font-semibold text-green-600">
            Tecnologia e inovação movendo o futuro da energia.
          </h2>
          <p className="py-6 text-gray-600 text-lg text-justify">
            A Helion nasceu para redefinir a forma como o mundo consome energia. Unimos engenharia, 
            tecnologia e sustentabilidade para criar soluções inteligentes em energia solar e eólica, 
            com alta performance e máxima eficiência.
          </p>
          <p className="py-6 text-gray-600 text-lg text-justify">
            Helion é mais do que energia: é inovação aplicada ao futuro.
          </p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="flex gap-1 items-center"><BsCheck className="w-6 h-6 text-green-600" /> Energia Limpa</li>
            <li className="flex gap-1 items-center"><BsCheck className="w-6 h-6 text-green-600" /> Instalação rápida</li>
            <li className="flex gap-1 items-center"><BsCheck className="w-6 h-6 text-green-600" /> Suporte de qualidade</li>
            <li className="flex gap-1 items-center"><BsCheck className="w-6 h-6 text-green-600" /> Sem dores de cabeça</li>
          </ul>
          <button className="my-8 bg-green-600 text-white font-semibold p-3 rounded-md cursor-pointer">
            Contate-nos
          </button>
        </div>
      </div>
    </section>
  )
}