// src/app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faBriefcase,
  faComments,
  faGraduationCap,
  faMicrophone,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "About Lilian Isindu | English With Lilian",
  description:
    "Meet Lilian Isindu — 15 years teaching English as a foreign language to students across Asia, Europe, South America, and Africa.",
};

const approach = [
  { value: "15", label: "Years teaching" },
  { value: "4", label: "Continents" },
  { value: "1:1", label: "Personal lessons" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-uk-navy py-16 text-center text-uk-white">
        <div className="container-custom">
          <h1 className="mb-2 text-gray-100 text-4xl font-bold">About Lilian Isindu</h1>
          <p className="text-grey-300">15 years of helping learners speak English with confidence</p>
        </div>
      </section>

      {/* Main about section */}
      <section className="bg-uk-white py-20">
        <div className="container-custom grid items-center gap-12 md:grid-cols-2">
          <Image
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
            alt="Lilian Isindu, English tutor"
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
              I have <strong className="text-uk-navy">15 years of experience</strong>{" "}
              teaching English as a foreign language. Over the years, I&apos;ve worked with
              students from countries across <strong>Asia, Europe, South America, and
              West and Central Africa</strong> — each with different goals, backgrounds,
              and learning styles.
            </p>

            <p className="mb-4 leading-relaxed text-grey-600">
              My job is to help you overcome the challenges that hold learners back:
              speaking with confidence, understanding fast speech, reading and writing
              clearly, getting grammar right, and building a vocabulary you can actually
              use.
            </p>

            <p className="mb-8 leading-relaxed text-grey-600">
              Whether you need English for work, study, travel, or personal growth —
              you can learn at the comfort of your <strong>home or office</strong>.
              Lessons are one-to-one, online, and built entirely around you.
            </p>

            {/* Stats row */}
            <div className="mb-8 grid grid-cols-3 gap-4 border-y border-grey-200 py-6">
              {approach.map(({ value, label }) => (
                <div key={label}>
                  <span className="block text-2xl font-bold text-uk-navy">{value}</span>
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

      {/* Specialties */}
      <section className="bg-grey-200 py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-uk-navy text-center mb-4">
            What I Help You With
          </h2>
          <p className="text-center text-grey-600 mb-12 max-w-2xl mx-auto">
            Every learner is different. These are the areas where most of my students
            see the fastest improvement.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {[
              { icon: faComments, title: "Speaking & Listening", desc: "Feel confident in real conversations. Understand fast, natural English." },
              { icon: faBookOpen, title: "Reading", desc: "Read fluently and understand written English with confidence." },
              { icon: faPenToSquare, title: "Writing & Grammar", desc: "Write clearly, improve your grammar, and organise your ideas." },
              { icon: faGraduationCap, title: "IELTS & TOEFL Prep", desc: "Targeted practice for the score you need — study, work, or immigration." },
              { icon: faBriefcase, title: "Professional English", desc: "Meetings, emails, presentations, and interviews in international workplaces." },
              { icon: faMicrophone, title: "Pronunciation", desc: "Speak clearly the first time. Reduce your accent without losing your voice." },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 border border-grey-200 hover:shadow-md transition-shadow"
              >
                <FontAwesomeIcon
                  icon={s.icon}
                  aria-hidden="true"
                  className="mb-3 text-3xl text-uk-red"
                />
                <h3 className="font-bold text-lg text-uk-navy mb-2">{s.title}</h3>
                <p className="text-sm text-grey-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}