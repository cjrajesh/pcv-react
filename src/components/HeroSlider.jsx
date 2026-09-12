import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "/img/slider-1.jpg",
    title: "Process Control Valves",
    subtitle: "Company Head Quaters at Chennai, India.",
  },
  {
    image: "/img/slider-2.jpg",
    title: "Quality Control Valves",
    subtitle: "Designed with High Quality and Quality Control checks",
  },
  {
    image: "/img/slider-3.jpg",
    title: "Team Work",
    subtitle: "At PCV we work as Team !",
    cta: { label: "contact us", to: "/contact" },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[500px] md:h-[650px] lg:h-[750px]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-top transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative h-full container mx-auto max-w-[1170px] px-6 flex flex-col justify-center">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold uppercase drop-shadow-lg max-w-3xl">
                {slide.title}
              </h2>
              <p className="text-white text-sm md:text-base mt-4 drop-shadow max-w-2xl">
                {slide.subtitle}
              </p>
              {slide.cta && (
                <div className="mt-8">
                  <Link
                    to={slide.cta.to}
                    className="inline-block bg-brand text-white uppercase text-sm font-bold tracking-wide px-7 py-3 hover:bg-white hover:text-brand transition"
                  >
                    {slide.cta.label}
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`w-3 h-3 rounded-full border-2 border-white transition ${
              i === current ? "bg-white" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </section>
  );
}