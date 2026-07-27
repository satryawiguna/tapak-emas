"use client";

import { ShieldCheck, Star, Leaf, Lightbulb, Handshake } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Operating with transparency and honesty in all our dealings.",
  },
  {
    icon: Star,
    title: "Excellence",
    desc: "Striving for the highest quality in every product and service.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "Ensuring our growth benefits both people and the planet.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Embracing new technologies to drive industrial progress.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    desc: "Collaborating for shared success and community impact.",
  },
];

export default function CoreValues() {
  return (
    <section
      id="values"
      className="py-section-gap section-px-desktop bg-background"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-label-md text-primary font-semibold tracking-[0.2em] uppercase mb-4 block">
            The PT TAPAK EMAS Philosophy
          </span>
          <h2 className="text-headline-lg text-on-surface mb-8">
            Our Core Values
          </h2>
          <p className="text-body-lg text-on-surface-variant max-w-3xl mx-auto">
            These fundamental principles guide our decisions and define our
            corporate culture across every subsidiary and operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="glass-card p-8 rounded-xl hover:border-primary/50 transition-all group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <v.icon size={30} className="text-primary" />
              </div>
              <h4 className="text-2xl mb-4">{v.title}</h4>
              <p className="text-body-md text-on-surface-variant text-sm">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
