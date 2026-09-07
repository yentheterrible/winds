import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Reviews", href: "#reviews" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-panel py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-[1fr_auto] items-center md:grid-cols-[1fr_auto_1fr]">
          <Link href="/" className="flex items-center gap-3 group justify-self-start">
            <img 
              src="/winds-logo.png" 
              alt="Winds Logo" 
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-bold text-lg tracking-wide hidden sm:block">Winds</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 justify-self-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4 justify-self-end">
            <a href="https://discord.gg/winds" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Discord
              </Button>
            </a>
            <a href="#pricing">
              <Button>Get Winds</Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground p-2 justify-self-end"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-panel border-t border-white/5 py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-medium text-foreground py-2 border-b border-white/5"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <a href="https://discord.gg/winds" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" className="w-full justify-center">Discord Community</Button>
            </a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full justify-center">Get Winds</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
