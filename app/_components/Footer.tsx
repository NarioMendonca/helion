import HelionIcon from "@/public/helion-icon-no-bg.png";
import { LiaLinkedin, LiaPhoneAltSolid, LiaMailBulkSolid } from "react-icons/lia";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="footer" className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
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
            <p className="text-slate-400 max-w-md">
              Líder global em soluções de energia renovável, transformando a forma como empresas
              consomem energia e contribuem para um futuro sustentável.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Soluções</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Energia Solar</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Armazenamento</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Consultoria</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Manutenção</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Contato</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2">
                <LiaPhoneAltSolid className="w-4 h-4" />
                <span>11 55555-5555</span>
              </li>
              <li className="flex items-center gap-2">
                <LiaMailBulkSolid className="w-4 h-4" />
                <span>contato@helion.com</span>
              </li>
              <li className="flex items-center gap-2">
                <LiaLinkedin className="w-4 h-4" />
                <a href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
          <p>&copy; 2026 Helion. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}