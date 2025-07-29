"use client";

import { useState } from "react";
import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Star, ChevronDown, ChevronUp, Filter, Heart, ShoppingCart, X } from "lucide-react";

// Mock products data
const mockProducts = [
  {
    id: 1,
    name: "Casual Organic Cotton T-Shirt",
    price: 29.95,
    rating: 5,
    reviews: 32,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1915",
    isNew: true,
    category: "casual",
    gender: "men",
    lowStock: false,
  },
  {
    id: 2,
    name: "Slim Fit Casual Jeans",
    price: 49.95,
    rating: 4,
    reviews: 18,
    image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?q=80&w=1974",
    isNew: true,
    category: "casual",
    gender: "men",
    lowStock: false,
  },
  {
    id: 3,
    name: "Women's Lightweight Running Jacket",
    price: 59.95,
    rating: 5,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1517940310602-26535839fe84?q=80&w=1974",
    isNew: true,
    category: "sportswear",
    gender: "women",
    lowStock: false,
  },
  {
    id: 4,
    name: "Performance Training Shirt",
    price: 34.95,
    rating: 4,
    reviews: 27,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920",
    isNew: true,
    category: "sportswear",
    gender: "men",
    lowStock: true,
  },
  {
    id: 5,
    name: "Men's Casual Button-Down Shirt",
    price: 39.95,
    rating: 4,
    reviews: 22,
    image: "https://images.unsplash.com/photo-1563630423918-b58f07336ac5?q=80&w=1974",
    isNew: false,
    category: "casual",
    gender: "men",
    lowStock: false,
  },
  {
    id: 6,
    name: "Women's Casual Linen Pants",
    price: 44.95,
    rating: 4,
    reviews: 15,
    image: "https://images.unsplash.com/photo-1499372076272-6b5493aecb1c?q=80&w=1974",
    isNew: false,
    category: "casual",
    gender: "women",
    lowStock: false,
  },
  {
    id: 7,
    name: "Sport Performance Leggings",
    price: 49.95,
    rating: 5,
    reviews: 38,
    image: "https://images.unsplash.com/photo-1506026798239-6b69395acf60?q=80&w=1974",
    isNew: false,
    category: "sportswear",
    gender: "women",
    lowStock: false,
  },
  {
    id: 8,
    name: "Men's Running Shorts",
    price: 29.95,
    rating: 4,
    reviews: 19,
    image: "https://images.unsplash.com/photo-1581783913959-5c404878423c?q=80&w=1974",
    isNew: false,
    category: "sportswear",
    gender: "men",
    lowStock: false,
  },
];

