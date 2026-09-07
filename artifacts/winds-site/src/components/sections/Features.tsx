import { 
  Crosshair, 
  Zap, 
  ShieldAlert, 
  Eye, 
  UserCircle2, 
  LayoutDashboard 
} from "lucide-react";

export function Features() {
  const featureCategories = [
    {
      title: "Combat Systems",
      icon: <Crosshair className="w-6 h-6 text-primary" />,
      features: [
        "Auto Parry",
        "Parry Loop",
        "Curve Detection",
        "Targeting",
        "Distance Mode",
        "Dribble Detection"
      ]
    },
    {
      title: "Spam & Automation",
      icon: <Zap className="w-6 h-6 text-primary" />,
      features: [
        "Auto Spam",
        "Manual Spam",
        "Triggerbot",
        "Humanizer",
        "Cooldown Prevention",
        "Mobile-friendly controls"
      ]
    },
    {
      title: "Detection & Protection",
      icon: <ShieldAlert className="w-6 h-6 text-primary" />,
      features: [
        "Staff Detection Notifications",
        "Kick / Notification options",
        "Anti Double-Jump",
        "Anti Quasar",
        "Anti-Blind",
        "Anti-Disorientate"
      ]
    },
    {
      title: "ESP & Visuals",
      icon: <Eye className="w-6 h-6 text-primary" />,
      features: [
        "Ability ESP",
        "Force Show Stats (Wins, Elims, RAP)",
        "Background Changer",
        "Curve Type Notifications"
      ]
    },
    {
      title: "Client Customization",
      icon: <UserCircle2 className="w-6 h-6 text-primary" />,
      features: [
        "Device Spoofer (PC, Controller, Mobile)",
        "Avatar & Sword Changer",
        "Unlock All Titles",
        "FFlag Changer"
      ]
    },
    {
      title: "Modern Interface",
      icon: <LayoutDashboard className="w-6 h-6 text-primary" />,
      features: [
        "Responsive modern UI",
        "Mobile-friendly layouts",
        "In-game notifications",
        "Optimized systems"
      ]
    }
  ];

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Features</h2>
          <p className="text-muted-foreground text-lg">
            The current feature set, grouped by the jobs you actually need to configure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-card/50 border border-white/5 rounded-2xl p-8 hover:bg-card/80 transition-colors duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
              <ul className="space-y-3">
                {category.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center justify-center text-sm text-muted-foreground">
                    <span className="mr-2 text-primary/60">•</span>
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
