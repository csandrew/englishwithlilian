import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function ContactPage() {
  return (
    <>
      <section className="bg-uk-navy py-16 text-center text-uk-white">
        <h1 className="text-4xl font-bold mb-2">Let&apos;s Talk</h1>
        <p className="text-uk-navy-light">Book a free, no-pressure consultation.</p>
      </section>

      <section className="py-20 bg-uk-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in touch directly</h2>
            <p className="text-grey-600 mb-8">I usually reply within 24 hours. The fastest way to reach me is via WhatsApp.</p>
            
            <div className="space-y-4">
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 border border-grey-200 rounded-xl hover:border-uk-red transition-colors">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  aria-hidden="true"
                  className="text-2xl text-uk-red"
                />
                <div>
                  <span className="block font-semibold">WhatsApp</span>
                  <span className="text-grey-500 text-sm">+1 234 567 890</span>
                </div>
              </a>
              
              <a href="mailto:hello@example.com" className="flex items-center gap-4 p-4 border border-grey-200 rounded-xl hover:border-uk-red transition-colors">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  aria-hidden="true"
                  className="text-2xl text-uk-red"
                />
                <div>
                  <span className="block font-semibold">Email</span>
                  <span className="text-grey-500 text-sm">hello@example.com</span>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-grey-50 p-8 rounded-2xl border border-grey-100">
            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-grey-700 mb-1">Name</label>
                <input type="text" name="name" required className="w-full px-4 py-2 border border-grey-300 rounded-lg focus:ring-2 focus:ring-uk-navy focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-grey-700 mb-1">Email</label>
                <input type="email" name="email" required className="w-full px-4 py-2 border border-grey-300 rounded-lg focus:ring-2 focus:ring-uk-navy focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-grey-700 mb-1">What are your goals?</label>
                <textarea name="message" rows={4} required className="w-full px-4 py-2 border border-grey-300 rounded-lg focus:ring-2 focus:ring-uk-navy focus:outline-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-uk-red text-uk-white font-semibold py-3 rounded-lg hover:bg-uk-red-dark transition-colors">
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </section>
    </>
  );
}