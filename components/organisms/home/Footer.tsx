import Link from "next/link";
import {
  Instagram,
  Linkedin,
  Mail,
  // MapPin,
  Youtube,
  Phone,
} from "lucide-react";
// import FooterLinksList from "@/components/molecules/home/FooterLinksList/FooterLinksList";

/* const quickLinks = [
  {
    text: "What is Neuroarchitecture",
    href: "#neuroarchitecture",
  },
  {
    text: "About",
    href: "about",
  },
  {
    text: "Services",
    href: "#services",
  },
  {
    text: "Design Process",
    href: "#process",
  },
  {
    text: "Portfolio",
    href: "#portfolio",
  },
  {
    text: "Contact",
    href: "#contact",
  },
];

const resourcesLinks = [
  {
    text: "Blog",
    href: "#",
  },
  {
    text: "Free Neuroarchitecture Guide",
    href: "#",
  },
  {
    text: "Research & Case Studies",
    href: "#",
  },
  {
    text: "Neuroarchitecture Assessment",
    href: "#",
  },
  {
    text: "Newsletter",
    href: "#",
  },
]; */

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="max-w-md">
            <Link
              href="/"
              className="text-xl tracking-tighter font-[Alethia_Next] text-white mb-6 block"
            >
              THEREZA <span className="text-primary">OLIVEIRA</span>
            </Link>
            <p className="text-sm mb-6">
              Criando ambientes que estimulam o bem-estar através da união entre
              Neurociência e Arquitetura.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/therezaoliveiraarquiteta"
                className="hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/thereza-oliveira-56575a265/"
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://www.youtube.com/@therezaoliveiraneuroarq"
                className="hover:text-primary transition-colors"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/*           <FooterLinksList title="Quick Links" links={quickLinks} />
          <FooterLinksList title="Resources" links={resourcesLinks} /> */}

          <div>
            <h3 className="text-white font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              {/*               <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-0.5 text-primary" />
                <span>
                  123 Design Street
                  <br />
                  New York, NY 10001
                </span>
              </li> */}
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-primary" />
                <span>(81) 98104-1352</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-primary" />
                <span>therezaoliveiraarquiteta@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Thereza Oliveira Arquitetura. Todos os
            direitos reservados.
          </p>
          {/*           <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm hover:text-primary transition-colors"
            >
              Cookie Policy
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
