import { ArrowUpRight, MessageCircle, Sparkles, UsersRound } from "lucide-react";

const communityDetails = [
  {
    icon: MessageCircle,
    title: "Stay connected",
    description: "Follow Winds updates and join the conversation with the community.",
  },
  {
    icon: UsersRound,
    title: "Get support",
    description: "Connect with other Winds users and find help in the official server.",
  },
];

export function Community() {
  return (
    <section id="community" className="relative overflow-hidden py-24">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden border-y border-white/10 bg-card/30 px-6 py-12 md:px-12 md:py-16">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] text-center">
            <div className="flex flex-col items-center">
              <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                <Sparkles className="h-4 w-4" />
                Official community
              </div>
              <h2 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl text-center">
                Winds is better
                <span className="text-gradient"> together.</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-center">
                Join the official Winds Discord to keep up with the project,
                connect with the community, and get support.
              </p>

              <a
                href="https://discord.gg/winds"
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex h-12 items-center gap-3 rounded-xl bg-primary px-6 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_hsl(var(--primary)/0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                Join the Winds Discord
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-1">
              {communityDetails.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="group bg-background/80 p-7 transition-colors duration-300 hover:bg-card text-center"
                >
                  <div className="mb-8 mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}