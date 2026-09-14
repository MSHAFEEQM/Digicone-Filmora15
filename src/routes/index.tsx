import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/landing/Header";
import { Hero, TrustBar } from "@/components/landing/Hero";
import { StickyCta } from "@/components/landing/StickyCta";
import { Footer } from "@/components/landing/Footer";
import {
  AccessInfo,
  Compatibility,
  Confidence,
  Credibility,
  Delivery,
  EasyToEdit,
  Faq,
  FeaturedProduct,
  Features,
  FinalCta,
  Included,
  Pricing,
  ProductPreview,
  SocialProof,
  ValueAndAudience,
  WhyDigicone,
} from "@/components/landing/Sections";
import { initPixel } from "@/lib/pixel";
import { PRODUCT } from "@/config/product";

const TITLE = "Filmora 15 AI Creator Package ₹199 | DIGICONE";
const DESCRIPTION =
  "Explore the Filmora 15 AI Creator Package from DIGICONE. Get video editing tools, creative resources and features for YouTube, Reels, Shorts and social media.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: PRODUCT.PRODUCT_PACKAGE_NAME,
          description: PRODUCT.PRODUCT_DESCRIPTION,
          brand: { "@type": "Brand", name: "DIGICONE" },
          offers: {
            "@type": "Offer",
            price: PRODUCT.PRODUCT_PRICE,
            priceCurrency: PRODUCT.CURRENCY,
            availability: "https://schema.org/InStock",
          },
        }),
      },
    ],
  }),
});

function Index() {
  useEffect(() => {
    initPixel();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <TrustBar />
      <main>
        <Hero />
        {/* <Credibility /> */}
        <FeaturedProduct />
        <ProductPreview />
        <Features />
        <EasyToEdit />
        {/* <ValueAndAudience /> */}
        <Compatibility />
        <AccessInfo />
        <Included />
        {/* <Delivery /> */}
        <WhyDigicone />
        <SocialProof />
        <Pricing />
        <Confidence />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
