import { goToCheckout } from "@/lib/pixel";
import { PRODUCT, formatINR } from "@/config/product";

export function StickyCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border glass-panel px-4 pt-2.5 lg:hidden"
      style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
    >
      <button
        type="button"
        data-cta-id="mobile_sticky_cta"
        onClick={() => goToCheckout("mobile_sticky_cta")}
        className="flex min-h-[56px] w-full items-center justify-center rounded-xl gradient-brand text-sm font-extrabold tracking-wide text-primary-foreground shadow-[var(--shadow-cta)] active:scale-[0.99]"
      >
        GET ACCESS — {formatINR(PRODUCT.PRODUCT_PRICE)}
      </button>
    </div>
  );
}
