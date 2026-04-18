"use client";

import { motion } from "framer-motion";
import { 
  Bot, 
  FolderOpen, 
  Terminal, 
  Binary 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Gemini Integration",
    description: "Experience near-instant responses powered by Google's Gemini 2.5 Flash model. Engineered for low latency, allowing conversational interactions directly from your prompt.",
    icon: <Bot className="h-6 w-6 text-[#0058be]" />,
    span: "md:col-span-2",
    extra: (
      <div className="mt-8 p-4 rounded-lg bg-surface-container border border-black/5 font-mono text-sm text-foreground/70">
        <span className="opacity-50 mr-2">{">"}</span>
        get-response "Refactor this python script for better performance"
      </div>
    )
  },
  {
    title: "Context-Aware",
    description: "It understands your environment. Interact naturally with files and folders in your current directory without manual copying and pasting.",
    icon: <FolderOpen className="h-6 w-6 text-[#0058be]" />,
    span: "md:col-span-1"
  },
  {
    title: "Terminal Automation",
    description: "Describe the task you want to achieve in plain English, and let the AI generate the exact shell commands needed to execute it.",
    icon: <Terminal className="h-6 w-6 text-[#0058be]" />,
    span: "md:col-span-1"
  },
  {
    title: "Mermaid Diagrams",
    description: "Visualize your codebase instantly. Ask get-response to generate Mermaid.js diagrams mapping out class structures or data flows directly in your terminal output.",
    icon: <Binary className="h-6 w-6 text-[#0058be]" />,
    span: "md:col-span-2"
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-surface-container-low scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 text-center items-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight max-w-3xl"
          >
            Built for High-Precision <br /> 
            <span className="text-secondary opacity-60">Developer Workflows</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl text-lg text-muted-foreground"
          >
            We've stripped away the noise. Every feature is designed to augment your 
            technical rigor while maintaining editorial sophistication.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`${feature.span}`}
            >
              <Card className="h-full border-none bg-surface-container-lowest rounded-[1.5rem] shadow-sm hover:shadow-md transition-all duration-300">
                <CardHeader className="pt-10 pl-10 pr-10">
                  <div className="w-12 h-12 rounded-xl bg-[#0058be]/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-black">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pl-10 pb-10 pr-10">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {feature.description}
                  </p>
                  {feature.extra}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
