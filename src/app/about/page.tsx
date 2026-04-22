export default function AboutPage() {
  return (
    <div>
      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            {/* Photo - Left side */}
            <div className="md:col-span-4">
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 rounded-full bg-peach/50 overflow-hidden">
                <img 
                  src="/images/about/profile.jpg" 
                  alt="Tyler James"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bio - Right side */}
            <article className="md:col-span-8 space-y-6">
              <p className="text-xl md:text-2xl leading-relaxed font-light">
                I build products and experiences at the intersection of AI, creativity, and human behavior.
              </p>

              <p className="text-lg leading-relaxed">
                Most recently, I earned my MBA from Stanford Graduate School of Business, where I explored 
                how emerging technologies reshape creative work, authorship, and human expression. My 
                work there focused on a simple but open-ended question: what does it mean to create in an 
                age where machines can generate?
              </p>

              <p className="text-lg leading-relaxed">
                I&apos;m drawn to building products at the earliest stages, when the problem is still forming 
                and each decision shapes what it becomes.
              </p>

              <p className="text-lg leading-relaxed">
                During my MBA, I spent a summer at{" "}
                <a 
                  href="https://www.raspberry.ai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-terracotta hover:text-coral transition-colors border-b border-terracotta/30 hover:border-terracotta"
                >
                  Raspberry AI
                </a>{" "}
                as their first product manager, working with machine learning engineers and fashion designers 
                to bring structure to how the team built products and reimagine the product as a more seamless, 
                end-to-end creative experience. I was also a Venture Capital Fellow at Peterson Ventures, 
                where I evaluated early-stage companies and worked closely with founders - sharpening my 
                perspective on what makes products resonate, scale, and endure from the earliest stages.
              </p>

              <p className="text-lg leading-relaxed">
                At{" "}
                <a 
                  href="https://www.public.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-terracotta hover:text-coral transition-colors border-b border-terracotta/30 hover:border-terracotta"
                >
                  Public.com
                </a>
                , I built and led the company&apos;s first Growth product team, defining the roadmap and 
                executing alongside a small cross-functional team to drive sustainable revenue. I led the 
                development of products spanning investment recommendations, desktop trading, and Learn & 
                Earn - reframing financial education as participation rather than instruction.
              </p>

              <p className="text-lg leading-relaxed">
                Earlier in my career at LinkedIn, I transitioned from strategy into product, working across 
                growth, experimentation, and go-to-market. That experience shaped how I think about systems - 
                how small interventions can shift behavior at scale, and how products become meaningful 
                through the actions they enable.
              </p>

              <p className="text-lg leading-relaxed">
                I&apos;m especially interested in how AI can move beyond automation to become a medium for 
                exploration, co-creation, and new forms of expression.
              </p>

              <p className="text-lg leading-relaxed">
                When I&apos;m not building, I&apos;m collecting records, exploring local craft markets, or in the 
                middle of reading two or three books at once.
              </p>

              <div className="pt-8 border-t border-sand mt-8">
                <p className="text-sm text-warmgray mb-6">
                  Resume available upon request.
                </p>

                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-warmgray">Email </span>
                    <a 
                      href="mailto:tyler.a.james48@gmail.com"
                      className="text-auburn hover:text-terracotta transition-colors"
                    >
                      tyler.a.james48@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="text-warmgray">LinkedIn </span>
                    <a 
                      href="https://www.linkedin.com/in/tyler-james-5b507410b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-auburn hover:text-terracotta transition-colors"
                    >
                      linkedin.com/in/tyler-james-5b507410b
                    </a>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
