import { FaSolarPanel } from "react-icons/fa"
import { GiWindTurbine } from "react-icons/gi"

export default function OurServices() {
  return (
    <section className="px-14 py-18">
      <div className="flex flex-col items-center gap-2 mb-10">
        <h1 className="text-4xl capitalize`">
          Nossos serviços
        </h1>
        <div className="w-30 h-1 bg-green-600"></div>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-[3%] gap-y-4">
        <div className="w-[30%] flex flex-col items-center p-4 rounded-md hover:shadow-md hover:shadow-[#0000003f] transition-shadow">
          <FaSolarPanel className="text-blue-600 w-8 h-8" />
          <h2 className="text-xl text-green-600">Instalação de paineis solares</h2>
          <p className="text-center">
            Realizamos instalações com profissionais realizando um serviço de qualidade
          </p>
        </div>
        <div className="w-[30%] flex flex-col items-center p-4 rounded-md hover:shadow-md hover:shadow-[#0000003f] transition-shadow">
          <GiWindTurbine className="text-blue-600 w-8 h-8" />
          <h2 className="text-xl text-green-600">
            Energia limpa para seu negócio
          </h2>
          <p className="text-center">
            Realizamos instalações com profissionais realizando um serviço de qualidade
          </p>
        </div>
        <div className="w-[30%] flex flex-col items-center p-4 rounded-md hover:shadow-md hover:shadow-[#0000003f] transition-shadow">
          <GiWindTurbine className="text-blue-600 w-8 h-8" />
          <h2 className="text-xl text-green-600">
            Energia limpa para seu negócio
          </h2>
          <p className="text-center">
            Realizamos instalações com profissionais realizando um serviço de qualidade
          </p>
        </div>
        <div className="w-[30%] flex flex-col items-center p-4 rounded-md hover:shadow-md hover:shadow-[#0000003f] transition-shadow">
          <FaSolarPanel className="text-blue-600 w-8 h-8" />
          <h2 className="text-xl text-green-600">Instalação de paineis solares</h2>
          <p className="text-center">
            Realizamos instalações com profissionais realizando um serviço de qualidade
          </p>
        </div>
        <div className="w-[30%] flex flex-col items-center p-4 rounded-md hover:shadow-md hover:shadow-[#0000003f] transition-shadow">
          <GiWindTurbine className="text-blue-600 w-8 h-8" />
          <h2 className="text-xl text-green-600">
            Energia limpa para seu negócio
          </h2>
          <p className="text-center">
            Realizamos instalações com profissionais realizando um serviço de qualidade
          </p>
        </div>
        <div className="w-[30%] flex flex-col items-center p-4 rounded-md hover:shadow-md hover:shadow-[#0000003f] transition-shadow">
          <GiWindTurbine className="text-blue-600 w-8 h-8" />
          <h2 className="text-xl text-green-600">
            Energia limpa para seu negócio
          </h2>
          <p className="text-center">
            Realizamos instalações com profissionais realizando um serviço de qualidade
          </p>
        </div>
      </div>
    </section>
  )
}