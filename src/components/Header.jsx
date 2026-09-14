import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/gallery", label: "Gallery" },
  { to: "/enquiry", label: "Enquiry" },
  { to: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-brand-dark text-white text-[13px] py-[7px] border-b border-brand font-roboto">
        <div className="container mx-auto max-w-[1170px] px-4 flex flex-wrap justify-between items-center">
          <ul className="flex gap-6">
            <li className="flex items-center gap-2">
              <FaPhone className="text-white" />
              <a href="tel:+918428022453" className="hover:text-brand-light transition">Call: +91-8428022453</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-white" />
              <a href="mailto:info@processcontrolvalves.com" className="hover:text-brand-light transition">
                Email: info@processcontrolvalves.com
              </a>
            </li>
          </ul>
          <div className="hidden md:flex divide-x divide-white border-x border-white">
            <a href="#" className="px-4 py-1 hover:text-brand transition"><FaFacebookF /></a>
            <a href="#" className="px-4 py-1 hover:text-brand transition"><FaTwitter /></a>
            <a href="#" className="px-4 py-1 hover:text-brand transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Main menu */}
      <section className="bg-white shadow-[0_2px_5px_0_rgba(0,0,0,0.16),0_2px_10px_0_rgba(0,0,0,0.12)]">
        <div className="container mx-auto max-w-[1170px] px-4">
         <div className="flex items-center justify-between py-3 md:py-4">
<Link to="/" className="shrink-0 flex items-center">
  <img
    src="/img/logo.png"
    alt="PCV Valves"
    className="h-12 md:h-14 lg:h-16 w-auto transition-transform duration-300 hover:scale-105"
  />
</Link>

            <button
              className="md:hidden text-2xl text-brand"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              ☰
            </button>

            <nav className="hidden md:block">
              <ul className="flex">
                {navLinks.map(({ to, label }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        `px-4 py-[8px] text-sm font-bold uppercase font-roboto border-b-[3px] transition ${
                          isActive
                            ? "text-brand border-brand"
                            : "text-black border-transparent hover:text-brand"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Mobile menu */}
          {open && (
            <nav className="md:hidden pb-4">
              <ul className="flex flex-col">
                {navLinks.map(({ to, label }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-3 uppercase font-semibold text-sm border-t border-brand ${
                          isActive ? "text-brand bg-gray-50" : "text-black"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </section>
    </>
  );
}