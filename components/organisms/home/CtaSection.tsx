import Link from "next/link";
import { Calendar } from "lucide-react";
import BenefitsList from "@/components/molecules/home/BenefitsList/BenefitsList";

export default function CtaSection() {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Book a free 15-minute discovery call to discuss your project and
            learn how Neuroarchitecture can enhance your space and wellbeing.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              href="#"
              className="py-4 px-8 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <Calendar className="mr-2" size={20} />
              Book a Discovery Call
            </Link>

            <Link
              href="#"
              className="py-4 px-8 border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              View Sample Project Plan
            </Link>
          </div>

          <BenefitsList />
        </div>
      </div>
    </section>
  );
}
