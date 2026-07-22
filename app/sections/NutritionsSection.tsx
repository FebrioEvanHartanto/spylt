import Image from "next/image";
import { nutrientLists } from "../constants/FlavorList";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

export default function NutritionsSection() {
  useGSAP(() => {
    const titleSplit = SplitText.create(".nutrition-title", {
      type: "chars",
    });
    const paragraphSplit = SplitText.create(".nutrition-section p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top center",
      },
    });
    contentTl
      .from(titleSplit.chars, {
        yPercent: 100,
        stagger: 0.02,
        ease: "power2.out",
      })
      .from(paragraphSplit.words, {
        yPercent: 300,
        rotate: 3,
        ease: "power1.inOut",
        duration: 1,
        stagger: 0.01,
      });
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".nutrition-section",
        start: "top 80%",
      },
    });

    titleTl.to(".nutrition-text-scroll", {
      duration: 1,
      opacity: 1,
      clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
      ease: "power1.inOut",
    });
  });
  return (
    <section className="nutrition-section">
      <Image
        src="/images/slider-dip.png"
        alt=""
        fill
        className="w-full object-cover"
      />

      <Image
        src="/images/big-img.png"
        alt="big-img"
        fill
        className="w-full object-cover"
      />

      <div className="flex md:flex-row flex-col justify-between md:px-10 mt-14 md:mt-0">
        <div className="relative inline-block md:tranlate-y-20">
          <div className="general-title relative flex flex-col justify-center items-center gap-24">
            <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title">It Still Does</h1>
            </div>
            <div
              style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
              className="nutrition-text-scroll"
            >
              <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3 inline-block">
                <h2 className="text-milk-yellow">Body Good</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center items-center translate-y-5">
          <div className="md:max-w-xs max-w-md">
            <p className="text-lg md:text-right text-balance font-paragraph">
              Milk contains a wide array of nutrients, including vitamins,
              minerals, and protein, and this is lactose free
            </p>
          </div>
        </div>

        <div className="nutrition-box">
          <div className="list-wrapper">
            {nutrientLists.map((nutrient, index) => (
              <div
                key={nutrient.label}
                className={`relative flex-1 col-center ${index >= 3 ? "max-md:hidden" : ""}`}
              >
                <div>
                  <p className="md:text-lg font-paragraph">{nutrient.label}</p>
                  <p className="text-sm mt-2 font-paragraph">up to</p>
                  <p className="text-2xl md:text-4xl tracking-tighter font-bold">
                    {nutrient.amount}
                  </p>
                </div>

                {index !== nutrientLists.length - 1 && (
                  <div
                    className={`spacer-border ${index === 2 ? "max-md:hidden" : ""}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
