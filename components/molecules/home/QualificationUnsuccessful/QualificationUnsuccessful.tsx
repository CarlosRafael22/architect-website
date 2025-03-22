import Link from "next/link";

const QualificationUnsuccessful = () => (
  <div className="text-center">
    <h3 className="text-xl font-bold mb-3">Thanks for Your Interest</h3>
    <p className="text-gray-700 mb-8">
      Based on your answers, we might not be the perfect fit right now. However,
      I'd be happy to provide some resources to help you learn more about
      neuroarchitecture and how it could benefit you in the future.
    </p>
    <div className="space-y-4">
      <Link
        href="#"
        className="inline-flex items-center justify-center w-full py-3 px-6 bg-white border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
      >
        Subscribe to My Newsletter
      </Link>
      <Link
        href="#"
        className="inline-flex items-center justify-center w-full py-3 px-6 bg-white border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
      >
        Download Free Guide
      </Link>
    </div>
  </div>
);

export default QualificationUnsuccessful;
