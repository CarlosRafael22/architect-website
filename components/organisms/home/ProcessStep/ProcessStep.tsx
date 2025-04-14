interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  /*   duration: string;
  investment: string; */
}

const ProcessStep = ({
  number,
  title,
  description,
  /*   duration,
  investment, */
}: ProcessStepProps) => {
  return (
    <div className="w-80 bg-gray-50 rounded-xl p-6 shadow-sm flex flex-col h-full">
      <div className="text-4xl font-bold text-primary mb-4">{number}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      {/*       <div className="text-sm text-gray-500">
        <p>
          <strong>Duração:</strong> {duration}
        </p>
        <p>
          <strong>Investment:</strong> {investment}
        </p>
      </div> */}
    </div>
  );
};

export default ProcessStep;
