const brands = ["/img/c-1.jpg", "/img/c-2.jpg", "/img/c-3.jpg", "/img/c-4.jpg", "/img/c-5.jpg"];

export default function BrandStrip() {
  // Duplicate for a continuous look
  const items = [...brands, ...brands];
  return (
    <section className="py-[50px] bg-[#ededed]">
      <div className="container mx-auto max-w-[1170px] px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {items.slice(0, 10).map((src, i) => (
            <a
              key={i}
              href="#"
              className="border border-dashed border-[#dadada] h-[105px] flex items-center justify-center hover:border-brand transition"
            >
              <img src={src} alt="" className="max-h-[70px] mx-auto" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}