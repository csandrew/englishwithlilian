// src/components/sections/Hero.tsx
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* Hero with background */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop"
          alt="Lilian teaching English online"
          fill
          priority
          className="object-cover object-center"
          unoptimized
        />
        {/* Navy overlay */}
        <div className="absolute inset-0 bg-uk-navy/80" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-24">


          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-uk-white mb-6">
            Speak English with confidence — from the comfort of your{" "}
            <span className="text-uk-red">home or office.</span>
          </h1>

          <p className="text-lg md:text-xl text-grey-200 mb-10 max-w-2xl mx-auto">
            Personalized lessons with an experienced tutor who has taught students
            across Asia, Europe, South America, and Africa. Speaking, listening,
            reading, writing, grammar, and vocabulary — including IELTS & TOEFL
            preparation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-uk-red text-uk-white px-8 py-4 rounded-md font-bold text-lg hover:bg-uk-red/90 transition-all hover:scale-105 shadow-lg"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/services"
              className="bg-transparent text-uk-white border-2 border-uk-white px-8 py-4 rounded-md font-bold text-lg hover:bg-uk-white hover:text-uk-navy transition-colors"
            >
              Explore Services
            </Link>
          </div>

        </div>
      </section>

      {/* Trust bar — real numbers */}
      <section className="bg-gray-200 border-b border-grey-200 py-8">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="block text-3xl font-bold text-uk-navy">15+</span>
            <span className="text-sm text-grey-500">Years Teaching</span>
          </div>
          <div>
            <span className="block text-3xl font-bold text-uk-navy">4</span>
            <span className="text-sm text-grey-500">Continents Reached</span>
          </div>
          <div>
            <span className="block text-3xl font-bold text-uk-navy">IELTS</span>
            <span className="text-sm text-grey-500">&amp; TOEFL Prep</span>
          </div>
          <div>
            <span className="block text-3xl font-bold text-uk-navy">1:1</span>
            <span className="text-sm text-grey-500">Personal Lessons</span>
          </div>
        </div>
      </section>
    </>
  );
}