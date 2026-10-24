// src/components/sections/Testimonials.tsx
'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    text: "The lessons go really in depth and are fun to follow. The challenge helped me become aware of features of my speech that I need to work on.",
    name: "Flavia",
    role: "Italy • Pronunciation Course",
  },
  {
    text: "Just logging in and learning a bit every day allows me to improve my English. One day my colleague came to me and asked what I have done to improve my English.",
    name: "Trista",
    role: "Hong Kong • Advanced English",
  },
  {
    text: "I finally feel confident speaking English at work. The professional English programme gave me the vocabulary and confidence I needed for presentations and meetings.",
    name: "Marco",
    role: "Brazil • Professional English",
  },
  {
    text: "I had tried apps and group classes before, but working one-to-one with Lilian was the difference. We only worked on exactly what I needed for my interviews.",
    name: "Amara",
    role: "Nigeria • Interview Prep",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonial = testimonials[activeIndex];

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + testimonials.length) % testimonials.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-grey-200">
      <div className="container-custom max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-uk-red">Student Stories</p>
          <h2 className="mt-3 text-3xl font-bold text-uk-navy">
            What students <span className="text-uk-red">say.</span>
          </h2>
        </div>

        <div
          className="mt-12"
          role="region"
          aria-roledescription="carousel"
          aria-label="Student testimonials"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') showPrevious();
            if (event.key === 'ArrowRight') showNext();
          }}
        >
          <div className="overflow-hidden rounded-3xl border border-grey-200 bg-white p-8 shadow-sm sm:p-12">
            <AnimatePresence mode="wait" initial={false}>
              <motion.blockquote
                key={activeIndex}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.22 }}
                aria-live="polite"
              >
                <div className="flex gap-1 text-uk-red" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-6 text-lg leading-8 text-grey-700 sm:text-xl">
                  “{testimonial.text}”
                </p>
                <footer className="mt-8 border-t border-grey-200 pt-6">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-bold text-uk-navy">{testimonial.name}</p>
                      <p className="text-sm text-grey-500">{testimonial.role}</p>
                    </div>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-grey-300 text-xl text-uk-navy transition hover:border-uk-red hover:bg-uk-red hover:text-white"
            >
              <FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" />
            </button>

            <div className="flex items-center justify-center gap-2" aria-label={`Testimonial ${activeIndex + 1} of ${testimonials.length}`}>
              {testimonials.map((item, index) => (
                <button
                  key={`${item.name}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex ? 'w-7 bg-uk-navy' : 'w-2.5 bg-grey-300 hover:bg-grey-400'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next testimonial"
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-grey-300 text-xl text-uk-navy transition hover:border-uk-red hover:bg-uk-red hover:text-white"
            >
              <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}