import Link from "next/link";

type Variant = "primary" | "outline" | "on-navy";

const base =
  "inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 " +
  "rounded-md font-semibold text-base transition-colors";

const variants: Record<Variant, string> = {
  // Gold fill, navy text — 12.2:1. The only gold-filled control on a page.
  primary: "bg-accent text-on-accent hover:bg-accent-hover",
  outline: "border-2 border-heading text-heading hover:bg-navy-50",
  "on-navy": "border-2 border-on-navy text-on-navy hover:bg-navy-600",
};

export default function Button({
  href,
  variant = "primary",
  download,
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  download?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const cls = `${base} ${variants[variant]} ${className}`;

  // tel:, mailto: and file downloads are real navigations — <Link> would only
  // add client-router overhead for them.
  if (download || /^(tel:|mailto:|https?:)/.test(href)) {
    return (
      <a href={href} download={download} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
