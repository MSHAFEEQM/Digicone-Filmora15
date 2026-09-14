import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CtaButton, Check, ImagePlaceholder, PaymentBadges, Section, SectionHeading } from "./primitives";
import {
  COMPATIBILITY,
  CUSTOMER_REVIEW_IMAGES,
  CUSTOMER_REVIEW_RATING,
  EDIT_STEPS,
  FEATURE_GROUPS,
  FEATURED_PRODUCT_IMAGE,
  PRODUCT,
  PRODUCT_SCREENSHOTS,
  TESTIMONIALS,
  formatINR,
} from "@/config/product";

/* ---------------- Credibility strip ---------------- */

const CREDIBILITY = [
  { title: "Product Details", body: "Clear information about what's included." },
  { title: "Compatibility", body: "Check supported devices before purchase." },
  { title: "Digital Delivery", body: "Receive your purchase through the stated delivery process." },
  { title: "Customer Support", body: "Get assistance when you need it." },
];

export function Credibility() {
  return (
    <Section>
      <SectionHeading title="Everything You Need to Know Before You Buy" />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {CREDIBILITY.map((c) => (
          <div key={c.title} className="surface-card lift p-5">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.14em]">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Featured product ---------------- */

export function FeaturedProduct() {
  return (
    <Section id="product">
      <div className="surface-card grid gap-6 p-4 sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-10">
        <img
          src={FEATURED_PRODUCT_IMAGE}
          alt={`${PRODUCT.PRODUCT_NAME} product preview`}
          width={960}
          height={640}
          loading="lazy"
          decoding="async"
          className="min-h-56 w-full rounded-xl object-cover object-center"
        />
        <div>
          <span className="inline-flex rounded-full gradient-brand px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-primary-foreground">
            Creator Special
          </span>
          <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">{PRODUCT.PRODUCT_NAME}</h2>
          <p className="mt-1 text-sm font-semibold text-muted-foreground">
            {PRODUCT.PRODUCT_SUBTITLE}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {PRODUCT.PRODUCT_DESCRIPTION}
          </p>
          <p className="mt-5 text-3xl font-extrabold">{formatINR(PRODUCT.PRODUCT_PRICE)}</p>
          <div className="mt-5">
            <CtaButton ctaId="featured_product_cta">GET ACCESS</CtaButton>
          </div>
          <PaymentBadges className="mt-3" />
          <p className="mt-3 text-xs text-muted-foreground">
            Digital product. Review compatibility and access details before purchasing.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Product preview gallery ---------------- */

export function ProductPreview() {
  const [active, setActive] = useState<number | null>(null);
  const shot = active === null ? null : PRODUCT_SCREENSHOTS[active];

  return (
    <Section id="preview">
      <SectionHeading
        title="See Exactly What You're Getting"
        subtitle="No confusing promises. Explore the actual product and included resources before purchasing."
      />
      <div className="-mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
        {PRODUCT_SCREENSHOTS.map((s, i) => (
          <div
            key={s.index}
            className="surface-card lift w-[78%] shrink-0 snap-start overflow-hidden p-3 text-left sm:w-auto"
          >
            {s.src ? (
              <video
                src={s.src}
                autoPlay
                controls
                playsInline
                muted
                preload="auto"
                className="w-full rounded-lg"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <ImagePlaceholder label={s.caption} className="min-h-32 bg-background/50" />
            )}
            <button
              type="button"
              onClick={() => setActive(i)}
              className="mt-3 w-full text-left"
            >
              <p className="text-[10px] font-bold tracking-[0.16em] text-gradient-brand">
                {s.index}
              </p>
              <p className="text-sm font-semibold">{s.title}</p>
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <CtaButton ctaId="preview_cta">GET INSTANT ACCESS — {formatINR(PRODUCT.PRODUCT_PRICE)}</CtaButton>
      </div>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl">
          <DialogTitle className="text-sm font-semibold">{shot?.title}</DialogTitle>
          {shot?.src ? (
            <video
              src={shot.src}
              autoPlay
              controls
              playsInline
              muted
              preload="auto"
              className="w-full rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <ImagePlaceholder label={shot?.caption ?? ""} className="min-h-64" />
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}

/* ---------------- Features ---------------- */

export function Features() {
  return (
    <Section id="features">
      <SectionHeading title="Powerful Tools for Modern Creators" />
      <div className="grid gap-4 lg:grid-cols-3">
        {FEATURE_GROUPS.map((g) => (
          <div key={g.title} className="surface-card p-5">
            <div className="flex items-center gap-2">
              <span aria-hidden className="text-lg">
                {g.icon}
              </span>
              <h3 className="text-xs font-extrabold uppercase tracking-[0.14em]">{g.title}</h3>
            </div>
            <ul className="mt-4 grid gap-2">
              {g.items.map((it) => (
                <li
                  key={it}
                  className="rounded-lg border border-border bg-background/40 px-3 py-2 text-sm text-muted-foreground"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <CtaButton ctaId="features_cta">GET INSTANT ACCESS — {formatINR(PRODUCT.PRODUCT_PRICE)}</CtaButton>
      </div>
    </Section>
  );
}

/* ---------------- Easy to edit ---------------- */

export function EasyToEdit() {
  return (
    <Section id="how-to-edit">
      <SectionHeading title="Easy to Edit a Video in Filmora Video Editor" />
      <div className="grid gap-4 lg:grid-cols-3">
        {EDIT_STEPS.map((step) => (
          <div key={step.index} className="surface-card overflow-hidden p-4">
            <video
              src={step.src}
              autoPlay
              loop
              muted
              playsInline
              controls
              preload="auto"
              className="w-full rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
            <p className="mt-4 text-[10px] font-bold tracking-[0.16em] text-gradient-brand">
              {step.index}
            </p>
            <h3 className="mt-1 text-sm font-extrabold">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href="https://filmora.wondershare.com/guide/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[52px] w-full items-center justify-center rounded-xl border border-border bg-secondary px-6 text-sm font-bold tracking-wide transition-colors hover:bg-accent sm:w-auto"
        >
          View Full Guide
        </a>
      </div>
    </Section>
  );
}

/* ---------------- Value + audience ---------------- */

const USE_CASES = [
  { title: "YouTube", body: "Create long-form videos, tutorials and educational content." },
  { title: "Reels", body: "Create engaging short-form vertical videos." },
  { title: "Shorts", body: "Build fast, attention-grabbing short videos." },
  { title: "Product Videos", body: "Create polished product demonstrations." },
  { title: "Social Ads", body: "Build promotional videos for your campaigns." },
  { title: "Freelance Projects", body: "Create professional client content." },
];

const AUDIENCE = [
  { icon: "▶", title: "YouTubers", body: "Edit long-form content faster." },
  { icon: "◎", title: "Instagram Creators", body: "Produce scroll-stopping Reels." },
  { icon: "⚡", title: "Short-form Creators", body: "Turn ideas into clips quickly." },
  { icon: "◆", title: "Freelancers", body: "Deliver client work professionally." },
  { icon: "◼", title: "Small Businesses", body: "Make promo videos in-house." },
  { icon: "✎", title: "Students", body: "Learn editing with practical tools." },
];

export function ValueAndAudience() {
  return (
    <>
      <Section tone="light">
        <SectionHeading tone="light" title="Create More Than Just Videos" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((u) => (
            <div
              key={u.title}
              className="rounded-2xl border border-ink/10 bg-white p-5 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <h3 className="text-xs font-extrabold uppercase tracking-[0.14em] text-ink">
                {u.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{u.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Built for Creators" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCE.map((a) => (
            <div key={a.title} className="surface-card lift flex items-start gap-3 p-5">
              <span
                aria-hidden
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg gradient-brand text-sm text-primary-foreground"
              >
                {a.icon}
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-bold">{a.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}

/* ---------------- Compatibility + access ---------------- */

export function Compatibility() {
  return (
    <Section id="compatibility">
      <SectionHeading title="Check Compatibility Before You Buy" />
      <div className="grid gap-4 lg:grid-cols-2">
        {COMPATIBILITY.groups.map((g) => (
          <div key={g.name} className="surface-card overflow-hidden">
            <h3 className="border-b border-border px-5 py-3 text-xs font-extrabold uppercase tracking-[0.14em]">
              {g.name}
            </h3>
            <dl className="divide-y divide-border">
              {g.rows.map((r) => (
                <div key={r.platform} className="grid grid-cols-[7rem_minmax(0,1fr)] gap-3 px-5 py-3">
                  <dt className="text-sm font-semibold">{r.platform}</dt>
                  <dd className="text-sm text-muted-foreground">{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">{COMPATIBILITY.note}</p>
    </Section>
  );
}

export function AccessInfo() {
  const rows = [
    ["Product", PRODUCT.PRODUCT_NAME],
    ["Version", PRODUCT.VERSION],
    ["License / Access Type", PRODUCT.LICENSE_TYPE],
    ["Supported Platforms", PRODUCT.SUPPORTED_PLATFORMS],
    ["Updates", PRODUCT.UPDATE_POLICY],
    ["Delivery", PRODUCT.DELIVERY_METHOD],
    ["Included Bonuses", PRODUCT.BONUS_CONTENT],
  ];
  return (
    <Section>
      <SectionHeading title="Clear Access Information" />
      <div className="surface-card mx-auto max-w-3xl divide-y divide-border overflow-hidden">
        {rows.map(([k, v]) => (
          <div key={k} className="grid gap-1 px-5 py-4 sm:grid-cols-[14rem_minmax(0,1fr)] sm:gap-4">
            <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
              {k}
            </span>
            <span className="text-sm">{v}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Included + delivery ---------------- */

export function Included() {
  return (
    <Section id="included">
      <SectionHeading title="Your Purchase Includes" />
      <ul className="surface-card mx-auto grid max-w-2xl gap-3 p-6">
        <Check>Filmora package/access as described</Check>
        <Check>Included editing resources</Check>
        <Check>Effects / templates listed above</Check>
        <Check>Setup instructions</Check>
        <Check>Delivery information</Check>
        <Check>Customer support</Check>
        <Check>{PRODUCT.BONUS_CONTENT}</Check>
      </ul>
    </Section>
  );
}

const STEPS = [
  { n: "01", title: "Pay Securely", body: "Complete your purchase through our checkout." },
  {
    n: "02",
    title: "Receive Your Access",
    body: "Receive the digital delivery information according to the stated delivery process.",
  },
  {
    n: "03",
    title: "Start Creating",
    body: "Follow the provided setup instructions and begin creating.",
  },
];

export function Delivery() {
  return (
    <Section id="delivery" tone="light">
      <SectionHeading tone="light" title="From Payment to Editing in 3 Steps" />
      <ol className="grid gap-4 lg:grid-cols-3">
        {STEPS.map((s) => (
          <li key={s.n} className="relative rounded-2xl border border-ink/10 bg-white p-6">
            <span className="text-xs font-extrabold tracking-[0.18em] text-gradient-brand">
              STEP {s.n}
            </span>
            <h3 className="mt-2 text-sm font-extrabold uppercase tracking-[0.12em] text-ink">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ---------------- Why + proof ---------------- */

const WHY = [
  { title: "Transparent", body: "Clear product information before checkout." },
  { title: "Fast", body: "Digital delivery without unnecessary waiting." },
  { title: "Secure", body: "Checkout through the available secure payment system." },
  { title: "Support", body: "Get help when you need it." },
];

export function WhyDigicone() {
  return (
    <Section id="why">
      <SectionHeading title="Why Shop With DIGICONE?" />
      <div className="grid gap-4 sm:grid-cols-2">
        {WHY.map((w) => (
          <div key={w.title} className="surface-card lift p-6">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.14em]">{w.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function SocialProof() {
  const hasReviewImages = CUSTOMER_REVIEW_IMAGES.length > 0;

  return (
    <Section id="reviews">
      <SectionHeading
        title="What Creators Are Saying"
        subtitle="Real feedback from customers who purchased this package."
      />
      {hasReviewImages ? (
        <div className="mx-auto w-full max-w-4xl px-2 sm:px-8">
          <Carousel
            opts={{ align: "center", loop: true }}
            className="relative w-full"
            aria-label="Customer review screenshots"
          >
            <CarouselContent className="-ml-3 sm:-ml-4">
              {CUSTOMER_REVIEW_IMAGES.map((item, index) => (
                <CarouselItem
                  key={`${item.alt}-${index}`}
                  className="basis-[88%] pl-3 sm:basis-1/2 sm:pl-4 lg:basis-[45%]"
                >
                  <figure className="surface-card overflow-hidden p-3 sm:p-4">
                    {item.src ? (
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        decoding="async"
                        className="max-h-[420px] w-full rounded-lg object-contain object-center"
                      />
                    ) : (
                      <ImagePlaceholder
                        label={item.caption}
                        className="min-h-56 bg-background/50 sm:min-h-72"
                      />
                    )}
                    {item.caption && item.src ? (
                      <figcaption className="mt-3 text-center text-xs text-muted-foreground">
                        {item.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 top-1/2 z-10 -translate-y-1/2 border-border bg-background/95 shadow-md sm:-left-4" />
            <CarouselNext className="right-0 top-1/2 z-10 -translate-y-1/2 border-border bg-background/95 shadow-md sm:-right-4" />
          </Carousel>
          <div className="mt-6 flex flex-col items-center gap-2">
            <p
              className="relative inline-block text-2xl leading-none tracking-[0.12em]"
              aria-label={`${CUSTOMER_REVIEW_RATING.score} out of ${CUSTOMER_REVIEW_RATING.outOf} stars`}
            >
              <span className="text-muted-foreground/35" aria-hidden>
                {"★".repeat(CUSTOMER_REVIEW_RATING.outOf)}
              </span>
              <span
                className="absolute inset-y-0 left-0 overflow-hidden text-chart-4"
                style={{
                  width: `${Math.min(
                    100,
                    Math.max(0, (CUSTOMER_REVIEW_RATING.score / CUSTOMER_REVIEW_RATING.outOf) * 100),
                  )}%`,
                }}
                aria-hidden
              >
                {"★".repeat(CUSTOMER_REVIEW_RATING.outOf)}
              </span>
            </p>
            <p className="text-sm font-semibold text-muted-foreground">
              {CUSTOMER_REVIEW_RATING.score.toFixed(1)} / {CUSTOMER_REVIEW_RATING.outOf} customer rating
            </p>
          </div>
        </div>
      ) : (
        <div className="surface-card mx-auto max-w-xl p-8 text-center text-sm text-muted-foreground">
          Customer reviews will appear here.
        </div>
      )}

      {TESTIMONIALS.length > 0 ? (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name + t.city} className="surface-card p-5">
              <div className="flex items-center gap-3">
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt=""
                    loading="lazy"
                    className="h-10 w-10 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-sm font-bold">
                    {t.name.charAt(0)}
                  </span>
                )}
                <figcaption className="min-w-0">
                  <p className="truncate text-sm font-bold">{t.name}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {t.creator_type} · {t.city}
                  </p>
                </figcaption>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.review}</p>
              <p className="mt-2 text-xs text-chart-4" aria-label={`${t.rating} out of 5`}>
                {"★".repeat(Math.round(t.rating))}
              </p>
            </figure>
          ))}
        </div>
      ) : null}
    </Section>
  );
}

/* ---------------- Pricing + confidence ---------------- */

export function Pricing() {
  return (
    <Section id="pricing">
      <div className="surface-card mx-auto max-w-xl p-6 text-center sm:p-10">
        <span className="inline-flex rounded-full gradient-brand px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-primary-foreground">
          Creator Special
        </span>
        <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">
          {PRODUCT.PRODUCT_PACKAGE_NAME}
        </h2>
        <div className="mt-4 flex items-end justify-center gap-3">
          {PRODUCT.REFERENCE_PRICE ? (
            <span className="pb-2 text-lg text-muted-foreground line-through">
              {formatINR(PRODUCT.REFERENCE_PRICE)}
            </span>
          ) : null}
          <span className="text-5xl font-extrabold">{formatINR(PRODUCT.PRODUCT_PRICE)}</span>
        </div>
        <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
          One-time payment
        </p>
        <ul className="mx-auto mt-6 grid max-w-sm gap-2.5 text-left">
          <Check>Product as described</Check>
          <Check>Included resources</Check>
          <Check>Setup/access information</Check>
          <Check>Digital delivery</Check>
          <Check>Customer support</Check>
        </ul>
        <div className="mt-7">
          <CtaButton ctaId="pricing_cta" className="w-full">
            GET INSTANT ACCESS — {formatINR(PRODUCT.PRODUCT_PRICE)}
          </CtaButton>
        </div>
        <PaymentBadges className="mt-3" />
        <p className="mt-3 text-xs text-muted-foreground">
          Please review product details, compatibility and access terms before purchasing.
        </p>
      </div>
    </Section>
  );
}

const CONFIDENCE = [
  {
    title: "Secure Checkout",
    body: "Complete your order using the available secure payment methods.",
  },
  { title: "Clear Delivery", body: "Know how your digital purchase will be delivered." },
  { title: "Customer Support", body: "Contact our team if you need assistance." },
];

export function Confidence() {
  return (
    <Section>
      <SectionHeading title="Shop With Confidence" />
      <div className="grid gap-3 lg:grid-cols-3">
        {CONFIDENCE.map((c) => (
          <div key={c.title} className="surface-card p-5">
            <h3 className="text-xs font-extrabold uppercase tracking-[0.14em]">{c.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
          </div>
        ))}
      </div>
      <div className="surface-card mt-4 grid gap-2 p-5 text-sm text-muted-foreground sm:grid-cols-2">
        <p>
          <span className="font-bold text-foreground">Refund Policy: </span>
          {PRODUCT.REFUND_POLICY}
        </p>
        <p>
          <span className="font-bold text-foreground">Support: </span>
          {PRODUCT.SUPPORT_EMAIL}
        </p>
      </div>
    </Section>
  );
}

/* ---------------- FAQ ---------------- */

export function Faq() {
  const faqs = [
    ["What exactly will I receive?", "You will receive the exact product contents listed on this page."],
    ["Which devices are supported?", "Supported devices are listed in the Compatibility section above."],
    ["Is this a subscription?", PRODUCT.IS_SUBSCRIPTION_ANSWER],
    ["What type of license/access is included?", PRODUCT.LICENSE_TYPE],
    ["How will I receive my purchase?", PRODUCT.DELIVERY_METHOD],
    ["Are future updates included?", PRODUCT.UPDATE_POLICY],
    ["Can I request a refund?", PRODUCT.REFUND_POLICY],
    ["How quickly will I receive the product?", PRODUCT.DELIVERY_TIME],
    ["Is customer support available?", PRODUCT.SUPPORT_INFO],
    [
      "What should I check before purchasing?",
      "Please review the product contents, compatibility, access/license information and refund policy before completing your purchase.",
    ],
  ];

  return (
    <Section id="faq">
      <SectionHeading title="Frequently Asked Questions" />
      <Accordion type="single" collapsible className="mx-auto max-w-3xl">
        {faqs.map(([q, a], i) => (
          <AccordionItem key={q} value={`faq-${i}`} className="surface-card mb-3 border-0 px-5">
            <AccordionTrigger className="text-left text-sm font-bold hover:no-underline">
              {q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}

/* ---------------- Final CTA ---------------- */

export function FinalCta() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div
        className="mx-auto w-full max-w-6xl rounded-3xl border border-border p-8 text-center sm:p-16"
        style={{
          backgroundImage:
            "radial-gradient(120% 100% at 50% 0%, color-mix(in oklab, var(--accent-violet) 32%, transparent), transparent 70%), var(--gradient-brand)",
          backgroundBlendMode: "overlay",
        }}
      >
        <h2 className="text-balance text-3xl font-extrabold sm:text-5xl">
          Ready to Create Better Videos?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/80 sm:text-base">
          Get the {PRODUCT.PRODUCT_PACKAGE_NAME} for {formatINR(PRODUCT.PRODUCT_PRICE)} and start
          building better content.
        </p>
        <p className="mt-6 text-5xl font-extrabold">{formatINR(PRODUCT.PRODUCT_PRICE)}</p>
        <div className="mt-6 flex justify-center">
          <CtaButton
            ctaId="final_cta"
            variant="ghost"
            className="border-white/25 bg-background/80 backdrop-blur"
          >
            🚀 GET INSTANT ACCESS
          </CtaButton>
        </div>
        <PaymentBadges className="mt-4" />
        <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-primary-foreground/85">
          {["Secure checkout", "Digital delivery", "Clear product details", "Customer support"].map(
            (t) => (
              <li key={t}>✓ {t}</li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
