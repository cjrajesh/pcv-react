import PageTitle from "../components/PageTitle";
import ContactForm from "../components/ContactForm";

export default function Enquiry() {
  return (
    <>
      <PageTitle
        title="Enquire us"
        breadcrumb="Enquire us"
        image="/img/banner3.jpg"
      />

      <section className="py-[80px]">
        <div className="container mx-auto max-w-[1170px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-7">
              <h2 className="text-3xl font-medium mb-8">
                Enquire <span className="text-brand">Us</span>
              </h2>
              <ContactForm submitLabel="send Enquiry" />
            </div>

            <div className="md:col-span-5">
              <img
                src="/img/enquiry.jpg"
                alt="Enquiry"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}