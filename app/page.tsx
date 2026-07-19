import Navbar from "./components/navbar";
import HeroSection from "./sections/HeroSection";
import MessageSection from "./sections/MessageSection";
import FlavorSection from "./sections/FlavorSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MessageSection />
      <FlavorSection />
      <div className="h-dvh border-red-500 border-solid border-2"></div>
    </div>
  );
}
