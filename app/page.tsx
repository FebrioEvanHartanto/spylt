import Navbar from "./components/navbar";
import HeroSection from "./sections/HeroSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="h-dvh border border-red-500"></div>
    </div>
  );
}
