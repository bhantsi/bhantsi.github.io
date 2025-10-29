import { useState, useEffect } from 'react';

interface CommandLineProps {
  username?: string;
  host?: string;
  command: string;
  delay?: number;
}

export function CommandLine({
  username = "user",
  host = "github",
  command,
  delay = 0
}: CommandLineProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!visible) return null;

  return (
    <div className="flex items-start gap-0.5 sm:gap-1 animate-in fade-in duration-300 text-xs sm:text-sm overflow-x-auto">
      <span className="text-[#ff6b6b] select-none flex-shrink-0">
        {username}@{host}
      </span>
      <span className="text-[#4ecdc4] select-none flex-shrink-0">:</span>
      <span className="text-[#95e1d3] select-none flex-shrink-0">~</span>
      <span className="text-white select-none flex-shrink-0 mr-1">$</span>
      <span className="text-[#f7f7f7] break-words">{command}</span>
    </div>
  );
}
