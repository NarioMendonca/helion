import Image from "next/image"
import HelionIcon from "@/public/helion-icon-no-bg.png"
import "./header.css"

export default function Header() {
  return (
    <header className="flex items-center justify-around bg-white w-full py-2 px-4 absolute top-0 z-1">
      <div className="flex items-center h-16 w-16 gap-2">
        <Image 
          src={HelionIcon} 
          alt="Logo da Helion"
          width={48}
          height={48}
          quality={95}
        />
        <span className="enterprise-logo text-3xl font-bold bg-linear-90 from-green-500 to-blue-700">HELION</span>
      </div>
      <nav>
        <ul className="flex gap-8 items-center font-semibold text-green-700">
          <li>Home</li>
          <li>Sobre nós</li>
          <li>Serviços</li>
          <li>Contato</li>
          <li>
            <button className="bg-green-600 p-3 rounded-xl text-white">Solicitar análise</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}