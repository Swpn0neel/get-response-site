"use client";

import { useState } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Info, 
  Zap, 
  Layers, 
  Download, 
  Terminal, 
  Cpu, 
  Users, 
  LifeBuoy,
  Settings,
  Network
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: "intro", label: "Introduction", icon: <Info size={18} /> },
  { id: "features", label: "Key Features", icon: <Zap size={18} /> },
  { id: "architecture", label: "Architecture", icon: <Layers size={18} /> },
  { id: "installation", label: "Installation", icon: <Download size={18} /> },
  { id: "usage", label: "Usage Guide", icon: <Terminal size={18} /> },
  { id: "automation", label: "Automation", icon: <Settings size={18} /> },
  { id: "diagrams", label: "Diagrams", icon: <Network size={18} /> },
  { id: "tech-stack", label: "Tech Stack", icon: <Cpu size={18} /> },
  { id: "support", label: "Support", icon: <LifeBuoy size={18} /> },
];

interface SidebarProps {
  version?: string;
}

export default function DocsSidebar({ version = "v1.10.x" }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside 
      className={cn(
        "sticky top-16 h-[calc(100vh-4rem)] border-r bg-surface flex flex-col transition-all duration-300",
        isCollapsed ? "w-16" : "w-72"
      )}
    >
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between mb-4">
          {!isCollapsed && (
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground opacity-50 px-2">
              Table of Content
            </span>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="ml-auto"
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </Button>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 group",
                "hover:bg-primary/5 hover:text-primary",
                "text-muted-foreground text-sm font-medium"
              )}
            >
              <span className="shrink-0 transition-colors group-hover:text-primary">
                {item.icon}
              </span>
              {!isCollapsed && (
                <span className="truncate">{item.label}</span>
              )}
            </a>
          ))}
        </nav>
      </div>
      
      {!isCollapsed && (
        <div className="py-6 pr-6">
          <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10">
            <p className="text-[10px] uppercase tracking-wider font-bold text-primary mb-1">
              Latest Version
            </p>
            <p className="text-xs text-muted-foreground">
              {version === "v1.10.x" ? "STABLE v1.10.x" : `v${version}`}
            </p>
          </div>
        </div>
      )}
    </aside>
  );
}
