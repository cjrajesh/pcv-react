import { Link } from "react-router-dom";
import { FaHome, FaPhoneSquare, FaEnvelope, FaGlobe, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/enquiry", label: "Enquiry" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      className="bg-cover bg-center text-white font-roboto"
      style={{ backgroundImage: "url('/img/footer.jpg')" }}
    >
      <div className="container mx-auto max-w-[1170px] px-4">
        <div className="py-[60px]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* About */}
            <div className="md:col-span-4">
              <Link to="/" className="inline-block">
                <img src="/img/logo-footer.png" alt="PCV Valves" className="mb-6 max-w-[180px]" />
              </Link>
              <p className="text-sm leading-7">
                Time never stands still so we can never rest on our laurels. Ever quickening
                technological progress; constantly changing market developments and individual
                customer requirements are the biggest challenges for us in current times.
              </p>
              <Link
                to="/contact"
                className="inline-block mt-5 border-b border-white text-white uppercase text-sm font-bold tracking-wide hover:text-brand transition"
              >
                contact us
              </Link>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-medium mb-8">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map(({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="relative pl-4 text-sm hover:text-brand transition before:content-['\203A'] before:absolute before:left-0 before:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* QR Code */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-medium mb-8">QR Code</h3>
              <img src="/img/qr-code.jpg" alt="QR Code" className="w-[150px]" />
            </div>

            {/* Contact */}
            <div className="md:col-span-4">
              <h3 className="text-2xl font-medium mb-8">our location</h3>
              <h5 className="text-white font-extrabold text-xl mb-2">Process Control Valves</h5>
              <p className="flex gap-2 text-sm leading-7">
                <FaHome className="text-lg mt-1 shrink-0" />
                <span>DP - 12, Industrial Estate,<br />Thirumudivakkam, Chennai 600 044,<br />Tamilnadu, India</span>
              </p>
              <p className="flex gap-2 text-sm leading-7 mt-1">
                <FaPhoneSquare className="text-lg mt-1 shrink-0" />
                <span>Phone No: +91-44–24780698.<br />09444117873, 09444022452</span>
              </p>
              <p className="flex gap-2 text-sm leading-7 mt-1">
                <FaEnvelope className="text-lg mt-1 shrink-0" />
                <span>pcv_valves@yahoo.co.in</span>
              </p>
              <p className="flex gap-2 text-sm leading-7 mt-1">
                <FaGlobe className="text-lg mt-1 shrink-0" />
                <span>www.processcontrolvalve.com</span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-brand py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm flex items-center gap-2">
              Copyright @ Process Control Valves {new Date().getFullYear()}
          </div>
          <div className="flex divide-x divide-white border-x border-white">
            <a href="#" className="px-4 py-1 hover:text-brand transition"><FaFacebookF /></a>
            <a href="#" className="px-4 py-1 hover:text-brand transition"><FaTwitter /></a>
            <a href="#" className="px-4 py-1 hover:text-brand transition"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}