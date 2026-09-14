import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Loader2, Lock, ShieldCheck } from "lucide-react";
import { BRAND, PRODUCT, formatINR } from "@/config/product";
import { proceedToPayment } from "@/lib/pixel";
import { PaymentBadges } from "@/components/landing/primitives";
import { useEffect, useRef, useState } from "react";

const TITLE = "Checkout | DIGICONE";
const DESCRIPTION = `Complete your purchase of ${PRODUCT.PRODUCT_PACKAGE_NAME} from ${BRAND.name}.`;

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/checkout" }],
  }),
});

function CheckoutPage() {
  const referencePrice = PRODUCT.REFERENCE_PRICE;
  const paymentFormRef = useRef<HTMLFormElement>(null);
  const [paymentButtonReady, setPaymentButtonReady] = useState(false);

  useEffect(() => {
    const form = paymentFormRef.current;
    if (!form) return;

    const isButtonPresent = () =>
      Array.from(form.children).some((el) => el.tagName !== "SCRIPT") ||
      Boolean(form.querySelector("iframe, button"));

    if (isButtonPresent()) {
      setPaymentButtonReady(true);
      return;
    }

    const observer = new MutationObserver(() => {
      if (isButtonPresent()) {
        setPaymentButtonReady(true);
        observer.disconnect();
      }
    });
    observer.observe(form, { childList: true, subtree: true });

    if (!form.querySelector('script[src*="checkout.razorpay.com"]')) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset["payment_button_id"] = "pl_TaJvTTWGagvlZL";
      form.appendChild(script);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 px-4 py-3 backdrop-blur sm:px-6">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg gradient-brand text-sm font-extrabold text-primary-foreground">
              D
            </span>
            <span className="text-base font-extrabold tracking-[0.14em]">{BRAND.name}</span>
          </Link>
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
            <Lock className="h-3.5 w-3.5" />
            Secure checkout
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_380px] lg:items-start lg:gap-10">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to store
            </Link>

            <h1 className="mt-6 text-2xl font-extrabold sm:text-3xl">Checkout</h1>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              Review your order below, then continue to our secure payment partner to complete your
              purchase.
            </p>

            <div className="surface-card mt-8 overflow-hidden p-5 sm:p-6">
              <div className="flex gap-4 sm:gap-5">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl gradient-brand text-lg font-extrabold text-primary-foreground sm:h-20 sm:w-20">
                  D
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-gradient-brand">
                    Digital product
                  </p>
                  <h2 className="mt-1 text-lg font-extrabold leading-snug sm:text-xl">
                    {PRODUCT.PRODUCT_PACKAGE_NAME}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">{PRODUCT.PRODUCT_DESCRIPTION}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-2 border-t border-border pt-6 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                  Instant digital delivery after payment confirmation
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                  Clear product details shown on the store page before purchase
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                  Customer support available if you need help
                </li>
              </ul>
            </div>
          </div>

          <aside className="surface-card sticky top-24 overflow-hidden p-5 sm:p-6">
            <h2 className="text-sm font-extrabold uppercase tracking-[0.12em] text-muted-foreground">
              Order summary
            </h2>

            <div className="mt-4 flex items-start justify-between gap-4 border-b border-border pb-4">
              <div className="min-w-0">
                <p className="font-semibold leading-snug">{PRODUCT.PRODUCT_NAME}</p>
                <p className="mt-1 text-xs text-muted-foreground">{PRODUCT.PRODUCT_SUBTITLE}</p>
              </div>
              <p className="shrink-0 text-right font-extrabold">{formatINR(PRODUCT.PRODUCT_PRICE)}</p>
            </div>

            {referencePrice != null && referencePrice > PRODUCT.PRODUCT_PRICE ? (
              <div className="mt-3 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Reference price</span>
                <span className="text-muted-foreground line-through">{formatINR(referencePrice)}</span>
              </div>
            ) : null}

            <div className="mt-4 flex items-center justify-between gap-4">
              <span className="text-sm font-semibold">Total</span>
              <span className="text-2xl font-extrabold">{formatINR(PRODUCT.PRODUCT_PRICE)}</span>
            </div>

            {/* <button
              type="button"
              onClick={() => proceedToPayment()}
              className="mt-6 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl gradient-brand px-6 text-sm font-extrabold tracking-wide text-primary-foreground shadow-[var(--shadow-cta)] transition-transform active:scale-[0.99]"
            >
              <Lock className="h-4 w-4" />
              PAY {formatINR(PRODUCT.PRODUCT_PRICE)} — SECURE CHECKOUT
            </button> */}
            <div className="relative mt-6 min-h-[52px] w-full">
              {!paymentButtonReady ? (
                <div
                  className="absolute inset-0 z-10 flex min-h-[52px] items-center justify-center rounded-xl border border-border bg-secondary"
                  aria-busy="true"
                  aria-live="polite"
                >
                  <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                  <span className="sr-only">Loading payment button</span>
                </div>
              ) : null}
              <form
                ref={paymentFormRef}
                id="rzp_payment_form"
                className="flex min-h-[52px] items-center justify-center"
              />
            </div>
            <PaymentBadges className="mt-5" />

            <p className="mt-4 text-center text-[11px] leading-relaxed text-muted-foreground">
              You will be redirected to our payment partner to complete your transaction. By continuing,
              you confirm you have reviewed the product and compatibility information on the store page.
            </p>
          </aside>
        </div>
      </main>
    </div>
  );
}
