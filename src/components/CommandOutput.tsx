import { useState, useEffect } from 'react';

interface CommandOutputProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function CommandOutput({ children, delay = 0, className = "" }: CommandOutputProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!visible) return null;

  return (
    <div className={`pl-0 text-[#98c379] animate-in fade-in duration-300 text-xs sm:text-sm ${className}`}>
      {children}
    </div>
  );
}
