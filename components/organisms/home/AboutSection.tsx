import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="sobre" className="white-section">
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
                Sou apaixonada por criar espaços que vão além da estética,
                ambientes que acolhem, equilibram e transformam a vida de quem
                os habitam. Acredito no poder dos espaços para influenciar
                nossas emoções, bem-estar e qualidade de vida. Por isso, meu
                trabalho une Arquitetura, Ciência e sensibilidade para criar
                experiências autênticas e cheias de propósito.
              </p>

              <p className="text-lg text-gray-700">
                Minha conexão com a Neuroarquitetura começou muito antes de
                conhecer esse nome. Sempre fui apaixonada por autoconhecimento,
                psicologia e desenvolvimento pessoal. Ao longo da minha
                trajetória na Arquitetura, sentia falta de um propósito mais
                profundo e queria criar espaços que realmente transformassem a
                vida das pessoas.
              </p>

              <p className="text-lg text-gray-700">
                Quando descobri a Neuroarquitetura entendi que era possível unir
                minhas duas paixões: o design e o entendimento do ser humano.
                Através dela, encontrei um caminho para projetar ambientes que
                acolhem, equilibram, curam e promovem bem-estar.
              </p>

              <p className="text-lg text-gray-700">
                Hoje, desenvolvo projetos com alma, propósito e a certeza de que
                os espaços têm o poder de impactar positivamente quem os
                habitam.
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
