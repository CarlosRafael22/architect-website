import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-2/5">
            <div className="relative w-full aspect-[3/4] max-w-md mx-auto md:mx-0">
              <Image
                src="/images/thereza.jpg"
                alt="Thereza Oliveira"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quem sou eu?
            </h2>

            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                With over 15 years of experience in architectural design and a
                specialized education in neuroscience applications for built
                environments, I've dedicated my career to creating spaces that
                truly serve the people who use them.
              </p>

              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="italic text-gray-600">
                  "Architecture isn't just about creating beautiful spaces –
                  it's about crafting environments that enhance our cognitive
                  function, emotional wellbeing, and physical health. Every
                  design decision should be purposeful and evidence-based."
                </p>
              </div>

              <p className="text-lg text-gray-700">
                My journey into Neuroarchitecture began when I was designing a
                recovery center for patients with traumatic brain injuries.
                Witnessing how spatial design directly impacted their healing
                process transformed my approach to architecture forever.
              </p>

              <p className="text-lg text-gray-700">
                Since then, I've applied these principles to every project –
                from residential homes to corporate headquarters – helping
                clients create spaces that not only look beautiful but
                functionally support cognitive performance, emotional wellbeing,
                and physical health.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-gray-100 px-4 py-2 rounded-full text-sm">
                  Master of Architecture, Harvard GSD
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-full text-sm">
                  Neuroscience in Design Certificate, ANFA
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-full text-sm">
                  15+ Years Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
