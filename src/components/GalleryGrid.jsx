import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Lightbox from "./Lightbox";

export default function GalleryGrid({ images }) {
  const [active, setActive] = useState(null);

  const nav = (dir) => {
    setActive((i) => (i + dir + images.length) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="relative group overflow-hidden block aspect-square"
            aria-label={`Open image ${i + 1}`}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[rgba(0,37,74,0.88)] opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="w-11 h-11 rounded-full bg-white text-brand flex items-center justify-center text-lg">
                <FaPlus />
              </span>
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        images={images}
        index={active}
        onClose={() => setActive(null)}
        onNav={nav}
      />
    </>
  );
}