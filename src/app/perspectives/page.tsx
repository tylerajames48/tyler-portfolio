const articles = [
  {
    title: "From Creative-AI as a Tool to Creative-AI as a Medium?",
    subheader:
      "Creative AI is no longer just a tool. It is emerging as a new medium with its own constraints, aesthetics, and creative norms.",
    link: "https://ctrlaltcreate48.substack.com/cp/174635345",
    image: "/images/perspectives/creative-ai-medium.jpg",
  },
  {
    title: "Missing Intuition: Why Embodied Creativity Still Matters in the Age of AI",
    subheader: "AI can simulate creativity, but it cannot replicate the embodied intuition that makes creative work feel real.",
    link: "https://ctrlaltcreate48.substack.com/p/missing-intuition-why-embodied-creativity",
    image: "/images/perspectives/missing-intuition.webp",
  },
  {
    title: "The Control Paradox: What Creative Professionals Really Want from AI",
    subheader:
      "Creatives don't want total control over AI. They want the right balance between agency and surprise.",
    link: "https://ctrlaltcreate48.substack.com/p/the-control-paradox-what-creative",
    image: "/images/perspectives/control-paradox.webp",
  },
];

export default function PerspectivesPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            Research & Analysis
          </h1>
          <p className="text-warmgray text-lg md:text-xl max-w-2xl">
            Research I&apos;ve conducted on creativity, technology, and meaning-making
          </p>
          <div className="w-16 h-px bg-terracotta mt-8" />
        </div>
      </section>

      {/* Articles */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="space-y-24 md:space-y-32">
            {articles.map((article, index) => (
              <article 
                key={article.title} 
                className={`group grid md:grid-cols-12 gap-8 items-start ${index % 2 === 1 ? '' : ''}`}
              >
                {/* Image */}
                <div className={`md:col-span-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <a 
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block aspect-[4/3] bg-peach/50 overflow-hidden"
                  >
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </a>
                </div>
                
                {/* Content */}
                <div className={`md:col-span-6 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1 md:pr-8' : 'md:pl-8'}`}>
                  <span className="text-sm text-coral mb-4 block">0{index + 1}</span>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-light mb-4 leading-tight group-hover:text-terracotta transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-warmgray leading-relaxed mb-6">
                    {article.subheader}
                  </p>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-terracotta hover:text-coral transition-colors"
                  >
                    Read Article
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Substack Link */}
      <section className="py-16 md:py-24 bg-peach/30">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 text-center">
          <p className="text-lg text-warmgray mb-4">
            More of my reflections on creativity and technology:
          </p>
          <a
            href="https://ctrlaltcreate48.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-terracotta hover:text-coral transition-colors group text-lg"
          >
            ctrlaltcreate48.substack.com
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
