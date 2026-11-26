// @flow strict
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import GlowCard from "../../helper/glow-card";

const educationIcons = {
  1: "🎓",
  2: "🏫",
  3: "📚",
};

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
        priority
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Riwayat Pendidikan
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Panel Kualifikasi Akademik */}
          <div className="lg:col-span-4 rounded-xl border border-[#2a2e5a] bg-gradient-to-br from-[#161a38] to-[#101123] p-6 space-y-4 lg:sticky lg:top-24">
            <div className="w-12 h-12 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-2xl" aria-hidden="true">
              🎓
            </div>
            <div>
              <p className="text-xs font-medium text-[#16f2b3] uppercase tracking-wider">
                Kualifikasi Akademik
              </p>
              <h3 className="text-lg font-semibold text-white mt-1">
                Ahli Madya Kebidanan
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                Menyelesaikan pendidikan D-III Kebidanan pada tahun 2025 di Politeknik Cendrawasih Palu.
              </p>
            </div>
            <div className="pt-3 border-t border-[#25213b] flex items-center justify-between text-xs sm:text-sm">
              <span className="text-gray-400">Gelar</span>
              <span className="text-pink-400 font-semibold">A.Md.Keb</span>
            </div>
          </div>

          {/* Timeline Pendidikan */}
          <div className="lg:col-span-8 relative pl-6 border-l-2 border-[#2a2e5a] space-y-5">
            {educations.map((education) => {
              const isPrimary = education.id === 1;
              return (
                <div key={education.id} className="relative">
                  <span
                    className={`absolute -left-[33px] top-6 w-3.5 h-3.5 rounded-full ring-4 ring-[#0d1224] ${
                      isPrimary ? "bg-pink-500" : "bg-violet-500"
                    }`}
                  />
                  <GlowCard identifier={`education-${education.id}`}>
                    <div className="p-4 sm:p-5 relative text-white">
                      <Image
                        src="/blur-23.svg"
                        alt="Blur Background"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 left-0 opacity-80 pointer-events-none"
                      />
                      <div className="relative z-10 flex items-start gap-4">
                        <span className="text-2xl shrink-0 mt-0.5 transition-transform duration-300 hover:scale-125" aria-hidden="true">
                          {educationIcons[education.id] || "🎓"}
                        </span>
                        <div className="w-full">
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                            <p className="text-sm sm:text-lg font-semibold uppercase">
                              {education.title}
                            </p>
                            <span className="text-xs sm:text-sm text-[#16f2b3] font-medium shrink-0">
                              {education.duration}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-300">
                            {education.institution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;