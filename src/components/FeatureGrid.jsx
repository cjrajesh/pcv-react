import { Link } from "react-router-dom";

const items = [
  { image: "/img/home-1.jpg", to: "/gallery" },
  { image: "/img/home-2.jpg", to: "/gallery" },
  { image: "/img/home-3.jpg", to: "/gallery" },
];

export default function FeatureGrid() {
  return (
    <section className="py-[30px]">
      <div className="container mx-auto max-w-[1170px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div key={i} className="text-center">
              <div className="overflow-hidden border border-brand group">
                <img
                  src={item.image}
                  alt=""
                  className="w-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <Link
                to={item.to}
                className="inline-block mt-4 uppercase text-sm font-bold tracking-wide text-brand-dark border border-brand-dark px-6 py-2 rounded-full hover:bg-brand-dark hover:text-white transition"
              >
                View more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}