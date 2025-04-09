import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-2/5">
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto md:mx-0">
              <Image
                src="/images/thereza_about.jpg"
                alt="Thereza Oliveira"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="w-full md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quem sou eu?
            </h2>

            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Oi, eu sou a Thereza Oliveira, especialista em Neuroarquitetura.
                Sou apaixonada por criar espaços que vão além da estética —
                ambientes que acolhem, equilibram e transformam a vida de quem
                os habita. Acredito no poder dos espaços para influenciar nossas
                emoções, bem-estar e qualidade de vida. Por isso, meu trabalho
                une design, ciência e sensibilidade para criar experiências
                autênticas e cheias de propósito.
              </p>

              <p className="text-lg text-gray-700 underline underline-offset-4 font-medium hover:text-primary transition-colors">
                Se você busca um lar que reflita quem você é e o que precisa
                sentir, estou aqui pra te ajudar a construir esse lugar.
              </p>

              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="italic text-gray-600">
                  "Architecture isn't just about creating beautiful spaces –
                  it's about crafting environments that enhance our cognitive
                  function, emotional wellbeing, and physical health. Every
                  design decision should be purposeful and evidence-based."
                </p>
              </div>

              <p className="text-lg text-gray-700">
                Minha conexão com a Neuroarquitetura começou muito antes de
                conhecer esse nome. Sempre fui apaixonada por autoconhecimento,
                psicologia e desenvolvimento pessoal. Ao longo da minha
                trajetória na Arquitetura, sentia falta de um propósito mais
                profundo — queria criar espaços que realmente transformassem a
                vida das pessoas.
              </p>

              <p className="text-lg text-gray-700">
                Foi quando descobri a Neuroarquitetura e entendi que era
                possível unir minhas duas paixões: o design e o ser humano.
                Através dela, encontrei um caminho para projetar ambientes que
                acolhem, equilibram, curam e promovem bem-estar. Hoje,
                desenvolvo projetos com alma, propósito e a certeza de que os
                espaços têm o poder de impactar positivamente quem os vive.
              </p>

              <p className="text-lg text-gray-700">
                Desde então, aplico esses princípios a cada projeto – desde
                casas residenciais até corporações – ajudando clientes a criar
                espaços que não apenas se parecem bonitos, mas também funcionam
                para apoiar o desempenho cognitivo, bem-estar emocional e saúde
                física.
              </p>

              {/*               <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-gray-100 px-4 py-2 rounded-full text-sm">
                  Arquitetura e Urbanismo, Faculdade Damas - Recife
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-full text-sm">
                  Master em Neuroarquitetura, IPOG
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-full text-sm">
                  5+ anos de experiência
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
