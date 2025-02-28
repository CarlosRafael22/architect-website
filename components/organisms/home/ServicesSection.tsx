import Link from "next/link";
import { Home, Building, Sparkles, Users } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Services Offered
          </h2>
          <p className="text-lg text-gray-700">
            I offer a range of specialized architectural services based on
            neuroscience principles, tailored to different space types and
            client needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Residential Neuroarchitecture */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Home className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Residential Neuroarchitecture
              </h3>
              <p className="text-gray-600 mb-6">
                Transform your home into a space that supports mental wellbeing,
                better sleep, reduced stress, and enhanced family connection
                through evidence-based design.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    <strong>Result:</strong> 40% improvement in sleep quality
                    and significant reduction in household stress
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    <strong>Ideal for:</strong> Families, work-from-home
                    professionals, wellness-focused individuals
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Office/Commercial Space Design */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Building className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Office & Commercial Design
              </h3>
              <p className="text-gray-600 mb-6">
                Create workspaces that boost productivity, creativity, and
                collaboration while reducing stress and fatigue through
                neuroscience-informed design strategies.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    <strong>Result:</strong> 30% increase in employee
                    productivity and 25% reduction in sick days
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    <strong>Ideal for:</strong> Startups, established companies,
                    coworking spaces
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Renovations with Neuroscience-based approach */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Sparkles className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Neuroscience-Based Renovations
              </h3>
              <p className="text-gray-600 mb-6">
                Transform existing spaces to better support cognitive function,
                emotional wellbeing, and physical health without complete
                rebuilds through targeted interventions.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    <strong>Result:</strong> 35% improvement in occupant
                    satisfaction and wellbeing metrics
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    <strong>Ideal for:</strong> Existing properties needing
                    updates, budget-conscious clients
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Consulting for Developers */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="p-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Developer Consulting</h3>
              <p className="text-gray-600 mb-6">
                Integrate neuroscience-based design principles into development
                projects to create premium, differentiated properties with
                higher market value and occupant satisfaction.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    <strong>Result:</strong> 15-20% increase in property value
                    and faster occupancy rates
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    <strong>Ideal for:</strong> Residential developers,
                    commercial property developers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="#qualification"
            className="inline-flex items-center justify-center py-3 px-8 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Find the right service for you
          </Link>
        </div>
      </div>
    </section>
  );
}
