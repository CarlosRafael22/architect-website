import Image from "next/image";
import { Brain, Activity, Smile, Plus, Equal } from "lucide-react";

export default function NeuroarchitectureSection() {
  return (
    <section id="metodologia" className="gray-section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Método Casa Viva
          </h2>
          <p className="text-lg text-gray-700">
            {/*             Neuroarchitecture is the intersection of neuroscience and
            architecture, designing spaces based on how our brains perceive and
            respond to our surroundings. This evidence-based approach creates
            environments that positively impact your well-being, cognitive
            function, and emotional state. */}
            {/*             Combinando Neuroarquitetura e Psicologia Ambiental: Ambientes que
            Transformam Nosso ambiente impacta diretamente nossas emoções e
            bem-estar. */}
            Nosso ambiente impacta diretamente nossas emoções e bem-estar. Por
            isso, nossos projetos unem Neuroarquitetura e Psicologia Ambiental
            para criar espaços que promovem saúde, equilíbrio e qualidade de
            vida.
            {/*             A Neuroarquitetura estuda como o ambiente
            influencia o cérebro e emoções, utilizando iluminação, biofilia e
            organização espacial para estimular bem-estar e produtividade. Já a
            Psicologia Ambiental analisa como cores, texturas e disposição dos
            móveis afetam nosso comportamento e emoções. Ao integrar essas
            áreas, desenvolvo projetos que vão além da estética, criando
            ambientes intencionais que acolhem, estimulam e transformam. Seja
            para residências, escritórios ou espaços comerciais, meu objetivo é
            proporcionar conforto e conexão entre as pessoas e os espaços que
            habitam. Quer transformar seu ambiente? Entre em contato! */}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-20">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4 text-primary">
              <Brain size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Neuroarquitetura</h3>
            <p className="text-gray-600">
              Estuda como o ambiente influencia o cérebro e emoções, utilizando
              iluminação, biofilia e organização espacial para estimular
              bem-estar e produtividade.
            </p>
          </div>
          <div className="flex items-center justify-center text-primary">
            <div className="background-white p-4 rounded-full shadow-md">
              <Plus size={20} />
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4 text-primary">
              <Activity size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Psicologia Ambiental</h3>
            <p className="text-gray-600">
              Analisa como cores, texturas e disposição dos móveis afetam nosso
              comportamento e emoções.
            </p>
          </div>
          <div className="flex items-center justify-center text-primary">
            <div className="background-white p-4 rounded-full shadow-md">
              <Equal size={20} />
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4 text-primary">
              <Smile size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Método Casa Viva</h3>
            <p className="text-gray-600">
              Ao integrar essas áreas, desenvolvo projetos que vão além da
              estética, criando ambientes intencionais que acolhem, estimulam e
              transformam.
              {/*               Seja para residências, escritórios ou espaços
              comerciais, meu objetivo é proporcionar conforto e conexão entre
              as pessoas e os espaços que habitam. */}
            </p>
          </div>
        </div>
        <div>
          <div className="bg-white p-6 rounded-lg relative">
            <div className="absolute -top-8 left-6 w-16 h-16 rounded-full overflow-hidden border-4 border-white">
              <Image
                src="/images/thereza_face.png"
                alt={"author"}
                fill
                className="object-cover"
              />
            </div>
            <div className="pl-0 pt-8 md:pt-0 md:pl-16">
              <p className="text-gray-700 italic mb-2">
                "Se você busca um lar que reflita quem você é e o que precisa
                sentir, estou aqui para te ajudar a construir esse lugar."
              </p>
              <a
                className="text-sm underline underline-offset-4 font-medium hover:text-primary transition-colors"
                href="#sobre"
              >
                Thereza, sua futura arquiteta
              </a>
            </div>
            {/* <div className="absolute -bottom-4 right-6 bg-primary text-white rounded-full p-2 shadow-lg cursor-pointer">
                <Play size={20} />
              </div> */}
          </div>
        </div>

        {/* Case Study */}
        {/*         <div className="bg-white rounded-xl overflow-hidden shadow-lg">
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
        </div> */}
      </div>
    </section>
  );
}
