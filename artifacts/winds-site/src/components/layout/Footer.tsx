export function Footer() {
  return (
    <footer className="bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 text-center">
          <div className="col-span-1 md:col-span-2 space-y-6 flex flex-col items-center">
            <div className="flex items-center justify-center gap-3">
              <img src="/winds-logo.png" alt="Winds Logo" className="h-8 w-auto object-contain opacity-80" />
              <span className="font-bold text-xl tracking-wide">Winds</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed text-center">
              A premium, feature-rich Blade Ball script hub focused on combat automation, precision parrying, and client customization. Built for performance.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://discord.gg/winds" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                Join Discord Community
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Features</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Auto Parry</a></li>
              <li><a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Automation</a></li>
              <li><a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Detection</a></li>
              <li><a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Visuals</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Access</h3>
            <ul className="space-y-3">
              <li><a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#loader" className="text-sm text-muted-foreground hover:text-primary transition-colors">Loader</a></li>
              <li><a href="#keys" className="text-sm text-muted-foreground hover:text-primary transition-colors">Key System</a></li>
              <li><a href="#faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 text-center">
          <p className="text-sm text-muted-foreground/60">
            © {new Date().getFullYear()} Winds. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground/60">
            Currently supporting: Blade Ball
          </p>
        </div>
      </div>
    </footer>
  );
}
