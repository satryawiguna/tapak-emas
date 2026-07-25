import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BusinessSectors from "@/components/BusinessSectors";
import VisionMission from "@/components/VisionMission";
import CoreValues from "@/components/CoreValues";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BusinessSectors />
        <VisionMission />
        <CoreValues />
      </main>
      <Footer />
    </>
  );
}
