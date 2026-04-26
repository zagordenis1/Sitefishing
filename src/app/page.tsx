import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Catalog } from "@/components/sections/catalog";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <Features />
        <Catalog />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
