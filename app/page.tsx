import AboutUs from "./_components/AboutUs";
import ContactForm from "./_components/contactForm/ContactForm";
import FixedBg from "./_components/FixedBg";
import { Footer } from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import OurServices from "./_components/OurServices";
import SocialProof from "./_components/SocialProof";
import SimpleProcess from "./_components/SimpleProcess";

export default function Home() {
  return (
    <main className="font-sans">
      <Header />
      <Hero />
      <AboutUs />
      <FixedBg />
      <SimpleProcess />
      <SocialProof />
      <OurServices />
      <ContactForm />
      <Footer />
    </main>
  );
}
