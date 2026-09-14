import { META_PIXEL_ID, PRODUCT, CHECKOUT_URL } from "@/config/product";

type FbqArgs = [string, string, Record<string, unknown>?];

declare global {
  interface Window {
    fbq?: ((...args: FbqArgs) => void) & { queue?: unknown[] };
    _fbq?: unknown;
  }
}

const contentPayload = () => ({
  content_ids: [PRODUCT.PRODUCT_ID],
  content_name: PRODUCT.PRODUCT_PACKAGE_NAME,
  content_type: "product",
  value: PRODUCT.PRODUCT_PRICE,
  currency: PRODUCT.CURRENCY,
});

/** Loads the Meta Pixel and fires PageView + ViewContent. */
export function initPixel() {
  if (typeof window === "undefined" || !META_PIXEL_ID) return;
  if (!window.fbq) {
    const n: any = (window.fbq = function (...args: unknown[]) {
      n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args);
    });
    n.queue = [];
    n.loaded = true;
    n.version = "2.0";
    window._fbq = n;
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(s);
  }
  window.fbq?.("init", META_PIXEL_ID);
  window.fbq?.("track", "PageView");
  window.fbq?.("track", "ViewContent", contentPayload());
}

/** Fired on every CTA press, then InitiateCheckout on the way to checkout. */
export function trackCtaAndCheckout(ctaId: string) {
  window.fbq?.("trackCustom", "ClickCTA", { cta_id: ctaId, ...contentPayload() });
  window.fbq?.("track", "InitiateCheckout", contentPayload());
}

/**
 * Purchase MUST only be called from a confirmed payment-success context
 * (payment gateway webhook redirect / thank-you page), never on CTA click.
 */
export function trackPurchase(orderId?: string) {
  window.fbq?.("track", "Purchase", { ...contentPayload(), order_id: orderId });
}

export function getPaymentGatewayUrl(): string | null {
  const url = CHECKOUT_URL;
  if (!url || url.startsWith("[")) return null;
  return `${url}${url.includes("?") ? "&" : "?"}product_id=${encodeURIComponent(
    PRODUCT.PRODUCT_ID,
  )}&price=${PRODUCT.PRODUCT_PRICE}&currency=${PRODUCT.CURRENCY}`;
}

/** Landing CTAs: track and open on-site checkout. */
export function goToCheckout(ctaId: string) {
  trackCtaAndCheckout(ctaId);
  window.location.href = "/checkout";
}

/** Checkout page: redirect to the configured payment gateway. */
export function proceedToPayment() {
  const url = getPaymentGatewayUrl();
  if (!url) return;
  window.location.href = url;
}
