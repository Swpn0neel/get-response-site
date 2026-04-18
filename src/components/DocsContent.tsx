"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Terminal, 
  Code, 
  Settings, 
  Search, 
  Network, 
  MousePointer2,
  FileText,
  FolderOpen,
  Image as ImageIcon,
  Copy,
  Check,
  ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const featuresData = [
  { title: "Gemini Integration", desc: "Uses Google’s latest Flash model for ultra-fast, conversational AI responses." },
  { title: "Contextual Awareness", desc: "Native support for files, directories, PDFs, and images (OCR) as model context." },
  { title: "Terminal Automation", desc: "Safely generate and execute shell commands with AI assistance and user confirmation." },
  { title: "Stack Exchange Research", desc: "Search and summarize Stack Overflow discussions directly within your workflow." },
];

const techStackData = [
  "Google Gemini",
  "Node.js Core",
  "Tesseract OCR",
  "Mermaid CLI",
  "pdf-parse-fork",
  "Chalk / Boxen",
  "Axios",
  "Nanospinner"
];

const architectureData = [
  { 
    title: "Core Engine", 
    desc: "Orchestrates chat sessions and context management.", 
    files: ["chat.js", "context.js"],
    icon: <Settings className="text-primary" size={20} />
  },
  { 
    title: "AI & External Services", 
    desc: "Direct integration with Google Gemini and Stack Exchange.", 
    files: ["ai.js", "stack.js"],
    icon: <Search className="text-primary" size={20} />
  },
  { 
    title: "System Automation", 
    desc: "Safe terminal command generation and execution.", 
    files: ["terminal.js", "mermaid.js"],
    icon: <Terminal className="text-primary" size={20} />
  },
  { 
    title: "User Experience", 
    desc: "Monochrome CLI UI and output formatting.", 
    files: ["display.js", "formatter.js"],
    icon: <MousePointer2 className="text-primary" size={20} />
  },
];

const contextFlags = [
  { type: "File", flag: "-f", example: "Explain this code", cmd: "-f ./auth.js", icon: <FileText size={16} /> },
  { type: "Directory", flag: "-d", example: "Find bugs", cmd: "-d ./src", icon: <FolderOpen size={16} /> },
  { type: "PDF", flag: "-p", example: "Summarize this paper", cmd: "-p ./paper.pdf", icon: <FileText size={16} className="text-blue-500" /> },
  { type: "Image (OCR)", flag: "-i", example: "What does this mean?", cmd: "-i ./screenshot.png", icon: <ImageIcon size={16} /> },
];

