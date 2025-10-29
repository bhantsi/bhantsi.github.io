interface TerminalSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function TerminalSection({ children, className = "" }: TerminalSectionProps) {
  return (
    <div className={`mb-4 sm:mb-6 ${className}`}>
      {children}
    </div>
  );
}
