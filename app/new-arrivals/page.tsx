"use client";

import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Star, Heart, ShoppingCart, ChevronRight } from "lucide-react";

// Mock new arrivals products
const newProducts = [
  {
    id: "1",
    name: "Casual Organic Cotton T-Shirt",
    price: 29.95,
    rating: 5,
    reviews: 32,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1915",
    isNew: true,
    category: "casual",
    lowStock: false,
  },
  {
    id: "2",
    name: "Slim Fit Casual Jeans",
    price: 49.95,
    rating: 4,
    reviews: 18,
    image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?q=80&w=1974",
    isNew: true,
    category: "casual",
    lowStock: false,
  },
  {
    id: "3",
    name: "Women's Lightweight Running Jacket",
    price: 59.95,
    rating: 5,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1517940310602-26535839fe84?q=80&w=1974",
    isNew: true,
    category: "sportswear",
    lowStock: false,
  },
  {
    id: "4",
    name: "Performance Training Shirt",
    price: 34.95,
    rating: 4,
    reviews: 27,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920",
    isNew: true,
    category: "sportswear",
    lowStock: true,
  },
  {
    id: "5",
    name: "Men's Casual Button-Down Shirt",
    price: 39.95,
    rating: 4,
    reviews: 22,
    image: "https://images.unsplash.com/photo-1563630423918-b58f07336ac5?q=80&w=1974",
    isNew: true,
    category: "casual",
    lowStock: false,
  },
  {
    id: "6",
    name: "Women's Casual Linen Pants",
    price: 44.95,
    rating: 4,
    reviews: 15,
    image: "https://images.unsplash.com/photo-1499372076272-6b5493aecb1c?q=80&w=1974",
    isNew: true,
    category: "casual",
    lowStock: false,
  },
  {
    id: "7",
    name: "Sport Performance Leggings",
    price: 49.95,
    rating: 5,
    reviews: 38,
    image: "https://images.unsplash.com/photo-1506026798239-6b69395acf60?q=80&w=1974",
    isNew: true,
    category: "sportswear",
    lowStock: false,
  },
  {
    id: "8",
    name: "Men's Running Shorts",
    price: 29.95,
    rating: 4,
    reviews: 19,
    image: "https://images.unsplash.com/photo-1581783913959-5c404878423c?q=80&w=1974",
    isNew: true,
    category: "sportswear",
    lowStock: false,
  },
];

export default function NewArrivals() {
  return (
    <Layout>
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-montserrat font-bold text-primary mb-2">
              Nieuw Binnen
            </h1>
            <p className="text-gray-600">
              Ontdek onze nieuwste collectie kleding
            </p>
          </div>
          
          {/* Category Navigation */}
          <div className="flex mt-4 md:mt-0 space-x-2 bg-white rounded-md border p-1">
            <Link href="/category/casual">
              <Button variant="ghost">
                Casual
              </Button>
            </Link>
            <Link href="/category/sportswear">
              <Button variant="ghost">
                Sportswear
              </Button>
            </Link>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {newProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden group">
              <Link href={`/product/${product.id}`} className="block">
                <div className="relative h-60 md:h-72 overflow-hidden">
                  <Badge className="absolute top-2 left-2 z-10 bg-accent text-white">NIEUW</Badge>
                  {product.lowStock && (
                    <div className="absolute top-2 right-2 z-10 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      Nog maar 2!
                    </div>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <ShoppingCart className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </Link>
              <CardContent className="p-4">
                <Link 
                  href={`/product/${product.id}`}
                  className="block font-montserrat text-sm md:text-base font-medium mb-1 truncate hover:text-primary transition-colors"
                >
                  {product.name}
                </Link>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-3 w-3 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>
                <p className="font-semibold">€{product.price.toFixed(2)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="text-center mt-8">
          <Button variant="outline" className="px-6">
            Bekijk meer producten
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        {/* Newsletter Signup */}
        <div className="bg-gray-50 rounded-lg p-8 mt-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-montserrat font-semibold text-primary mb-3">
              Blijf op de hoogte van nieuwe collecties
            </h2>
            <p className="text-gray-700 mb-6">
              Schrijf je in voor onze nieuwsbrief en ontvang 10% korting op je eerste bestelling
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Jouw email adres"
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="whitespace-nowrap">
                Inschrijven
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}