import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { goToCheckout } from "@/lib/pixel";

/* ---------------- Payment badges ---------------- */

function VisaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 16" className={className} aria-hidden>
      <text x="0" y="12" fontSize="11" fontWeight="800" fontStyle="italic" fill="currentColor">
        VISA
      </text>
    </svg>
  );
}

function MastercardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden>
      <circle cx="8" cy="8" r="7" fill="#EB001B" opacity="0.95" />
      <circle cx="16" cy="8" r="7" fill="#F79E1B" opacity="0.95" />
      <path d="M12 3.2c1.7 1.3 2.8 3.3 2.8 5.6s-1.1 4.4-2.8 5.6c-1.7-1.2-2.8-3.3-2.8-5.6S10.3 4.5 12 3.2z" fill="#FF5F00" />
    </svg>
  );
}

function GPayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden>
      <circle cx="8" cy="8" r="8" fill="#fff" />
      <text x="8" y="11.5" textAnchor="middle" fontSize="8" fontWeight="700" fill="#1F1F1F">
        G
      </text>
    </svg>
  );
}

function PaytmIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden>
      <rect x="0.5" y="0.5" width="15" height="15" rx="3" fill="#00B9F1" />
      <text x="8" y="11.5" textAnchor="middle" fontSize="7" fontWeight="800" fill="#fff">
        P
      </text>
    </svg>
  );
}

function UpiIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 16" className={className} aria-hidden>
      <text x="0" y="12" fontSize="10" fontWeight="800" fill="currentColor">
        UPI
      </text>
    </svg>
  );
}

function RazorpayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden>
      <rect width="16" height="16" rx="4" fill="#0D94FB" />
      <text x="8" y="11.5" textAnchor="middle" fontSize="8" fontWeight="800" fill="#fff">
        R
      </text>
    </svg>
  );
}

const PAYMENT_METHODS = [
  { name: "Visa", icon: VisaIcon, hideLabel: true },
  { name: "Mastercard", icon: MastercardIcon },
  { name: "GPay", icon: GPayIcon },
  { name: "Paytm", icon: PaytmIcon },
  { name: "UPI", icon: UpiIcon, hideLabel: true },
  { name: "Razorpay", icon: RazorpayIcon },
];

export function PaymentBadges({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-2",
        className,
      )}
    >
      {PAYMENT_METHODS.map(({ name, icon: Icon, hideLabel }) => (
        <div
          key={name}
          className="inline-flex h-7 items-center gap-1.5 rounded-md border border-border bg-background/70 px-2 text-[10px] font-bold tracking-wide text-muted-foreground"
        >
          <Icon className="h-3.5 w-auto" />
          {!hideLabel ? <span>{name}</span> : null}
        </div>
      ))}
    </div>
  );
}

export function Section({
  id,
  className,
  children,
  tone = "dark",
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-4 py-14 sm:px-6 sm:py-20",
        tone === "light" && "bg-surface-light text-ink",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
      {eyebrow ? (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-gradient-brand">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-2xl font-extrabold leading-tight sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-3 text-sm leading-relaxed sm:text-base",
            tone === "light" ? "text-ink/70" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function CtaButton({
  ctaId,
  children,
  className,
  variant = "primary",
}: {
  ctaId: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "ghost";
}) {
  return (
    <button
      type="button"
      data-cta-id={ctaId}
      onClick={() => goToCheckout(ctaId)}
      className={cn(
        "inline-flex min-h-[52px] w-full items-center justify-center rounded-xl px-6 text-sm font-bold tracking-wide transition-transform duration-200 active:scale-[0.98] sm:w-auto",
        variant === "primary"
          ? "gradient-brand text-primary-foreground shadow-[var(--shadow-cta)] hover:brightness-110"
          : "border border-border bg-secondary text-foreground hover:bg-accent",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function Check({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-sm text-muted-foreground">
      <span className="mt-0.5 text-success" aria-hidden>
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

/** Honest placeholder used wherever a real product screenshot is not supplied. */
export function ImagePlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex min-h-40 w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-secondary/60 p-6 text-center",
        className,
      )}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </span>
      <span className="text-[11px] text-muted-foreground/70">
        Replace with a real screenshot in the product config
      </span>
    </div>
  );
}
