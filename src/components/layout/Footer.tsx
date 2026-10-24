// src/components/layout/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-uk-navy text-grey-300 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-uk-white font-bold text-lg mb-4">English With Lilian</h4>
          <p className="text-sm text-grey-400">Personalized online English lessons for ambitious learners.</p>
        </div>
        
        <div>
          <h4 className="text-uk-white font-semibold mb-4">Pages</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-uk-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-uk-white">About</Link></li>
            <li><Link href="/services" className="hover:text-uk-white">Services</Link></li>
            <li><Link href="/testimonials" className="hover:text-uk-white">Testimonials</Link></li>
            <li><Link href="/faq" className="hover:text-uk-white">FAQ</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-uk-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:hello@example.com" className="hover:text-uk-white">hello@example.com</a></li>
            <li><a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="hover:text-uk-white">Chat on WhatsApp</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-uk-white font-semibold mb-4">Follow</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-uk-white">Instagram</a></li>
            <li><a href="#" className="hover:text-uk-white">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-12 pt-8 border-t border-grey-800 text-sm text-center text-grey-500">
        &copy; {new Date().getFullYear()} English With Lilian. All rights reserved.
      </div>
    </footer>
  );
}