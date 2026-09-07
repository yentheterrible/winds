import { KeyRound, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function KeySystem() {
  return (
    <section id="keys" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        <div className="text-center mb-12">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <KeyRound className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Key System</h2>
          <p className="text-muted-foreground text-lg">
            The free Winds script requires a key to run. Choose your preferred duration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          
          <div className="glass-panel p-6 rounded-2xl text-center border-primary/10 hover:border-primary/30 transition-colors">
            <div className="flex items-center justify-center gap-2 mb-4 text-foreground font-semibold text-lg">
              <Clock className="w-5 h-5 text-primary" />
              12 Hour Key
            </div>
            <p className="text-sm text-muted-foreground mb-6">Obtain a key valid for 12 hours via Linkvertise.</p>
            <a href="https://ads.luarmor.net/get_key?for=Free_Script-EVkZgSVgvBNu" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="w-full">Get 12H Key</Button>
            </a>
          </div>

          <div className="glass-panel p-6 rounded-2xl text-center border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center justify-center gap-2 mb-4 text-foreground font-semibold text-lg">
              <Clock className="w-5 h-5 text-muted-foreground" />
              6 Hour Key
            </div>
            <p className="text-sm text-muted-foreground mb-6">Obtain a key valid for 6 hours via Lootlabs.</p>
            <a href="https://ads.luarmor.net/get_key?for=Free_Script-khxZNSjhyyaW" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="w-full">Get 6H Key</Button>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
