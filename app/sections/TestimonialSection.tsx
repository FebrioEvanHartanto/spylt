"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { cards } from "../constants/FlavorList";
import { gsap } from "@/lib/gsap";

export default function TestimonialSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useGSAP(
    () => {
      gsap.set(".testimonials-section", {
        marginTop: "-140vh",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top bottom",
          end: "200% top",
          scrub: true,
        },
      });

      tl.to(".testimonials-section .first-title", {
        xPercent: 70,
      })
        .to(
          ".testimonials-section .sec-title",
          {
            xPercent: 25,
          },
          "<",
        )
        .to(
          ".testimonials-section .third-title",
          {
            xPercent: -50,
          },
          "<",
        );

      const pinTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "10% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
        },
      });

      pinTl.from(".vd-card", {
        yPercent: 150,
        stagger: 0.2,
        ease: "power1.inOut",
      });
    },
    { scope: sectionRef },
  );

  const playVideo = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    void video.play().catch(() => {});
  };

  const pauseVideo = (index: number) => {
    if (activeIndex === index) return;
    videoRefs.current[index]?.pause();
  };

  const handleCardClick = (index: number) => {
    const isActive = activeIndex === index;

    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i === index) {
        video.muted = isActive;
        void video.play().catch(() => {});
      } else {
        video.muted = true;
        video.pause();
      }
    });

    setActiveIndex(isActive ? null : index);
  };

  const handleMouseEnter = (index: number) => {
    if (activeIndex === index) return;
    playVideo(index);
  };

  return (
    <section ref={sectionRef} className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title">What&apos;s</h1>
        <h1 className="text-light-brown sec-title">Everyone</h1>
        <h1 className="text-black third-title">Saying</h1>
      </div>

      <div className="pin-box">
        {cards.map((card, index) => (
          <div
            key={card.name}
            style={{ zIndex: index }}
            className={`vd-card ${card.rotation} ${card.translation ?? ""}`}
            onClick={() => handleCardClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => pauseVideo(index)}
          >
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={card.src}
              playsInline
              muted
              loop
              autoPlay
              preload="auto"
            />
            {activeIndex !== index && (
              <div className="vd-card-audio-hint" aria-hidden="true">
                Tap for sound
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
