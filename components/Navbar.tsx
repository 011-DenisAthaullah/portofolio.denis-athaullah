"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-5xl flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-bold text-xl tracking-tight flex items-center gap-2 group">
          <div className="size-8 bg-foreground rounded flex items-center justify-center transition-transform group-hover:scale-105">
             <span className="text-background font-black leading-none pb-0.5">D</span>
          </div>
          <span>Denis.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-foreground",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-indicator"
                    className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
           {mounted ? (
             <button
               onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
               className="p-2 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
               aria-label="Toggle theme"
             >
               {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
             </button>
           ) : (
             <div className="size-[34px]" />
           )}
           <a 
             href="/CV.Denis_Athaullah.pdf" 
             target="_blank" 
             className="hidden sm:flex items-center gap-2 h-9 px-4 rounded-md bg-foreground text-background text-sm font-medium hover:scale-105 active:scale-95 transition-all shadow-sm"
           >
             Resume
             <Download size={14} className="opacity-70" />
           </a>
        </div>
      </div>
    </header>
  );
}