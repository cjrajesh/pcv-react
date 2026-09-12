import { useEffect } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Lightbox({ images, index, onClose, onNav }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNav(-1);
      if (e.key === "ArrowRight") onNav(1);
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, onNav]);

  if (index === null) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 text-white text-3xl p-3 hover:text-brand transition"
      >
        <FaTimes />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNav(-1);
        }}
        aria-label="Previous"
        className="absolute left-4 text-white text-4xl p-3 hover:text-brand transition"
      >
        <FaChevronLeft />
      </button>

      {/* Image */}
      <img
        src={images[index]}
        alt=""
        onClick={(e) => e.stopPropagation()}
        className="max-w-[90vw] max-h-[85vh] object-contain"
      />

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNav(1);
        }}
        aria-label="Next"
        className="absolute right-4 text-white text-4xl p-3 hover:text-brand transition"
      >
        <FaChevronRight />
      </button>

      {/* Counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-sm">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}