import React from "react";
import { HeroParallax } from "../components/ui/hero-parallax";

function HeroSection() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Invoice Generation",
    link: "https://gomoonbeam.com",
    thumbnail: "invoice.png",
  },
  {
    title: "Skils",
    link: "#",
    thumbnail: "skils.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "chat.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "lms.png",
  },

  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Technology Hub",
    link: "#",
    thumbnail: "tech.png",
  },
  {
    title: "secret desires",
    link: "https://gleaming-tartufo-18c957.netlify.app/",
    thumbnail: "AIchatbot.png",
  },

  {
    title: "Blog Web App",
    link: "#",
    thumbnail: "Blog.png",
  },
  {
    title: "Online Quiz",
    link: "https://tailwindmasterkit.com",
    thumbnail: "quiz.png",
  },

  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

export default HeroSection;
