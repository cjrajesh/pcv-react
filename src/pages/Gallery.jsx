import PageTitle from "../components/PageTitle";
import GalleryGrid from "../components/GalleryGrid";

const images = Array.from({ length: 20 }, (_, i) => `/img/gallery/${i + 1}.jpg`);

export default function Gallery() {
  return (
    <>
      <PageTitle
        title="Our Gallery"
        breadcrumb="Our Gallery"
        image="/img/banner5.jpg"
      />

      <section className="py-[80px]">
        <div className="container mx-auto max-w-[1400px] px-4">
          <GalleryGrid images={images} />
        </div>
      </section>
    </>
  );
}