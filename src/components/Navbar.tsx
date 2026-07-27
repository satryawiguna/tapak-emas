"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ContactModal from "./ContactModal";

const links = [
  { label: "Overview", href: "#overview" },
  { label: "Sectors", href: "#sectors" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Values", href: "#values" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Overview");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const link = links.find((l) => l.href === `#${id}`);
            if (link) setActiveLink(link.label);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center section-px-desktop h-20 bg-surface border-b border-outline-variant/20 shadow-sm">
      <div className="text-headline-md font-bold text-primary tracking-tighter">
        [ TAPAK EMAS ]
      </div>

      <nav className="hidden lg:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`text-body-md ${
              activeLink === link.label
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-on-surface-variant hover:text-primary transition-colors duration-200"
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-6">
        <button
          onClick={() => setModalOpen(true)}
          className="hidden lg:block bg-primary/10 border border-primary text-primary text-label-md font-semibold tracking-[0.05em] px-6 py-2 rounded-lg hover:bg-primary hover:text-on-primary transition-all active:scale-95"
        >
          Corporate Inquiries
        </button>
        <button
          className="lg:hidden text-on-surface"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-surface border-b border-outline-variant/20 p-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-body-md text-on-surface-variant hover:text-primary py-2"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false);
              setModalOpen(true);
            }}
            className="bg-primary/10 border border-primary text-primary text-label-md font-semibold px-6 py-3 rounded-lg w-full mt-2"
          >
            Corporate Inquiries
          </button>
        </div>
      )}
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
}
