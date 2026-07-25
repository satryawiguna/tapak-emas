"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronRight, Leaf, Trees, Pickaxe, Zap, Gem } from "lucide-react";

const palmOilSlides = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDx1tb8ivp0Fnj-VuNLsoaM_bmhD4HDbPAXgPWtx0hXpf0riIC99h678HrTQ_TnEeKI9SoJ5cGY0JoFH8AA355piQ8X-xczEeQ6j7apG4U_6cw3m2jX8vlC49QqZgd4KLohaxWBm6FsYEnTglB3KGeRpDoDPdddjsfRL-nyAn-43sQflmlkYGCkmPAH_6TdHEp1v1UBYFDtpBVJVU4CbRVSwg6uAjhXiDpW8o5wMKlk90aAYrThWFcWb0NVTj8ruQN5qIxCigxvftI",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD-V_N5we_etFpLEgm0QVwYdCYP94SaYxL8G5dSTIGWdA2iP1Uv1c0QV2k50lr-kozLqmaBHrlF9kbmsJEnRyR8F4cJWWa5V0U4_eoJbaDQfNiWr59np9hxUNarQCpwzvgcfzw8vAPuC6GdzPLrr5Pj3eZFGVmjlLjLeLl0Vb7wJxPtaxyDrpcYJeWTcSmC2Xk6hVHdV0VIkuMinp6CVsLS55a2K6XGRD0tFccyUa9zyFyEpJdXiWRq92P3nWTcnDULAd8s4O_X7zQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuARh6NTo8cI7DU5Qhw9usnf-DRxzWXOhkhTupPsWkh2llol-rDCJ19jy26Q4DFb32kM7gbiyqUlDkELjH_65LciWtHuqC19CH00fT7hQDcmTbNYGD8TnM-XReROEBqp7bt1MNORO5lkFaMgHpSrMPDYOKw6z64UA8wVJghoQEnX3mt5aTPJlXuhb_P_5e8gquaIuSgh8e9UZj3zNrR6fH3xQDJdDmWVjB1Lgr0AxcWfJncSxU0b0nKSx-MtAiQjma_aK8evjhZEekY",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDgYcnPA2U2nMKCAk4PDyqCrTVHrG-jrCSKifH67NtGYM7CJdzuQ_KoDG6qkOBuSHlHt2dEDCRrYYUfSdD_sOcXH1jeNipuqy6dlil4p-KaU_5GxuA-1QJ8h2J_nSGJUfcb_hoOHemEvBNoXxgaMtWYa9auL8jbkvUdN3HLM3SabejiuE7HE3-sOZfNcIpe29vHXfAwc6eXQIK6Wel7vRWf2yiaSwHaOYn-gU5nIMku4RT2m3bjDXELMfh2HZpzfH5fg7VAeevR41c",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuChuydsZ2v7-tXVHnx-VmbdC0rHP6N-tWrrzMjlid-QoCjy-KQAv6R1c3jjhbbMspCcm8YwLNAmI5vj12cYHz8wJvno7ESxKa9LcajVCWSizKsJ9SnFsnfLaWXMNRpXn8H2irJVF_GqtTILVIxjdkWFJigAttBhgx6D0NR_lkjcK4souC03gGawYWZFzKmvrvKj3-lEOuZfYWZfynIeErwNLxv46Y_GqOfnWAeodkMSoXqBJI0lUZblebmtV40Ss7JWR063OrHhDUk",
];

const sectors = [
  {
    id: "03",
    title: "Mining",
    icon: Pickaxe,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvpEifnRWdmPJLMQmak4gS8NprOfXx3irteKIo7j0ZBLAWXasFZHWRQRY1UpPorFuLAqMOmJrUkDBAQE9iPsh1mofO6UXmupiRmv7h6Ck9RQNTkHQy0std37a0hx34OWqj8XNb1VoCazU19KCcMl4j-6cyXDFgWxHrALtWrdRY8G0713HnjUn6hZ6VxaJr9RvJuUTqupSKF7AEyCc93ERDRzWJELOVztQPSTl2dCpDY6pG40th8YEZ51SLl9Ex4MIy8nQ_oCqEAzU",
    desc: "Precision extraction of essential mineral resources using advanced technology and safety protocols.",
  },
  {
    id: "04",
    title: "Green Energy & Biomass",
    icon: Zap,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaG4aweg1GwigBpO6tmTUkGNzvJAA0KqeKWgOUNYNl2vxv9yycm68FLXswieEkG8uyMTT1ja9jEl2axgvDBVJXhnEjxCWMKItYpg0gN7cUDOJ3ndRcQbcpJ2XoTvEoeFHJo40x0Q9f0ldVjFryfJfbFR2Syy4Z61fXlJknlC5oBFzn4KZDA6a2l3M3dmkBF_hYoxRqJeADttNYO9VFgxAiKuGhB3hkhcq2kcZU9ZsZn2RMMdcZgh0Ly0oGNvKMz6vi7dsRmf-sJ6o",
    desc: "Pioneering renewable energy solutions through biomass conversion and sustainable energy infrastructure.",
  },
  {
    id: "05",
    title: "Art, Sculpture & Fine Jewelry",
    icon: Gem,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjl0mlVA2uqvXd7pSdbEzjiUAZOp7WSrvaZAbzXaWo22CQT14d1Jy54UFPrA601WsPfiaCqoOZCDauhAlE0b6z1D74ScwWx5h7toXjD-qdKA3lmqCDWOs454zO_wOndpZPMfRwALyUZSYkUEOZX8PNQMWqa1kU5Fy5qMxhKlGJDl0AyJcWtNs3ASTAkOVcHGBhZ4o0IOnB7LoZbgGGrBqAIqQ9_bs81JxirgeGrbMHJrEUWEx1f76bo6Jule_3hmpizasmOhIvhV4",
    desc: "Curating and creating timeless value through high-end artistry, precision sculpture, and luxury assets.",
  },
];

