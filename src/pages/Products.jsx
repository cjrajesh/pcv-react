import PageTitle from "../components/PageTitle";
import ProductCard from "../components/ProductCard";

const products = [
  {
    image: "/img/product/1.jpg",
    title: "Gate Plates",
    description:
      "Materials like SS 304, SS 316, SS 317, SS 2205, SS 410, 17.4 PH, Hastelloy &amp; Alloy 20 - Knife Gate Valve <strong>Gate Plates</strong> manufacturing in accordance to the standard / Drawings. Sizes from 2” – 56”",
  },
  {
    image: "/img/product/2.jpg",
    title: "Spare Diaphragm",
    description:
      "Various Rubber Material like Natural, EPDM, Butyl, Nitrile, Neoprene PTFE Teflon, Hypalon and food grade Diaphragms etc,<br /><br /><strong>Suitable for Diaphragm Valves</strong><br />Valve Size: 15NB - 300NB in Weir Type &amp; 25NB - 200NB in Straight through type Diaphragm Valves.",
  },
];

export default function Products() {
  return (
    <>
      {/* Page title — uses banner4.jpg instead of the default banner1.jpg */}
      <section
        className="relative py-[135px] bg-cover bg-center"
        style={{ backgroundImage: "url('/img/banner4.jpg')" }}
      >
        <div className="absolute inset-0 bg-[rgba(0,37,74,0.75)]" />
        <div className="container relative mx-auto max-w-[1170px] px-4 z-10 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-white text-3xl font-bold uppercase">Products</h1>
          <div className="text-white font-semibold text-sm mt-4 md:mt-0">
            <a href="/" className="hover:text-brand transition">Home</a>
            <span className="mx-2">/</span>
            <span>Products</span>
          </div>
        </div>
      </section>

      <section className="py-[80px]">
        <div className="container mx-auto max-w-[1170px] px-4">
          <div className="mb-12">
            <h2 className="relative inline-block text-3xl uppercase font-medium pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[55px] after:h-[3px] after:bg-brand">
              Our <span className="text-brand">Products</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {products.map((p, i) => (
              <ProductCard key={i} {...p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}