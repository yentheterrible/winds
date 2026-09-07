import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Atmospheric Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">Active Development • Rewritten Systems</span>
          </div>

          <div className="mb-8 relative animate-in zoom-in-95 duration-1000 delay-150 fill-mode-both">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150"></div>
            <img 
              src="/winds-logo.png" 
              alt="Winds" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10 drop-shadow-2xl" 
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            A powerful script built for <span className="text-gradient">precision.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Winds is a premium Blade Ball hub combining unrivaled Auto Parry, intelligent spam systems, and extensive detection features.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a href="#pricing" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto group text-base h-12 px-8">
                Get Winds
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#features" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8">
                Explore Features
              </Button>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}
