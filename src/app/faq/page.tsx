import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const questions = [
  {
    question: "Who are the lessons for?",
    answer:
      "Lessons are for adults who want to use English more confidently in everyday conversations, at work, or while travelling. We will talk about your current level and goals before deciding whether we are a good fit.",
  },
  {
    question: "How do online lessons work?",
    answer:
      "Lessons take place online and are built around your goals. We spend time speaking, practising useful language, and reviewing what will help you make progress between sessions.",
  },
  {
    question: "Do I need to buy a package?",
    answer:
      "No. Start with a free consultation to discuss what you need. There is no package to buy before we have talked.",
  },
  {
    question: "Can lessons focus on my job?",
    answer:
      "Yes. We can practise situations such as meetings, presentations, emails, and interviews, using topics and language that are relevant to your work.",
  },
  {
    question: "Can you help with pronunciation?",
    answer:
      "Yes. We can work on clear pronunciation, listening for specific sounds, and speaking so that other people can understand you more easily.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send a message through the contact page or WhatsApp. We can arrange a free consultation and talk through your goals and schedule.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-uk-navy px-4 py-16 text-center text-uk-white">
        <h1 className="mb-2 text-4xl font-bold">Frequently Asked Questions</h1>
        <p className="text-uk-navy-light">
          A few helpful details before you get started.
        </p>
      </section>

      <section className="bg-uk-white px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="divide-y divide-grey-200">
            {questions.map(({ question, answer }) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-grey-900 marker:hidden">
                  {question}
                  <span
                    aria-hidden="true"
                    className="text-xl text-uk-navy transition-transform group-open:rotate-45"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </span>
                </summary>
                <p className="pt-4 leading-relaxed text-grey-600">{answer}</p>
              </details>
            ))}
          </div>

          <p className="mt-10 text-center text-grey-600">
            Still have a question?{" "}
            <Link
              href="/contact"
              className="font-semibold text-uk-navy hover:underline"
            >
              Get in touch
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
