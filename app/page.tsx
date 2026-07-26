import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortofolioGrid.tsx";
import Layanan from "@/components/Layanan.tsx";

export default function Home() {
  return (
    <>
      <Hero />
      <PortfolioGrid />
      <Layanan />
    </>
  );
}