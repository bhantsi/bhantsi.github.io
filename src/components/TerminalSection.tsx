interface TerminalSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function TerminalSection({ children, className = "" }: TerminalSectionProps) {
  return (
    <div className={`mb-6 ${className}`}>
      {children}
    </div>
  );
}
