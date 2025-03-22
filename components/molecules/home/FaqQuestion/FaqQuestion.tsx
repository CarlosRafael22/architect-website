import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqQuestionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onSelect: () => void;
}

const FaqQuestion = ({
  question,
  answer,
  isOpen,
  onSelect,
}: FaqQuestionProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <button
        className="w-full text-left p-6 focus:outline-none"
        onClick={onSelect}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">{question}</h3>
          <div>
            {isOpen ? (
              <ChevronUp className="h-5 w-5 text-primary" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </div>
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqQuestion;
