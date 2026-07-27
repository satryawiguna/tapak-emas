"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowRight } from "lucide-react";

const slides = [
  "/assets/images/hero-pal-oil.png",
  "/assets/images/hero-foresty.png",
  "/assets/images/hero-mining.png",
  "/assets/images/hero-solar-energy.png",
  "/assets/images/hore-jewellry.png",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="overview"
      className="relative h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Slider background */}
      <div className="absolute inset-x-0 bottom-0 top-20 z-0">
        {slides.map((url, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              i === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url(${url})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-px-desktop w-full max-w-[1440px]">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-primary" />
          <span className="text-primary text-label-md font-semibold tracking-[0.2em] uppercase">
            Building Sustainable Value Since 2008
          </span>
        </div>

        <h1 className="text-headline-lg-mobile md:text-display-lg text-white mb-6 md:mb-8 max-w-4xl">
          PT TAPAK EMAS:
          <br />
          <span className="text-primary">Corporate Profile</span>
        </h1>

        <p className="text-body-md md:text-body-lg text-on-surface-variant mb-8 md:mb-12 max-w-2xl">
          Established in 2008, PT TAPAK EMAS has grown into a diversified
          conglomerate with a strong presence across key industrial sectors. We
          are committed to excellence, innovation, and sustainable development
          in every venture we undertake.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="#sectors"
            className="bg-primary text-on-primary text-label-md font-semibold tracking-[0.05em] px-10 py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-primary-container transition-all group"
          >
            OUR BUSINESS SECTORS
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#values"
            className="border border-outline text-white text-label-md font-semibold tracking-[0.05em] px-10 py-4 rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            CAPABILITIES & CORE VALUES
          </a>
        </div>
      </div>
    </section>
  );
}
