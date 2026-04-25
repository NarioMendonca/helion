import Image from "next/image";
import BackgroundImage from "@/public/paineis-solares-bg.jpg";

export default function FixedBg() {
  return (
    <div
    className="relative w-full h-65" style={{ clipPath: 'inset(0 0 0 0)' }}
    >
      <div className="fixed h-full w-full top-0 left-0">
        <Image
          src={BackgroundImage}
          alt="paineis solares"
          fill
          className="object-cover"
          quality={95}
        />
      </div>
    </div>
  )
}