"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export default function VideoPinSection() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
        },
      });

      tl.to(".video-box", {
        clipPath: "circle(100% at 50% 50%)",
        ease: "power1.inOut",
      });
    });

    return () => mm.revert();
  });

  return (
    <div className="vd-pin-section">
      <div
        style={{
          clipPath: "circle(0% at 50% 50%)",
        }}
        className="size-full video-box"
      >
        <video src="/videos/pin-video.mp4" playsInline muted loop autoPlay />
        <div className="abs-center md:scale-100 scale-200">
          <Image
            src="/images/circle-text.svg"
            alt="pin"
            width={100}
            height={100}
            className="spin-cycle"
          />
          <div className="play-btn">
            <Image
              src="/images/play.svg"
              alt="play"
              width={100}
              height={100}
              className="size-[3vw] ml-[.5vw]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
