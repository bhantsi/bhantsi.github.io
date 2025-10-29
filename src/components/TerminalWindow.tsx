import { useState, useEffect } from 'react';

interface TerminalWindowProps {
  children: React.ReactNode;
}

export function TerminalWindow({ children }: TerminalWindowProps) {
  return (
    <div className="w-full max-w-5xl mx-auto px-2 sm:px-0">
      {/* Window Controls */}
      <div className="bg-[#2d2d2d] rounded-t-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2">
        <div className="flex gap-1.5 sm:gap-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 transition-colors" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80 transition-colors" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80 transition-colors" />
        </div>
        <div className="ml-2 sm:ml-4 text-[#8b8b8b] text-xs sm:text-sm">
          zsh — 80×24
        </div>
      </div>

      {/* Terminal Body */}
      <div className="bg-[#1e1e1e] rounded-b-lg p-3 sm:p-4 md:p-6 font-mono text-xs sm:text-sm overflow-x-auto shadow-2xl border border-[#2d2d2d]">
        {children}
      </div>
    </div>
  );
}
