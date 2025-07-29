import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Star, Truck, Percent, Calendar, ChevronRight, Lock, Check } from "lucide-react";

export default function LoyaltyPage() {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="bg-primary text-white">
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
                StyleNL Loyalty Programma
              </h1>
              <p className="text-xl mb-8">
                Word vandaag lid en begin met het verzamelen van punten bij elke aankoop.
                Hoe meer je shopt, hoe meer je verdient!
              </p>
              <Button className="bg-white text-primary hover:bg-white/90 text-base">
                Word nu lid – Het is Gratis
              </Button>
            </div>
            <div className="hidden lg:block relative h-80">
              <Image
                src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=2215"
                alt="Shopping bags and gift boxes"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Summary */}
      <section className="container-custom py-12">
        <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-center text-primary mb-12">
          Voordelen van het Loyalty Programma
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="overflow-hidden">
            <div className="h-2 bg-accent"></div>
            <CardContent className="pt-8">
              <div className="h-12 w-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">
                Punten op aankopen
              </h3>
              <p className="text-gray-600 mb-4">
                Verdien 10 punten voor elke €1 die je uitgeeft. 
                Deze punten kun je later inwisselen voor kortingen en cadeaus.
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm">
                  <span className="font-medium">Bijvoorbeeld:</span> Besteed €100, ontvang 1000 punten = €10 korting!
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="h-2 bg-primary"></div>
            <CardContent className="pt-8">
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Percent className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">
                Exclusieve kortingen
              </h3>
              <p className="text-gray-600 mb-4">
                Leden ontvangen speciale aanbiedingen en acties die niet beschikbaar zijn voor andere klanten, waaronder seizoensgebonden deals.
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm">
                  <Badge className="bg-accent mb-1">Exclusief</Badge>
                  <span className="font-medium block">15% korting</span>
                  op je eerstvolgende bestelling na registratie!
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="h-2 bg-accent"></div>
            <CardContent className="pt-8">
              <div className="h-12 w-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6">
                <Gift className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold mb-3">
                Verjaardagscadeau
              </h3>
              <p className="text-gray-600 mb-4">
                Ontvang een speciaal verjaardagscadeau van ons team! We sturen je een unieke kortingscode die je kunt gebruiken rond je verjaardag.
              </p>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm">
                  <span className="font-medium">Ontvang elk jaar:</span> Een verjaardagscadeau met 20% korting op je favoriete artikel!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-center text-primary mb-12">
            Hoe werkt het?
          </h2>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Desktop connection line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gray-200"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10 bg-white h-16 w-16 rounded-full border-2 border-primary flex items-center justify-center mb-4 text-xl font-bold text-primary">
                  1
                </div>
                <h3 className="font-montserrat font-semibold mb-2">Word lid</h3>
                <p className="text-gray-600">
                  Meld je gratis aan en maak een account aan - het duurt minder dan een minuut.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10 bg-white h-16 w-16 rounded-full border-2 border-primary flex items-center justify-center mb-4 text-xl font-bold text-primary">
                  2
                </div>
                <h3 className="font-montserrat font-semibold mb-2">Verdien punten</h3>
                <p className="text-gray-600">
                  Koop je favoriete kleding en ontvang automatisch punten bij elke bestelling.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="relative z-10 bg-white h-16 w-16 rounded-full border-2 border-primary flex items-center justify-center mb-4 text-xl font-bold text-primary">
                  3
                </div>
                <h3 className="font-montserrat font-semibold mb-2">Wissel in</h3>
                <p className="text-gray-600">
                  Gebruik je punten voor kortingen op toekomstige aankopen of speciale beloningen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Benefits */}
      <section className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-accent/10 rounded-lg p-8">
            <Truck className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-xl font-montserrat font-semibold mb-3">
              Gratis express verzending
            </h3>
            <p className="text-gray-700 mb-6">
              Loyalty leden krijgen gratis express verzending op alle bestellingen boven €40, 
              in plaats van de standaard €50 drempel voor niet-leden.
            </p>
            <div className="flex items-center text-sm">
              <span className="text-gray-500 mr-2">Niet-leden: €50+</span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-accent font-semibold ml-2">Leden: €40+</span>
            </div>
          </div>
          
          <div className="bg-primary/10 rounded-lg p-8">
            <Calendar className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-montserrat font-semibold mb-3">
              Early access tot sales
            </h3>
            <p className="text-gray-700 mb-6">
              Wees als eerste op de hoogte van nieuwe collecties en krijg 24 uur eerder toegang 
              tot seizoensgebonden sales. Mis nooit meer je favoriete items in jouw maat!
            </p>
            <div className="flex items-center text-sm">
              <span className="text-gray-500 mr-2">Niet-leden: Normale toegang</span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-primary font-semibold ml-2">Leden: 24 uur eerder</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-montserrat font-bold mb-6">
            Klaar om te beginnen?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Join vandaag nog ons loyalty programma en krijg direct 15% korting op je eerstvolgende bestelling. 
            Elke aankoop brengt je dichter bij exclusieve beloningen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-accent hover:bg-accent/90 text-white text-base">
              Word nu lid
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 text-base">
              Meer informatie
            </Button>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="container-custom py-12">
        <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-center text-primary mb-8">
          Veelgestelde vragen
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-lg p-4 border">
            <h3 className="font-montserrat font-semibold mb-2">Vervallen mijn punten?</h3>
            <p className="text-gray-700">
              Punten blijven 12 maanden geldig vanaf de datum dat ze zijn verdiend. We sturen je een herinnering voordat je punten vervallen.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 border">
            <h3 className="font-montserrat font-semibold mb-2">Hoe kan ik mijn punten bekijken?</h3>
            <p className="text-gray-700">
              Je kunt je puntensaldo eenvoudig bekijken in je account dashboard, onder "Mijn Loyalty Punten".
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 border">
            <h3 className="font-montserrat font-semibold mb-2">Krijg ik punten voor afgeprijsde artikelen?</h3>
            <p className="text-gray-700">
              Ja! Je ontvangt punten voor elk bedrag dat je uitgeeft, inclusief bij aankopen van sale artikelen of wanneer je kortingscodes gebruikt.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 border">
            <h3 className="font-montserrat font-semibold mb-2">Hoe wissel ik mijn punten in?</h3>
            <p className="text-gray-700">
              Bij het afrekenen zie je de optie om je beschikbare punten in te wisselen. Je kunt kiezen hoeveel punten je wilt gebruiken voor je huidige bestelling.
            </p>
          </div>
        </div>
      </section>
      
      {/* Join Now */}
      <section className="bg-gray-50 py-12">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-primary mb-4">
                  Join ons Loyalty Programma
                </h2>
                <p className="text-gray-700 mb-6">
                  Meld je vandaag nog aan en begin met het verzamelen van punten. 
                  Het is helemaal gratis en je krijgt direct 15% korting op je eerste bestelling na registratie.
                </p>
                
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Verdien 10 punten per uitgegeven euro</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Gratis verzending vanaf €40</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Exclusieve aanbiedingen en vroegtijdige toegang</span>
                  </div>
                </div>
                
                <Button className="bg-accent hover:bg-accent/90 text-base">
                  Word nu lid
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                
                <p className="text-xs text-gray-500 mt-4">
                  Al lid? <Link href="/account/login" className="text-primary hover:underline">Log hier in</Link>
                </p>
              </div>
              <div className="relative h-64 md:h-auto bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?q=80&w=2070"
                  alt="Happy shoppers with shopping bags"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 flex items-center justify-center">
                  <div className="bg-white/90 p-6 rounded-lg shadow-md max-w-xs">
                    <h3 className="font-montserrat font-semibold mb-2 text-primary">Reward voorbeeld</h3>
                    <p className="text-sm mb-3">
                      1000 punten = €10 korting
                    </p>
                    <div className="flex justify-between text-sm">
                      <span>Bestelling: €100</span>
                      <span className="font-semibold">1000 punten!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}