const benefits = [
  "Melhora do bem-estar e redução do estresse em seu ambiente",
  "Ambientes que estimulam o foco e produtividade",
  "Lares que acolhem histórias e fortalecem vínculos",
  "Design baseado em evidências científicas",
];

const BulletPoint = ({ text }: { text: string }) => (
  <li className="flex items-center">
    <span className="h-6 w-6 rounded-full bg-white/20 flex flex-shrink-0 items-center justify-center mr-3">
      ✓
    </span>
    <span>{text}</span>
  </li>
);

const BenefitsList = () => (
  <div className="bg-white/10 rounded-lg p-8 max-w-xl mx-auto">
    <h3 className="text-xl font-semibold mb-4">
      Benefícios da Metodologia Casa Viva
    </h3>
    <ul className="space-y-3 text-left">
      {benefits.map((benefit, index) => (
        <li className="flex items-start">
          <BulletPoint key={index} text={benefit} />
        </li>
      ))}
    </ul>
  </div>
);

export default BenefitsList;
