const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">

      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">Tesfaye Fekadu</p>
          <p className="mt-1 text-sm text-gray-500">
            Full-Stack Developer
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-500 transition-colors hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Tesfaye Fekadu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}