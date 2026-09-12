import { Link } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import FeatureGrid from "../components/FeatureGrid";
import MachineGrid from "../components/MachineGrid";
import CounterSection from "../components/CounterSection";
import BrandStrip from "../components/BrandStrip";

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Welcome / About section */}
      <section className="bg-[#f7f7f7] py-[80px] pb-[50px]">
        <div className="container mx-auto max-w-[1170px] px-4">
          <div className="text-center mb-12">
            <h2 className="inline-block text-3xl uppercase font-medium">
              <span className="text-[#666] font-light">Welcome to </span>
              <span className="text-brand font-semibold">Process Control Valves</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <h3 className="text-xl font-semibold mb-4">
                List of all of our about us goes here !
              </h3>
              <p className="text-[#848484] text-base leading-7 mb-4 text-justify">
                Time never stands still so we can never rest on our laurels. Ever quickening
                technological progress; constantly changing market developments and individual
                customer requirements are the biggest challenges for us in current times.
              </p>
              <p className="text-[#848484] text-base leading-7 mb-6 text-justify">
                In the future, we shall be poised to offer ever better top-quality products for
                demanding markets with their ever increasing needs and performance requirements.
              </p>
              <Link
                to="/about"
                className="inline-block bg-brand text-white uppercase text-sm font-bold px-7 py-3 hover:bg-white hover:text-brand border-2 border-brand transition"
              >
                read more
              </Link>
            </div>
            <div className="md:col-span-5">
              <img
                src="/img/building.jpg"
                alt="Building"
                className="w-full p-1 border border-[#dad4d4]"
              />
            </div>
          </div>
        </div>
      </section>

      <FeatureGrid />
      <MachineGrid />
      <CounterSection />
      <BrandStrip />
    </>
  );
}