export default function SubcategoryPage({ params }: { params: { type: string; subtype: string } }) {
  const { type, subtype } = params;
  const categoryTitle = type.charAt(0).toUpperCase() + type.slice(1);
  const subtypeTitle = subtype.charAt(0).toUpperCase() + subtype.slice(1);
  
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([subtypeTitle]);
  
  // Filter products by both category and subcategory (gender)
  const products = mockProducts.filter(product => 
    product.category === type && product.gender === subtype
  );
  
  // Filter sections
  const [openFilterSections, setOpenFilterSections] = useState({
    category: true,
    gender: true,
    size: true,
    color: true,
    price: true,
    brand: true,
  });
  
  const toggleFilterSection = (section: string) => {
    setOpenFilterSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof openFilterSections]
    }));
  };
  
  return (
    <Layout>
      {/* Category Header */}
      <section className="bg-gray-100">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-montserrat font-bold text-primary">
                {categoryTitle === "Casual" ? `Casual ${subtypeTitle}` : `Sportswear ${subtypeTitle}`} Collectie
              </h1>
              <p className="text-gray-600 mt-1">
                {categoryTitle === "Casual" 
                  ? `Everyday apparel for ${subtypeTitle} style and comfort`
                  : `Performance clothing for ${subtypeTitle} active life`}
              </p>
            </div>
            
            {/* Category/Subcategory Navigation */}
            <div className="flex mt-4 md:mt-0 space-x-2 bg-white rounded-md border p-1">
              <Link href={`/category/${type}`}>
                <Button variant="ghost">
                  All {categoryTitle}
                </Button>
              </Link>
              <Link href={`/category/${type}/men`}>
                <Button variant={subtype === "men" ? "default" : "ghost"} className={subtype === "men" ? "bg-primary" : ""}>
                  Men
                </Button>
              </Link>
              <Link href={`/category/${type}/women`}>
                <Button variant={subtype === "women" ? "default" : "ghost"} className={subtype === "women" ? "bg-accent" : ""}>
                  Women
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Active Filters & Sort */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6">
            {/* Active filters */}
            <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
              {activeFilters.length > 0 ? (
                <>
                  {activeFilters.map((filter, index) => (
                    <Badge key={index} variant="secondary" className="flex items-center gap-1 px-3 py-1">
                      {filter}
                      <button className="ml-1 h-4 w-4 rounded-full flex items-center justify-center hover:bg-gray-200">
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                  <Button variant="link" className="text-sm text-gray-500 h-auto p-0">
                    Wis alle filters
                  </Button>
                </>
              ) : (
                <span className="text-sm text-gray-500">{products.length} items</span>
              )}
            </div>
            
            {/* Sort dropdown */}
            <div className="flex items-center">
              <span className="text-sm text-gray-700 mr-2">Sorteer op:</span>
              <select className="border rounded-md px-3 py-1 text-sm bg-white">
                <option>Meest populair</option>
                <option>Nieuwste</option>
                <option>Prijs: laag naar hoog</option>
                <option>Prijs: hoog naar laag</option>
              </select>
              
              {/* Mobile filter button */}
              <Button 
                variant="outline" 
                className="ml-2 md:hidden" 
                onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="container-custom py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className={`md:w-1/4 lg:w-1/5 ${isMobileFiltersOpen ? 'block' : 'hidden'} md:block`}>
            <div className="sticky top-4 bg-white rounded-lg border p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-montserrat font-semibold text-lg">Filters</h2>
                <Button variant="ghost" size="sm" className="h-8 md:hidden" onClick={() => setIsMobileFiltersOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Category filter */}
              <div className="mb-4 border-b pb-4">
                <button 
                  className="flex items-center justify-between w-full text-left font-medium mb-2"
                  onClick={() => toggleFilterSection('category')}
                >
                  <span>Subcategorie</span>
                  {openFilterSections.category ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {openFilterSections.category && (
                  <div className="space-y-2">
                    {type === "casual" ? (
                      <>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="cat-shirts" />
                          <label htmlFor="cat-shirts" className="text-sm">T-shirts & tops</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="cat-jeans" />
                          <label htmlFor="cat-jeans" className="text-sm">Jeans</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="cat-sweaters" />
                          <label htmlFor="cat-sweaters" className="text-sm">Sweaters & hoodies</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="cat-jackets" />
                          <label htmlFor="cat-jackets" className="text-sm">Jassen</label>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="cat-running" />
                          <label htmlFor="cat-running" className="text-sm">Running</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="cat-training" />
                          <label htmlFor="cat-training" className="text-sm">Training</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="cat-yoga" />
                          <label htmlFor="cat-yoga" className="text-sm">Yoga</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="cat-outdoor" />
                          <label htmlFor="cat-outdoor" className="text-sm">Outdoor</label>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
              
              {/* Size filter */}
              <div className="mb-4 border-b pb-4">
                <button 
                  className="flex items-center justify-between w-full text-left font-medium mb-2"
                  onClick={() => toggleFilterSection('size')}
                >
                  <span>Maat</span>
                  {openFilterSections.size ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {openFilterSections.size && (
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                        <div key={size} className="size-item">
                          <Checkbox id={`size-${size}`} className="sr-only peer" />
                          <label 
                            htmlFor={`size-${size}`}
                            className="flex h-8 w-8 items-center justify-center rounded border peer-checked:bg-primary peer-checked:text-white hover:bg-gray-100 cursor-pointer text-sm"
                          >
                            {size}
                          </label>
                        </div>
                      ))}
                    </div>
                    <Link href="/size-guide" className="text-sm text-primary hover:underline">
                      Bekijk maattabel
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Color filter */}
              <div className="mb-4 border-b pb-4">
                <button 
                  className="flex items-center justify-between w-full text-left font-medium mb-2"
                  onClick={() => toggleFilterSection('color')}
                >
                  <span>Kleur</span>
                  {openFilterSections.color ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {openFilterSections.color && (
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "Zwart", color: "bg-black" },
                      { name: "Wit", color: "bg-white border" },
                      { name: "Blauw", color: "bg-blue-600" },
                      { name: "Rood", color: "bg-red-600" },
                      { name: "Groen", color: "bg-green-600" },
                      { name: "Grijs", color: "bg-gray-400" },
                    ].map((colorOption) => (
                      <div key={colorOption.name} className="color-item" title={colorOption.name}>
                        <Checkbox id={`color-${colorOption.name}`} className="sr-only peer" />
                        <label 
                          htmlFor={`color-${colorOption.name}`}
                          className={`flex h-6 w-6 items-center justify-center rounded-full ${colorOption.color} peer-checked:ring-2 ring-offset-2 ring-primary cursor-pointer`}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Price filter */}
              <div className="mb-4 border-b pb-4">
                <button 
                  className="flex items-center justify-between w-full text-left font-medium mb-2"
                  onClick={() => toggleFilterSection('price')}
                >
                  <span>Prijs</span>
                  {openFilterSections.price ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {openFilterSections.price && (
                  <div className="space-y-4">
                    <Slider defaultValue={[0, 100]} max={100} step={1} />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">€0</span>
                      <span className="text-sm">€100+</span>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Brand filter */}
              <div className="mb-4">
                <button 
                  className="flex items-center justify-between w-full text-left font-medium mb-2"
                  onClick={() => toggleFilterSection('brand')}
                >
                  <span>Merk</span>
                  {openFilterSections.brand ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {openFilterSections.brand && (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="brand-nike" />
                      <label htmlFor="brand-nike" className="text-sm">Nike</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="brand-adidas" />
                      <label htmlFor="brand-adidas" className="text-sm">Adidas</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="brand-puma" />
                      <label htmlFor="brand-puma" className="text-sm">Puma</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="brand-levis" />
                      <label htmlFor="brand-levis" className="text-sm">Levi's</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="brand-stylenl" />
                      <label htmlFor="brand-stylenl" className="text-sm">StyleNL</label>
                    </div>
                  </div>
                )}
              </div>
              
              <Button className="w-full">Filters toepassen</Button>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="flex-1">
            {products.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((product) => (
                  <Card key={product.id} className="overflow-hidden group">
                    <Link href={`/product/${product.id}`} className="block">
                      <div className="relative h-60 md:h-72 overflow-hidden">
                        {product.isNew && (
                          <Badge className="absolute top-2 left-2 z-10 bg-accent text-white">NIEUW</Badge>
                        )}
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
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-700 mb-2">No products found</h3>
                <p className="text-gray-500">Try adjusting your filters or browse other categories</p>
                <Link href={`/category/${type}`}>
                  <Button variant="outline" className="mt-4">
                    View all {type} products
                  </Button>
                </Link>
              </div>
            )}
            
            {/* Load More Button */}
            {products.length > 0 && (
              <div className="text-center mt-8">
                <Button variant="outline">
                  Laad meer producten
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}