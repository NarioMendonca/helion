import AboutUs from "./_components/AboutUs";
import ContactForm from "./_components/ContactForm";
import FixedBg from "./_components/FixedBg";
import { Footer } from "./_components/Footer";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import OurServices from "./_components/OurServices";

export default function Home() {
  return (
    <main className="font-sans">
      <Header />
      <Hero />
      <AboutUs />
      <FixedBg />
      <OurServices />
      <ContactForm />
      <Footer />
    </main>
  );
}
