"use client";

import { Phone, Printer, MapPin, Globe, BarChart3, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full py-section-gap section-px-desktop flex flex-col items-center bg-surface-container-lowest border-t border-outline-variant/30"
    >
      <div className="max-w-[1440px] w-full flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <div className="text-headline-md text-primary mb-2">PT TAPAK MAS</div>
          <p className="text-label-md text-on-surface-variant font-semibold tracking-[0.05em] max-w-xs text-center md:text-left mb-6">
            Natural Resources &bull; Renewable Energy &bull; Art &amp; Luxury
            Assets
          </p>
          <div className="space-y-2 text-on-surface-variant text-body-md text-sm text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Phone size={18} className="text-primary" />
              <span>+62 21 2550 2631</span>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Printer size={18} className="text-primary" />
              <span>+62 21 2550 2555</span>
            </div>
            <div className="flex items-start gap-2 justify-center md:justify-start max-w-xs">
              <MapPin size={18} className="text-primary mt-1 shrink-0" />
              <span>
                One Pasific Place 15 Floor, Jalan Jenderal Sudirman Kav 52-53,
                Jakarta Selatan 12190, Indonesia
              </span>
            </div>
          </div>
          <p className="text-label-md text-xs text-on-surface-variant mt-8 opacity-50">
            &copy; 2024 PT TAPAK MAS. All Rights Reserved.
          </p>
        </div>

        {/* Nav */}
        <nav className="flex flex-wrap justify-center gap-8">
          {[
            "Corporate Governance",
            "ESG Reports",
            "Privacy Policy",
            "Careers",
          ].map((link) => (
            <a
              key={link}
              href="#"
              className="text-label-md text-on-surface-variant font-semibold tracking-[0.05em] hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Social */}
        <div className="flex gap-6">
          <a
            href="#"
            className="text-on-surface-variant hover:text-primary transition-all"
          >
            <Globe size={24} />
          </a>
          <a
            href="#"
            className="text-on-surface-variant hover:text-primary transition-all"
          >
            <BarChart3 size={24} />
          </a>
          <a
            href="#"
            className="text-on-surface-variant hover:text-primary transition-all"
          >
            <Shield size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
