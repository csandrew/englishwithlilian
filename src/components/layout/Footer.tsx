// src/components/layout/Footer.tsx
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faWhatsapp,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-uk-navy relative overflow-hidden pt-20 pb-10">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-uk-red/10 rounded-full blur-3xl -z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-uk-white/5 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex flex-col mb-6">
              <span className="text-2xl font-bold text-uk-white tracking-tight">
                English With Lilian
              </span>

            </Link>
            <p className="text-grey-400 text-sm leading-relaxed max-w-sm mb-8">
              Personalized English lessons. Helping ambitious learners across Asia, Europe, South America, and Africa speak with confidence — including IELTS & TOEFL preparation.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" aria-label="LinkedIn" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-grey-300 hover:bg-uk-red hover:text-white transition-all duration-300">
                <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-grey-300 hover:bg-uk-red hover:text-white transition-all duration-300">
                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-uk-white font-bold text-sm tracking-wider uppercase mb-6">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              {['Home', 'About', 'Services', 'Testimonials', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-grey-400 hover:text-uk-white transition-colors flex items-center gap-2 group"
                  >

                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-uk-white font-bold text-sm tracking-wider uppercase mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="tel:+254722388160"
                  className="text-grey-400 hover:text-uk-white transition-colors flex items-start gap-3 group"
                >
                  <span className="mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-white/5 group-hover:bg-uk-red transition-colors">
                    <FontAwesomeIcon icon={faPhone} className="w-3 h-3 text-grey-300 group-hover:text-white" />
                  </span>
                  <span>
                    <span className="block text-xs text-grey-500 mb-1">Call directly</span>
                    0722 388 160
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/254722388160"
                  target="_blank"
                  rel="noreferrer"
                  className="text-grey-400 hover:text-uk-white transition-colors flex items-start gap-3 group"
                >
                  <span className="mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-white/5 group-hover:bg-[#25D366] transition-colors">
                    <FontAwesomeIcon icon={faWhatsapp} className="w-3 h-3 text-grey-300 group-hover:text-white" />
                  </span>
                  <span>
                    <span className="block text-xs text-grey-500 mb-1">WhatsApp</span>
                    Chat with Lilian
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:hello@example.com"
                  className="text-grey-400 hover:text-uk-white transition-colors flex items-start gap-3 group"
                >
                  <span className="mt-1 flex items-center justify-center w-6 h-6 rounded-full bg-white/5 group-hover:bg-uk-red transition-colors">
                    <FontAwesomeIcon icon={faEnvelope} className="w-3 h-3 text-grey-300 group-hover:text-white" />
                  </span>
                  <span>
                    <span className="block text-xs text-grey-500 mb-1">Email</span>
                    hello@example.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-grey-500">
          <p>
            &copy; {currentYear} English With Lilian. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-grey-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-grey-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}