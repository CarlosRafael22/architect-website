"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FaqSection() {
  const faqs = [
    {
      question:
        "Why is Neuroarchitecture better than traditional architecture?",
      answer:
        "Traditional architecture often focuses primarily on aesthetics and basic functionality. Neuroarchitecture goes further by incorporating scientific research on how our brains respond to spaces, ensuring your environment actively supports your cognitive function, emotional wellbeing, and physical health. This evidence-based approach leads to spaces that not only look beautiful but measurably improve how you feel and function within them.",
    },
    {
      question: "How much does a Neuroarchitecture project cost?",
      answer:
        "Project costs vary based on scope, complexity, and size. Residential projects typically start at $30,000 for design fees, with commercial projects starting around $50,000. Implementation costs depend on the extent of changes needed. During our initial consultation, I'll provide a detailed estimate based on your specific needs and goals. While Neuroarchitecture may have a higher upfront investment than conventional design, the long-term benefits to wellbeing, productivity, and property value offer significant returns.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Design development typically takes 2-4 months, depending on project complexity and client feedback timeline. Construction and implementation can range from 3 months for a renovation to 12+ months for new construction. In our initial consultation, I'll provide a projected timeline based on your specific project scope and requirements.",
    },
    {
      question: "Do you work remotely or only locally?",
      answer:
        "I work with clients across the country and internationally. The initial phases work extremely well remotely with video consultations, digital design presentations, and virtual reality experiences. For construction phases, I partner with local contractors and make strategic site visits at key milestones. This approach allows me to serve clients regardless of location while ensuring the design integrity is maintained throughout implementation.",
    },
    {
      question: "Is there scientific evidence supporting Neuroarchitecture?",
      answer:
        "Yes, Neuroarchitecture is grounded in extensive research from fields including neuroscience, environmental psychology, and public health. Studies have documented how specific design elements affect cognitive function, stress levels, sleep quality, and overall wellbeing. For example, research from the Academy of Neuroscience for Architecture has demonstrated how lighting patterns affect circadian rhythms, how spatial configurations influence social interaction, and how exposure to nature impacts stress recovery. I incorporate this evidence base into every design decision.",
    },
    {
      question: "Can you work with my existing architect or designer?",
      answer:
        "Absolutely. I frequently collaborate with other design professionals, bringing specialized Neuroarchitecture expertise to complement their work. I can join your project at any stage, from initial concept development to reviewing and enhancing existing plans. These collaborations typically lead to exceptional outcomes, combining your existing team's vision with evidence-based strategies for supporting cognitive and emotional wellbeing.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700">
            Get answers to common questions about Neuroarchitecture and how it
            can transform your space and wellbeing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  className="w-full text-left p-6 focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">{faq.question}</h3>
                    <div>
                      {openIndex === index ? (
                        <ChevronUp className="h-5 w-5 text-primary" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </div>
                  </div>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg mb-6">
              Still have questions about how Neuroarchitecture can transform
              your space?
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center py-3 px-8 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
