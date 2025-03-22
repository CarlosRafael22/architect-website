import Link from "next/link";
import { Home, Building, Sparkles, Users } from "lucide-react";
import ServiceCard from "./ServiceCard/ServiceCard";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meus serviços</h2>
          <p className="text-lg text-gray-700">
            I offer a range of specialized architectural services based on
            neuroscience principles, tailored to different space types and
            client needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <ServiceCard
            icon={<Home className="text-primary" size={24} />}
            title="Projeto de interiores ou arquitetônico"
            description="Transform your home into a space that supports mental wellbeing, better sleep, reduced stress, and enhanced family connection through evidence-based design."
            idealFor="Families, work-from-home professionals, wellness-focused individuals"
          />

          <ServiceCard
            icon={<Building className="text-primary" size={24} />}
            title="Consultoria de interiores"
            description="Create workspaces that boost productivity, creativity, and collaboration while reducing stress and fatigue through neuroscience-informed design strategies."
            idealFor="Startups, established companies, coworking spaces"
          />

          <ServiceCard
            icon={<Sparkles className="text-primary" size={24} />}
            title="Decoração / Ambientação"
            description="Transform existing spaces to better support cognitive function, emotional wellbeing, and physical health without complete rebuilds through targeted interventions."
            idealFor="Existing properties needing updates, budget-conscious clients"
          />

          <ServiceCard
            icon={<Users className="text-primary" size={24} />}
            title="Visitas técnicas em obras"
            description="Integrate neuroscience-based design principles into development projects to create premium, differentiated properties with higher market value and occupant satisfaction."
            idealFor="Families, work-from-home professionals, wellness-focused individuals"
          />
        </div>

        <div className="text-center">
          <Link
            href="#qualification"
            className="inline-flex items-center justify-center py-3 px-8 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Encontre o melhor serviço para você
          </Link>
        </div>
      </div>
    </section>
  );
}
