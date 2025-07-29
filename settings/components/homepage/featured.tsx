"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge, ChevronRight, Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <section className="container-custom py-12">
      <h2 className="section-title">Nieuw Binnen</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {/* Product Card 1 - Casual */}
        <Card className="overflow-hidden group">
          <Link href="/product/1" className="block">
            <div className="relative h-60 md:h-72 overflow-hidden">
              <Badge className="absolute top-2 left-2 z-10 bg-accent text-white">
                NIEUW
              </Badge>
              <Image
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1915"
                alt="Men's Casual T-Shirt"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full"
                >
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Link>
          <CardContent className="p-4">
            <Link
              href="/product/1"
              className="block font-montserrat text-sm md:text-base font-medium mb-1 truncate hover:text-primary transition-colors"
            >
              Casual Organic Cotton T-Shirt
            </Link>
            <div className="flex items-center space-x-1 mb-2">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-gray-500">(32)</span>
            </div>
            <p className="font-semibold">€29,95</p>
          </CardContent>
        </Card>

        {/* Product Card 2 - Casual */}
        <Card className="overflow-hidden group">
          <Link href="/product/2" className="block">
            <div className="relative h-60 md:h-72 overflow-hidden">
              <Badge className="absolute top-2 left-2 z-10 bg-accent text-white">
                NIEUW
              </Badge>
              <Image
                src="https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?q=80&w=1974"
                alt="Men's Casual Jeans"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full"
                >
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Link>
          <CardContent className="p-4">
            <Link
              href="/product/2"
              className="block font-montserrat text-sm md:text-base font-medium mb-1 truncate hover:text-primary transition-colors"
            >
              Slim Fit Casual Jeans
            </Link>
            <div className="flex items-center space-x-1 mb-2">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <Star className="h-3 w-3 text-gray-300" />
              <span className="text-xs text-gray-500">(18)</span>
            </div>
            <p className="font-semibold">€49,95</p>
          </CardContent>
        </Card>

        {/* Product Card 3 - Sports */}
        <Card className="overflow-hidden group">
          <Link href="/product/3" className="block">
            <div className="relative h-60 md:h-72 overflow-hidden">
              <Badge className="absolute top-2 left-2 z-10 bg-accent text-white">
                NIEUW
              </Badge>
              <Image
                src="https://images.unsplash.com/photo-1517940310602-26535839fe84?q=80&w=1974"
                alt="Women's Running Jacket"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full"
                >
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Link>
          <CardContent className="p-4">
            <Link
              href="/product/3"
              className="block font-montserrat text-sm md:text-base font-medium mb-1 truncate hover:text-primary transition-colors"
            >
              Women's Lightweight Running Jacket
            </Link>
            <div className="flex items-center space-x-1 mb-2">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-gray-500">(45)</span>
            </div>
            <p className="font-semibold">€59,95</p>
          </CardContent>
        </Card>

        {/* Product Card 4 - Sports */}
        <Card className="overflow-hidden group">
          <Link href="/product/4" className="block">
            <div className="relative h-60 md:h-72 overflow-hidden">
              <Badge className="absolute top-2 left-2 z-10 bg-accent text-white">
                NIEUW
              </Badge>
              <div className="absolute top-2 right-2 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded">
                Nog maar 2!
              </div>
              <Image
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920"
                alt="Mens Performance Training Shirt"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full"
                >
                  <Heart className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full"
                >
                  <ShoppingCart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Link>
          <CardContent className="p-4">
            <Link
              href="/product/4"
              className="block font-montserrat text-sm md:text-base font-medium mb-1 truncate hover:text-primary transition-colors"
            >
              Performance Training Shirt
            </Link>
            <div className="flex items-center space-x-1 mb-2">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <Star className="h-3 w-3 text-gray-300" />
              <span className="text-xs text-gray-500">(27)</span>
            </div>
            <p className="font-semibold">€34,95</p>
          </CardContent>
        </Card>
      </div>
      <div className="text-center mt-8">
        <Link href="/new-arrivals">
          <Button variant="outline" className="mx-auto">
            Bekijk Alle Nieuwe Items
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

Featured.schema = {
  displayName: "Featured Section/ New Arrivals",
  options: [
    {
      name: "feature1",
      type: "component",
      label: "Feature 1",
    },
  ],
};

export default Featured;
