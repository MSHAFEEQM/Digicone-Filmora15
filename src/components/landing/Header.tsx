import { useEffect, useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { goToCheckout } from "@/lib/pixel";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Digital Products", href: "#product" },
  { label: "Creator Tools", href: "#features" },
  { label: "Software", href: "#compatibility" },
  { label: "Bundles", href: "#pricing" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "glass-panel border-border py-2"
          : "border-transparent bg-background py-3.5",
      )}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-8">
          <a href="#top" className="flex shrink-0 items-center gap-2">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg gradient-brand text-sm font-extrabold text-primary-foreground">
              D
            </span>
            <span className="truncate text-base font-extrabold tracking-[0.14em]">DIGICONE</span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            aria-label="Search"
            className="grid h-10 w-10 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="grid h-10 w-10 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <ShoppingBag className="h-[18px] w-[18px]" />
          </button>
          <button
            type="button"
            onClick={() => goToCheckout("header_cta")}
            className="hidden h-10 items-center rounded-lg gradient-brand px-4 text-xs font-bold tracking-wide text-primary-foreground hover:brightness-110 sm:inline-flex"
          >
            SHOP NOW
          </button>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="mx-auto mt-2 w-full max-w-6xl px-4 pb-2 lg:hidden sm:px-6">
          <div className="surface-card divide-y divide-border overflow-hidden p-1">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
