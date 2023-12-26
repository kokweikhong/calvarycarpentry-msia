"use client";

import HomeAccdrediations from "@/components/HomeAccdrediations";
import HomeClients from "@/components/HomeClients";
import HomeFeatures from "@/components/HomeFeatures";
import HomeHero from "@/components/HomeHero";
import HomeProducts from "@/components/HomeProducts";
import HomeServices from "@/components/HomeServices";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeClients />
      <HomeFeatures />
      <HomeServices />
      <HomeProducts />
      <HomeAccdrediations />
    </main>
  );
}
