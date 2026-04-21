import AboutUs from "./_components/AboutUs";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <main className="font-sans">
      <Header />
      <Hero />
      <AboutUs />
    </main>
  );
}
