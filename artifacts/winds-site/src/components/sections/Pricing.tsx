import { Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Get Winds</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Choose the plan that fits your needs. Instant delivery upon purchase.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          
          {/* Monthly */}
          <div className="bg-card/40 border border-white/5 rounded-3xl p-8 flex flex-col h-full text-center">
            <h3 className="text-xl font-medium text-muted-foreground mb-2">Monthly Script</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-foreground">€5</span>
              <span className="text-muted-foreground"> EUR</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center justify-center text-sm text-foreground">
                <Check className="w-4 h-4 text-primary mr-3" /> Monthly access
              </li>
              <li className="flex items-center justify-center text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary/50 mr-3" /> Full feature set
              </li>
              <li className="flex items-center justify-center text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary/50 mr-3" /> Discord access
              </li>
            </ul>
            <div className="space-y-3">
              <a href="https://winds.mysellauth.com/" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full">Pay via Card</Button>
              </a>
              <a href="https://fluxmarket.to/winds" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="ghost" className="w-full text-xs text-muted-foreground hover:text-foreground">
                  Crypto / PayPal
                </Button>
              </a>
            </div>
          </div>

          {/* Lifetime */}
          <div className="bg-gradient-to-b from-card/80 to-card/40 border border-primary/20 border-t-4 border-t-primary rounded-3xl p-8 shadow-2xl shadow-primary/10 flex flex-col h-full relative transform lg:-translate-y-4 text-center">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
              PRIMARY CHOICE
            </div>
            
            <h3 className="text-xl font-medium text-primary mb-2">Lifetime Script</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold text-foreground">€9.44</span>
              <span className="text-muted-foreground"> EUR</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center justify-center text-sm text-foreground font-medium">
                <Check className="w-4 h-4 text-primary mr-3" /> Lifetime access
              </li>
              <li className="flex items-center justify-center text-sm text-foreground">
                <Check className="w-4 h-4 text-primary mr-3" /> All future updates
              </li>
              <li className="flex items-center justify-center text-sm text-foreground">
                <Check className="w-4 h-4 text-primary mr-3" /> Priority support
              </li>
              <li className="flex items-center justify-center text-sm text-foreground">
                <Check className="w-4 h-4 text-primary mr-3" /> Complete feature set
              </li>
            </ul>
            <div className="space-y-3">
              <a href="https://winds.mysellauth.com/" target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full text-base h-12 shadow-primary/20 shadow-lg">Buy Lifetime</Button>
              </a>
              <a href="https://fluxmarket.to/winds" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="ghost" className="w-full text-xs text-muted-foreground hover:text-foreground">
                  Crypto / PayPal
                </Button>
              </a>
            </div>
          </div>

          {/* External */}
          <div className="bg-card/40 border border-white/5 rounded-3xl p-8 flex flex-col h-full text-center">
            <h3 className="text-xl font-medium text-muted-foreground mb-2">Lifetime External</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-foreground">€20</span>
              <span className="text-muted-foreground"> EUR</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center justify-center text-sm text-foreground">
                <Check className="w-4 h-4 text-primary mr-3" /> Lifetime external access
              </li>
              <li className="flex items-center justify-center text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary/50 mr-3" /> External client
              </li>
            </ul>
            <div className="space-y-3 mt-auto">
              <a href="https://winds.mysellauth.com/" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="outline" className="w-full gap-2">
                  Get External <ExternalLink className="w-3 h-3" />
                </Button>
              </a>
              <div className="text-center text-xs text-muted-foreground py-2">
                Card / PayPal
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>Alternatively: Purchase via 2x Server Boost for a 4 Days Whitelist.</p>
        </div>
      </div>
    </section>
  );
}
