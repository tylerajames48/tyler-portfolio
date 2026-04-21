export default function Home() {
  return (
    <div>
      {/* Hero Section - Name on left, intro on right */}
      <section className="min-h-[80vh] md:min-h-[85vh] flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Name - Left side */}
            <div className="md:col-span-5">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[0.95]">
                Tyler James
              </h1>
              <div className="w-16 h-px bg-terracotta mt-8" />
            </div>
            
            {/* Intro - Right side */}
            <div className="md:col-span-7 space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed font-light">
                An artist at heart, I&apos;m guided by a simple question: how can technology 
                help creativity thrive - not disappear?
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-warmgray">
                I see AI as a medium, like paint or clay - full of possibility when artists, engineers, 
                and dreamers build together. From fintech to fashion tech, I&apos;ve built products that 
                make complex ideas feel human - helping people learn, create, and express ideas in new ways.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
