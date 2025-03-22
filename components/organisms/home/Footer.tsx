import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import FooterLinksList from "@/components/molecules/home/FooterLinksList/FooterLinksList";

const quickLinks = [
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
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-tighter text-white mb-6 block"
            >
              NEURO<span className="text-primary">ARCHITECT</span>
            </Link>
            <p className="text-sm mb-6">
              Creating evidence-based architectural solutions that enhance
              wellbeing, productivity, and emotional balance through the
              principles of neuroscience.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          <FooterLinksList title="Quick Links" links={quickLinks} />
          <FooterLinksList title="Resources" links={resourcesLinks} />

          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-0.5 text-primary" />
                <span>
                  123 Design Street
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-primary" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-primary" />
                <span>info@neuroarchitect.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} NeuroArchitect. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
