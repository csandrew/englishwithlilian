// src/app/contact/page.tsx
import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const metadata: Metadata = {
  title: "Contact | English With Lilian",
  description: "Book a free consultation with Lilian. 15 years teaching English as a foreign language.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-uk-navy py-16 text-center text-uk-white">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-2">Let&apos;s Talk</h1>
          <p className="text-grey-300">
            Book a free, no-pressure consultation. We&apos;ll talk about your goals.
          </p>
        </div>
      </section>

      <section className="py-20 bg-uk-white">
        <div className="container-custom grid md:grid-cols-2 gap-12">
          {/* Left: direct contact */}
          <div>
            <h2 className="text-2xl font-bold text-uk-navy mb-6">Get in touch directly</h2>
            <p className="text-grey-600 mb-8">
              The fastest way to reach me is via WhatsApp. I usually reply within a day.
            </p>

            <div className="space-y-4">
              <a
                href="https://wa.me/254722388160?text=Hi%20Lilian!%20I'd%20like%20to%20book%20a%20lesson."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 border border-grey-200 rounded-xl hover:border-uk-red transition-colors"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  aria-hidden="true"
                  className="text-2xl text-uk-red"
                />
                <div>
                  <span className="block font-semibold text-uk-navy">WhatsApp</span>
                  <span className="text-grey-500 text-sm">+254 722 388 160</span>
                </div>
              </a>

              <a
                href="tel:+254722388160"
                className="flex items-center gap-4 p-4 border border-grey-200 rounded-xl hover:border-uk-red transition-colors"
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  aria-hidden="true"
                  className="text-2xl text-uk-red"
                />
                <div>
                  <span className="block font-semibold text-uk-navy">Call</span>
                  <span className="text-grey-500 text-sm">+254 722 388 160</span>
                </div>
              </a>

              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-4 p-4 border border-grey-200 rounded-xl hover:border-uk-red transition-colors"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  aria-hidden="true"
                  className="text-2xl text-uk-red"
                />
                <div>
                  <span className="block font-semibold text-uk-navy">Email</span>
                  <span className="text-grey-500 text-sm">hello@example.com</span>
                </div>
              </a>
            </div>

            <div className="mt-8 p-5 bg-grey-50 rounded-xl border border-grey-200">
              <p className="text-sm text-grey-600">
                <strong className="text-uk-navy">Prefer to learn from home?</strong> All lessons
                are online via Zoom or Google Meet — you don&apos;t need to travel anywhere.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-grey-50 p-8 rounded-2xl border border-grey-200">
            <h3 className="text-xl font-bold text-uk-navy mb-6">Send a message</h3>
            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-grey-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-grey-300 rounded-lg focus:ring-2 focus:ring-uk-red focus:outline-none bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-grey-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-grey-300 rounded-lg focus:ring-2 focus:ring-uk-red focus:outline-none bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-grey-700 mb-1">
                  What do you want to improve?
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="e.g., Speaking confidence, IELTS prep, business English..."
                  className="w-full px-4 py-2 border border-grey-300 rounded-lg focus:ring-2 focus:ring-uk-red focus:outline-none bg-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-uk-red text-uk-white font-semibold py-3 rounded-lg hover:bg-uk-red/90 transition-colors"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}