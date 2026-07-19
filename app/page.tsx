import Navbar from "./components/navbar";
import HeroSection from "./sections/HeroSection";
import MessageSection from "./sections/MessageSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MessageSection />
      <div className="h-dvh border border-red-500"></div>
    </div>
  );
}
