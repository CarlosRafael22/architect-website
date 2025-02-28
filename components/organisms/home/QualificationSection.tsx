"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";

export default function QualificationSection() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    stage: "",
    budget: "",
    importance: "",
  });

  const handleSelect = (question: string, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: answer,
    }));
    setStep((prev) => prev + 1);
  };

  const isQualified = () => {
    if (
      answers.stage === "ready" &&
      (answers.budget === "medium" || answers.budget === "high") &&
      (answers.importance === "important" ||
        answers.importance === "very-important")
    ) {
      return true;
    }
    return false;
  };

  return (
    <section id="qualification" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Is Neuroarchitecture Right for You?
          </h2>
          <p className="text-lg text-gray-700">
            Answer a few quick questions to determine if my approach is the
            right fit for your needs and goals.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            {step === 1 && (
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  What stage are you in?
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => handleSelect("stage", "exploring")}
                    className="w-full text-left px-6 py-4 rounded-lg bg-white border hover:border-primary transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span>Just exploring options</span>
                      <ChevronRight size={18} className="text-gray-400" />
                    </div>
                  </button>

                  <button
                    onClick={() => handleSelect("stage", "planning")}
                    className="w-full text-left px-6 py-4 rounded-lg bg-white border hover:border-primary transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span>Planning for the future</span>
                      <ChevronRight size={18} className="text-gray-400" />
                    </div>
                  </button>

                  <button
                    onClick={() => handleSelect("stage", "ready")}
                    className="w-full text-left px-6 py-4 rounded-lg bg-white border hover:border-primary transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span>Ready to start a project</span>
                      <ChevronRight size={18} className="text-gray-400" />
                    </div>
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  What is your budget range?
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => handleSelect("budget", "low")}
                    className="w-full text-left px-6 py-4 rounded-lg bg-white border hover:border-primary transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span>Under $25,000</span>
                      <ChevronRight size={18} className="text-gray-400" />
                    </div>
                  </button>

                  <button
                    onClick={() => handleSelect("budget", "medium")}
                    className="w-full text-left px-6 py-4 rounded-lg bg-white border hover:border-primary transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span>$25,000 - $100,000</span>
                      <ChevronRight size={18} className="text-gray-400" />
                    </div>
                  </button>

                  <button
                    onClick={() => handleSelect("budget", "high")}
                    className="w-full text-left px-6 py-4 rounded-lg bg-white border hover:border-primary transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span>$100,000+</span>
                      <ChevronRight size={18} className="text-gray-400" />
                    </div>
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h3 className="text-xl font-semibold mb-6">
                  How important is well-being in your space?
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() =>
                      handleSelect("importance", "somewhat-important")
                    }
                    className="w-full text-left px-6 py-4 rounded-lg bg-white border hover:border-primary transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span>Somewhat important</span>
                      <ChevronRight size={18} className="text-gray-400" />
                    </div>
                  </button>

                  <button
                    onClick={() => handleSelect("importance", "important")}
                    className="w-full text-left px-6 py-4 rounded-lg bg-white border hover:border-primary transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span>Important</span>
                      <ChevronRight size={18} className="text-gray-400" />
                    </div>
                  </button>

                  <button
                    onClick={() => handleSelect("importance", "very-important")}
                    className="w-full text-left px-6 py-4 rounded-lg bg-white border hover:border-primary transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span>Very important - it's a top priority</span>
                      <ChevronRight size={18} className="text-gray-400" />
                    </div>
                  </button>
                </div>
              </div>
            )}

            {step === 4 && isQualified() && (
              <div className="text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Great Match!</h3>
                <p className="text-gray-700 mb-8">
                  Based on your answers, my neuroarchitecture services appear to
                  be a great fit for your needs. Let's schedule a consultation
                  to discuss how I can help transform your space.
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center w-full py-3 px-6 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
                >
                  Book a Free 15-Minute Discovery Call
                </Link>
              </div>
            )}

            {step === 4 && !isQualified() && (
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">
                  Thanks for Your Interest
                </h3>
                <p className="text-gray-700 mb-8">
                  Based on your answers, we might not be the perfect fit right
                  now. However, I'd be happy to provide some resources to help
                  you learn more about neuroarchitecture and how it could
                  benefit you in the future.
                </p>
                <div className="space-y-4">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center w-full py-3 px-6 bg-white border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Subscribe to My Newsletter
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center w-full py-3 px-6 bg-white border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
                  >
                    Download Free Guide
                  </Link>
                </div>
              </div>
            )}

            {/* Progress Indicators */}
            {step < 4 && (
              <div className="flex items-center justify-center mt-8">
                <div
                  className={`h-2 w-2 rounded-full mx-1 ${step === 1 ? "bg-primary" : "bg-gray-300"}`}
                ></div>
                <div
                  className={`h-2 w-2 rounded-full mx-1 ${step === 2 ? "bg-primary" : "bg-gray-300"}`}
                ></div>
                <div
                  className={`h-2 w-2 rounded-full mx-1 ${step === 3 ? "bg-primary" : "bg-gray-300"}`}
                ></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
