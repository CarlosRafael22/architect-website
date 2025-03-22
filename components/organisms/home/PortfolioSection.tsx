"use client";

import { useState } from "react";
import CaseStudy from "./CaseStudy/CaseStudy";

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("residential");

  const categories = [
    { name: "Residential", id: "residential" },
    { name: "Commercial", id: "commercial" },
    { name: "Renovations", id: "renovations" },
  ];

  const projects = [
    {
      id: 1,
      category: "residential",
      title: "Cognitive Wellness Home",
      description:
        "A residence designed to support family connection, reduce stress, and improve sleep quality through neuroarchitecture principles.",
      problem:
        "A family of four struggled with a disconnected home layout that created stress and hindered quality time together.",
      solution:
        "Redesigned the space with open communal areas, cognitive restoration zones, and circadian lighting systems.",
      result:
        "The family reported 40% better sleep quality and significantly increased family interaction time.",
      images: [
        "https://kzmofiv4xhoyqd3ignlm.lite.vusercontent.net/placeholder.svg?height=600&width=800",
        "https://kzmofiv4xhoyqd3ignlm.lite.vusercontent.net/placeholder.svg?height=600&width=800",
        "https://kzmofiv4xhoyqd3ignlm.lite.vusercontent.net/placeholder.svg?height=600&width=800",
      ],
      before:
        "https://kzmofiv4xhoyqd3ignlm.lite.vusercontent.net/placeholder.svg?height=500&width=700",
      after:
        "https://kzmofiv4xhoyqd3ignlm.lite.vusercontent.net/placeholder.svg?height=500&width=700",
      testimonial: {
        quote:
          "Our home now feels like it's actively supporting our wellbeing. The difference in how we feel and interact is remarkable.",
        author: "Jordan M., Homeowner",
        image:
          "https://kzmofiv4xhoyqd3ignlm.lite.vusercontent.net/placeholder.svg?height=100&width=100",
      },
    },
    {
      id: 2,
      category: "commercial",
      title: "Creative Agency Headquarters",
      description:
        "An office designed to enhance creativity, collaboration, and focus for a growing digital agency.",
      problem:
        "The agency struggled with a conventional office layout that hindered creativity and caused frequent distractions.",
      solution:
        "Created a neuroscience-informed workspace with varied environments optimized for different cognitive tasks.",
      result:
        "32% increase in team-reported creative output and 28% improvement in meeting productivity.",
      images: [
        "https://kzmofiv4xhoyqd3ignlm.lite.vusercontent.net/placeholder.svg?height=600&width=800",
        "https://kzmofiv4xhoyqd3ignlm.lite.vusercontent.net/placeholder.svg?height=600&width=800",
        "https://kzmofiv4xhoyqd3ignlm.lite.vusercontent.net/placeholder.svg?height=600&width=800",
      ],
      before:
        "https://kzmofiv4xhoyqd3ignlm.lite.vusercontent.net/placeholder.svg?height=500&width=700",
      after:
        "https://kzmofiv4xhoyqd3ignlm.lite.vusercontent.net/placeholder.svg?height=500&width=700",
      testimonial: {
        quote:
          "Our team is more energized, more creative, and more productive since moving into our new headquarters.",
        author: "Sarah L., Creative Director",
        image:
          "https://kzmofiv4xhoyqd3ignlm.lite.vusercontent.net/placeholder.svg?height=100&width=100",
      },
    },
    {
      id: 3,
      category: "renovations",
      title: "Wellness Clinic Renovation",
      description:
        "A healthcare space transformed to reduce patient anxiety and support healing through environmental design.",
      problem:
        "A medical clinic with high reported patient anxiety and a clinical atmosphere that didn't support healing.",
      solution:
        "Renovated with biophilic design elements, natural materials, optimized acoustics, and thoughtful spatial flow.",
      result:
        "45% reduction in patient-reported anxiety levels and 22% improvement in staff satisfaction.",
      images: [
        "https://kzmofiv4xhoyqd3ignlm.lite.vusercontent.net/placeholder.svg?height=600&width=800",
        "https://kzmofiv4xhoyqd3ignlm.lite.vusercontent.net/placeholder.svg?height=600&width=800",
        "https://kzmofiv4xhoyqd3ignlm.lite.vusercontent.net/placeholder.svg?height=600&width=800",
      ],
      before:
        "https://kzmofiv4xhoyqd3ignlm.lite.vusercontent.net/placeholder.svg?height=500&width=700",
      after:
        "https://kzmofiv4xhoyqd3ignlm.lite.vusercontent.net/placeholder.svg?height=500&width=700",
      testimonial: {
        quote:
          "Our patients frequently comment on how calming our clinic feels. We've seen measurable improvements in patient outcomes.",
        author: "Dr. Emily R., Clinic Director",
        image:
          "https://kzmofiv4xhoyqd3ignlm.lite.vusercontent.net/placeholder.svg?height=100&width=100",
      },
    },
  ];

  // Filter projects by selected category
  const filteredProjects = projects.filter(
    (p) => p.category === selectedCategory
  );

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Portfolio & Case Studies
          </h2>
          <p className="text-lg text-gray-700">
            Explore my neuroscience-informed architectural projects and see the
            measurable impact they've had on people's wellbeing, productivity,
            and happiness.
          </p>
        </div>

        {/* Custom Tab Navigation */}
        <div className="flex flex-wrap justify-center space-x-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg text-sm font-medium focus:outline-none ${
                selectedCategory === category.id
                  ? "bg-primary text-white shadow"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Display */}
        <div className="space-y-20">
          {filteredProjects.map((project) => (
            <CaseStudy {...project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
