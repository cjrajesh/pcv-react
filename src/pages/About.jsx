import PageTitle from "../components/PageTitle";

export default function About() {
  return (
    <>
      <PageTitle title="about us" breadcrumb="about us" />

      {/* About Us section */}
      <section className="bg-[#f7f7f7] py-[80px] pb-[50px]">
        <div className="container mx-auto max-w-[1170px] px-4">
          <div className="text-center mb-[50px]">
            <h2 className="relative inline-block text-3xl uppercase font-medium pb-3
                           after:content-[''] after:absolute after:bottom-0 after:left-1/2
                           after:-translate-x-1/2 after:w-[56px] after:h-[3px] after:bg-brand">
              about <span className="text-brand">us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <h3 className="text-xl font-semibold mb-4">
                List of all of our about us goes here!
              </h3>
              <div className="text-[#848484] text-base leading-7 space-y-4">
                <p>
                  Time never stands still so we can never rest on our laurels. Ever quickening
                  technological progress; constantly changing market developments and individual
                  customer requirements are the biggest challenges for us in current times.
                </p>
                <p>
                  PCV India face these challenges with great strength, born from the minds of our
                  innovative and experienced team. To achieve these goals we bring together our
                  designers, manufacturing experts, sales engineers and technicians to work with
                  our dedicated suppliers to produce the best valve components in the world!
                </p>
                <p>
                  In the future, we shall be poised to offer ever better top-quality products for
                  demanding markets with their ever increasing needs and performance requirements.
                </p>
                <p>
                  Through all of this PCV India will always remain close and personally approachable
                  to our business partners and our customers.
                </p>
              </div>
            </div>
            <div className="md:col-span-5">
              <img src="/img/abt.png" alt="About PCV" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Why PCV section */}
      <section
        className="bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/img/abt_bg.jpg')" }}
      >
        <div className="container mx-auto max-w-[1170px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-white py-[80px]">
              <h3 className="relative pb-2 mb-3 border-b border-[#8c8888] text-2xl font-semibold
                             after:content-[''] after:absolute after:bottom-0 after:left-0
                             after:w-[100px] after:h-[2px] after:bg-brand-light">
                Why PCV Valves ?
              </h3>
              <p className="text-sm leading-6">
                High Quality Premier Valve Components and Team
                <br />
                Process Control valves is dedicated in maintaining its reputation as the premier
                supplier of Valve components, Instrumentation and Process controls in India.
                Highley Trained processionals
                <br /><br />
                Our dynamic team of highly qualified trained professionals have brought us to our
                present level of competence, united with the time-honoured tradition of conducting
                business with integrity and unequalled service we continue to pursue our mission.
              </p>
            </div>

            <div className="text-white py-[80px]">
              <div className="bg-[#555] p-[55px] h-full">
                <h3 className="relative pb-2 mb-3 border-b border-[#8c8888] text-xl font-semibold
                               after:content-[''] after:absolute after:bottom-0 after:left-0
                               after:w-[100px] after:h-[2px] after:bg-brand-light">
                  ISO 9001:2015, ISO 14001:2015
                </h3>
                <p className="text-sm leading-6 mb-4">
                  Yes we are ISO 9001:2015, ISO 14001:2015 certified company
                </p>

                <h3 className="relative pb-2 mb-3 border-b border-[#8c8888] text-xl font-semibold
                               after:content-[''] after:absolute after:bottom-0 after:left-0
                               after:w-[100px] after:h-[2px] after:bg-brand-light">
                  Quality Certified
                </h3>
                <p className="text-sm leading-6 mb-4">
                  All our customers have certified our products are of great quality
                </p>

                <h3 className="relative pb-2 mb-3 border-b border-[#8c8888] text-xl font-semibold
                               after:content-[''] after:absolute after:bottom-0 after:left-0
                               after:w-[100px] after:h-[2px] after:bg-brand-light">
                  Certified Engineers
                </h3>
                <p className="text-sm leading-6">
                  All our company engineers are best in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}