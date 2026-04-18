"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 bg-surface-container-low/50 border-t border-black/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          {/* Left Side: Logo & Copyright */}
          <div className="flex flex-col gap-1">
            <span className="font-technical text-sm font-bold tracking-[0.15em] text-foreground uppercase">
              GET-RESPONSE
            </span>
            <p className="text-muted-foreground text-[11px] leading-relaxed tracking-wide">
              © {new Date().getFullYear()} get-response CLI. Built for precision.
            </p>
          </div>

          {/* Right Side: Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link href="/docs" className="text-[12px] font-medium text-muted-foreground hover:text-primary transition-colors tracking-tight">
              Documentation
            </Link>
            <Link href="https://github.com/Swpn0neel/get-response" className="text-[12px] font-medium text-muted-foreground hover:text-primary transition-colors tracking-tight">
              GitHub
            </Link>
            <Link href="https://www.npmjs.com/package/get-response" className="text-[12px] font-medium text-muted-foreground hover:text-primary transition-colors tracking-tight">
              NpmJS
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