function CodeBlock({ code, label }: { code: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className={cn("relative group my-6", label && "mt-12")}>
      {label && (
        <div className="absolute top-[-12px] left-4 px-2 py-0.5 bg-surface text-[10px] font-bold uppercase tracking-widest text-primary border rounded-full z-10 shadow-sm">
          {label}
        </div>
      )}
      <div className="bg-zinc-950 rounded-xl overflow-hidden border border-white/10 shadow-xl transition-all hover:border-white/20">
        <div className="bg-zinc-900 px-4 py-3 flex items-center justify-between border-b border-white/5">
          <div className="flex gap-1.5 font-mono text-[10px] text-zinc-500 uppercase tracking-tighter">
            terminal — bash
          </div>
          <button 
            onClick={handleCopy}
            className="text-zinc-500 hover:text-white transition-all transform active:scale-95"
            title="Copy to clipboard"
          >
            {copied ? (
              <Check size={14} className="text-emerald-500" />
            ) : (
              <Copy size={14} />
            )}
          </button>
        </div>
        <pre className="p-4 font-mono text-sm text-zinc-300 overflow-x-auto selection:bg-primary/30">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

export default function DocsContent() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-8 space-y-24 scroll-smooth">
      {/* Intro */}
      <section id="intro" className="space-y-8 min-h-[40vh] flex flex-col justify-center">
        <div className="space-y-4">
          <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">
            Documentation
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
            Get Response <br />
            <span className="text-muted-foreground">Terminal-Based AI Powerhouse</span>
          </h1>
        </div>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
          A modern, modular CLI tool that brings the full potential of Google’s Gemini AI 
          directly to your terminal—designed for developers who want productive, 
          context-aware conversations and automations.
        </p>
      </section>

      {/* Key Features */}
      <section id="features" className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Key Features</h2>
          <div className="h-1 w-20 bg-primary/20 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuresData.map((feature, i) => (
            <div key={i} className="p-6 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-all group">
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">System Architecture</h2>
            <p className="text-muted-foreground">Highly decoupled modules designed for extensibility and performance.</p>
          </div>
          <a 
            href="https://github.com/Swpn0neel/get-response" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 text-white text-sm font-medium hover:bg-black transition-all"
          >
            <ExternalLink size={18} />
            View Repository
          </a>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {architectureData.map((item, i) => (
            <div key={i} className="flex items-start gap-6 p-6 rounded-2xl border bg-surface relative overflow-hidden group">
              <div className="p-3 rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-colors">
                {item.icon}
              </div>
              <div className="space-y-2 flex-1">
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                <div className="flex gap-2 pt-2">
                  {item.files.map((file) => (
                    <code key={file} className="text-[10px] font-technical px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border">
                      {file}
                    </code>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Installation */}
      <section id="installation" className="space-y-12">
         <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Installation</h2>
          <p className="text-muted-foreground">Requires Node.js &ge; 18.0.0</p>
        </div>
        
        <div className="space-y-6">
          <CodeBlock 
            label="Global Install" 
            code="npm i get-response -g" 
          />
          <CodeBlock 
            label="Instant Usage" 
            code="npx get-response" 
          />
        </div>
      </section>

      {/* Usage */}
      <section id="usage" className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-primary">Usage Guide</h2>
          <p className="text-muted-foreground">Master the terminal-first AI workflow.</p>
        </div>

        <div className="space-y-16">
          <div className="space-y-6">
            <h4 className="text-xl font-bold flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">01</span>
              Contextual Intelligence
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              GetResponse isn't limited to text. It processes various media types as context to 
              provide precise, file-aware responses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border bg-surface space-y-3">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <FileText size={16} /> PDF Parsing
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Analyze technical papers, documentations, or logs using the <code className="text-[10px] px-1 bg-muted rounded">pdf-parse-fork</code>. 
                  The AI reads the content directly from your local files.
                </p>
              </div>
              <div className="p-5 rounded-2xl border bg-surface space-y-3">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <ImageIcon size={16} /> Visual OCR
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Pass screenshots or diagrams using Tesseract OCR. The CLI extracts text 
                  from images for analysis, debugging, or translation.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border bg-surface overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-surface border-b border-border">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Type</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Flag</th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y border-border">
                  {contextFlags.map((row, i) => (
                    <tr key={i} className="hover:bg-primary/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-primary">{row.icon}</span>
                          <span className="text-sm font-medium">{row.type}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <code className="text-xs font-technical px-2 py-0.5 rounded bg-primary/5 text-primary border border-primary/10">
                          {row.flag}
                        </code>
                      </td>
                      <td className="px-6 py-4 font-mono text-xs text-muted-foreground truncate max-w-[300px]">
                        npx get-response "{row.example}" {row.cmd}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">02</span>
              Interactive Modes
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl border bg-surface border-border space-y-4 shadow-sm">
                <div className="flex items-center gap-2 text-primary">
                  <Terminal size={18} />
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Chat Mode</span>
                </div>
                <p className="text-sm text-muted-foreground">Maintains persistent session context for back-and-forth reasoning.</p>
                <code className="block p-3 rounded-lg bg-background text-xs text-primary font-technical border border-border">
                  $ npx get-response -c
                </code>
              </div>
              <div className="p-6 rounded-2xl border bg-surface border-border space-y-4 shadow-sm">
                <div className="flex items-center gap-2 text-[#F48024]">
                  <Search size={18} />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#F48024]">Stack Exchange</span>
                </div>
                <p className="text-sm text-muted-foreground">In-terminal search and summarize for Stack Overflow.</p>
                <code className="block p-3 rounded-lg bg-background text-xs text-[#F48024] font-technical border border-border">
                  $ npx get-response -s "What is EOFError?"
                </code>
              </div>
            </div>
          </div>
          
          <div className="space-y-6" id="automation">
            <h4 className="text-xl font-bold flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">03</span>
              Terminal Automation
            </h4>
            <div className="p-6 rounded-2xl border bg-surface space-y-4">
              <div className="flex items-center gap-3 text-emerald-600">
                <Terminal size={20} />
                <span className="font-bold text-sm uppercase tracking-widest">Intelligent Execution</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Describe a complex terminal task, and get-response will generate the exact shell command 
                required. With the <code className="text-xs px-1 py-0.5 bg-muted rounded">--auto</code> flag (experimental), 
                the tool can even assist in executing these tasks safely after your confirmation.
              </p>
              <div className="space-y-3">
                <div className="text-[10px] uppercase font-bold text-muted-foreground opacity-50 tracking-wider">Example Command</div>
                <code className="block p-4 rounded-xl bg-background text-muted-foreground text-xs font-technical border border-border">
                  # "Find all large log files and move them to a backup folder" <br />
                  $ npx get-response -t "move all files larger than 10MB in /logs to /backup" 
                </code>
              </div>
            </div>
          </div>

          <div className="space-y-6" id="diagrams">
            <h4 className="text-xl font-bold flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm">04</span>
              Diagram Generation
            </h4>
            <div className="p-6 rounded-2xl border bg-surface space-y-4">
              <div className="flex items-center gap-3 text-blue-600">
                <Network size={20} />
                <span className="font-bold text-sm uppercase tracking-widest">Mermaid.js Integration</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Perfect for architecture reviews, get-response can output valid Mermaid.js code to 
                visualize systems, logic flows, or database schemas directly in your terminal.
              </p>
              <code className="block p-4 rounded-xl bg-background text-xs text-primary font-technical border border-border">
                $ npx get-response -m -d ./src
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech-stack" className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techStackData.map((tech) => (
            <div key={tech} className="p-4 rounded-xl border bg-surface flex items-center justify-center text-xs font-bold uppercase tracking-tight text-center">
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Footer / CTA */}
      <section id="support" className="pt-24 pb-16 border-t text-center space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Support & Contributing</h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Get Response is an open-source project. If you have bugs, suggestions, or want to contribute, 
            please open an issue on our GitHub repository.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" size="lg" className="rounded-full gap-2 px-8">
            <ExternalLink size={16} /> GitHub Issues
          </Button>
          <Button variant="outline" size="lg" className="rounded-full gap-2 px-8">
            <ExternalLink size={16} /> Twitter / X
          </Button>
        </div>
        <p className="text-[10px] font-technical uppercase tracking-[0.3em] font-bold text-muted-foreground pt-8">
          Created with ❤️ by Swapnoneel Saha &copy; {new Date().getFullYear()}
        </p>
      </section>
    </div>
  );
}
