// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdDownload, MdEmail } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
        priority
      />

      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-12 gap-y-8">
        {/* Teks kiri */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Halo, <br />
            Saya{' '}
            <span className="text-pink-500">{personalData.name}</span>
            {`, `}
            <span className="text-[#16f2b3]">{personalData.designation}</span>
            .
          </h1>

          <p className="mt-6 text-gray-300 text-sm lg:text-base leading-relaxed max-w-lg">
            Lulusan D-III Kebidanan dari Politeknik Cendrawasih Palu 🎓 — siap memberikan pelayanan kebidanan profesional &amp; berempati.
          </p>

          {/* Ikon sosial */}
          <div className="my-10 flex items-center gap-5">
            <Link
              href={personalData.facebook}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaFacebook size={28} />
            </Link>
            <Link
              href={personalData.instagram}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaInstagram size={28} />
            </Link>
            <Link
              href={`mailto:${personalData.email}`}
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <MdEmail size={28} />
            </Link>
          </div>

          {/* Tombol aksi */}
          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button id="btn-contact-me" className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Hubungi Saya</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              id="btn-get-cv"
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>Unduh CV</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* Gambar kebidanan kanan */}
        <div className="order-1 lg:order-2 flex justify-center items-center">
          <div className="relative">
            {/* Border gradient melingkar */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-violet-600 to-pink-500 p-[2px] animate-pulse rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden border-2 border-pink-500/30 shadow-2xl shadow-pink-500/20">
              <Image
                src="/midwifery-hero.jpg"
                alt="Ilustrasi Kebidanan - Ria Dei Mita"
                width={480}
                height={360}
                className="rounded-3xl object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                priority
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl px-4 py-3 flex items-center gap-3">
                <span className="text-2xl">🩺</span>
                <div>
                  <p className="text-white text-sm font-semibold">Ahli Madya Kebidanan</p>
                  <p className="text-pink-300 text-xs">Politeknik Cendrawasih Palu · 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;