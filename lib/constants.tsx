import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SocialIcon, NavMenuItem, StatItem } from "./types";

export const SOCIAL_ICONS: SocialIcon[] = [
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/ayomidearowoloayodeji?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    name: "LinkedIn"
  },
  {
    icon: <FaSquareXTwitter />,
    link: "https://x.com/knowtheblocks_?t=VNjLr__AVfJPoU219GCj1w&s=08",
    name: "Twitter/X"
  },
  {
    icon: <FaFacebook />,
    link: "#",
    name: "Facebook"
  }
];

export const NAV_MENU: NavMenuItem[] = [
  { name: "Home", navURL: "/" },
  { name: "About", navURL: "/more-about-me" },
  { name: "Portfolio", navURL: "/portfolio" },
  { name: "Resources", navURL: "/resources" },
];

export const FOOTER_NAV_MENU: NavMenuItem[] = [
  { name: "Home", navURL: "/" },
  { name: "About", navURL: "/more-about-me" },
  { name: "Portfolio", navURL: "/portfolio" },
  { name: "Resources", navURL: "/resources" },
];

export const STATS: StatItem[] = [
  {
    number: "10k+",
    name: "plus students impacted"
  },
  {
    number: "20k+",
    name: "community members"
  },
  {
    number: "10+",
    name: "projects completed"
  }
];

export const SITE_CONFIG = {
  name: "Ayomide Arowolo-Ayodeji",
  title: "EdTech Innovator & AI Literacy Advocate",
  description: "EdTech innovator, AI literacy advocate, and blockchain educator dedicated to expanding access to emerging technologies for underserved communities.",
  url: "https://iamtheayomide.com",
  bookingUrl: "https://outlook.office.com/bookwithme/user/7d3c3f6ee4e9414296cdcdc8704495b6@gse.harvard.edu?anonymous&ep=plink"
};