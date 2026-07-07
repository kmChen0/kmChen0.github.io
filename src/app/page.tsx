import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Publications } from "@/components/Publications";
import { Talks } from "@/components/Talks";
import { CV } from "@/components/CV";
import { Footer } from "@/components/Footer";
import { ScrollCat } from "@/components/ScrollCat";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Publications />
        <Talks />
        <CV />
      </main>
      <ScrollCat />
      <Footer />
    </>
  );
}
