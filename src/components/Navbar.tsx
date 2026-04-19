"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";
import { Menu } from "lucide-react";
import { navItems } from "@/components/DocsSidebar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const pathname = usePathname();
  const isDocsPage = pathname.startsWith("/docs") || pathname.startsWith("/changelog");

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-surface/80 backdrop-blur-xl transition-all duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 gap-2">
        <div className="flex items-center gap-2 md:gap-8 min-w-0">
          <Link href="/" className="flex items-center gap-2.5 group min-w-0 overflow-hidden shrink">
            <Logo className="text-primary" size={28} />
            <span className="font-technical text-base sm:text-lg md:text-xl font-bold tracking-tight text-foreground truncate">
              GET RESPONSE
            </span>
            {/* <Badge variant="secondary" className="hidden sm:inline-flex font-technical text-[10px] px-1.5 py-0 uppercase shrink-0">
              CLI
            </Badge> */}
          </Link>

          {!isDocsPage && (
            <NavigationMenu className="hidden md:flex shrink-0">
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuLink render={<Link href="#features" />} className={navigationMenuTriggerStyle()}>
                    Features
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink render={<Link href="/docs" />} className={navigationMenuTriggerStyle()}>
                    Docs
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink render={<Link href="#comparison" />} className={navigationMenuTriggerStyle()}>
                    Lite Version
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>

        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {isDocsPage && (
            <Sheet>
              <SheetTrigger render={<Button variant="ghost" size="icon" className="lg:hidden mr-1" />}>
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] sm:w-[320px] bg-surface pt-12 border-r">
                <SheetHeader className="mb-4">
                  <SheetTitle className="text-left font-technical font-bold text-sm uppercase tracking-widest text-muted-foreground">
                    Table of Content
                  </SheetTitle>
                </SheetHeader>
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <SheetTrigger 
                      key={item.id} 
                      render={
                        <a href={`#${item.id}`} className="flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group hover:bg-primary/5 hover:text-primary text-muted-foreground text-sm font-medium" />
                      }
                    >
                      <span className="shrink-0 transition-colors group-hover:text-primary">
                        {item.icon}
                      </span>
                      <span className="truncate">{item.label}</span>
                    </SheetTrigger>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          )}
          <ThemeToggle />
          <Button 
            render={<Link href="https://www.npmjs.com/package/get-response" target="_blank" rel="noopener noreferrer" />}
            nativeButton={false}
            className="bg-gradient-to-br from-primary to-[#2170e4] hover:brightness-110 transition-all font-medium text-xs sm:text-sm px-3 sm:px-4"
          >
            Install <span className="hidden xs:inline sm:inline ml-1">CLI</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
