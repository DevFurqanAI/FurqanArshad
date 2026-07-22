"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getIcon } from "@/lib/icons";
import { EASE_EXPO_OUT } from "@/lib/animations";
import { sections } from "@/lib/sections";
import { getLenis } from "@/components/providers/smooth-scroll-provider";
import { LogoMark } from "@/components/ui/LogoMark";

const navItems = sections
  .filter((s) => s.id !== "home")
  .map((s) => ({ label: s.label, href: `#${s.id}`, id: s.id }));

const MenuIcon = getIcon("menu");
const CloseIcon = getIcon("close");

const menuContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

const menuItem = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE_EXPO_OUT } },
};

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");
  const headerRef = useRef<HTMLElement>(null);

  // Close the mobile menu on Escape or on an outside click/tap.
  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    function handlePointerDown(e: PointerEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [menuOpen]);

  function jumpTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;

    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(el as HTMLElement, { immediate: true });
    } else {
      el.scrollIntoView({ behavior: "auto", block: "start" });
    }
  }

  // Scroll-spy: highlight whichever section is currently most in view
  useEffect(() => {
    const allIds = sections.map((s) => s.id);
    const els = allIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      ref={headerRef}
      className="border-border-hairline bg-background/80 sticky top-0 z-50 border-b backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={(e) => jumpTo(e, "#home")}
          className="flex items-center"
          aria-label="Go to top"
        >
          <LogoMark size={36} />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => jumpTo(e, item.href)}
                aria-current={isActive ? "true" : undefined}
                className={`group font-mono relative py-1 text-xs tracking-wide uppercase transition-colors ${
                  isActive ? "text-brand" : "text-fg-secondary hover:text-brand"
                }`}
              >
                {item.label}
                <span
                  className={`bg-brand absolute -bottom-0.5 left-0 h-px w-full origin-left transition-transform duration-300 ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                  aria-hidden
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
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
            <motion.div
              variants={menuContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-1 px-4 py-4 sm:px-6"
            >
              {navItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <motion.a
                    key={item.label}
                    variants={menuItem}
                    href={item.href}
                    onClick={(e) => {
                      jumpTo(e, item.href);
                      setMenuOpen(false);
                    }}
                    aria-current={isActive ? "true" : undefined}
                    className={`font-mono flex items-center gap-2 py-3 text-sm tracking-wide uppercase transition-colors ${
                      isActive ? "text-brand" : "text-fg-secondary hover:text-brand"
                    }`}
                  >
                    {isActive && <span className="bg-brand h-1 w-1 rounded-full" />}
                    {item.label}
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}