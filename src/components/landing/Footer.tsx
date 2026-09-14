import { BRAND, PRODUCT } from "@/config/product";

const SHOP = [
  { label: "Shop", href: "#product" },
  { label: "Creator Tools", href: "#features" },
  { label: "Software", href: "#compatibility" },
  { label: "Bundles", href: "#pricing" },
  { label: "Contact", href: "#faq" },
];

const LEGAL = ["Privacy Policy", "Terms & Conditions", "Refund Policy"];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-4 pb-28 pt-12 sm:px-6 sm:pb-12">
      <div className="mx-auto grid w-full max-w-6xl gap-8 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg gradient-brand text-sm font-extrabold text-primary-foreground">
              D
            </span>
            <span className="text-base font-extrabold tracking-[0.14em]">{BRAND.name}</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{BRAND.tagline}</p>
        </div>

        <nav>
          <h2 className="text-xs font-extrabold uppercase tracking-[0.14em]">Shop</h2>
          <ul className="mt-3 grid gap-2">
            {SHOP.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-extrabold uppercase tracking-[0.14em]">Legal</h2>
          <ul className="mt-3 grid gap-2">
            {LEGAL.map((l) => (
              <li key={l}>
                <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            Support: <span className="text-foreground">{PRODUCT.SUPPORT_EMAIL}</span>
          </p>
        </div>
      </div>
      <p className="mx-auto mt-10 w-full max-w-6xl border-t border-border pt-6 text-xs text-muted-foreground">
        © 2026 {BRAND.name}. All rights reserved.
      </p>
    </footer>
  );
}
