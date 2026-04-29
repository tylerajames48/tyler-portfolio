export default function Home() {
  return (
    <div className="relative bg-cream">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)]">
        {/* Background image - right-aligned, contained within section */}
        <div className="absolute inset-0 hidden md:block overflow-hidden">
          <img
            src="/images/tyler-painting-3.png"
            alt=""
            className="absolute top-0 right-0 h-full w-auto object-contain object-right-top"
          />
          {/* Left gradient fade into background */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, rgba(253, 248, 243, 1) 0%, rgba(253, 248, 243, 1) 48%, rgba(253, 248, 243, 0.85) 55%, rgba(253, 248, 243, 0.5) 62%, rgba(253, 248, 243, 0) 70%)',
            }}
          />
        </div>

        {/* Text content - vertically centered on left */}
        <div className="relative z-10 min-h-[calc(100vh-5rem)] flex items-center">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="max-w-xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[0.95] mb-8">
                Tyler James
              </h1>
              <div className="w-16 h-px bg-terracotta mb-10" />
              <p className="text-xl md:text-2xl leading-relaxed font-light mb-6">
                Most AI products optimize for efficiency. I&apos;m interested in what happens 
                when we optimize for imagination instead.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                I see AI as a creative medium - like paint or clay - where the outcome depends on 
                who&apos;s shaping it. My work spans fintech and fashion tech, building systems that 
                make abstract ideas tangible and give people new ways to create, not just faster ways to decide.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: Show image below text */}
        <div className="md:hidden relative w-full">
          <img
            src="/images/tyler-painting-3.png"
            alt=""
            className="w-full h-auto"
          />
          {/* Top gradient fade */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(253, 248, 243, 1) 0%, transparent 25%)',
            }}
          />
        </div>
      </section>
    </div>
  );
}
