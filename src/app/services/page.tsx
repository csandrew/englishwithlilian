import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faCheck,
  faComments,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Everyday English",
    icon: faComments,
    description:
      "Build confidence for everyday conversations, travel, and the situations where you want to express yourself naturally.",
    details: [
      "Practise real conversations",
      "Grow useful vocabulary",
      "Speak with more confidence",
    ],
  },
  {
    title: "Professional English",
    icon: faBriefcase,
    description:
      "Prepare for the communication you need at work, from contributing in meetings to presenting your ideas clearly.",
    details: [
      "Meetings and presentations",
      "Workplace conversations and emails",
      "Interview preparation",
    ],
  },
  {
    title: "Pronunciation",
    icon: faMicrophone,
    description:
      "Work on the sounds, rhythm, and clarity that help other people understand you the first time.",
    details: [
      "Identify sounds to practise",
      "Improve clarity and natural rhythm",
      "Build confidence speaking aloud",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-uk-navy px-4 py-16 text-center text-uk-white">
        <h1 className="mb-2 text-4xl font-bold">English Lessons for Your Goals</h1>
        <p className="mx-auto max-w-2xl text-uk-navy-light">
          Personalised one-to-one lessons focused on the English you want to use
          in real life.
        </p>
      </section>

      <section className="bg-uk-white px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-grey-200 bg-grey-50 p-8"
            >
              <FontAwesomeIcon
                icon={service.icon}
                aria-hidden="true"
                className="mb-4 text-3xl text-uk-red"
              />
              <h2 className="mb-3 text-xl font-bold text-grey-900">
                {service.title}
              </h2>
              <p className="mb-6 leading-relaxed text-grey-600">
                {service.description}
              </p>
              <ul className="space-y-2 text-sm text-grey-700">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faCheck}
                      aria-hidden="true"
                      className="text-uk-red"
                    />
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-grey-50 px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold text-grey-900">
            Lessons shaped around you
          </h2>
          <p className="mb-8 leading-relaxed text-grey-600">
            Start with a free consultation to talk about your goals, current
            level, and schedule. Together, we can decide what to focus on.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-uk-red px-8 py-3.5 font-semibold text-uk-white transition-colors hover:bg-uk-red-dark"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
