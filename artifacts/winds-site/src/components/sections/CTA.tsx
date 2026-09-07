import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to use Winds?</h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Explore Winds, choose your access option, or join the community on Discord.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#pricing" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base shadow-primary/20 shadow-lg">
              Get Winds Now
            </Button>
          </a>
          <a href="https://discord.gg/winds" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto h-12 px-8 text-base">
              Join Discord
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
