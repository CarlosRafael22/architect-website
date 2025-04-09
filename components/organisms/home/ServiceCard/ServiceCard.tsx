import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  idealFor: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  idealFor,
}: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md">
      <div className="p-8">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-primary">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        <div className="space-y-3 mb-8">
          <div className="flex">
            <div className="w-6 h-6 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center mr-3">
              <span className="text-green-600 text-xs">✓</span>
            </div>
            <p className="text-sm text-gray-700">
              <strong>Ideal para:</strong> {idealFor}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
