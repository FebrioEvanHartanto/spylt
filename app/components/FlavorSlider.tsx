import { flavorlists } from "../constants/FlavorList";
import Image from "next/image";

export default function FlavorSlider() {
  return (
    <div className="slider-wrapper">
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
              className="absolute bottom-0 object-contain"
            />
            <Image
              src={`/images/${flavor.color}-drink.webp`}
              alt={`${flavor.color}-drink`}
              width={435}
              height={500}
              sizes="(min-width:1024px) 50vw, (min-width:768px) 90vw, 384px"
              className="drinks object-contain"
            />
            <Image
              src={`/images/${flavor.color}-elements.webp`}
              alt={`${flavor.color}-elements`}
              width={700}
              height={700}
              className="elements object-contain"
            />
            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
