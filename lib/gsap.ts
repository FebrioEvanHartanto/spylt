import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);

export { gsap, SplitText, ScrollSmoother };
