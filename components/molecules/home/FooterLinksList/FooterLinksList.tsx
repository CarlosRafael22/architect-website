import Link from "next/link";

interface Link {
  text: string;
  href: string;
}

interface FooterLinksListProps {
  title: string;
  links: Link[];
}

const FooterLinksList = ({ title, links }: FooterLinksListProps) => (
  <div>
    <h3 className="text-white font-semibold mb-6">{title}</h3>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-primary transition-colors"
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterLinksList;
