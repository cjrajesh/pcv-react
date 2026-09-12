import PageTitle from "../components/PageTitle";
import ContactInfoCard, { contactInfo } from "../components/ContactInfoCard";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <PageTitle
        title="Contact us"
        breadcrumb="Contact us"
        image="/img/banner2.jpg"
      />

      {/* Info cards */}
      <section className="py-16 border-b border-[#ededed]">
        <div className="container mx-auto max-w-[1170px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {contactInfo.map((info, i) => (
              <ContactInfoCard key={i} icon={info.icon} title={info.title}>
                {info.content}
              </ContactInfoCard>
            ))}
          </div>
        </div>
      </section>

{/* Form */}
<section className="py-[80px]">
  <div className="container mx-auto max-w-[1170px] px-4">
    <div className="text-center mb-12">
      <h2 className="relative inline-block text-3xl uppercase font-medium pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[55px] after:h-[3px] after:bg-brand">
        Get In <span className="text-brand">Touch</span>
      </h2>
    </div>
    <div className="max-w-[900px] mx-auto">
      <ContactForm />
    </div>
  </div>
</section>

      {/* Map */}
      <section>
        <iframe
          title="Process Control Valves India — Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15552.0297986917!2d80.0849887247925!3d12.971374921594352!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x48e78c6a133665a8!2sProcess+Control+Valves+India!5e0!3m2!1sen!2sin!4v1565070042074!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}