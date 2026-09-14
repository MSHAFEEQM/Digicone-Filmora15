/**
 * CENTRALIZED PRODUCT CONFIGURATION
 * Edit everything about the offer here. Values wrapped in [BRACKETS]
 * are placeholders that MUST be replaced with verified information
 * before running paid traffic.
 */

export const BRAND = {
  name: "DIGICONE",
  tagline: "Digital tools for modern creators.",
};

export const PRODUCT = {
  PRODUCT_ID: "digicone-filmora-15-ai",
  PRODUCT_NAME: "Filmora 15 AI",
  PRODUCT_SUBTITLE: "Professional Video Editing Suite",
  PRODUCT_PACKAGE_NAME: "Filmora 15 AI Creator Package",
  PRODUCT_PRICE: 199,
  CURRENCY: "INR",
  /** Set only if a genuine, verifiable reference price exists. Otherwise keep null. */
  REFERENCE_PRICE: null as number | null,
  PRODUCT_DESCRIPTION:
    "Create polished videos faster with powerful editing tools, AI features, effects and creative resources.",
  VERSION: "v15.0.0",
  LICENSE_TYPE: "Lifetime License",
  SUPPORTED_PLATFORMS: "Windows, Mac, Android, iOS",
  UPDATE_POLICY: "Lifetime Updates",
  DELIVERY_METHOD: "Digital Download",
  DELIVERY_TIME: "Instant Delivery",
  BONUS_CONTENT: "CapCut Bonus",
  REFUND_POLICY: "30-day money-back guarantee",
  SUPPORT_EMAIL: "support@digicone.com",
  IS_SUBSCRIPTION_ANSWER: "No",
  SUPPORT_INFO: "Support is available via email and chat.",
};

/** Where the CTA sends the buyer. Change to your hosted checkout URL. */
export const CHECKOUT_URL = "https://rzp.io/rzp/FnlYI82";

/** File the buyer can download after a successful payment. */
export const DOWNLOAD_FILE_URL: string | null = "/images/DIGICONE_Digital_Product_Access.pdf";

export const META_PIXEL_ID = "2685807335177361"; // e.g. "1234567890"

export const formatINR = (value: number) =>
  `₹${value.toLocaleString("en-IN")}`;

/**
 * PRODUCT_SCREENSHOTS
 * Set `src` to a real video URL (e.g. "/videos/filmora-timeline.mp4").
 * While src is null the UI shows an honest placeholder instead of a fake video.
 */
export const PRODUCT_SCREENSHOTS: {
  index: string;
  title: string;
  caption: string;
  src: string | null;
}[] = [
  { index: "01", title: "Filmora Interface", caption: "[PRODUCT VIDEO PLACEHOLDER]", src: "/images/Vid1.mp4" },
  { index: "02", title: "AI Editing Features", caption: "[PRODUCT VIDEO PLACEHOLDER]", src: "/images/Vid2.mp4" },
  { index: "03", title: "Effects & Templates", caption: "[PRODUCT VIDEO PLACEHOLDER]", src: "/images/Vid3.mp4" },
  { index: "04", title: "Create Animations", caption: "[PRODUCT VIDEO PLACEHOLDER]", src: "/images/Vid4.mp4" },
];

/** Hero visual. Set to a real screenshot path to replace the framed placeholder. */
export const HERO_IMAGE: string | null = null;

/** Featured product section image (path under public/). */
export const FEATURED_PRODUCT_IMAGE = "/images/featured-product.png";

/** Hero video. Set to a real video URL (e.g. "/videos/hero.mp4"). */
export const HERO_VIDEO_URL: string | null = "/images/Hero-vid.mp4";

/**
 * COMPATIBILITY — never invent these values.                     
 */
