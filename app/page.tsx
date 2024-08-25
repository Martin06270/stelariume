import Hero from "@/components/main/Hero";
import Image from "next/image";
import AuroraHero from "@/components/main/AuroraHero";
import Example from "@/components/main/HorizontalScrollCarousel";


export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[850px] gap-20">
        <Hero />
        <Example/>
        <AuroraHero/>
      </div>
      Stelariume
    </main>
  );
}
