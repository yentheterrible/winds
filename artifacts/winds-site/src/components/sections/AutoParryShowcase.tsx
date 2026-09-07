import { Check } from "lucide-react";

export function AutoParryShowcase() {
  const parryFeatures = [
    "Parry Accuracy",
    "Parry Loop",
    "PreSimulation & PostSimulation",
    "PreRender",
    "Curve Detection & Anti Curve",
    "Backwards Anti Curve",
    "Targeting & Distance Mode",
    "Pre-Click",
    "Dribble Detection",
    "Curve Type Notifications"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] bg-primary/5 blur-[150px] pointer-events-none rounded-full"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center text-center">
          
          <div className="order-2 lg:order-1">
            <div className="glass-panel rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl shadow-black/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl"></div>
              
              <div className="flex items-center justify-center gap-4 mb-8 pb-6 border-b border-white/5">
                <div className="text-center">
                  <h4 className="font-semibold text-lg text-foreground">Auto Parry Configuration</h4>
                  <p className="text-sm text-muted-foreground">Precision tuning</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              </div>

              <div className="space-y-4">
                {parryFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center justify-center group">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-4 shrink-0 border border-primary/20 group-hover:border-primary/50 transition-colors">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              Core System
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Flawless Combat. <br/>
              <span className="text-gradient">Total Dominance.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
              The Winds Auto Parry system is engineered for absolute precision. From advanced curve detection to pre-simulation timing, every aspect is built to give you a definitive edge in Blade Ball.
            </p>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Recently rewritten from the ground up, our logic handles dribbles, backwards curves, and complex targeting scenarios with mathematical accuracy.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
