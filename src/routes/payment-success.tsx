import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle, Download, Mail, ArrowLeft, FileText } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { trackPurchase } from "@/lib/pixel";
import { PRODUCT, DOWNLOAD_FILE_URL, formatINR } from "@/config/product";

const TITLE = "Payment Successful | DIGICONE";
const DESCRIPTION = "Your DIGICONE purchase is confirmed. Download your Filmora 15 AI Creator Package and start creating.";

export const Route = createFileRoute("/payment-success")({
  component: PaymentSuccessPage,
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
    links: [{ rel: "canonical", href: "/payment-success" }],
  }),
});

function PaymentSuccessPage() {
  const search = useSearch({ from: "/payment-success" }) as Record<string, string | undefined>;
  const orderId = search["razorpay_payment_id"] ?? search["order_id"] ?? undefined;
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    trackPurchase(orderId);
  }, [orderId]);

  const handleDownload = () => {
    if (!DOWNLOAD_FILE_URL) return;
    const a = document.createElement("a");
    a.href = DOWNLOAD_FILE_URL;
    a.download = "";
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setDownloaded(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground antialiased">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 px-4 py-3 backdrop-blur sm:px-6">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg gradient-brand text-sm font-extrabold text-primary-foreground">
              D
            </span>
            <span className="text-base font-extrabold tracking-[0.14em]">DIGICONE</span>
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-12 sm:px-6">
        <div className="w-full max-w-lg">
          <div className="surface-card overflow-hidden p-6 sm:p-10">
            <div className="flex flex-col items-center text-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-success/10 text-success">
                <CheckCircle className="h-8 w-8" />
              </div>

              <h1 className="mt-5 text-2xl font-extrabold sm:text-3xl">Payment Successful</h1>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                Thank you for your purchase. Your order for {PRODUCT.PRODUCT_PACKAGE_NAME} is confirmed.
              </p>

              <div className="mt-6 w-full rounded-xl border border-border bg-secondary/40 p-4 text-left">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-muted-foreground">Amount paid</span>
                  <span className="text-lg font-extrabold">{formatINR(PRODUCT.PRODUCT_PRICE)}</span>
                </div>
                {orderId ? (
                  <div className="mt-3 flex items-center justify-between gap-4 border-t border-border pt-3">
                    <span className="text-sm text-muted-foreground">Order ID</span>
                    <span className="max-w-[180px] truncate text-xs font-medium">{orderId}</span>
                  </div>
                ) : null}
              </div>

              <div className="mt-8 w-full">
                {DOWNLOAD_FILE_URL ? (
                  <button
                    type="button"
                    onClick={handleDownload}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl gradient-brand px-6 py-4 text-sm font-extrabold tracking-wide text-primary-foreground shadow-[var(--shadow-cta)] transition-transform active:scale-[0.99]"
                  >
                    <Download className="h-5 w-5" />
                    {downloaded ? "DOWNLOAD STARTED" : "DOWNLOAD YOUR PRODUCT"}
                  </button>
                ) : (
                  <div className="rounded-xl border border-border bg-secondary/40 p-4 text-center">
                    <FileText className="mx-auto h-6 w-6 text-muted-foreground" />
                    <p className="mt-2 text-sm font-semibold">Delivery file not configured</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Contact support and share your order ID to receive your product.
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground">
                {PRODUCT.SUPPORT_EMAIL && !PRODUCT.SUPPORT_EMAIL.startsWith("[") ? (
                  <a
                    href={`mailto:${PRODUCT.SUPPORT_EMAIL}`}
                    className="inline-flex items-center justify-center gap-2 text-primary hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    {PRODUCT.SUPPORT_EMAIL}
                  </a>
                ) : null}
                <p className="text-xs">
                  Need help? Save your order ID and reach out to customer support.
                </p>
              </div>

              <Link
                to="/"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to store
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
