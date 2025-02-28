import Link from "next/link";
import { Calendar } from "lucide-react";

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

          <div className="bg-white/10 rounded-lg p-8 max-w-xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">
              Benefits of Neuroarchitecture
            </h3>
            <ul className="space-y-3 text-left">
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                  ✓
                </span>
                <span>
                  Improved wellbeing and reduced stress in your environment
                </span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                  ✓
                </span>
                <span>Enhanced cognitive function and productivity</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                  ✓
                </span>
                <span>Spaces that promote emotional balance and happiness</span>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                  ✓
                </span>
                <span>
                  Evidence-based design that delivers measurable results
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
