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
      <div className="bg-brand-light text-white text-[13px] py-[7px] border-b border-brand font-roboto">
        <div className="container mx-auto max-w-[1170px] px-4 flex flex-wrap justify-between items-center">
          <ul className="flex gap-6">
            <li className="flex items-center gap-2">
              <FaPhone className="text-white" />
              <a href="tel:+914424780698" className="hover:text-brand transition">Call: +91-44–24780698.</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-white" />
              <a href="mailto:pcv_valves@yahoo.co.in" className="hover:text-brand transition">
                Email: pcv_valves@yahoo.co.in
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
          <div className="flex items-center justify-between py-2">
            <Link to="/" className="shrink-0">
              <img src="/img/logo.png" alt="PCV Valves" className="max-w-[180px]" />
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