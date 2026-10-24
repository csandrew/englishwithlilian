import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faComments,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Everyday English",
    icon: faComments,
    description:
      "Speak naturally about daily life and hold real conversations with confidence.",
  },
  {
    title: "Professional English",
    icon: faBriefcase,
    description:
      "Meetings, emails, presentations, and interviews in international workplaces.",
  },
  {
    title: "Pronunciation",
    icon: faMicrophone,
    description:
      "Speak clearly the first time. Fix the sounds that make people ask you to repeat.",
  },
];

export default function ServicesList() {
  return (
    <section className="py-20 bg-uk-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-grey-900 mb-3">What are your learning goals?</h2>
        <p className="text-grey-600 mb-12">Pick the area that matches your goal — or mix them</p>
        
        <div className="grid gap-8 text-left md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-grey-200 bg-grey-50 p-8 transition-shadow hover:shadow-md"
            >
              <FontAwesomeIcon
                icon={service.icon}
                aria-hidden="true"
                className="mb-4 text-2xl text-uk-red"
              />
              <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
              <p className="mb-6 text-sm text-grey-600">{service.description}</p>
              <Link
                href="/services"
                className="text-sm font-semibold text-uk-red hover:underline"
              >
                Learn More <span aria-hidden="true">&rarr;</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}