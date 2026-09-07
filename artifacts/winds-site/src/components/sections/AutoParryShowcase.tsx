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
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center text-center">
          
          <div className="order-2 lg:order-1">
            <div className="glass-panel rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl shadow-black/50 relative overflow-hidden">
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
              Tune the timing. <br/>
              <span className="text-gradient">Keep your options open.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
              Auto Parry brings timing controls, curve handling, and target selection into one place so you can adjust the setup to the match in front of you.
            </p>
            <p className="text-muted-foreground max-w-lg mx-auto">
              The controls cover dribbles, backwards curves, distance modes, and notification preferences without burying the useful settings.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
