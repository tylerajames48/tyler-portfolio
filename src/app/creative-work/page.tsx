'use client';

import { useState } from 'react';

const paintings = [
  '/images/creative-work/florence-1.jpeg',
  '/images/creative-work/florence-2.jpeg',
  '/images/creative-work/florence-3.jpeg',
];

function ImageSlideshow({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="aspect-[3/4] max-w-xl mx-auto bg-cream/80 overflow-hidden rounded">
        <img
          src={images[currentIndex]}
          alt={`Painting ${currentIndex + 1}`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-cream/90 hover:bg-cream rounded-full flex items-center justify-center text-auburn hover:text-terracotta transition-colors shadow-md"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-cream/90 hover:bg-cream rounded-full flex items-center justify-center text-auburn hover:text-terracotta transition-colors shadow-md"
        aria-label="Next image"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-terracotta' : 'bg-sand hover:bg-coral'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <p className="text-center text-sm text-warmgray mt-3">
        {currentIndex + 1} / {images.length}
      </p>
    </div>
  );
}

export default function CreativeWorkPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            Art
          </h1>
          <p className="text-warmgray text-lg md:text-xl max-w-2xl">
            Creative work exploring emotion, identity, and lived experience
          </p>
          <div className="w-16 h-px bg-terracotta mt-8" />
        </div>
      </section>

      {/* Eat, Paint, Love */}
      <section className="py-16 md:py-24 bg-peach/30">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-5">
              <span className="text-sm text-coral mb-4 block">01</span>
              <h2 className="text-2xl md:text-3xl font-light mb-2">Eat, Paint, Love</h2>
              <p className="text-sm text-warmgray mb-6">Narrative essay</p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Independence is often framed as self-sufficiency. In practice, it can be a form of distance.</strong>
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <em>Eat, Paint, Love</em>, published in Stanford Graduate School of Business&apos;s magazine{" "}
                <em>non-disclosure</em>, draws from my time studying painting in Florence to challenge how we 
                define strength. Through solo travel and daily studio practice, the idea of independence began 
                to unravel.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                This piece argues that the desire for connection is not a weakness to overcome. <strong>It is 
                a signal of what actually makes us feel alive.</strong>
              </p>
              <a
                href="https://drive.google.com/file/d/1ZLkw97QdonrRkDawjWowHWtMYuoklA2q/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-terracotta hover:text-coral transition-colors"
              >
                Read the piece
                <span className="ml-2">→</span>
              </a>
            </div>
            <div className="md:col-span-7">
              <div className="aspect-[4/3] bg-cream/80 rounded overflow-hidden">
                <img 
                  src="/images/creative-work/eat-paint-love.png" 
                  alt="Eat, Paint, Love"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Love Thy Neighbor */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-7 md:order-1">
              <div className="aspect-video rounded overflow-hidden shadow-lg">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/-kiVJD-xW1A"
                  title="Love Thy Neighbor"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="md:col-span-5 md:order-2">
              <span className="text-sm text-coral mb-4 block">02</span>
              <h2 className="text-2xl md:text-3xl font-light mb-2">Love Thy Neighbor</h2>
              <p className="text-sm text-warmgray mb-6">Archival film</p>
              <p className="text-lg leading-relaxed mb-4">
                <strong>Digital systems don&apos;t just store history. They shape which versions of it survive.</strong>
              </p>
              <p className="text-lg leading-relaxed mb-4">
                <em>Love Thy Neighbor</em> draws from personal archive to surface a story that would otherwise 
                be flattened or lost. It captures my mother&apos;s experience at a Catholic high school in 
                Staten Island in the late 1970s, where the language of faith coexisted with everyday racism.
              </p>
              <p className="text-lg leading-relaxed">
                As more of our lives are stored, indexed, and surfaced through digital systems, what gets 
                retained is often what fits cleanly. This project resists that compression. <strong>Memory is 
                not clean. It holds contradiction, and preserving it means keeping that intact.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Painting Samples */}
      <section className="py-16 md:py-24 bg-peach/30">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="mb-12 md:mb-16">
            <span className="text-sm text-coral mb-4 block">03</span>
            <h2 className="text-2xl md:text-3xl font-light mb-2">Painting Samples</h2>
            <p className="text-sm text-warmgray mb-4">Oil paintings</p>
            <p className="text-lg leading-relaxed max-w-3xl text-warmgray">
              These paintings were completed while living in Florence, where I spent time studying 
              and practicing classical techniques. The process became less about precision, and more 
              about learning to notice, slow down, and engage more intentionally with what&apos;s in 
              front of me.
            </p>
          </div>
          <ImageSlideshow images={paintings} />
        </div>
      </section>
    </div>
  );
}
