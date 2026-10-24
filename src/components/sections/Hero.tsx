// src/components/sections/Hero.tsx
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      
      {/* 
        Background Image 
        Replace this URL with your own image in the /public folder (e.g., /images/hero-bg.jpg) 
      */}
      <Image
        src='/images/hero-bg.jpg'
        alt="Lilian teaching English online"
        fill
        priority
        className="object-cover object-center"
        unoptimized
      />

      {/* Dark Navy Overlay for text readability */}
      <div className="absolute inset-0 bg-uk-navy/75" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-24">
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-uk-white mb-6">
          Go from beginner or intermediate to <span className="text-uk-red">advanced</span> English speaker.
        </h1>
        
        <p className="text-lg md:text-xl text-grey-200 mb-10 max-w-2xl mx-auto">
          Personalized lessons for ambitious learners. We work on your real goals — speaking clearly, handling meetings, and sounding natural — one session at a time.
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
            How It Works
          </Link>
        </div>
        
        
      </div>
    </section>
  );
}