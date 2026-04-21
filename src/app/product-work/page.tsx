export default function ProductWorkPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            Product
          </h1>
          <p className="text-warmgray text-lg md:text-xl max-w-2xl">
            A selection of products I led as product manager, from concept to launch
          </p>
          <div className="w-16 h-px bg-terracotta mt-8" />
        </div>
      </section>

      {/* Projects */}
      <section className="pb-24 md:pb-36">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 space-y-24 md:space-y-32">
          
          {/* Income Hub - Video on right */}
          <article className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-5">
              <span className="text-sm text-coral mb-4 block">01</span>
              <h2 className="text-2xl md:text-3xl font-light mb-4">
                Income Hub
              </h2>
              <p className="text-warmgray leading-relaxed">
                A centralized experience for tracking dividends and recurring income on Public.com, 
                helping users understand how their investment portfolio generates returns over time.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="aspect-video bg-peach/50 rounded overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/product-work/income-hub-poster.jpg"
                >
                  <source src="/videos/income-hub.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </article>

          {/* Brokerage Transfer Flow - Video on left */}
          <article className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-7 md:order-1">
              <div className="aspect-video bg-peach/50 rounded overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/product-work/brokerage-transfer-poster.jpg"
                >
                  <source src="/videos/brokerage-transfer.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="md:col-span-5 md:order-2">
              <span className="text-sm text-coral mb-4 block">02</span>
              <h2 className="text-2xl md:text-3xl font-light mb-4">
                Brokerage Transfer Flow
              </h2>
              <p className="text-warmgray leading-relaxed">
                A redesigned onboarding flow for transferring brokerage accounts into Public.com, 
                simplifying a complex, multi-step process to improve clarity, reduce drop-off, and 
                increase successful transfers.
              </p>
            </div>
          </article>

          {/* Learn and Earn - Image on right */}
          <article className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-5">
              <span className="text-sm text-coral mb-4 block">03</span>
              <h2 className="text-2xl md:text-3xl font-light mb-4">
                Learn and Earn
              </h2>
              <p className="text-warmgray leading-relaxed mb-6">
                An interactive product on Public.com that combines short investing lessons with 
                financial incentives, allowing users to learn key concepts while earning stock - 
                making financial education more engaging and accessible.
              </p>
              <a
                href="https://medium.com/the-public-blog/a-new-way-to-level-up-your-investing-skills-on-public-d78e232b547"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-terracotta hover:text-coral transition-colors group"
              >
                Read More
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
            <div className="md:col-span-7">
              <div className="aspect-video bg-peach/50 rounded overflow-hidden">
                <img 
                  src="/images/product-work/learn-and-earn.jpg" 
                  alt="Learn and Earn"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </article>

          {/* Public.com for Desktop - Image on left */}
          <article className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-7 md:order-1">
              <div className="aspect-video bg-peach/50 rounded overflow-hidden">
                <img 
                  src="/images/product-work/public-desktop.jpg" 
                  alt="Public.com for Desktop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-5 md:order-2">
              <span className="text-sm text-coral mb-4 block">04</span>
              <h2 className="text-2xl md:text-3xl font-light mb-4">
                Public.com for Desktop
              </h2>
              <p className="text-warmgray leading-relaxed mb-6">
                Public&apos;s first web-based trading platform, designed to support more advanced 
                investing behaviors through expanded portfolio views, asset discovery, and 
                real-time trading capabilities.
              </p>
              <a
                href="https://medium.com/the-public-blog/more-ways-to-build-and-manage-your-portfolio-on-public-2f1a77693d5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-terracotta hover:text-coral transition-colors group"
              >
                Read More
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
          </article>

          {/* Archived Jobs - Image on right */}
          <article className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-5">
              <span className="text-sm text-coral mb-4 block">05</span>
              <h2 className="text-2xl md:text-3xl font-light mb-4">
                Archived Jobs (LinkedIn)
              </h2>
              <p className="text-warmgray leading-relaxed">
                An automated experience that moves inactive listings into an archive, giving users 
                a clearer view of active opportunities while preserving past roles for reference 
                and follow-up.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="bg-peach/50 rounded overflow-hidden">
                <img 
                  src="/images/product-work/archive.png" 
                  alt="Archived Jobs (LinkedIn)"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </article>

        </div>
      </section>
    </div>
  );
}
