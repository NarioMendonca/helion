import { ContactInfoCard } from "./ContactInfoCard"
import { ContactLeadCard } from "./ContactLeadCard"
import { RevealOnScroll } from "../motion/RevealOnScroll"

export default function ContactForm() {
  return (
    <section
      id="contact-form"
      className="relative overflow-hidden scroll-mt-28 bg-linear-to-br from-slate-950 to-slate-900 px-6 py-20 sm:px-10 lg:px-14"
    >
      <div className="relative mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.35fr]">
        <RevealOnScroll>
          <ContactInfoCard />
        </RevealOnScroll>
        <RevealOnScroll delay={0.12}>
          <ContactLeadCard />
        </RevealOnScroll>
      </div>
    </section>
  )
}
