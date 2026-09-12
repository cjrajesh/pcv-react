import { useEffect, useRef, useState } from "react";
import { FaUsers, FaTrophy, FaUser, FaBolt } from "react-icons/fa";

const counters = [
  { icon: FaUsers, target: 500, label: "Happy Clients" },
  { icon: FaTrophy, target: 10, label: "Awards Win" },
  { icon: FaUser, target: 80, label: "Our workers" },
  { icon: FaBolt, target: 1500, label: "Project complete" },
];

function Counter({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();

          const tick = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-4xl font-bold text-white">
      {count}
    </span>
  );
}

export default function CounterSection() {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/img/bg-1.jpg')" }}
    >
      <div className="absolute inset-0 bg-[rgba(0,37,74,0.88)]" />
      <div className="relative container mx-auto max-w-[1170px] px-4 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {counters.map(({ icon: Icon, target, label }, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <Icon className="text-brand text-5xl" />
              <Counter target={target} />
              <p className="text-white text-sm uppercase tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}