import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { AutoParryShowcase } from "@/components/sections/AutoParryShowcase";
import { Reviews } from "@/components/sections/Reviews";
import { Community } from "@/components/sections/Community";
import { KeySystem } from "@/components/sections/KeySystem";
import { Pricing } from "@/components/sections/Pricing";
import { LoaderAccess } from "@/components/sections/LoaderAccess";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30 relative isolate overflow-hidden">
      <Navbar />
      <main className="relative z-10 flex-grow">
        <Hero />
        <Features />
        <AutoParryShowcase />
        <LoaderAccess />
        <KeySystem />
        <Reviews />
        <Community />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
