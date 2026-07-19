"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { flavorlists } from "../constants/FlavorList";
import { useRef } from "react";

export default function FlavorSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sliderRef.current) return;

    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "2% top",
        end: `+=${scrollAmount}px`,
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    tl.to(".flavor-section", {
      x: `-${scrollAmount}px`,
      ease: "power1.inOut",
    });
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
          >
            <Image
              src={`/images/${flavor.color}-bg.svg`}
              alt={`${flavor.color}-bg`}
              width={700}
              height={700}
              sizes="(min-width:1024px) 50vw, (min-width:768px) 90vw, 384px"
              className="absolute bottom-0 object-contain w-full h-auto"
            />
            <Image
              src={`/images/${flavor.color}-drink.webp`}
              alt={`${flavor.color}-drink`}
              width={450}
              height={500}
              sizes="(min-width:1024px) 50vw, (min-width:768px) 90vw, 384px"
              className="drinks object-contain"
            />
            <Image
              src={`/images/${flavor.color}-elements.webp`}
              alt={`${flavor.color}-elements`}
              width={700}
              height={700}
              sizes="(min-width:1024px) 50vw, (min-width:768px) 90vw, 384px"
              className="elements object-contain"
            />
            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
