// src/app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Lilian | English With Lilian",
  description:
    "Meet Lilian — an online English tutor helping intermediate learners become confident, advanced speakers.",
};

const approach = [
  { value: "1:1", label: "Personal lessons" },
  { value: "Live", label: "Online sessions" },
  { value: "Real", label: "Everyday English" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-uk-navy py-16 text-center text-uk-white">
        <div className="container-custom">
          <h1 className="mb-2 text-4xl font-bold">About Lilian</h1>
          <p className="text-grey-300">The person behind the lessons</p>
        </div>
      </section>

      {/* Main about section */}
      <section className="bg-uk-white py-20">
        <div className="container-custom grid items-center gap-12 md:grid-cols-2">
          <Image
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
            alt="Lilian, online English tutor"
            className="w-full rounded-2xl shadow-lg"
            width={800}
            height={1000}
            unoptimized
          />
          <div>
            <h2 className="mb-6 text-3xl font-bold text-grey-900">
              Hi, I&apos;m Lilian
            </h2>

            <p className="mb-4 leading-relaxed text-grey-600">
              I&apos;m an online English tutor helping beginners and intermediate learners
              become confident, advanced speakers. I work one-to-one with
              adults and professionals who know the basics but want to feel
              more comfortable in real conversations.
            </p>

            <p className="mb-4 leading-relaxed text-grey-600">
              Lessons are live sessions built around your job, your goals, and
              the situations you need English for — interviews, meetings,
              travel, or everyday conversation.
            </p>

            <p className="mb-4 leading-relaxed text-grey-600">
              I know how frustrating it is to study for years and still feel
              stuck. That&apos;s why I&apos;ve built a system that speeds up your
              progress and makes the language stay with you for good.
            </p>

            <p className="mb-8 leading-relaxed text-grey-600">
              I make complicated grammar simple and teach real British English
              in a fun, practical way — helping you build confidence that
              follows you out of the classroom.
            </p>

            {/* Stats row */}
            <div className="mb-8 grid grid-cols-3 gap-4 border-y border-grey-200 py-6">
              {approach.map(({ value, label }) => (
                <div key={label}>
                  <span className="block text-2xl font-bold text-uk-navy">
                    {value}
                  </span>
                  <span className="text-sm text-grey-500">{label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-block rounded-md bg-uk-red px-8 py-3.5 font-semibold text-uk-white transition-colors hover:bg-uk-red/90"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}