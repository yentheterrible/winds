import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LoaderAccess() {
  const [copied, setCopied] = useState(false);
  const code = `loadstring(game:HttpGet("https://api.luarmor.net/files/v4/loaders/2e02119bc860dfc0821c4ec83266ca8f.lua"))()`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="loader" className="py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
        
        <h2 className="text-3xl font-bold mb-4">Current Loader</h2>
        <p className="text-muted-foreground text-lg mb-10">
          Execute this script in your executor to run Winds.
        </p>

        <div className="relative group mx-auto max-w-3xl text-left">
          <div className="relative bg-[#0d0a0f] border border-white/10 rounded-2xl p-6 font-mono text-sm sm:text-base shadow-2xl">
            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Terminal className="w-4 h-4" />
                <span>winds_loader.lua</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleCopy}
                className="h-8 px-3 text-xs bg-white/5 hover:bg-white/10 text-foreground"
              >
                {copied ? <Check className="w-3.5 h-3.5 mr-1.5 text-green-400" /> : <Copy className="w-3.5 h-3.5 mr-1.5" />}
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
            <div className="winds-scrollbar overflow-x-auto text-primary/90 py-2">
              <code>{code}</code>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
