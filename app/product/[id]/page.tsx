"use client";

import { useState } from "react";
import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Truck, RotateCcw, Heart, ChevronRight, ChevronDown, MinusCircle, PlusCircle, Info, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useToast } from "@/hooks/use-toast";

// Mock product data
const product = {
  id: "1",
  name: "Performance Training Shirt",
  brand: "StyleNL",
  price: 34.95,
  originalPrice: 49.95,
  onSale: true,
  rating: 4,
  reviews: 27,
  category: "sportswear",
  description: "Deze lichtgewicht trainingsshirt is perfect voor je workouts, met ademend materiaal en een strak design. Het shirt is gemaakt van hoogwaardige materialen die zweet snel afvoeren en je droog houden tijdens intensieve trainingen.",
  features: [
    "Ademend en sneldrogend materiaal",
    "4-way stretch voor maximale bewegingsvrijheid",
    "Reflecterende details voor zichtbaarheid in het donker",
    "Anti-geur behandeling houdt je fris",
    "Flatlock naden voorkomen irritatie"
  ],
  material: "88% polyester, 12% elastaan",
  care: "Machinewasbaar op 30°C, niet in de droger, strijken op lage temperatuur",
  images: [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920",
    "https://images.unsplash.com/photo-1581382575275-97901c2635b7?q=80&w=1974",
    "https://images.unsplash.com/photo-1593800026667-ddee5cf4aba0?q=80&w=1974",
    "https://images.unsplash.com/photo-1622519407650-3df9883f76a5?q=80&w=1974",
  ],
  colors: [
    { name: "Black", value: "#000000", inStock: true },
    { name: "Blue", value: "#1F3A66", inStock: true },
    { name: "Red", value: "#D62828", inStock: false },
  ],
  sizes: [
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: false },
    { name: "XXL", inStock: false },
  ],
  lowStock: true,
  stockCount: 2,
  relatedProducts: [
    {
      id: "2",
      name: "Men's Running Shorts",
      price: 29.95,
      rating: 4,
      reviews: 19,
      image: "https://images.unsplash.com/photo-1581783913959-5c404878423c?q=80&w=1974",
    },
    {
      id: "3",
      name: "Lightweight Running Jacket",
      price: 59.95,
      rating: 5,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1517940310602-26535839fe84?q=80&w=1974",
    },
    {
      id: "4",
      name: "Sport Performance Leggings",
      price: 49.95,
      rating: 5,
      reviews: 38,
      image: "https://images.unsplash.com/photo-1506026798239-6b69395acf60?q=80&w=1974",
    },
  ]
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const [selectedColor, setSelectedColor] = useState(product.colors?.find(c => c.inStock)?.name || '');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const incrementQuantity = () => {
    if (quantity < product.stockCount || !product.lowStock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Selecteer een maat",
        description: "Kies een maat voordat je het product aan je winkelwagen toevoegt",
        variant: "destructive"
      });
      return;
    }
    
    // Add to cart
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      quantity: quantity,
      image: product.images[0],
      color: selectedColor,
      size: selectedSize,
      lowStock: product.lowStock,
      stockLimit: product.stockCount
    });
    
    toast({
      title: "Product toegevoegd",
      description: `${product.name} in maat ${selectedSize} is toegevoegd aan je winkelwagen`,
      variant: "default"
    });
  };
  
  const handleAddRelatedToCart = (relatedProduct: any) => {
    addToCart({
      id: relatedProduct.id,
      name: relatedProduct.name,
      price: relatedProduct.price,
      quantity: 1,
      image: relatedProduct.image,
      color: "Default",
      size: "M"
    });
    
    toast({
      title: "Product toegevoegd",
      description: `${relatedProduct.name} is toegevoegd aan je winkelwagen`,
      variant: "default"
    });
  };
  
  return (
    <Layout>
      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/category/sportswear" className="hover:text-primary">Sportswear</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700">{product.name}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div>
            <div className="relative h-[500px] bg-gray-100 rounded-lg overflow-hidden mb-4">
              {product.onSale && (
                <Badge className="absolute top-4 left-4 z-10 bg-accent text-white px-3 py-1">
                  SALE
                </Badge>
              )}
              <Image
                src={product.images[activeImageIndex]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`relative h-24 bg-gray-100 rounded-md overflow-hidden ${activeImageIndex === index ? 'ring-2 ring-primary' : 'hover:opacity-80'}`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <div className="mb-1">
              <Link href={`/brand/${product.brand}`} className="text-gray-500 hover:text-primary">
                {product.brand}
              </Link>
            </div>
            <h1 className="text-3xl font-montserrat font-bold mb-2">{product.name}</h1>
            
            {/* Ratings */}
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <Link href="#reviews" className="text-sm text-gray-500 ml-2 hover:text-primary">
                {product.reviews} reviews
              </Link>
            </div>
            
            {/* Price */}
            <div className="mb-6">
              {product.onSale ? (
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-accent mr-2">€{product.price.toFixed(2)}</span>
                  <span className="text-gray-500 line-through">€{product.originalPrice.toFixed(2)}</span>
                  <Badge className="ml-3 bg-accent/10 text-accent border-accent">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% KORTING
                  </Badge>
                </div>
              ) : (
                <span className="text-2xl font-bold">€{product.price.toFixed(2)}</span>
              )}
              <p className="text-sm text-gray-500 mt-1">Inclusief btw</p>
            </div>
            
            {/* Color Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Kleur: <span className="font-normal">{selectedColor}</span></span>
              </div>
              <div className="flex space-x-3">
                {product.colors?.map((color) => (
                  <button
                    key={color.name}
                    disabled={!color.inStock}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full relative ${!color.inStock ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'} ${selectedColor === color.name ? 'ring-2 ring-offset-2 ring-primary' : ''}`}
                    title={color.inStock ? color.name : `${color.name} - Uitverkocht`}
                  >
                    <span className="absolute inset-0 rounded-full" style={{ backgroundColor: color.value }}></span>
                    {!color.inStock && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[120%] h-0.5 bg-gray-400 rotate-45 absolute"></div>
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Maat</span>
                <Link href="/size-guide" className="text-sm text-primary hover:underline flex items-center">
                  <Info className="h-3 w-3 mr-1" /> Maattabel
                </Link>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes?.map((size) => (
                  <button
                    key={size.name}
                    disabled={!size.inStock}
                    onClick={() => setSelectedSize(size.name)}
                    className={`h-10 flex items-center justify-center border rounded ${
                      !size.inStock ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'hover:border-primary cursor-pointer'
                    } ${selectedSize === size.name ? 'bg-primary text-white border-primary' : ''}`}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity & Add to Cart */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Aantal</span>
                {product.lowStock && (
                  <span className="text-sm text-red-500 font-medium">Nog maar {product.stockCount} beschikbaar</span>
                )}
              </div>
              <div className="flex space-x-4 mb-4">
                <div className="flex items-center border rounded-md">
                  <button onClick={decrementQuantity} className="px-3 py-2 text-gray-500 hover:text-primary">
                    <MinusCircle className="h-5 w-5" />
                  </button>
                  <span className="w-10 text-center">{quantity}</span>
                  <button onClick={incrementQuantity} className="px-3 py-2 text-gray-500 hover:text-primary">
                    <PlusCircle className="h-5 w-5" />
                  </button>
                </div>
                <Button 
                  className="flex-1 bg-accent hover:bg-accent/90 text-white"
                  onClick={handleAddToCart}
                >
                  In Winkelwagen
                </Button>
                <Button variant="outline" className="px-3">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Sticky Add to Cart for Mobile */}
              <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 md:hidden z-50 flex space-x-2">
                <Button 
                  className="flex-1 bg-accent hover:bg-accent/90 text-white"
                  onClick={handleAddToCart}
                >
                  In Winkelwagen - €{(product.price * quantity).toFixed(2)}
                </Button>
                <Button variant="outline" className="px-3">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Trust Signals */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex items-start space-x-3">
                <Truck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Gratis verzending</p>
                  <p className="text-xs text-gray-500">Bij bestellingen boven €50</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <RotateCcw className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">30 dagen retourrecht</p>
                  <p className="text-xs text-gray-500">Niet tevreden? Geld terug, geen vragen gesteld</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="mb-12">
          <Tabs defaultValue="description">
            <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto space-x-8 px-0">
              <TabsTrigger 
                value="description" 
                className="text-base data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none pb-2 rounded-none"
              >
                Productinformatie
              </TabsTrigger>
              <TabsTrigger 
                value="specs" 
                className="text-base data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none pb-2 rounded-none"
              >
                Specificaties
              </TabsTrigger>
              <TabsTrigger 
                value="reviews" 
                className="text-base data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none pb-2 rounded-none"
              >
                Reviews ({product.reviews})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-6">
              <div className="max-w-3xl">
                <p className="text-gray-700 mb-6">{product.description}</p>
                <h3 className="font-montserrat font-semibold text-lg mb-3">Kenmerken</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {product.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="specs" className="pt-6">
              <div className="max-w-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg mb-3">Productdetails</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Materiaal</span>
                        <span>{product.material}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Pasvorm</span>
                        <span>Regular fit</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Hals</span>
                        <span>Ronde hals</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Artikelnummer</span>
                        <span>SP-TS-{params.id}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg mb-3">Verzorging</h3>
                    <p className="text-gray-700 mb-4">{product.care}</p>
                    <div className="flex space-x-4">
                      <div className="text-center">
                        <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-1">
                          <span className="text-xs font-medium">30°</span>
                        </div>
                        <span className="text-xs">Wasbaar</span>
                      </div>
                      <div className="text-center">
                        <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-1">
                          <span className="text-xs">⊗</span>
                        </div>
                        <span className="text-xs">Geen bleek</span>
                      </div>
                      <div className="text-center">
                        <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-1">
                          <span className="text-xs">⊗</span>
                        </div>
                        <span className="text-xs">Niet drogen</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-6" id="reviews">
              <div className="max-w-3xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-montserrat font-semibold text-lg mb-1">Klantbeoordelingen</h3>
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-5 w-5 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-700">
                        {product.rating} van de 5 ({product.reviews} beoordelingen)
                      </span>
                    </div>
                  </div>
                  <Button>Schrijf een review</Button>
                </div>
                
                {/* Individual Reviews */}
                <div className="space-y-6">
                  <div className="border-b pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < 5 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm font-medium">Geweldig sportshirt</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">Thomas, 27 - 15 mei 2025</p>
                    <p className="text-gray-700">Perfect voor mijn hardlooptrainingen. Het materiaal ademt goed en ik bleef droog, zelfs tijdens intensieve sessies. Ik ben 1,83m en maat M past perfect.</p>
                    <div className="mt-2 text-sm text-gray-500">
                      <span className="font-medium">Maat: M</span> | <span className="font-medium">Kleur: Black</span>
                    </div>
                  </div>
                  
                  <div className="border-b pb-6">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm font-medium">Goed shirt, niet perfect</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">Laura, 24 - 3 mei 2025</p>
                    <p className="text-gray-700">De kwaliteit van het shirt is goed. Het materiaal voelt prettig aan en de pasvorm is mooi. Een ster minder omdat het na een paar wasbeurten toch iets van zijn vorm verloor.</p>
                    <div className="mt-2 text-sm text-gray-500">
                      <span className="font-medium">Maat: S</span> | <span className="font-medium">Kleur: Blue</span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm font-medium">Prettig shirt voor de sportschool</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">Joris, 31 - 28 april 2025</p>
                    <p className="text-gray-700">Ik gebruik dit shirt voor mijn workouts in de sportschool. Het zit lekker en is licht van gewicht. Het valt wel iets kleiner uit dan verwacht, dus overweeg een maatje groter.</p>
                    <div className="mt-2 text-sm text-gray-500">
                      <span className="font-medium">Maat: L</span> | <span className="font-medium">Kleur: Black</span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <Button variant="outline">Bekijk alle {product.reviews} reviews</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Related Products */}
        <div className="mb-12">
          <h2 className="section-title mb-6">Dit vind je misschien ook leuk</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {product.relatedProducts?.map((item) => (
              <Card key={item.id} className="overflow-hidden group">
                <Link href={`/product/${item.id}`} className="block">
                  <div className="relative h-60 md:h-72 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                      <Button 
                        size="icon" 
                        variant="secondary" 
                        className="rounded-full"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      >
                        <Heart className="h-5 w-5" />
                      </Button>
                      <Button 
                        size="icon" 
                        variant="secondary" 
                        className="rounded-full"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleAddRelatedToCart(item);
                        }}
                      >
                        <ShoppingCart className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </Link>
                <CardContent className="p-4">
                  <Link 
                    href={`/product/${item.id}`}
                    className="block font-montserrat text-sm md:text-base font-medium mb-1 truncate hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-3 w-3 ${i < item.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-xs text-gray-500">({item.reviews})</span>
                  </div>
                  <p className="font-semibold">€{item.price.toFixed(2)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}