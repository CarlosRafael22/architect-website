"use client";

import { useState } from "react";
import CaseStudy from "./CaseStudy/CaseStudy";

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("harmonia");

  const categories = [
    { name: "Apartamento Harmonia", id: "harmonia" },
    { name: "Apartamento Raízes", id: "raizes" },
    { name: "Casa Palmeiras", id: "palmeiras" },
  ];

  const projects = [
    {
      id: 1,
      category: "harmonia",
      title: "Apartamento Harmonia",
      description:
        "Esse projeto foi desenvolvido para criar uma atmosfera de calma, equilíbrio e conexão com a natureza — um verdadeiro refúgio de tranquilidade dentro de casa.",
      problem:
        "A cliente buscava um espaço que proporcionasse bem-estar emocional e acolhimento, que refletisse também seu amor por plantas mas sem pesar no ambiente. Também queria um apartamento funcional, e que cada cantinho fosse bem aproveitado.",
      solution:
        "Trabalhamos com uma paleta de tons suaves, iluminação acolhedora e materiais naturais. Incorporamos formas orgânicas, que são visualmente leves e menos nocivas ao cérebro, favorecendo a sensação de relaxamento. Texturas e cores aconchegantes foram aplicadas em diversos elementos, criando um ambiente equilibrado e confortável. Na sala, também priorizamos a praticidade com móveis que aliam estética e funcionalidade, como a cristaleira, o móvel lateral e o canto alemão que funciona como baú.",
      result:
        "The family reported 40% better sleep quality and significantly increased family interaction time.",
      images: [
        "/images/portfolio/apto_alyne/apto_alyne5.jpg",
        "/images/portfolio/apto_alyne/apto_alyne2.jpg",
        "/images/portfolio/apto_alyne/apto_alyne3.jpg",
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
      category: "raizes",
      title: "Apartamento Raízes",
      description:
        "O Apartamento Raízes foi inspirado na natureza e no Design Biofílico, com o objetivo de promover bem-estar e despertar memórias afetivas por meio da Arquitetura.",
      problem:
        "A família queria um lar aconchegante, leve e que fosse funcional para o dia a dia. Desejavam também espaços clean, convidativos e que proporcionassem integração dos familiares que visitavam com frequência seu apartamento.",
      solution:
        "Utilizamos formas orgânicas e convidativas, tons terrosos e texturas amadeiradas para criar leveza e acolhimento. A mesa redonda convida à interação harmônica durante as refeições, além da integração entre varanda, sala e cozinha, induzindo a interação entre todos que estão no espaço. Por fim, um grande quadro remete ao local onde viveram há anos atrás, em conexão com a natureza.",
      result:
        "32% increase in team-reported creative output and 28% improvement in meeting productivity.",
      images: [
        "/images/portfolio/apto_raizes/sala_raizes.jpg",
        "/images/portfolio/apto_raizes/cozinha_raizes.jpg",
        "/images/portfolio/apto_raizes/quarto_raizes.jpg",
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
      category: "palmeiras",
      title: "Casa Palmeiras",
      description:
        "A Casa Palmeiras foi idealizada como um lar sereno, com atmosfera leve e convidativa, inspirada na natureza e no desejo de tranquilidade.",
      problem:
        "Os clientes queriam uma casa com base clara e limpa, que transmitisse leveza e sofisticação. Era importante para eles que o espaço refletisse essa sensação logo na entrada. Desejavam também uma boa área de lazer, para descansar aos finas de semana com a família.",
      solution:
        "Utilizamos tons claros como base e apostamos em texturas amadeiradas e elementos decorativos em tons terrosos para trazer aconchego e sofisticação. Um dos destaques é a fachada com duas palmeiras que, além do valor estético, criam sombra e um som natural relaxante. Essa conexão com a natureza é aproveitada na área de lazer no pavimento superior da casa, que agora conta com uma piscina e área gourmet.",
      result:
        "45% reduction in patient-reported anxiety levels and 22% improvement in staff satisfaction.",
      images: [
        "/images/portfolio/casa_palmares/fachada_palmeiras.jpg",
        "/images/portfolio/casa_palmares/gourmet_palmeiras.jpg",
        "/images/portfolio/casa_palmares/sala_palmeiras.jpg",
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
    <section id="portfolio" className="gray-section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Projetos em destaque
          </h2>
          {/*           <p className="text-lg text-gray-700">
            Explore meus projetos e veja o impacto que eles têm em pessoas.
          </p> */}
        </div>

        {/* Custom Tab Navigation */}
        <div className="flex flex-wrap justify-center space-x-2 mb-12 gap-4">
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
