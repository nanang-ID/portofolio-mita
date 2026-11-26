// @flow strict

import { assetPath } from "@/utils/asset-path";
import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import GlowCard from "../../helper/glow-card";

const experienceIcons = {
  1: "🤰",
  2: "🏥",
  3: "🩺",
  4: "👶",
  5: "💬",
  6: "🌸",
};

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src={assetPath("/section.svg")}
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
        priority
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Pengalaman Praktik
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Panel Ringkasan Klinis */}
          <div className="lg:col-span-4 rounded-xl border border-[#2a2e5a] bg-gradient-to-br from-[#161a38] to-[#101123] p-6 space-y-4 lg:sticky lg:top-24">
            <div className="w-12 h-12 rounded-xl bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-2xl" aria-hidden="true">
              🩺
            </div>
            <div>
              <p className="text-xs font-medium text-[#16f2b3] uppercase tracking-wider">
                Ringkasan Klinis
              </p>
              <h3 className="text-lg font-semibold text-white mt-1">
                6 Bidang Asuhan Kebidanan
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                Pengalaman praktik klinik komprehensif selama menempuh pendidikan D-III Kebidanan di Politeknik Cendrawasih Palu.
              </p>
            </div>
            <div className="pt-3 border-t border-[#25213b] flex items-center justify-between text-xs sm:text-sm">
              <span className="text-gray-400">Periode Praktik</span>
              <span className="text-[#16f2b3] font-medium">2022 – 2025</span>
            </div>
          </div>

          {/* Grid Pengalaman Praktik */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {experiences.map((exp) => (
              <GlowCard key={exp.id} identifier={`experience-${exp.id}`}>
                <div className="p-4 relative h-full">
                  <Image
                    src={assetPath("/blur-23.svg")}
                    alt="Blur Background"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 left-0 opacity-80 pointer-events-none"
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="text-xl transition-transform duration-300 hover:scale-125" aria-hidden="true">
                        {experienceIcons[exp.id] || "🩺"}
                      </span>
                      <p className="text-sm sm:text-base font-semibold uppercase text-white">
                        {exp.title}
                      </p>
                    </div>
                    <p className="text-xs text-pink-400 font-medium mb-1.5">
                      {exp.company}
                    </p>
                    {exp.description && (
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    )}
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;