export default function BusinessSectors() {
  const [palmOilIdx, setPalmOilIdx] = useState(0);

  const nextPalm = useCallback(() => {
    setPalmOilIdx((prev) => (prev + 1) % palmOilSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextPalm, 4000);
    return () => clearInterval(timer);
  }, [nextPalm]);

  return (
    <section
      id="sectors"
      className="py-section-gap section-px-desktop max-w-[1440px] mx-auto"
    >
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-label-md text-primary font-semibold tracking-[0.2em] uppercase">
            Diverse Portfolio
          </span>
          <div className="h-px flex-1 bg-outline-variant/30" />
        </div>
        <h2 className="text-headline-lg text-on-surface">
          Our Business Sectors
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Palm Oil - col span 8 */}
        <div className="md:col-span-8 glass-card rounded-xl p-10 flex flex-col justify-between min-h-[450px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.05] -mr-20 -mt-20">
            <Leaf size={240} />
          </div>
          <div>
            <span className="font-mono text-code-md text-primary mb-4 block">
              SECTOR 01
            </span>
            <h3 className="text-headline-lg mb-6">Palm Oil</h3>
            <p className="text-body-lg text-on-surface-variant max-w-lg">
              Sustainable cultivation and processing of high-grade palm oil
              products, adhering to international environmental standards and
              community empowerment.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mt-12">
            <button className="text-primary text-label-md font-semibold tracking-[0.05em] flex items-center gap-3 hover:gap-6 transition-all">
              OPERATIONAL OVERVIEW <ChevronRight size={20} />
            </button>
            {/* Palm Oil Slider */}
            <div className="w-full md:w-3/5 aspect-video relative overflow-hidden rounded-lg border border-outline-variant/30">
              {palmOilSlides.map((url, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                    i === palmOilIdx ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                  style={{ backgroundImage: `url(${url})` }}
                />
              ))}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {palmOilSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPalmOilIdx(i)}
                    className={`size-2 rounded-full transition-all ${
                      i === palmOilIdx ? "bg-primary" : "bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Forestry - col span 4, accent */}
        <div className="md:col-span-4 bg-surface-container-high rounded-xl p-10 flex flex-col border-t-4 border-primary">
          <span className="font-mono text-code-md text-primary mb-4 block">
            SECTOR 02
          </span>
          <h3 className="text-headline-lg mb-6">Forestry</h3>
          <p className="text-body-md text-on-surface-variant mb-10">
            Responsible management of forest resources through sustainable
            harvesting and extensive reforestation initiatives to preserve
            biodiversity.
          </p>
          <div className="h-px w-full bg-outline-variant/20 mb-10" />
          <ul className="space-y-6 text-label-md text-on-surface font-semibold tracking-[0.05em]">
            <li className="flex items-center gap-4">
              <Trees size={20} className="text-primary" /> SUSTAINABLE
              HARVESTING
            </li>
            <li className="flex items-center gap-4">
              <Leaf size={20} className="text-primary" /> REFORESTATION PROGRAMS
            </li>
            <li className="flex items-center gap-4">
              <div className="text-primary text-xl">✓</div> ESG COMPLIANCE
            </li>
          </ul>
        </div>

        {/* Bottom 3 cards */}
        {sectors.map((s) => (
          <div
            key={s.id}
            className="md:col-span-4 glass-card rounded-xl p-10 flex flex-col group"
          >
            <span className="font-mono text-code-md text-primary mb-4 block">
              SECTOR {s.id}
            </span>
            <h3 className="text-headline-md mb-4">{s.title}</h3>
            <p className="text-body-md text-on-surface-variant mb-8">
              {s.desc}
            </p>
            <div className="mt-auto aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
