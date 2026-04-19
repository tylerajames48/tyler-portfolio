const insights = [
  "As AI systems scale, they don't just reflect dominant ways of seeing - they help stabilize and reproduce them at scale. What looks like \"generation\" is often repetition of learned patterns.",
  "Even when prompted with non-Western contexts, Western patterns still shape the output.",
  "Disruption is not just corrective; it expands the space of what the system is able to produce.",
];

const examples = [
  {
    id: 1,
    prompt: "Imagine a future Haudenosaunee nation several generations ahead, during a seasonal agricultural ceremony marking the transition between planting and harvest: women elders and Clan Mothers lead the gathering, formally acknowledging shifts in land stewardship, food cycles, and communal responsibility as part of governance rather than religion; men prepare offerings and shared food in the same space, their labor visible but uncentered; no stage, no audience, no performers—participants arranged in a circular formation that dissolves hierarchy; longhouse-inspired open architecture adapted for future ecological systems, natural and adaptive light responding to the season; wide documentary shot, restrained color palette, photorealistic realism, cinematic still, authority expressed through collective presence rather than spectacle; restrained but unmistakable futurism, obvious future technologies.",
    beforeImage: "/images/experimental/rewriting-the-rules/before1.png",
    beforeDescription: "The outputs defaulted to historical or traditional imagery, failing to incorporate any visible futurism - despite explicit prompting - resulting in scenes that reflect the past rather than imagining Indigenous governance, technology, and space in the future.",
    interventionImage: "/images/experimental/rewriting-the-rules/intervention1.jpg",
    interventionDescription: "I referenced an image from the Stanford Torus space settlements studies (NASA, 1975), where long interior corridors and branching communal spaces mirror the spatial logic of a longhouse in a futuristic form.",
    afterImage: "/images/experimental/rewriting-the-rules/after1.png",
    afterDescription: "The intervention grounded the scenes in a coherent spatial logic, translating longhouse structures - central to Haudenosaunee culture - into a futuristic context with embedded technology and clearer social organization, shifting the outputs from generic sci-fi or historical imagery toward a more integrated and legible vision of Indigenous futurity.",
  },
  {
    id: 2,
    prompt: "Imagine a future Haudenosaunee nation at the moment a decision about conflict is being made: Clan Mothers deliberate whether to authorize or prevent warfare, seated in a circular governance space, while male leaders wait without speaking; cinematic documentary still, power is expressed through restraint and decision-making; restrained but unmistakable futurism, subtle future technologies, 4k, real humans, documentary style. Should focus on one of the Clan Mothers.",
    beforeImage: "/images/experimental/rewriting-the-rules/before2.png",
    beforeDescription: "The images defaulted to stereotypical and historically coded Native American imagery, failing to depict a specific Haudenosaunee context or any meaningful futurism, while also misrepresenting leadership by centering male figures and slipping into warrior aesthetics rather than governance.",
    interventionImage: "/images/experimental/rewriting-the-rules/intervention2.jpg",
    interventionDescription: "I referenced a picture of a real Clan Mother. A Clan Mother is a respected Haudenosaunee leader responsible for guiding her community, preserving lineage and traditions, and selecting or advising chiefs based on the well-being of the people.",
    afterImage: "/images/experimental/rewriting-the-rules/after2.png",
    afterDescription: "The intervention helped the model correctly center a Clan Mother as the authority figure, producing more accurate expressions of leadership, maintaining visible futurism, and avoiding defaulting to male leaders - while better reflecting gender dynamics within the scene.",
  },
];

