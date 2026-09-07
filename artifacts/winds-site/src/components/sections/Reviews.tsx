import { Star, Quote } from "lucide-react";

const reviews = [
  { user: "Kaiz", text: "I've used it a couple of times, and honestly it's the best thing I've ever tried" },
  { user: "01十 ᵈᵉᵛ", text: "Super useful, and really accurate when parrying, also a lot of features" },
  { user: "SkullKnighT", text: "And it's the best possible script; if you configure it well, it's simply perfect for all occasions." },
  { user: "Fearless ye", text: "The best script in the world ever existed" },
  { user: "x82m901", text: "Spam is good never died,parry is good,others features are not bugged and excellent" },
  { user: "vMisery", text: "I reccomend this to everyone its incredible and unexplainable" },
  { user: "Gxbby20x", text: "Best script" },
  { user: "pussenkiss", text: "w script ngl worth the price" },
  { user: "Winds num 1 China num 2", text: "buy ts rn its so op" },
  { user: "mia", text: "nice ap ngl but need update like cmon" },
  { user: "Kato!?", text: "Best Script Ngl, but Dribble detection is 50/50", rating: 4 },
  { user: "Prince", text: "not bad" },
  { user: "ᄃӨDЯЦƬ", text: "Peak" }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted by Players</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real feedback from our Discord community.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review, i) => (
            <div 
              key={i} 
              className="break-inside-avoid bg-card/40 border border-white/5 p-6 rounded-2xl hover:bg-card/60 transition-colors relative text-center"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5" />
              <div className="flex items-center justify-center mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary border border-white/10 flex items-center justify-center mr-3 font-semibold text-primary">
                  {review.user.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="font-medium text-foreground">{review.user}</div>
                   <div className="flex items-center justify-center gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star 
                        key={starIdx} 
                        className={`w-3 h-3 ${starIdx < (review.rating || 5) ? 'fill-primary text-primary' : 'fill-muted text-muted'}`} 
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
