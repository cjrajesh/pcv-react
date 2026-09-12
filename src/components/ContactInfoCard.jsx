import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope } from "react-icons/fa";

export default function ContactInfoCard({ icon: Icon, title, children }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="shrink-0 w-14 h-14 flex items-center justify-center">
        <Icon className="text-brand text-4xl" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-[#222] mb-2">{title}</h3>
        <div className="text-[#848484] text-sm leading-6">{children}</div>
      </div>
    </div>
  );
}

export const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    content: (
      <>
        DP - 12, Industrial Estate,
        <br />
        Thirumudivakkam, Chennai 600 044,
        <br />
        Tamilnadu, India
      </>
    ),
  },
  {
    icon: FaMobileAlt,
    title: "Phone Number",
    content: (
      <>
        +91-44–24780698
        <br />
        09444117873
        <br />
        09444022452
      </>
    ),
  },
  {
    icon: FaEnvelope,
    title: "E-Mail & Web",
    content: (
      <>
        pcv_valves@yahoo.co.in
        <br />
        www.processcontrolvalve.com
      </>
    ),
  },
];