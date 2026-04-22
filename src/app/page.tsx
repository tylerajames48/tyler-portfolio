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
                Most AI products optimize for efficiency. I&apos;m interested in what happens 
                when we optimize for imagination instead.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-warmgray">
                I see AI as a creative medium - like paint or clay - where the outcome depends on 
                who&apos;s shaping it. My work spans fintech and fashion tech, building systems that 
                make abstract ideas tangible and give people new ways to create, not just faster ways to decide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
