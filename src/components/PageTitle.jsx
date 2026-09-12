import { Link } from "react-router-dom";

export default function PageTitle({ title, breadcrumb, image = "/img/banner1.jpg" }) {
  return (
    <section
      className="relative py-[135px] bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-[rgba(0,37,74,0.75)]" />
      <div className="container relative mx-auto max-w-[1170px] px-4 z-10 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-white text-3xl font-bold uppercase">{title}</h1>
        <div className="text-white font-semibold text-sm mt-4 md:mt-0">
          <Link to="/" className="hover:text-brand transition">Home</Link>
          <span className="mx-2">/</span>
          <span>{breadcrumb}</span>
        </div>
      </div>
    </section>
  );
}