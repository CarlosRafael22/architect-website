import Image from "next/image";
import { Brain, Activity, Smile } from "lucide-react";

export default function NeuroarchitectureSection() {
  return (
    <section id="neuroarchitecture" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What is Neuroarchitecture?
          </h2>
          <p className="text-lg text-gray-700">
            Neuroarchitecture is the intersection of neuroscience and
            architecture, designing spaces based on how our brains perceive and
            respond to our surroundings. This evidence-based approach creates
            environments that positively impact your well-being, cognitive
            function, and emotional state.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-20">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4 text-primary">
              <Brain size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Cognitive Enhancement
            </h3>
            <p className="text-gray-600">
              Spaces designed to enhance focus, memory, and creative thinking
              through careful consideration of lighting, acoustics, and spatial
              organization.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4 text-primary">
              <Activity size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Physical Well-being</h3>
            <p className="text-gray-600">
              Environments that promote healthy behavior, reduce stress, and
              support circadian rhythms through thoughtful architectural
              decisions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4 text-primary">
              <Smile size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Emotional Impact</h3>
            <p className="text-gray-600">
              Spaces that evoke positive emotional responses through carefully
              selected colors, textures, proportions, and connections to nature.
            </p>
          </div>
        </div>

        {/* Case Study */}
        <div className="bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-full w-full">
                <Image
                  src="https://kzmofiv4xhoyqd3ignlm.lite.vusercontent.net/placeholder.svg?height=800&width=800"
                  alt="Before and after transformation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-10">
              <span className="text-sm font-medium text-primary uppercase">
                Case Study
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4">
                Corporate Office Transformation
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Before:</h4>
                  <p className="text-gray-600">
                    Traditional office layout with poor lighting, minimal
                    natural elements, and high noise levels. Employee surveys
                    showed high stress levels and difficulty concentrating.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Neuroarchitecture Solution:</h4>
                  <p className="text-gray-600">
                    Redesigned with biophilic elements, acoustic treatments,
                    circadian lighting, and varied work environments based on
                    task requirements.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Results:</h4>
                  <p className="text-gray-600">
                    28% increase in reported productivity, 33% reduction in sick
                    days, and significantly higher employee satisfaction scores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
