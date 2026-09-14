import { CtaButton, ImagePlaceholder, PaymentBadges } from "./primitives";
import { HERO_IMAGE, HERO_VIDEO_URL, PRODUCT, formatINR } from "@/config/product";

const TRUST_ITEMS = [
  { icon: "⚡", label: "Instant Digital Delivery" },
  { icon: "🔒", label: "Secure Checkout" },
  { icon: "💳", label: "UPI / Cards" },
  { icon: "💬", label: "Customer Support" },
];

export function TrustBar() {
  return (
    <div className="border-b border-border bg-surface">
      <div className="mx-auto flex w-full max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:grid sm:grid-cols-4 sm:gap-3 sm:overflow-visible sm:px-6">
        {TRUST_ITEMS.map((t) => (
          <div
            key={t.label}
            className="flex shrink-0 items-center gap-2 rounded-lg border border-border bg-background/40 px-3 py-2 sm:shrink"
          >
            <span aria-hidden className="text-sm">
              {t.icon}
            </span>
            <span className="whitespace-nowrap text-[11px] font-semibold text-muted-foreground sm:text-xs">
              {t.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2rem] opacity-40 blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="surface-card overflow-hidden p-2">
        <div className="flex items-center gap-1.5 px-2 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          <span className="ml-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {PRODUCT.PRODUCT_NAME} — Workspace
          </span>
        </div>
        {HERO_VIDEO_URL ? (
          <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
            <video
              src={HERO_VIDEO_URL}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="h-full w-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        ) : HERO_IMAGE ? (
          <img
            src={HERO_IMAGE}
            alt="Filmora 15 AI editing workspace"
            width={1200}
            height={800}
            loading="eager"
            decoding="async"
            className="w-full rounded-xl"
          />
        ) : (
          <ImagePlaceholder label="[REAL FILMORA SCREENSHOT]" className="min-h-64 rounded-xl" />
        )}
      </div>
      <div className="glass-panel absolute -bottom-4 -left-2 hidden rounded-xl px-3 py-2 sm:block">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          Timeline
        </p>
        <p className="text-xs font-semibold">Multi-track editing</p>
      </div>
      <div className="glass-panel absolute -right-2 top-8 hidden rounded-xl px-3 py-2 sm:block">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          AI Tools
        </p>
        <p className="text-xs font-semibold">Smart cutout</p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="px-4 pb-12 pt-10 sm:px-6 sm:pb-20 sm:pt-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
            🔥 Creator Special
          </span>
          <h1 className="mt-5 text-balance text-[2rem] font-extrabold leading-[1.1] sm:text-5xl">
            Create Better Videos Without Expensive Editing Workflows
          </h1>
          <p className="mt-2 text-lg font-extrabold text-gradient-brand sm:text-xl">
            Filmora 15 AI
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            Professional video editing tools, AI-powered features and creative resources for
            YouTube, Reels, Shorts, ads and social media.
          </p>

          <div className="mt-6 flex items-end gap-3">
            <span className="text-4xl font-extrabold sm:text-5xl">
              {formatINR(PRODUCT.PRODUCT_PRICE)}
            </span>
            <span className="pb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
              One-time payment
            </span>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CtaButton ctaId="hero_cta">
              GET INSTANT ACCESS — {formatINR(PRODUCT.PRODUCT_PRICE)}
            </CtaButton>
            <a
              href="#included"
              className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-border bg-secondary px-6 text-sm font-bold tracking-wide transition-colors hover:bg-accent sm:w-auto"
            >
              VIEW WHAT'S INCLUDED
            </a>
          </div>
          <PaymentBadges className="mt-4" />

          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground">
            {["Digital delivery", "Clear product information", "Customer support"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <span className="text-success">✓</span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
