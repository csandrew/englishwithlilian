// src/components/sections/ServicesList.tsx
import {
  faArrowRightLong,
  faBookOpen,
  faBriefcase,
  faGraduationCap,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const services = [
  {
    title: "Professional English",
    icon: faBriefcase,
    description:
      "Practise meetings, emails, presentations, and interviews for international workplaces.",
  },
  {
    title: "Pronunciation",
    icon: faMicrophone,
    description:
      "Speak clearly and confidently, and help others understand you the first time.",
  },
  {
    title: "IELTS & TOEFL Prep",
    icon: faGraduationCap,
    description:
      "Prepare for the reading, writing, listening, and speaking sections of your exam.",
  },
  {
    title: "Reading & Writing",
    icon: faBookOpen,
    description:
      "Read fluently, write clearly, and organise your ideas with confidence.",
  },
];

export default function ServicesList() {
  return (
    <section className="bg-uk-white py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mb-3 text-3xl font-bold text-grey-900">
          What are your learning goals?
        </h2>
        <p className="mb-12 text-grey-600">
          Choose an area that matches your goal — or combine a few.
        </p>

        {/* 
          FIXED: Changed to grid-cols-2 so it's always 2 columns on mobile.
          Also added smaller padding (p-5) on mobile, expanding to p-8 on larger screens.
        */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8 text-left xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-grey-200 bg-grey-50 p-5 sm:p-8 transition-shadow hover:shadow-md flex flex-col h-full"
            >
              <FontAwesomeIcon
                icon={service.icon}
                aria-hidden="true"
                className="mb-4 text-2xl text-uk-red"
              />
              <h3 className="mb-3 text-lg sm:text-xl font-bold">{service.title}</h3>
              <p className="mb-6 text-sm text-grey-600 grow">
                {service.description}
              </p>
              <Link
                href="/services"
                className="text-sm font-semibold text-uk-red hover:underline mt-auto"
              >
                Learn More{" "}
                <FontAwesomeIcon icon={faArrowRightLong} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}