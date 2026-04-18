"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CircleCheck, CircleX, Download, Copy, Check, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const comparisonFeatures = [
  {
    icon: <CircleCheck className="h-5 w-5 text-green-500 shrink-0" />,
    title: "Core AI Engine",
    description: "Full Google Gemini's conversational capabilities",
  },
  {
    icon: <CircleCheck className="h-5 w-5 text-green-500 shrink-0" />,
    title: "Sub-second Latency",
    description: "Optimized for immediate and snappy responses",
  },
  {
    icon: <CircleX className="h-5 w-5 text-muted-foreground/50 shrink-0" />,
    title: "No Heavy Dependencies",
    description: "Excludes built-in OCR, PDF, and Mermaid generation",
  },
  {
    icon: <Download className="h-5 w-5 text-primary shrink-0" />,
    title: "80% Smaller Footprint",
    description: "Installs in seconds on any environment seamlessly",
  },
];

export default function Comparison() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("npm install get-response-lite -g");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <section id="comparison" className="py-48 bg-background overflow-hidden relative scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="bg-primary/5 text-primary border border-primary/10 px-3 py-1.5 font-technical text-[10px] tracking-widest uppercase rounded-full">
                <div className="w-2 h-2 rounded-full bg-primary/40 mr-2 animate-pulse" />
                Alternative Version
              </Badge>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-foreground"
            >
              Looking for something lighter?
            </motion.h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              <p>
                Meet <span className="font-bold text-foreground">get-response-lite</span>. A streamlined, high-performance alternative designed for environments where minimal footprint and maximum speed are critical.
              </p>
              <p>
                It retains the core terminal-based AI engine while omitting heavy dependencies like OCR, PDF parsing, and Mermaid diagram generation. Perfect for CI/CD pipelines, constrained servers, or developers who prefer a pure text-to-text experience.
              </p>
            </div>

            <div className="flex items-stretch gap-4 mt-4 w-full sm:w-fit">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-5 rounded-xl bg-surface border border-border/50 shadow-sm flex items-center gap-3 font-mono text-sm group flex-1"
              >
                <div className="flex items-center gap-3 flex-1 basis-0 min-w-0">
                  <span className="text-emerald-500 font-bold">$</span>
                  <span className="text-foreground font-medium truncate">npm install get-response-lite -g</span>
                </div>
                <button 
                  onClick={handleCopy}
                  className="p-2 hover:bg-foreground/5 rounded-lg transition-all text-muted-foreground hover:text-foreground shrink-0 ml-4 group/btn"
                  title="Copy to clipboard"
                >
                  {copied ? <Check size={16} className="text-emerald-500 animate-in zoom-in-50" /> : <Copy size={16} className="group-hover/btn:scale-110 transition-transform" />}
                </button>
              </motion.div>
              <Link 
                href="https://www.npmjs.com/package/get-response-lite"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 flex items-center justify-center bg-surface border border-border/50 rounded-xl transition-all text-muted-foreground hover:text-foreground shrink-0 group/link shadow-sm hover:shadow-md hover:bg-foreground/[0.02]"
                title="visit the npm page"
              >
                <ArrowUpRight size={22} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Comparison Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-surface rounded-[2.5rem] p-12 md:p-16 text-foreground shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:shadow-primary/5 border border-border/50 relative"
          >
            <h3 className="text-2xl font-bold mb-10 text-foreground">Lite vs Standard</h3>
            
            <div className="space-y-8">
              {comparisonFeatures.map((feature, i) => (
                <div key={i} className="flex gap-5">
                  <div className="mt-1">{feature.icon}</div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-lg leading-none">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Subtle separator */}
            {/* <div className="absolute top-[5.5rem] left-12 right-12 h-[1px] mt-4 bg-black/5" /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
