import Link from "next/link";
import { Home, Building, Sparkles, Users, Hammer } from "lucide-react";
import ServiceCard from "./ServiceCard/ServiceCard";

export default function ServicesSection() {
  return (
    <section id="servicos" className="gray-section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meus serviços</h2>
          <p className="text-lg text-gray-700">
            Ofereço serviços de arquitetura e design baseados em princípios da
            neurociência, sob medida para diferentes tipos de espaços e
            necessidades de clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard
            icon={<Building className="text-primary" size={24} />}
            title="Projeto arquitetônico"
            description="Planejamento completo para construção ou reforma, abrangendo estrutura, distribuição dos espaços, fachadas e elementos técnicos essenciais para uma execução eficiente."
            idealFor="Quem deseja construir do zero ou reformar um imóvel."
          />

          <ServiceCard
            icon={<Home className="text-primary" size={24} />}
            title="Consultoria de interiores"
            description="Solução rápida e objetiva para quem busca melhorias no ambiente sem a necessidade de um projeto detalhado. Oferece orientações estratégicas sobre layout, cores, móveis e decoração, otimizando a produtividade e o conforto."
            idealFor="Casas, apartamentos, startups, empresas estabelecidas, espaços de coworking e clientes que buscam ajustes pontuais em seus lares ou empresas."
          />

          <ServiceCard
            icon={<Sparkles className="text-primary" size={24} />}
            title="Decoração e Ambientação"
            description="Finalizamos seu ambiente e deixamos pronto para morar! Atraves da decoração minuciosa e feita com afetividade, selecionamos as melhores opções de objetos para seu espaço."
            idealFor="Pessoas muito ocupadas que desejam receber seu espaço totalmente finalizado, sem ter que ir em lojas para escolher almofadas, tapetes e etc."
          />

          <ServiceCard
            icon={<Hammer className="text-primary" size={24} />}
            title="Visitas Técnicas em Obra"
            description="Acompanhamento especializado no local para garantir que cada detalhe do projeto seja executado corretamente. Aplicação de princípios de design e neurociência para criar espaços diferenciados e de alto valor."
            idealFor="Famílias, pessoas que querem o apoio do profissional e quem busca um projeto bem executado."
          />
        </div>

        {/*         <div className="text-center">
          <Link
            href="#qualification"
            className="inline-flex items-center justify-center py-3 px-8 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Encontre o melhor serviço para você
          </Link>
        </div> */}
      </div>
    </section>
  );
}
