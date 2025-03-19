import { Check, ChevronRight } from "lucide-react";

interface QuestionAnswer {
  id: string;
  text: string;
}

interface QuestionProps {
  id: string;
  title: string;
  answers: QuestionAnswer[];
  onAnswerSelect: (answer: string) => void;
}

interface AnswerOptionProps {
  text: string;
  callback: () => void;
}

const AnswerOption = ({ text, callback }: AnswerOptionProps) => {
  return (
    <button
      onClick={callback}
      className="w-full text-left px-6 py-4 rounded-lg bg-white border hover:border-primary transition-colors"
    >
      <div className="flex items-center justify-between">
        <span>{text}</span>
        <ChevronRight size={18} className="text-gray-400" />
      </div>
    </button>
  );
};

const Question = ({ id, title, answers, onAnswerSelect }: QuestionProps) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <div className="space-y-3">
        {answers.map((answer) => (
          <AnswerOption
            key={answer.id}
            text={answer.text}
            callback={() => onAnswerSelect(answer.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
