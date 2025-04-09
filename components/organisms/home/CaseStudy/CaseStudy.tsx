import Image from "next/image";
/* import { Play } from "lucide-react"; */

interface CaseStudyProps {
  id: number;
  category: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  images: string[];
  before: string;
  after: string;
  testimonial: {
    quote: string;
    author: string;
    image: string;
  };
}

const CaseStudy = ({
  id,
  category,
  title,
  description,
  problem,
  solution,
  result,
  images,
  before,
  after,
  testimonial: { quote, author, image },
}: CaseStudyProps) => {
  return (
    <div key={id} className="bg-white rounded-xl overflow-hidden shadow-lg">
      {/* Project Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {images.map((image, index) => (
          <div key={index} className="relative aspect-[4/3]">
            <Image
              src={image || "/placeholder.svg"}
              alt={`${title} - Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Project Details */}
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-700 mb-8">{description}</p>

        {/* Case Study */}
        <div className="mb-8">
          {/* <h4 className="text-lg font-semibold mb-4">Case Study</h4> */}

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h5 className="font-medium mb-2">Desejos do cliente</h5>
              <p className="text-sm text-gray-600">{problem}</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h5 className="font-medium mb-2">O que fizemos</h5>
              <p className="text-sm text-gray-600">{solution}</p>
            </div>

            {/*             <div className="bg-gray-50 p-6 rounded-lg">
              <h5 className="font-medium mb-2">The Results</h5>
              <p className="text-sm text-gray-600">{result}</p>
            </div> */}
          </div>
        </div>

        {/* Before & After */}
        {/*         <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4">Before & After</h4>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="relative aspect-[4/3] mb-2">
                <Image
                  src={before || "/placeholder.svg"}
                  alt={`${title} - Before`}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  Before
                </div>
              </div>
            </div>

            <div>
              <div className="relative aspect-[4/3] mb-2">
                <Image
                  src={after || "/placeholder.svg"}
                  alt={`${title} - After`}
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute top-3 left-3 bg-primary text-white text-xs px-2 py-1 rounded">
                  After
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Testimonial */}
        {/*         <div className="border-t pt-8">
          <div className="bg-gray-50 p-6 rounded-lg relative">
            <div className="absolute -top-8 left-6 w-16 h-16 rounded-full overflow-hidden border-4 border-white">
              <Image
                src={image || "/placeholder.svg"}
                alt={author}
                fill
                className="object-cover"
              />
            </div>
            <div className="pl-0 pt-8 md:pt-0 md:pl-16">
              <p className="text-gray-700 italic mb-2">"{quote}"</p>
              <p className="text-sm font-medium">{author}</p>
            </div>
            <div className="absolute -bottom-4 right-6 bg-primary text-white rounded-full p-2 shadow-lg cursor-pointer">
              <Play size={20} />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CaseStudy;
