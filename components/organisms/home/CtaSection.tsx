import Link from "next/link";
import { Calendar } from "lucide-react";
import BenefitsList from "@/components/molecules/home/BenefitsList/BenefitsList";
import { BEGIN_TRANSFORMATION, WHATSAPP_LINK } from "@/const/strings";

export default function CtaSection() {
  return (
    <section id="contato" className="primary-section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quer deixar sua casa com vida?
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Descubra como posso transformar seu ambiente e melhorar sua
            qualidade de vida através do nosso método.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              href={WHATSAPP_LINK}
              className="py-4 px-8 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              <Calendar className="mr-2" size={20} />
              {BEGIN_TRANSFORMATION}
              {/* Book a Discovery Call */}
            </Link>

            {/*             <Link
              href="#"
              className="py-4 px-8 border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              View Sample Project Plan
            </Link> */}
          </div>

          <BenefitsList />
        </div>
      </div>
    </section>
  );
}
