type LogoMarkProps = {
  size?: number;
  className?: string;
};

// Circuit-path "F" mark: the initial constructed as a routed trace with a
// single brand-colored "signal" node at its terminus — deliberately echoes
// the pulsing status-dot motif used elsewhere on the site (Hero badge,
// Experience timeline, OG image) so the identity feels considered rather
// than a generic initials badge, and nods to the networking half of the
// work (FiberLink, OSPF/VLSM) alongside the full-stack half.
export function LogoMark({ size = 40, className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 6H24M6 6V26M6 15H17"
        stroke="var(--foreground)"
        strokeWidth="2.1"
        strokeLinecap="square"
      />
      <circle cx="6" cy="6" r="1.9" fill="var(--foreground)" />
      <circle cx="6" cy="15" r="1.9" fill="var(--foreground)" />
      <circle cx="6" cy="26" r="1.9" fill="var(--foreground)" />
      <circle cx="17" cy="15" r="1.9" fill="var(--foreground)" />
      <circle cx="24" cy="6" r="2.9" fill="var(--brand)" />
    </svg>
  );
}
