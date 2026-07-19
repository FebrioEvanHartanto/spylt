"use client";
import Navbar from "./components/navbar";
import FlavorSection from "./sections/FlavorSection";
import HeroSection from "./sections/HeroSection";
import MessageSection from "./sections/MessageSection";
import { ScrollSmoother } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <div className="h-dvh border-red-500 border-solid border-2"></div>
        </div>
      </div>
    </main>
  );
}
