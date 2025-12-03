import type { FeatureCard } from "./types";
import type { Browser } from "./types";
import type { FAQ } from "./types";

export const features: FeatureCard[] = [
  {
    id: "bookmarking",
    title: "Bookmark in one click",
    image: "/images/illustration-features-tab-1.svg",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    id: "searching",
    title: "Intelligent search",
    image: "/images/illustration-features-tab-2.svg",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    id: "sharing",
    title: "Share your bookmarks",
    image: "/images/illustration-features-tab-3.svg",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
  },
];

export const browsers: Browser[] = [
  { name: "Chrome", version: "62", image: "/images/logo-chrome.svg" },
  { name: "Firefox", version: "55", image: "/images/logo-firefox.svg" },
  { name: "Opera", version: "46", image: "/images/logo-opera.svg" },
];

export const faqs: FAQ[] = [
  {
    title: "What is Bookmark?",
    description:
      "Bookmark is a simple and powerful tool to manage your favorite Websites efficiently.",
  },
  {
    title: "How can I request a new browser?",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    title: "Is there a mobile app?",
    description:
      "We are currently working on a mobile version. Stay tuned for updates!",
  },
  {
    title: "What about other Chromium browsers?",
    description:
      "We are exploring support for other Chromium-based browsers like Brave and Vivaldi.",
  },
];
