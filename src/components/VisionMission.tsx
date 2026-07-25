"use client";

import { CheckCircle, Lightbulb } from "lucide-react";

const missions = [
  "To optimize natural resource extraction through innovative, sustainable practices.",
  "To deliver excellence in quality across all our diverse business sectors.",
  "To foster long-term partnerships built on integrity and mutual growth.",
];

export default function VisionMission() {
  return (
    <section
      id="sustainability"
      className="bg-surface-container-lowest py-section-gap section-px-desktop relative overflow-hidden"
    >
      {/* Decorative icon */}
      <div className="absolute -right-40 -top-40 opacity-[0.02] pointer-events-none">
        <Lightbulb size={600} />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div className="space-y-12">
            {/* Vision */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-8 w-1 bg-primary" />
                <span className="text-primary text-label-md font-semibold tracking-[0.2em] uppercase">
                  Our Vision
                </span>
              </div>
              <h2 className="text-headline-lg text-white mb-6">
                To be a global leader in sustainable resource management and
                luxury asset stewardship.
              </h2>
              <p className="text-body-lg text-on-surface-variant">
                We envision a future where industrial progress and environmental
                harmony coexist, creating enduring value for stakeholders and
                the planet.
              </p>
            </div>

            <div className="h-px w-full bg-outline-variant/20" />

            {/* Mission */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="h-8 w-1 bg-primary" />
                <span className="text-primary text-label-md font-semibold tracking-[0.2em] uppercase">
                  Our Mission
                </span>
              </div>
              <ul className="space-y-6">
                {missions.map((m, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle
                      size={22}
                      className="text-primary mt-1 shrink-0"
                    />
                    <p className="text-body-md text-on-surface">{m}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative group">
            <div className="absolute -inset-4 border border-primary/30 rounded-xl translate-x-4 translate-y-4 z-0 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
            <div className="relative z-10 w-full h-[600px] rounded-lg overflow-hidden border border-outline-variant/20 shadow-2xl">
              <div
                className="w-full h-full bg-contain bg-center bg-no-repeat grayscale group-hover:grayscale-0 transition-all duration-1000"
                style={{
                  backgroundImage: "url(/assets/images/our-mision.png)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
