import { socials, contact } from "@/lib/data";
import { getIcon } from "@/lib/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border-hairline border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-fg-primary text-sm font-medium">
            Muhammad Furqan Arshad
          </p>
          <p className="text-fg-tertiary font-mono mt-1 text-xs">
            © {year} · Built from scratch with Next.js
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ label, href, iconKey }) => {
            const Icon = getIcon(iconKey);
            return (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="border-border-hairline text-fg-secondary hover:text-brand hover:border-border-hairline-strong inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}