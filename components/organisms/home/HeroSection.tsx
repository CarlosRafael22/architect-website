import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/headerProject.jpg"
            alt="Interior Architecture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl md:text-5xl text-white mb-8 leading-tight">
            Transformando espaços através da ciência e emoção
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-2xl">
            Criando ambientes que elevam o bem-estar, a produtividade e as
            emoções através de soluções arquitetônicas baseadas em evidências.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="#metodologia"
              className="px-8 py-4 bg-white text-primary hover:bg-white/90 transition-colors text-center"
            >
              NOSSA METODOLOGIA
            </Link>
            <Link
              href="#contato"
              className="px-8 py-4 border border-white text-white hover:bg-white/10 transition-colors text-center"
            >
              AGENDE UMA CONSULTA
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white text-center">
        <p className="text-sm tracking-widest mb-4">SCROLL</p>
        <div className="w-px h-16 bg-white/50 mx-auto" />
      </div>
    </section>
  );
}
