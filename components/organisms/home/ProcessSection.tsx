"use client";

// import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import ProcessStep from "./ProcessStep/ProcessStep";

const processSteps = [
  {
    number: "01",
    title: "Briefing e avaliação",
    description:
      "Conversaremos sobre seus objetivos, necessidades e pontos problemáticos atuais. Avaliarei como seu espaço atual pode estar impactando seu bem-estar. Avaliarei também como o espaço deve se adequar funcionalmente ao seu dia-a-dia, necessidades físicas, emocionais e seus gostos estéticos para o espaço.",
    duration: "1 reunião, entre 2 a 3 horas.",
    investment: "Consulta inicial gratuita",
  },
  {
    number: "02",
    title: "Desenvolvimento de conceito e planta de layout",
    description:
      "Criarei moodboard conceito com base em princípios de Neuroarquitetura que atendam às suas necessidades específicas, incorporando iluminação, acústica, layout espacial, materiais e aromas. Além disso, farei a planta de layout com locação dos ambientes e/ou móveis.",
    duration: "Personalizável",
    investment: "$2,000 - $5,000 depending on project scope",
  },
  {
    number: "03",
    title: "Visualização realista / 3D",
    description:
      "Experiencie seu futuro espaço por meio de renderizações 3D detalhadas, por meio de imagens e vídeos e forneça feedback para refinamentos. Ajustaremos o design com base em suas considerações sobre o que foi apresentado.",
    duration: "2-3 weeks",
    investment: "Incluído no pacote de design",
  },
  {
    number: "04",
    title: "Projeto Executivo e documentação detalhados para a obra",
    description:
      "Criarei documentos de construção, especificações de materiais e plantas de iluminação, elétrica, hidráulica, entre outras, para que os executores possam implementar com precisão.",
    duration: "4-6 weeks",
    investment: "$5,000 - $15,000 depending on project complexity",
  },
  {
    number: "05",
    title: "Construcão e Implementação",
    description:
      "Trabalharei junto com seus contratantes para garantir que o design seja implementado corretamente, fazendo visitas ao local e fornecendo orientação durante o processo de construção.",
    duration: "Depende do escopo do projeto",
    investment: "$3,000 - $10,000 for implementation oversight",
  },
];

export default function ProcessSection() {
  return (
    <section id="fases" className="white-section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Fases do projeto
          </h2>
          <p className="text-lg text-gray-700">
            O meu processo de projetar é baseado em evidências científicas para
            garantir que seu espaço seja não apenas bonito, mas também
            cientificamente otimizado para o bem-estar e a função.
          </p>
        </div>

        <div className="relative">
          <div className="relative">
            <div
              className="overflow-x-auto pb-8 snap-x snap-mandatory"
              id="process-carousel"
            >
              <div className="relative flex space-x-6 min-w-max">
                {processSteps.map((step, index) => (
                  <div key={index} className="w-full md:w-auto snap-start">
                    <ProcessStep {...step} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <button
              className="bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all"
              onClick={() => {
                const carousel = document.getElementById("process-carousel");
                if (carousel) {
                  carousel.scrollLeft -= carousel.offsetWidth;
                }
              }}
            >
              <ArrowLeft size={24} className="text-gray-700" />
            </button>
            <button
              className="bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-all"
              onClick={() => {
                const carousel = document.getElementById("process-carousel");
                if (carousel) {
                  carousel.scrollLeft += carousel.offsetWidth;
                }
              }}
            >
              <ArrowRight size={24} className="text-gray-700" />
            </button>
          </div>
        </div>

        {/*         <div className="text-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center py-3 px-8 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Quer saber como o seu espaço pode ser transformado?{" "}
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div> */}
      </div>
    </section>
  );
}
