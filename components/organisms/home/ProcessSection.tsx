/* "use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

const processSteps = [
  {
    title: "Discovery Call & Assessment",
    description:
      "We'll discuss your goals, needs, and current pain points. I'll evaluate how your current space impacts cognitive function and emotional wellbeing.",
    duration: "1-2 weeks",
    investment: "Free initial consultation",
  },
  {
    title: "Concept Development",
    description:
      "I'll create initial designs based on neuroscience principles that address your specific needs, incorporating lighting, acoustics, spatial layout, and materials.",
    duration: "3-4 weeks",
    investment: "$2,000 - $5,000 depending on project scope",
  },
  {
    title: "3D Visualization & Refinement",
    description:
      "Experience your future space through detailed 3D renderings, and provide feedback for refinements. We'll fine-tune the design based on your input.",
    duration: "2-3 weeks",
    investment: "Included in design package",
  },
  {
    title: "Detailed Design & Documentation",
    description:
      "I'll create comprehensive construction documents, material specifications, and lighting plans that contractors can implement with precision.",
    duration: "4-6 weeks",
    investment: "$5,000 - $15,000 depending on project complexity",
  },
  {
    title: "Construction & Implementation",
    description:
      "I'll work closely with your contractors to ensure the design is implemented correctly, making site visits and providing guidance throughout the construction process.",
    duration: "Variable based on project scope",
    investment: "$3,000 - $10,000 for implementation oversight",
  },
];

export default function ProcessSection() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % processSteps.length);
  };

  const prevStep = () => {
    setCurrentStep(
      (prev) => (prev - 1 + processSteps.length) % processSteps.length
    );
  };

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Design Process
          </h2>
          <p className="text-lg text-gray-700">
            My evidence-based design process ensures your space is not only
            beautiful but also scientifically optimized for wellbeing and
            function.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={prevStep}
              className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft size={24} />
            </button>
            <h3 className="text-2xl font-bold text-primary">
              {processSteps[currentStep].title}
            </h3>
            <button
              onClick={nextStep}
              className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            >
              <ArrowRight size={24} />
            </button>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-sm mb-8">
            <p className="text-gray-700 mb-6">
              {processSteps[currentStep].description}
            </p>
            <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-600">
              <p>
                <strong>Duration:</strong> {processSteps[currentStep].duration}
              </p>
              <p>
                <strong>Investment:</strong>{" "}
                {processSteps[currentStep].investment}
              </p>
            </div>
          </div>

          <div className="flex justify-center space-x-2">
            {processSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-3 h-3 rounded-full ${index === currentStep ? "bg-primary" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center py-3 px-8 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Want to know how your space can be transformed?{" "}
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProcessStep from "./ProcessStep/ProcessStep";

const processSteps = [
  {
    number: "01",
    title: "Discovery Call & Assessment",
    description:
      "We'll discuss your goals, needs, and current pain points. I'll evaluate how your current space impacts cognitive function and emotional wellbeing.",
    duration: "1-2 weeks",
    investment: "Free initial consultation",
  },
  {
    number: "02",
    title: "Concept Development",
    description:
      "I'll create initial designs based on neuroscience principles that address your specific needs, incorporating lighting, acoustics, spatial layout, and materials.",
    duration: "3-4 weeks",
    investment: "$2,000 - $5,000 depending on project scope",
  },
  {
    number: "03",
    title: "3D Visualization & Refinement",
    description:
      "Experience your future space through detailed 3D renderings, and provide feedback for refinements. We'll fine-tune the design based on your input.",
    duration: "2-3 weeks",
    investment: "Included in design package",
  },
  {
    number: "04",
    title: "Detailed Design & Documentation",
    description:
      "I'll create comprehensive construction documents, material specifications, and lighting plans that contractors can implement with precision.",
    duration: "4-6 weeks",
    investment: "$5,000 - $15,000 depending on project complexity",
  },
  {
    number: "05",
    title: "Construction & Implementation",
    description:
      "I'll work closely with your contractors to ensure the design is implemented correctly, making site visits and providing guidance throughout the construction process.",
    duration: "Variable based on project scope",
    investment: "$3,000 - $10,000 for implementation oversight",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Design Process
          </h2>
          <p className="text-lg text-gray-700">
            My evidence-based design process ensures your space is not only
            beautiful but also scientifically optimized for wellbeing and
            function.
          </p>
        </div>

        <div className="relative mb-16">
          <div className="overflow-x-auto pb-8">
            <div className="flex space-x-6 min-w-max">
              {processSteps.map((step, index) => (
                <ProcessStep {...step} key={index} />
              ))}
            </div>
          </div>
          <div className="absolute left-0 right-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
        </div>

        <div className="text-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center py-3 px-8 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Quer saber como o seu espaço pode ser transformado?{" "}
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
