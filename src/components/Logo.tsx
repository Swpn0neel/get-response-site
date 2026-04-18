import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className, size = 32 }: LogoProps) {
  return (
    <div className={cn("relative flex items-center justify-center shrink-0", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="2" y="6" width="36" height="28" rx="6" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="2.5"/>
        <rect x="4" y="8" width="32" height="6" rx="2" fill="currentColor" fillOpacity="0.1"/>
        <path d="M12 20L15 23L12 26" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="18" y1="26" x2="24" y2="26" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    </div>
  );
}
