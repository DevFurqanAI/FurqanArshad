"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getIcon } from "@/lib/icons";
import { personal } from "@/lib/data";
import { EASE_EXPO_OUT } from "@/lib/animations";
import { useTheme } from "@/components/providers/theme-provider";
import { sections } from "@/lib/sections";
import { getLenis } from "@/components/providers/smooth-scroll-provider";
import Image from "next/image";

const navItems = sections
  .filter((s) => s.id !== "home")
  .map((s) => ({ label: s.label, href: `#${s.id}` }));

const MenuIcon = getIcon("menu");
const CloseIcon = getIcon("close");
const SunIcon = getIcon("sun");
const MoonIcon = getIcon("moon");

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  function jumpTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;

    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(el as HTMLElement, { immediate: true });
    } else {
      el.scrollIntoView({ behavior: "auto" });
    }
  }

  return (
    <header className="border-border-hairline bg-background/80 sticky top-0 z-50 border-b backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
            href="#home"
            onClick={(e) => jumpTo(e, "#home")}
            className="flex items-center gap-2.5"
          >
            <Image
              src="/fa-mark.png"
              alt="FA logo mark"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <span className="text-fg-primary font-mono text-sm font-semibold tracking-[0.2em]">
              M. FURQAN ARSHAD
            </span>
          </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => jumpTo(e, item.href)}
              className="text-fg-secondary hover:text-brand font-mono text-xs tracking-wide uppercase transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="border-border-hairline text-fg-primary hover:border-border-hairline-strong inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? (
              <SunIcon className="h-4 w-4" />
            ) : (
              <MoonIcon className="h-4 w-4" />
            )}
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="border-border-hairline text-fg-primary inline-flex h-10 w-10 items-center justify-center rounded-full border md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_EXPO_OUT }}
            className="border-border-hairline overflow-hidden border-t md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    jumpTo(e, item.href);
                    setMenuOpen(false);
                  }}
                  className="text-fg-secondary hover:text-brand font-mono py-3 text-sm tracking-wide uppercase transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}