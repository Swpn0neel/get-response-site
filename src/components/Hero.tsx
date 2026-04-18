"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Link from "next/link";

const commands = [
  { type: "input", text: "npm i get-response -g", delay: 0 },
  { type: "output", text: "added 42 packages in 2s", delay: 1000 },
  { type: "input", text: "npx get-response -d ./src \"Explain this directory structure\"", delay: 2000 },
  { type: "status", text: "Analyzing 14 files...", delay: 4500 },
  { 
    type: "ai", 
    text: "This is a Node.js project using Express. The main entry point is `index.js`.", 
    delay: 6000 
  },
];

function Typewriter({ text, speed = 40, delay = 0, onComplete }: { 
  text: string; 
  speed?: number; 
  delay?: number;
  onComplete?: () => void 
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setIsStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [displayedText, isStarted, text, speed, onComplete]);

  return <span>{displayedText}</span>;
}

interface HeroProps {
  version?: string;
}

export default function Hero({ version = "v1.10.x" }: HeroProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative pt-32 pb-48 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8 max-w-2xl">
            <div className="flex flex-col gap-1">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-fit inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/5 mb-4"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.1em] text-primary uppercase">
                  {version === "v1.10.x" ? "STABLE v1.10.x" : `${version} IS LIVE`}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                  Get Response. <br />
                  <span className="text-shadow-sm text-primary">A Terminal-Based <br /> AI Powerhouse</span>
                </h1>
              </motion.div>
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Experience technical rigor and editorial sophistication. Our monochrome 
              design system treats UI as architectural layers, bringing clarity 
              to the high-precision world of developer tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                render={<Link href="https://www.npmjs.com/package/get-response" target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                size="lg" 
                className="h-14 px-8 text-lg bg-primary hover:brightness-110"
              >
                Get Started <Play className="ml-2 h-4 w-4 fill-white" />
              </Button>
              <Button 
                render={<Link href="/docs" />} 
                nativeButton={false}
                size="lg" 
                variant="outline" 
                className="h-14 px-8 text-lg border-2"
              >
                View Documentation
              </Button>
            </motion.div>
          </div>

          {/* Right Terminal Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-3xl group-hover:bg-primary/10 transition-colors" />
            
            <div className="relative bg-[#0b1219] rounded-2xl overflow-hidden shadow-2xl border border-white/5">
              {/* Header */}
              <div className="bg-[#080b10] px-4 py-3 flex items-center gap-4 border-b border-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex-1 text-center pr-12">
                  <span className="text-[11px] font-mono text-white/30 tracking-tight">
                    bash — get-response
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-8 font-mono text-sm sm:text-base h-[400px] overflow-auto scrollbar-hide">
                <div className="flex flex-col gap-6">
                  {commands.map((cmd, i) => (
                    <div key={i}>
                      {cmd.type === "input" && activeStep >= i && (
                        <div className="flex gap-4 items-start">
                          <span className="text-[#22c55e] font-bold shrink-0">$</span>
                          <span className="text-zinc-100 break-all leading-relaxed">
                            <Typewriter 
                              text={cmd.text} 
                              delay={i === 0 ? 500 : 0} 
                              onComplete={() => {
                                if (i === activeStep) {
                                  setTimeout(() => setActiveStep(i + 1), 600);
                                }
                              }}
                            />
                            {activeStep === i && (
                              <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-2 h-5 bg-primary ml-1 translate-y-1"
                              />
                            )}
                          </span>
                        </div>
                      )}

                      {cmd.type === "output" && activeStep >= i && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          onAnimationComplete={() => {
                            if (i === activeStep) {
                              setTimeout(() => setActiveStep(i + 1), 400);
                            }
                          }}
                          className="text-zinc-500 font-medium pl-8"
                        >
                          {cmd.text}
                        </motion.div>
                      )}

                      {cmd.type === "status" && activeStep >= i && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex gap-4 items-start"
                        >
                          <span className="text-zinc-600 shrink-0">{"//"}</span>
                          <span className="text-zinc-500 italic">
                            <Typewriter 
                              text={cmd.text} 
                              delay={0} 
                              onComplete={() => {
                                if (i === activeStep) {
                                  setTimeout(() => setActiveStep(i + 1), 800);
                                }
                              }}
                            />
                          </span>
                        </motion.div>
                      )}

                      {cmd.type === "ai" && activeStep >= i && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                          className="ml-8 p-4 rounded-xl bg-primary/5 border-l-2 border-primary space-y-2"
                        >
                          <p className="text-[#58a6ff] leading-relaxed">
                            <Typewriter text={cmd.text} speed={25} delay={500} />
                          </p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
