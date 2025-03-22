import Link from "next/link";
import { Check } from "lucide-react";

const QualificationSuccessful = () => (
  <div className="text-center">
    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
      <Check className="h-8 w-8 text-green-600" />
    </div>
    <h3 className="text-xl font-bold mb-3">Great Match!</h3>
    <p className="text-gray-700 mb-8">
      Based on your answers, my neuroarchitecture services appear to be a great
      fit for your needs. Let's schedule a consultation to discuss how I can
      help transform your space.
    </p>
    <Link
      href="#contact"
      className="inline-flex items-center justify-center w-full py-3 px-6 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
    >
      Book a Free 15-Minute Discovery Call
    </Link>
  </div>
);

export default QualificationSuccessful;
