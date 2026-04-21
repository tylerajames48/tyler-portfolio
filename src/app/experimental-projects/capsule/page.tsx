const experienceSteps = [
  {
    step: 1,
    title: "Choose a Starting Point",
    caption: "Start by typing in a single item to anchor the look.",
    video: "/videos/capsule/step-1.mp4",
  },
  {
    step: 2,
    title: "Select From Your Closet",
    caption: "Or, pull from your closet to ground the outfit in pieces you already own.",
    video: "/videos/capsule/step-2.mp4",
  },
  {
    step: 3,
    title: "Review Core Pairings",
    caption: "Outfits are generated using your selected item, combining it with complementary pieces from your closet and system suggestions.",
    video: "/videos/capsule/step-3.mp4",
  },
  {
    step: 4,
    title: "Expand Into Visual Inspiration",
    caption: "Explore related looks and styling directions sourced from visual platforms like Pinterest and Cosmos.",
    video: "/videos/capsule/step-4.mp4",
  },
  {
    step: 5,
    title: "Experiment With Color",
    caption: "Test alternate color combinations and see how different palettes change the overall look.",
    video: "/videos/capsule/step-5.mp4",
  },
  {
    step: 6,
    title: "Maintain and Grow the Closet",
    caption: "Outfit suggestions become more creative as your closet grows over time.",
    video: "/videos/capsule/step-6.mp4",
  },
];

const insights = [
  "The real barrier to everyday creativity isn't a lack of ideas, but the cognitive load required to act on them under time pressure.",
  "What feels like personalization is often just repetition in disguise.",
  "The danger of AI is not that it replaces creativity, but that it quietly narrows what we explore by making defaults feel sufficient.",
];

export default function CapsulePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-peach/30">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <p className="text-sm uppercase tracking-[0.2em] text-warmgray mb-4">
            Experiments
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
            Capsule
          </h1>
          
          <p className="text-2xl md:text-3xl font-light text-terracotta mb-8 max-w-3xl leading-relaxed">
            What if AI expanded taste instead of automating it?
          </p>
          
          <div className="w-16 h-px bg-coral mb-8" />
          
          <p className="text-sm text-warmgray">
            Tools: Factory, OpenAI API, Next.js
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <p className="text-sm uppercase tracking-[0.2em] text-warmgray">
                Overview
              </p>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p className="text-warmgray mb-4">
                From closet to canvas - reimagining what you already own.
              </p>
              
              <p className="text-lg leading-relaxed">
                Capsule is an AI-powered fashion styling tool built as a one-month behavioral experiment. 
                The test: could AI support everyday creativity without increasing consumption or cognitive load?
              </p>
              
              <p className="text-lg leading-relaxed">
                For 30 days, I used the tool regularly while restricting myself to only what I already owned, 
                using AI to remix my wardrobe into new combinations. The system treats constraint not as 
                limitation, but as a catalyst for expression.
              </p>
              
              <p className="text-lg leading-relaxed text-warmgray">
                This experiment formed the basis of &quot;Seeing the Same Things, Differently,&quot; an essay published in{" "}
                <a 
                  href="https://drive.google.com/file/d/195N1DpQqBAR0WzRQubMOz0RPiSU412cc/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="italic text-terracotta hover:text-coral transition-colors"
                >
                  The Future of Flourishing: AI and Human Flourishing at Stanford
                </a>{" "}
                (ed. Dr. Jennifer Aaker et al.).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <p className="text-sm uppercase tracking-[0.2em] text-warmgray">
                Insights
              </p>
            </div>
            <div className="md:col-span-8">
              <ul className="space-y-6">
                {insights.map((insight, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="text-coral flex-shrink-0">•</span>
                    <span className="text-lg leading-relaxed">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 md:py-36 bg-peach/20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-warmgray mb-4">
              The Experience
            </p>
            <div className="w-12 h-px bg-coral" />
          </div>
          
          <div className="space-y-24 md:space-y-32">
            {experienceSteps.map((step, index) => (
              <div key={step.step} className={`grid md:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? '' : ''}`}>
                {/* Video */}
                <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="aspect-[4/3] bg-cream/80 rounded overflow-hidden">
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={step.video} type="video/mp4" />
                    </video>
                  </div>
                </div>
                
                {/* Caption */}
                <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1 md:pr-8' : 'md:pl-8'}`}>
                  <span className="text-sm text-coral block mb-2">0{step.step}</span>
                  <h3 className="text-xl md:text-2xl font-light mb-3">{step.title}</h3>
                  <p className="text-warmgray leading-relaxed">{step.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Walkthrough Video Section */}
      <section className="py-16 md:py-24 border-t border-sand">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-warmgray mb-4">
              Full Walkthrough
            </p>
            <h2 className="text-2xl md:text-3xl font-light mb-4">
              See the Complete Experience
            </h2>
            <p className="text-warmgray max-w-2xl mx-auto">
              Watch how Capsule transforms everyday styling decisions into moments of creative exploration.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/61Eq2A_zrlg"
                title="Capsule Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
