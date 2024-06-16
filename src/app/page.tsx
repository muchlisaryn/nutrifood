import Navbar from "@/component/Molecules/Navbar";
import HeroSection from "./partials/home/HeroSection";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Navbar />
      </div>
      <HeroSection />
    </>
  );
}
