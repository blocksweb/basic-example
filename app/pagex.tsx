import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ChevronRight, Heart, ShoppingCart } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Banner */}
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

      {/* Category Highlights */}
      <section className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Casual Collection */}
          <div className="relative rounded-lg overflow-hidden group h-80">
            <Image
              src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974"
              alt="Casual Collection"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/40 flex flex-col justify-end p-6">
              <h2 className="text-3xl font-montserrat font-bold text-white mb-2">Casual</h2>
              <p className="text-white mb-4">Comfortable everyday outfits</p>
              <Link href="/category/casual">
                <Button className="bg-white text-primary hover:bg-white/90">Shop Casual</Button>
              </Link>
            </div>
          </div>

          {/* Sportswear Collection */}
          <div className="relative rounded-lg overflow-hidden group h-80">
            <Image
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070"
              alt="Sportswear Collection"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-accent/40 flex flex-col justify-end p-6">
              <h2 className="text-3xl font-montserrat font-bold text-white mb-2">Sportswear</h2>
              <p className="text-white mb-4">Performance gear & active style</p>
              <Link href="/category/sportswear">
                <Button className="bg-white text-accent hover:bg-white/90">Shop Sportswear</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products / New Arrivals */}
      <section className="container-custom py-12">
        <h2 className="section-title">Nieuw Binnen</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {/* Product Card 1 - Casual */}
          <Card className="overflow-hidden group">
            <Link href="/product/1" className="block">
              <div className="relative h-60 md:h-72 overflow-hidden">
                <Badge className="absolute top-2 left-2 z-10 bg-accent text-white">NIEUW</Badge>
                <Image
                  src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1915"
                  alt="Men's Casual T-Shirt"
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
                <Badge className="absolute top-2 left-2 z-10 bg-accent text-white">NIEUW</Badge>
                <Image
                  src="https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?q=80&w=1974"
                  alt="Men's Casual Jeans"
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
                <Badge className="absolute top-2 left-2 z-10 bg-accent text-white">NIEUW</Badge>
                <Image
                  src="https://images.unsplash.com/photo-1517940310602-26535839fe84?q=80&w=1974"
                  alt="Women's Running Jacket"
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
                <Badge className="absolute top-2 left-2 z-10 bg-accent text-white">NIEUW</Badge>
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

      {/* Loyalty Program Banner */}
      <section className="bg-primary/10 py-12">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-4">
                  Word lid van ons Loyalty Programma
                </h2>
                <p className="text-gray-700 mb-6">
                  Verdien punten bij elke aankoop en ontvang exclusieve voordelen.
                  Leden krijgen vroege toegang tot nieuwe collecties en speciale aanbiedingen.
                </p>
                <Link href="/loyalty">
                  <Button className="btn-accent">
                    Meld je nu aan
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2215"
                  alt="Shopping bags and gift boxes"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Community */}
      <section className="container-custom py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Customer Testimonials */}
          <div className="md:w-1/2">
            <h2 className="section-title">Wat onze klanten zeggen</h2>
            <div className="bg-gray-50 rounded-lg p-6 mb-4">
              <div className="flex items-center space-x-1 mb-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-700 italic mb-4">
                "Fantastische kwaliteit voor de prijs, en super snelle levering! De pasvorm is perfect en het materiaal is echt comfortabel."
              </p>
              <p className="font-semibold">Emma, 25</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-1 mb-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-gray-700 italic mb-4">
                "De sportkleding is echt top. Ademend materiaal, goede pasvorm, en veel mooier dan duurdere merken die ik heb geprobeerd."
              </p>
              <p className="font-semibold">Thijs, 29</p>
            </div>
            <div className="mt-4 flex items-center">
              <p className="text-gray-700 mr-2">Gemiddelde beoordeling:</p>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="ml-2 text-gray-700">4.8/5 (500+ reviews)</p>
            </div>
          </div>

          {/* Instagram Feed */}
          <div className="md:w-1/2">
            <h2 className="section-title">Instagram @StyleNL</h2>
            <div className="grid grid-cols-2 gap-2">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920"
                  alt="Instagram post"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=2070"
                  alt="Instagram post"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974"
                  alt="Instagram post"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?q=80&w=1974"
                  alt="Instagram post"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-accent"
              >
                Volg ons @StyleNL
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-100 py-12">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-primary mb-4">
              Mis nooit een lancering!
            </h2>
            <p className="text-gray-700 mb-6">
              Schrijf je in voor exclusieve aanbiedingen en nieuwe collecties. 
              Ontvang 15% korting op je eerste bestelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Jouw email adres"
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="btn-primary whitespace-nowrap">
                Schrijf me in
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Door je in te schrijven ga je akkoord met ons 
              <Link href="/privacy" className="underline ml-1">privacybeleid</Link>. 
              Je kunt je altijd uitschrijven.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}