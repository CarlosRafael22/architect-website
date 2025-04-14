import { BEGIN_TRANSFORMATION, WHATSAPP_LINK } from "@/const/strings";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[96vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero_image.jpg"
            alt="Interior Architecture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/50 backdrop-blur-sm" />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8 md:pt-0 z-10">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl md:text-5xl text-white mb-8 leading-tight">
            {/* Projetando ambientes que cuidam da mente e transformam vidas */}
            Traga vida para sua casa
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-2xl">
            Criamos ambientes que elevam o bem-estar, a produtividade e as
            emoções por meio de soluções com embasamento científico, unindo
            Neuroarquitetura e Psicologia Ambiental. Através do nosso método,
            trazemos ambientes que cuidam de você.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="#metodologia"
              className="px-8 py-4 bg-white rounded text-primary hover:bg-white/90 transition-colors text-center"
            >
              Quero entender o método
            </Link>
            <Link href={WHATSAPP_LINK} className="px-8 py-4 primary-button">
              {BEGIN_TRANSFORMATION}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