export const COMPATIBILITY = {
  note: "Compatibility may vary depending on product version and license/access type.",
  groups: [
    {
      name: "Filmora 15 AI",
      rows: [
        { platform: "Windows", value: "Windows 11, Windows 10, Windows 8.1, Windows 7" },
        { platform: "Mac", value: "Mac OS X 10.15, Mac OS X 10.14, Mac OS X 10.13, Mac OS X 10.12" },
        { platform: "Android", value: "Android 10+" },
        { platform: "iOS", value: "iOS 14+" },
      ],
    },
    {
      name: "CapCut Bonus",
      rows: [
        { platform: "Windows", value: "Windows 10/11" },
        { platform: "Android", value: "Android 16+" },
        { platform: "iOS", value: "iOS 14+" },
      ],
    },
  ],
};

/**
 * FEATURES — remove any feature that is not actually available
 * in the exact version you are selling.
 */
export const FEATURE_GROUPS = [
  {
    icon: "🎬",
    title: "Professional Editing",
    items: [
      "Multi-track timeline",
      "Precision trimming",
      "Keyframe animation",
      "Motion tracking",
      "Split screen",
      "Speed controls",
      "Screen recording",
      "Green screen",
      "Multi-camera editing",
    ],
  },
  {
    icon: "🤖",
    title: "AI-Powered Tools",
    items: [
      "AI editing",
      "AI object removal",
      "AI smart cutout",
      "AI audio enhancement",
      "AI subtitles",
      "Speech-to-text",
      "Background removal",
      "AI-assisted creative tools",
    ],
  },
  {
    icon: "🎨",
    title: "Creative Tools",
    items: [
      "Effects",
      "Transitions",
      "Titles",
      "Templates",
      "Filters",
      "Motion elements",
      "Audio tools",
      "Color tools",
    ],
  },
];

/**
 * HOW TO EDIT — three steps shown after the features section.
 * Set `src` to a real video URL. Dummy links are placeholders.
 */
export const EDIT_STEPS: {
  index: string;
  title: string;
  body: string;
  src: string;
}[] = [
  {
    index: "01",
    title: "Upload Media",
    body: "Launch our video editing software and start a new project. Import your media files or use built-in resources to begin editing.",
    src: "/images/upload.mp4",
  },
  {
    index: "02",
    title: "Edit Your Videos",
    body: "Cut, crop and trim your videos. Drag and drop elements, texts, audio and more into the timeline to create your videos.",
    src: "/images/edit.mp4",
  },
  {
    index: "03",
    title: "Review and Export",
    body: "Preview your videos and finalize changes, then export the finished files or share them on social media.",
    src: "/images/export.mp4",
  },
];

/**
 * TESTIMONIALS — leave empty unless you have genuine, permissioned reviews.
 * Shape: { name, city, creator_type, review, rating, avatar }
 */
export const TESTIMONIALS: {
  name: string;
  city: string;
  creator_type: string;
  review: string;
  rating: number;
  avatar: string | null;
}[] = [];

/**
 * CUSTOMER_REVIEW_IMAGES — screenshots of genuine reviews (e.g. messages, social proof).
 * Set `src` to a path under public/ (e.g. "/images/review-01.webp").
 */
export const CUSTOMER_REVIEW_IMAGES: {
  alt: string;
  caption: string;
  src: string | null;
}[] = [
  { alt: "Customer review screenshot 1", caption: "Raghav S.", src: "/images/1.webp"},
  { alt: "Customer review screenshot 2", caption: "Iman R.", src: "/images/2.webp" },
  { alt: "Customer review screenshot 3", caption: "Amanda C.", src: "/images/3.webp" },
  { alt: "Customer review screenshot 4", caption: "Muskan A.", src: "/images/4.webp" },
  { alt: "Customer review screenshot 3", caption: "Pibhit K.", src: "/images/5.webp" },
  { alt: "Customer review screenshot 4", caption: "Amit K.", src: "/images/6.webp" },
];

/** Star rating shown under the customer review images. */
export const CUSTOMER_REVIEW_RATING = {
  score: 4.2,
  outOf: 5,
};
