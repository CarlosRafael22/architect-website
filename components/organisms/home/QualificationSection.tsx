"use client";

import { useState } from "react";
import Question from "@/components/molecules/home/Question/Question";
import QualificationSuccessful from "@/components/molecules/home/QualificationSuccessful/QualificationSuccessful";
import QualificationUnsuccessful from "@/components/molecules/home/QualificationUnsuccessful/QualificationUnsuccessful";

const questions = [
  {
    id: "stage",
    title: "What stage are you in?",
    answers: [
      {
        id: "exploring",
        text: "Just exploring options",
      },
      {
        id: "planning",
        text: "Planning for the future",
      },
      {
        id: "ready",
        text: "Ready to start a project",
      },
    ],
  },
  {
    id: "budget",
    title: "What is your budget range?",
    answers: [
      {
        id: "low",
        text: "Under $25,000",
      },
      {
        id: "medium",
        text: "$25,000 - $100,000",
      },
      {
        id: "high",
        text: "$100,000+",
      },
    ],
  },
  {
    id: "importance",
    title: "How important is well-being in your space?",
    answers: [
      {
        id: "somewhat-important",
        text: "Somewhat important",
      },
      {
        id: "important",
        text: "Important",
      },
      {
        id: "very-important",
        text: "Very important - it's a top priority",
      },
    ],
  },
];

export default function QualificationSection() {
  const [step, setStep] = useState(0);
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

  const getQualificationResult = () => {
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

  console.log("STATE: ", step, answers);
  const isQualified = getQualificationResult();
  const isAnsweringQuestionnaire = step < questions.length;
  const hasAnsweredQuestionnaire = step === questions.length;

  return (
    <section id="qualificacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A Metodologia Casa Viva é para você?
          </h2>
          <p className="text-lg text-gray-700">
            Responda a algumas perguntas rápidas para determinar se minha
            abordagem é a mais adequada às suas necessidades.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            {isAnsweringQuestionnaire && (
              <Question
                id={questions[step].id}
                title={questions[step].title}
                answers={questions[step].answers}
                onAnswerSelect={(answer) =>
                  handleSelect(questions[step].id, answer)
                }
              />
            )}

            {hasAnsweredQuestionnaire && isQualified && (
              <QualificationSuccessful />
            )}

            {hasAnsweredQuestionnaire && !isQualified && (
              <QualificationUnsuccessful />
            )}

            {/* Progress Indicators */}
            {isAnsweringQuestionnaire && (
              <div className="flex items-center justify-center mt-8">
                <div
                  className={`h-2 w-2 rounded-full mx-1 ${step === 0 ? "bg-primary" : "bg-gray-300"}`}
                ></div>
                <div
                  className={`h-2 w-2 rounded-full mx-1 ${step === 1 ? "bg-primary" : "bg-gray-300"}`}
                ></div>
                <div
                  className={`h-2 w-2 rounded-full mx-1 ${step === 2 ? "bg-primary" : "bg-gray-300"}`}
                ></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
