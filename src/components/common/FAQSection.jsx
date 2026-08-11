const faqs = [
  {
    question: "What services does RA Marketer offer?",
    answer:
      "RA Marketer offers B2B lead generation, demand generation, content syndication, account based marketing, email marketing, and appointment setting services.",
  },
  {
    question: "Who does RA Marketer work with?",
    answer:
      "RA Marketer helps B2B companies, SaaS businesses, technology companies, and IT organizations generate qualified sales opportunities.",
  },
  {
    question: "How does RA Marketer generate B2B leads?",
    answer:
      "RA Marketer uses targeted B2B lead generation, demand generation, content syndication, account based marketing, email marketing, and appointment setting strategies.",
  },
  {
    question:
      "Can RA Marketer help technology companies generate qualified leads?",
    answer:
      "Yes. RA Marketer provides B2B marketing and lead generation solutions designed to help technology and SaaS companies reach relevant decision-makers and generate qualified sales opportunities.",
  },
];

const FAQSection = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="relative overflow-hidden px-6 py-24 bg-black">
      {/* FAQ Schema */}
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            FAQ
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            Everything you need to know about RA Marketer and our B2B marketing
            solutions.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.05]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left text-base font-semibold text-white sm:px-7 sm:py-6 sm:text-lg">
                <span>{faq.question}</span>

                {/* Plus Icon */}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl font-light text-gray-400 transition-all duration-300 group-open:rotate-45 group-open:border-blue-500/40 group-open:bg-blue-500/10 group-open:text-blue-400">
                  +
                </span>
              </summary>

              <div className="px-6 pb-6 sm:px-7">
                <div className="h-px bg-white/5" />

                <p className="pt-5 text-sm leading-7 text-gray-400 sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
