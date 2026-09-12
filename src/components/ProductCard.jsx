export default function ProductCard({ image, title, description }) {
  return (
    <article className="text-center">
      <figure className="flex justify-center mb-4">
        <img src={image} alt={title} className="w-[300px] max-w-full" />
      </figure>
      <div className="text-center px-2">
        <a
          href="#"
          className="inline-block text-xl font-semibold text-[#222] hover:text-brand transition mb-3"
        >
          {title}
        </a>
        <p
          className="text-[#848484] text-sm leading-6"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </article>
  );
}