"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="relative h-[70vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070"
          alt="Diverse group of friends in stylish casual clothing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent flex items-center">
          <div className="container-custom">
            <div className="max-w-xl text-white">
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
                Kwaliteit Ontmoet Betaalbare Stijl
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Ontdek onze Casual en Sports collecties
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-accent">Shop Casual</Button>
                <Button className="btn-primary">Shop Sportswear</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.schema = {
  displayName: "Hero Section",
  options: [
    {
      name: "feature1",
      type: "component",
      label: "Feature 1",
    },
  ],
};

export default HeroSection;
