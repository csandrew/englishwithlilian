// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import ServicesList from "@/components/sections/ServicesList";
import Testimonials from "@/components/sections/Testimonials";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesList />
      <Testimonials />
      <Features />
      {/* CTA Section */}
      <section className="bg-grey-200 py-20 text-center px-4">
        <div className="max-w-3xl mx-auto">
          {/* Changed to text-uk-navy so it's visible on grey */}
          <h2 className="text-3xl font-bold text-uk-navy mb-4">
            Not Sure Where to Start?
          </h2>
          {/* Changed to text-grey-700 for good contrast on grey-300 */}
          <p className="text-grey-700 text-lg mb-8">
            Book a free consultation. We&apos;ll talk about your goals and I&apos;ll
            tell you honestly whether I can help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* Primary Button: Navy background, white text */}
            <Link
              href="/contact"
              className="bg-uk-red text-uk-white px-8 py-3.5 rounded-md font-semibold hover:bg-opacity-90 transition-colors shadow-sm"
            >
              Book a Free Consultation
            </Link>
            {/* Secondary Button: Transparent with Navy border/text, fills in on hover */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noreferrer"
              className="bg-transparent text-uk-navy border-2 border-uk-navy px-8 py-3.5 rounded-md font-semibold hover:bg-uk-navy hover:text-uk-white transition-colors"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                aria-hidden="true"
                className="mr-2"
              />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}