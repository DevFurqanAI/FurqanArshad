"use client";

import { getIcon } from "@/lib/icons";
import { getLenis } from "@/components/providers/smooth-scroll-provider";

const ArrowUp = getIcon("arrowUp");

export function Footer() {
  const year = new Date().getFullYear();

  function scrollToTop(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const el = document.getElementById("home");
    if (!el) return;

    window.dispatchEvent(new Event("portfolio:navjumpstart"));

    function release() {
      window.dispatchEvent(new Event("portfolio:navjumpend"));
    }

    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(el, {
        duration: 1.4,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        onComplete: release,
      });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      release();
    }
  }

  return (
    <footer className="border-border-hairline border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-fg-primary text-sm font-semibold">
              Muhammad Furqan Arshad
            </p>
            <p className="text-fg-secondary mt-2 max-w-sm text-sm leading-6">
              Thanks for scrolling this far. Open to internships,
              collaboration, and a good technical conversation.
            </p>
          </div>

          <a
            href="#home"
            onClick={scrollToTop}
            className="border-border-hairline text-fg-secondary hover:text-brand hover:border-border-hairline-strong group inline-flex w-fit items-center gap-2 rounded-full border py-2 pr-4 pl-3 text-xs font-medium tracking-wide uppercase transition-colors"
          >
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
            Back to top
          </a>
        </div>

        <div className="border-border-hairline text-fg-tertiary font-mono mt-10 border-t pt-6 text-xs">
          © {year} Muhammad Furqan Arshad · Built from scratch with Next.js
        </div>
      </div>
    </footer>
  );
}