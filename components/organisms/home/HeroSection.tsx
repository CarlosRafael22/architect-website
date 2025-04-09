import { BEGIN_TRANSFORMATION, WHATSAPP_LINK } from "@/const/strings";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero_image.jpg"
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
            {/* Projetando ambientes que cuidam da mente e transformam vidas */}
            Sua casa tem vida?
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-2xl">
            Criamos ambientes que elevam o bem-estar, a produtividade e as
            emoções com soluções arquitetônicas baseadas em evidências através
            da Neuroarquitetura e Psicologia Ambiental.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="#metodologia"
              className="px-8 py-4 bg-white rounded text-primary hover:bg-white/90 transition-colors text-center"
            >
              Quero entender a metodologia
            </Link>
            <Link
              href={WHATSAPP_LINK}
              className="px-8 py-4 border border-white rounded text-white hover:bg-white/10 transition-colors text-center"
            >
              {BEGIN_TRANSFORMATION}
            </Link>
          </div>
        </div>
      </div>

      {/*       <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white text-center">
        <p className="text-sm tracking-widest mb-4">SCROLL</p>
        <div className="w-px h-16 bg-white/50 mx-auto" />
      </div> */}
    </section>
  );
}