export default function RewritingTheRulesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-peach/30">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <p className="text-sm uppercase tracking-[0.2em] text-warmgray mb-4">
            Experimental Projects
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
            Rewriting the Rules
          </h1>
          
          <p className="text-2xl md:text-3xl font-light text-terracotta mb-8 max-w-3xl leading-relaxed">
            When AI imagines the future, how much of the past does it carry with it?
          </p>
          
          <div className="w-16 h-px bg-coral mb-8" />
          
          <p className="text-sm text-warmgray">
            Tools: Midjourney, Discord, Image-to-Image Generation
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
              <p className="text-lg leading-relaxed">
                Rewriting the Rules explores how generative AI reshapes culturally specific imagery
                through inherited bias.
              </p>

              <p className="text-lg leading-relaxed text-warmgray">
                Using Midjourney, the project generates Haudenosaunee scenes through text prompts, surfacing
                how Western assumptions around gender, care, and power appear even within non-Western
                contexts. These same scenes are then reworked through targeted interventions -
                introducing visual inputs intended to disrupt those patterns and shift how they are
                rendered.
              </p>

              <p className="text-lg leading-relaxed">
                The resulting images reveal how AI-generated futures are shaped by the past, inviting
                viewers to question the neutrality of these representations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Experiment */}
      <section className="py-16 md:py-24 bg-peach/20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <p className="text-sm uppercase tracking-[0.2em] text-warmgray">
                The Experiment
              </p>
            </div>
            <div className="md:col-span-8">
              <p className="text-lg leading-relaxed">
                The project first generates Haudenosaunee scenes through text prompts to surface the
                model&apos;s biases, then reworks those same scenes through visual interventions that
                challenge and shift those outputs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section - Moved above Outputs */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <p className="text-sm uppercase tracking-[0.2em] text-warmgray">
                Insights
              </p>
            </div>
            <div className="md:col-span-8">
              <ul className="space-y-8">
                {insights.map((insight, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="text-coral flex-shrink-0 mt-1">•</span>
                    <span className="text-lg leading-relaxed">{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Outputs Section */}
      <section className="py-24 md:py-36 bg-peach/30">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="mb-16">
            <p className="text-sm uppercase tracking-[0.2em] text-warmgray mb-4">
              Outputs
            </p>
            <p className="text-lg text-warmgray max-w-2xl">
              Select examples from the experiment illustrating how targeted visual interventions 
              can shift AI-generated imagery.
            </p>
            <div className="w-12 h-px bg-coral mt-6" />
          </div>

          {/* Examples */}
          <div className="space-y-24 md:space-y-32">
            {examples.map((example) => (
              <div key={example.id} className="border-t border-sand pt-12">
                {/* Example header */}
                <div className="mb-10">
                  <span className="text-sm text-coral mb-4 block">Example 0{example.id}</span>
                  <p className="text-base leading-relaxed text-warmgray italic">
                    Prompt: {example.prompt}
                  </p>
                </div>

                {/* Three-column comparison */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-10">
                  {/* Before */}
                  <div>
                    <div className="aspect-square bg-cream/80 mb-4 rounded overflow-hidden">
                      <img 
                        src={example.beforeImage} 
                        alt={`Before intervention - Example ${example.id}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-coral uppercase tracking-wider mb-3">Before Intervention</p>
                    <p className="text-sm leading-relaxed text-warmgray">
                      {example.beforeDescription}
                    </p>
                  </div>

                  {/* Intervention */}
                  <div>
                    <div className="aspect-square bg-cream/80 mb-4 rounded overflow-hidden">
                      <img 
                        src={example.interventionImage} 
                        alt={`Intervention - Example ${example.id}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-terracotta uppercase tracking-wider mb-3">Intervention</p>
                    <p className="text-sm leading-relaxed text-warmgray">
                      {example.interventionDescription}
                    </p>
                  </div>

                  {/* After */}
                  <div>
                    <div className="aspect-square bg-cream/80 mb-4 rounded overflow-hidden">
                      <img 
                        src={example.afterImage} 
                        alt={`After intervention - Example ${example.id}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs text-auburn uppercase tracking-wider mb-3">After Intervention</p>
                    <p className="text-sm leading-relaxed text-warmgray">
                      {example.afterDescription}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
