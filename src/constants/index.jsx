import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "We Offer", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Price", href: "#" },
  { label: "Reviews", href: "#" },
];
export const testimonials = [
  {
    user: "Mark",
    company: "Tech Innovators",
    image: user1,
    text: "The service was outstanding! The team was highly professional and the results exceeded our expectations. I would definitely work with them again.",
  },
  {
    user: "Luci",
    company: "Creative Solutions",
    image: user2,
    text: "Our project was a success thanks to the team's innovative approach and attention to detail. Their dedication was truly impressive.",
  },
  {
    user: "Alan",
    company: "Future Enterprises",
    image: user3,
    text: "Collaborating with this company was an excellent experience. Their expertise and commitment to quality made all the difference.",
  },
  {
    user: "Jack White",
    company: "Dynamic Ventures",
    image: user4,
    text: "The team at ABC Corp transformed our project. Their innovative solutions and meticulous attention to detail were invaluable. Highly recommended!",
  },
  {
    user: "Mike Green",
    company: "Visionary Tech",
    image: user5,
    text: "The professionalism and expertise displayed by the team were exceptional. They delivered high-quality results that far surpassed our expectations.",
  },
  {
    user: "Laura",
    company: "Alliance Networks",
    image: user6,
    text: "The team's dedication and expertise were critical to our project's success. We look forward to future collaborations.",
  },
];


export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Basic",
    price: " ₹0",
    features: [
      "Community Support",
      "2 GB Storage",
      "Basic Analytics",
      "Standard Security",
    ],
  },
  {
    title: "Standard",
    price: " ₹1500",
    features: [
      "Email Support",
      "20 GB Storage",
      "Advanced Analytics",
      "Enhanced Security",
    ],
  },
  {
    title: "Premium",
    price: " ₹5000",
    features: [
      "24/7 Priority Support",
      "Unlimited Storage",
      "Premium Analytics",
      "Enterprise-Grade Security",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
