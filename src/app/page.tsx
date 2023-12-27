"use client";

import Accdrediations from "@/components/home/Accdrediations";
import Clients from "@/components/home/Clients";
import Features from "@/components/home/Features";
import Geography from "@/components/home/Geography";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import Services from "@/components/home/Services";
import Teams from "@/components/home/Teams";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Features />
      <Services />
      <Products />
      <Accdrediations />
      <Teams />
      <Testimonials />
      <Geography />
    </main>
  );
}
