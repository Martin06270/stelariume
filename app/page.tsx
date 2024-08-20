import Hero from "@/components/main/Hero";
import Image from "next/image";
import AuroraHero from "@/components/main/AuroraHero";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[850px] gap-20">
        <Hero />
        <AuroraHero/>
      </div>
      Stelariume
    </main>
  );
}
