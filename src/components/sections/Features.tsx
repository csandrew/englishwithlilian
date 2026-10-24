// src/components/sections/Features.tsx
export default function Features() {
  const steps = [
    {
      number: "01",
      title: "Build your grammar skills",
      description:
        "Build deep and meaningful relationships while letting your personality and knowledge shine through!",
    },
    {
      number: "02",
      title: "Perfect your pronunciation",
      description:
        "I’ll teach you simple techniques to speak more clearly in every conversation. Say hello to a clearer, more easily understood accent.",
    },
    {
      number: "03",
      title: "Learn words in context",
      description:
        "You won’t just recognise new words. You’ll pick up advanced vocabulary and learn to use it naturally in your daily conversations.",
    },
  ];

  return (
    <section className="bg-uk-white py-20">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold text-uk-navy mb-4">
            What&apos;s the key to English fluency?
          </h2>
          <p className="text-lg text-grey-600">
            Here&apos;s a clue: it doesn&apos;t involve memorising word lists and studying boring topics. This is the proven system that makes my English courses fun and effective.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative rounded-3xl border border-grey-200 bg-grey-50 p-8 transition-all hover:border-uk-red/30 hover:shadow-lg"
            >
              {/* Decorative top line that expands on hover */}
              <div className="absolute top-0 left-8 right-8 h-1 origin-left scale-x-0 bg-uk-red transition-transform duration-300 group-hover:scale-x-100 rounded-b-md" />
              
              <span className="text-sm font-bold tracking-wider text-uk-red">
                Step {step.number}
              </span>
              
              <h3 className="mt-4 text-xl font-bold text-uk-navy">
                {step.title}
              </h3>
              
              <p className="mt-4 text-base leading-relaxed text-grey-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}