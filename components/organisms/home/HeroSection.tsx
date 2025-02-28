import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://kzmofiv4xhoyqd3ignlm.lite.vusercontent.net/placeholder.svg?height=1080&width=1920')",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div> {/* Overlay */}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Transforming Spaces with Science & Emotion
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-white/90">
            Experience Neuroarchitecture in Your Home or Office
          </p>
          <p className="text-lg mb-10 max-w-2xl">
            Designing spaces that enhance well-being, productivity, and emotions
            through evidence-based architectural solutions.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="#process"
              className="py-3 px-6 bg-white text-primary font-medium rounded-md hover:bg-white/90 transition-colors text-center"
            >
              See How It Works
            </Link>
            <Link
              href="#contact"
              className="py-3 px-6 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors text-center"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#neuroarchitecture">
          <ArrowDown className="text-white" size={32} />
        </Link>
      </div>
    </section>
  );
}
