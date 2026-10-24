import Testimonials from "@/components/sections/Testimonials";
import Link from "next/link";

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-uk-navy px-4 py-16 text-center text-uk-white">
        <h1 className="mb-2 text-gray-100 text-4xl font-bold">Student Testimonials</h1>
        <p className="text-uk-navy-light">
          Read what students have shared about their learning.
        </p>
      </section>
      <Testimonials />
      <section className="bg-uk-white px-4 py-16 text-center">
        <h2 className="mb-4 text-2xl font-bold text-grey-900">
          Ready to work on your English?
        </h2>
        <Link
          href="/contact"
          className="inline-block rounded-md bg-uk-red px-8 py-3.5 font-semibold text-uk-white transition-colors hover:bg-uk-red-dark"
        >
          Book a Free Consultation
        </Link>
      </section>
    </>
  );
}
