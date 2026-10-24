// src/components/layout/Footer.tsx
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-uk-navy text-grey-300 py-12">
      <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h4 className="text-uk-white font-bold text-lg mb-2">English With Lilian</h4>
          <p className="text-sm text-grey-400 leading-relaxed">
            Personalized online English lessons. 15 years teaching students across
            Asia, Europe, South America, and Africa.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-uk-white font-semibold mb-4">Pages</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-uk-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-uk-white transition-colors">About</Link></li>
            <li><Link href="/services" className="hover:text-uk-white transition-colors">Services</Link></li>
            <li><Link href="/testimonials" className="hover:text-uk-white transition-colors">Testimonials</Link></li>
            <li><Link href="/faq" className="hover:text-uk-white transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-uk-white font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="tel:+254722388160"
                className="hover:text-uk-white transition-colors flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faPhone} aria-hidden="true" /> 0722 388 160
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/254722388160?text=Hi%20Lilian!%20I'd%20like%20to%20book%20a%20lesson."
                target="_blank"
                rel="noreferrer"
                className="hover:text-uk-white transition-colors flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" /> Chat on WhatsApp
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@example.com"
                className="hover:text-uk-white transition-colors flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" /> hello@example.com
              </a>
            </li>
          </ul>

          <div className="pt-6 flex gap-4 text-sm">
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-uk-white transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-uk-white transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="container-custom mt-12 pt-8 border-t border-grey-700 text-sm text-center text-grey-500">
        &copy; {new Date().getFullYear()} English With Lilian. All rights reserved.
      </div>
    </footer>
  );
}