import Link from "next/link";

const projects = [
  {
    href: "/experimental-projects/capsule",
    title: "Capsule",
    description: "AI-powered styling tool for expanding creative possibility",
    image: "/images/experimental/capsule-home.png",
  },
  {
    href: "/experimental-projects/joy-of-making",
    title: "The Joy of Making",
    description: "Interactive installation tracking emotion during human-machine co-creation",
    image: "/images/experimental/joy-of-making-home.png",
  },
  {
    href: "/experimental-projects/rewriting-the-rules",
    title: "Rewriting the Rules",
    description: "Exploring inherited bias in generative AI through cultural imagery",
    image: "/images/experimental/rewriting-the-rules/after1.png",
  },
];

export default function ExperimentalProjectsPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            Experimental Projects
          </h1>
          <p className="text-warmgray text-lg md:text-xl max-w-2xl">
            Experiments in AI, creativity, and new forms of interaction
          </p>
          <div className="w-16 h-px bg-terracotta mt-8" />
        </div>
      </section>

      {/* Project Cards - More visual/enticing layout */}
      <section className="pb-24 md:pb-36">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-1 gap-16 md:gap-24">
            {projects.map((project, index) => (
              <Link
                key={project.href}
                href={project.href}
                className={`group grid md:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? '' : ''}`}
              >
                {/* Image */}
                <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="aspect-[16/10] bg-peach/40 rounded overflow-hidden">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-peach to-coral/30 group-hover:scale-105 transition-transform duration-500" />
                    )}
                  </div>
                </div>
                
                {/* Content */}
                <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                  <span className="text-sm text-coral mb-4 block">0{index + 1}</span>
                  <h2 className="text-3xl md:text-4xl font-light mb-4 group-hover:text-terracotta transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-warmgray text-lg mb-6">
                    {project.description}
                  </p>
                  <span className={`inline-flex items-center text-terracotta group-hover:text-coral transition-colors ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                    <span className={index % 2 === 1 ? 'ml-0 mr-2' : ''}>View Project</span>
                    <span className={`${index % 2 === 1 ? 'mr-2 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'} transition-transform duration-300`}>
                      {index % 2 === 1 ? '←' : '→'}
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
