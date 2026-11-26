"use client";
// @flow strict
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { label: "TENTANG", id: "about" },
  { label: "PENGALAMAN", id: "experience" },
  { label: "KOMPETENSI", id: "skills" },
  { label: "PENDIDIKAN", id: "education" },
  { label: "KARYA", id: "projects" },
  { label: "KONTAK", id: "contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <nav className="bg-transparent relative z-[99]">
      <div className="flex flex-wrap items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#16f2b3] text-3xl font-bold"
          >
            MITA
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={isOpen}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white border border-[#25213b] bg-[#101123] hover:text-[#16f2b3] transition-colors"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex mt-3 w-full flex-col items-start gap-1 rounded-xl border border-[#25213b] bg-[#101123]/95 p-3 backdrop-blur-md md:mt-0 md:w-auto md:flex-row md:items-center md:gap-0 md:space-x-1 md:border-0 md:bg-transparent md:p-0`}
          id="navbar-default"
        >
          {navItems.map((item) => (
            <li key={item.id} className="w-full md:w-auto">
              <a
                className="block px-4 py-2 no-underline outline-none hover:no-underline cursor-pointer"
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-500">
                  {item.label}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
