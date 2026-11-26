// @flow strict

import * as React from 'react';
import { FaStethoscope } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full overflow-hidden">
      {/* Top gradient line */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Header */}
      <div className="px-4 lg:px-8 py-4 lg:py-5 flex items-center gap-3">
        <span className="text-pink-500">
          <FaStethoscope size={18} />
        </span>
        <p className="text-[#16f2b3] text-base lg:text-xl font-semibold">
          {project.name}
        </p>
      </div>

      {/* Content */}
      <div className="border-t-[2px] border-indigo-900 px-4 lg:px-8 py-5 lg:py-7 flex flex-col gap-4">

        {/* Description */}
        <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
          {project.description}
        </p>

        {/* Tools / Kompetensi */}
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 font-medium"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Role */}
        <div className="flex items-center gap-2 text-sm text-violet-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-violet-400 inline-block"></span>
          {project.role}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;