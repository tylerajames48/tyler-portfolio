'use client';

import { useState } from 'react';

const participantOutputs = [
  '/images/experimental/joy-of-making/output-1.png',
  '/images/experimental/joy-of-making/output-2.png',
  '/images/experimental/joy-of-making/output-3.png',
  '/images/experimental/joy-of-making/output-4.png',
  '/images/experimental/joy-of-making/output-5.png',
  '/images/experimental/joy-of-making/output-6.png',
  '/images/experimental/joy-of-making/output-7.png',
];

const experienceSteps = [
  {
    step: 1,
    title: "Consent & Calibration",
    caption: "The participant is informed that their facial expressions will be tracked during both sessions, that no facial images will be stored, and that only emotional state categories - neutral, happy, or angry - will be logged. They complete a brief calibration, making each expression while the system registers their baseline.",
  },
  {
    step: 2,
    title: "Painting with Technology",
    caption: "The participant has four minutes to paint using the Stretch robot, with the guidance that they can paint whatever emotion they feel in the moment. We give the participant a quick hands-on tutorial on how to use the Stretch controller. They guide the robot's arm with a controller, directing the sponge across a large sheet of paper mounted on an easel.",
  },
  {
    step: 3,
    title: "Painting by Hand",
    caption: "A new facial tracking session begins. The participant has four minutes to finish their painting, entirely by hand. No guidance, no controller, no robot. Just paint, sponge, and paper.",
  },
  {
    step: 4,
    title: "Creation of Emotional Color Auras",
    caption: "The two emotional auras (human and machine) are developed, and we walk the participant through what we were tracking with their facial expressions - yellow for happy, red for angry, green for neutral. Participants can also see the outputs of other participants - not just their paintings, but their emotional auras, to see which sessions produced more agitation, more happiness, more flatness.",
  },
];

const insights = [
  "Participants had varied reactions to the machine - some found it creatively generative, others felt more present without it. These differences suggest technology isn't replacing art, but introducing new ways of engaging with it.",
  "There is no single \"better\" way to create - only different experiences of making.",
  "The experience of making can be as meaningful as the artifact itself.",
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
      <div className="aspect-[4/3] bg-cream/80 overflow-hidden rounded">
        <img
          src={images[currentIndex]}
          alt={`Participant output ${currentIndex + 1}`}
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

export default function JoyOfMakingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-peach/30">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <p className="text-sm uppercase tracking-[0.2em] text-warmgray mb-4">
            Experiments
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
            The Joy of Making
          </h1>
          
          <p className="text-2xl md:text-3xl font-light text-terracotta mb-8 max-w-3xl leading-relaxed">
            Is creativity defined by the tool, the process, or the feeling of being alive while
            making something?
          </p>
          
          <div className="w-16 h-px bg-coral mb-8" />
          
          <p className="text-sm text-warmgray">
            Tools: Stretch Robot, Python, OpenCV, dlib, Webcam, DALL·E, Paint, Sponge
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
                The Joy of Making is an interactive installation where participants begin a painting
                with a robot, then complete it by hand. As they move between the two, a
                facial-recognition system captures subtle emotional shifts, translating them into a
                visual record of each creative session.
              </p>

              <p className="text-lg leading-relaxed text-warmgray">
                Rather than focusing on the final output, the project surfaces the often-invisible
                emotional experience of making - exploring how technology reshapes not what we create,
                but how it feels to create.
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

      {/* Audience Experience Section */}
      <section className="py-16 md:py-24 bg-peach/20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <p className="text-sm uppercase tracking-[0.2em] text-warmgray">
                Audience Experience
              </p>
            </div>
            <div className="md:col-span-8 space-y-6">
              <p className="text-lg leading-relaxed">
                A participant enters a space dressed as an artist&apos;s studio - a table covered in art 
                supplies, art books for inspiration, and ambient lo-fi music playing in the background. 
                The experience unfolds in four parts:
              </p>
              
              <div className="space-y-8 mt-8">
                {experienceSteps.map((step) => (
                  <div key={step.step} className="border-l-2 border-coral pl-6">
                    <p className="text-sm text-coral mb-1">Part {step.step}</p>
                    <h3 className="text-xl font-light mb-2">{step.title}</h3>
                    <p className="text-warmgray leading-relaxed">{step.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Final Outputs */}
      <section className="py-16 md:py-24 bg-peach/30">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-warmgray mb-4">
              Participant Outputs
            </p>
            <p className="text-lg text-warmgray max-w-2xl mb-6">
              The visual style of the final output is inspired by aura portrait photography, which 
              renders a person&apos;s emotional state or inner energy as fields of color and light.
            </p>
            <div className="w-12 h-px bg-coral" />
          </div>
          
          <ImageSlideshow images={participantOutputs} />
        </div>
      </section>

      {/* Installation Gallery */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.2em] text-warmgray mb-4">
              Live Installation
            </p>
            <div className="w-12 h-px bg-coral" />
          </div>
          
          <div className="space-y-16">
            {/* Calibration */}
            <div>
              <p className="text-sm text-coral mb-4">Consent & Calibration</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="aspect-[4/3] bg-cream/80 rounded overflow-hidden">
                  <img 
                    src="/images/experimental/joy-of-making/installation/calibration.png" 
                    alt="Facial calibration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Painting with Technology */}
            <div>
              <p className="text-sm text-coral mb-4">Painting with Stretch Robot</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="aspect-[4/3] bg-cream/80 rounded overflow-hidden">
                  <img 
                    src="/images/experimental/joy-of-making/installation/stretch2.jpg" 
                    alt="Participant using Stretch robot"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] bg-cream/80 rounded overflow-hidden">
                  <img 
                    src="/images/experimental/joy-of-making/installation/stretch3.jpg" 
                    alt="Participant using Stretch robot"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] bg-cream/80 rounded overflow-hidden">
                  <img 
                    src="/images/experimental/joy-of-making/installation/stretch4.png" 
                    alt="Participant using Stretch robot"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Painting by Hand */}
            <div>
              <p className="text-sm text-coral mb-4">Painting by Hand</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 aspect-[16/9] bg-cream/80 rounded overflow-hidden">
                  <img 
                    src="/images/experimental/joy-of-making/installation/paint3.jpg" 
                    alt="Participant painting by hand"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="aspect-[4/3] bg-cream/80 rounded overflow-hidden">
                    <img 
                      src="/images/experimental/joy-of-making/installation/paint1.jpg" 
                      alt="Participant painting by hand"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/3] bg-cream/80 rounded overflow-hidden">
                    <img 
                      src="/images/experimental/joy-of-making/installation/paint2.jpg" 
                      alt="Participant painting by hand"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
