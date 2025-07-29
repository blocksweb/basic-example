"use client";

import { useState } from "react";
import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, ChevronDown, Lock, CreditCard, Info, Check } from "lucide-react";

// Mock cart data
const cartItems = [
  {
    id: "1",
    name: "Performance Training Shirt",
    price: 34.95,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920",
    color: "Black",
    size: "M",
  },
  {
    id: "2",
    name: "Men's Running Shorts",
    price: 29.95,
    quantity: 2,
    image: "https://images.unsplash.com/photo-1581783913959-5c404878423c?q=80&w=1974",
    color: "Blue",
    size: "L",
  },
];

// Calculate totals
const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
const discount = 10; // Mock discount
const shipping = 0; // Free shipping
const total = subtotal - discount + shipping;

export default function CheckoutPage() {
  const [step, setStep] = useState("shipping");
  const [paymentMethod, setPaymentMethod] = useState("ideal");
  const [shippingData, setShippingData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    houseNumber: "",
    city: "",
    postalCode: "",
    phone: "",
  });
  
  const [billingIsSame, setBillingIsSame] = useState(true);
  
  const handleContinueToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
    // In a real app, we would validate the form data here
  };
  
  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would process the payment and create the order here
    // For this demo, just redirect to a confirmation page
    window.location.href = "/checkout/confirmation";
  };
  
  return (
    <Layout>
      <div className="container-custom py-8">
        <h1 className="text-3xl font-montserrat font-bold text-primary mb-6">Afrekenen</h1>
        
        {/* Checkout Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step === "shipping" || step === "payment" ? "bg-primary text-white" : "bg-gray-300 text-gray-600"}`}>
                1
              </div>
              <span className="text-xs mt-1">Gegevens</span>
            </div>
            <div className="flex-1 h-0.5 bg-gray-300 mx-1">
              <div className={`h-full ${step === "payment" ? "bg-primary" : "bg-gray-300"}`} style={{ width: "100%" }}></div>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step === "payment" ? "bg-primary text-white" : "bg-gray-300 text-gray-600"}`}>
                2
              </div>
              <span className="text-xs mt-1">Betaling</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form */}
          <div className="lg:w-2/3">
            {/* Shipping Information */}
            <div className={step === "shipping" ? "block" : "hidden"}>
              <div className="bg-white rounded-lg border p-6">
                <h2 className="text-xl font-montserrat font-semibold mb-6">Bezorggegevens</h2>
                
                <form onSubmit={handleContinueToPayment} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <Label htmlFor="email">E-mailadres</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="jouw@email.nl" 
                        value={shippingData.email}
                        onChange={(e) => setShippingData({...shippingData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="firstName">Voornaam</Label>
                      <Input 
                        id="firstName"
                        value={shippingData.firstName}
                        onChange={(e) => setShippingData({...shippingData, firstName: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Achternaam</Label>
                      <Input 
                        id="lastName"
                        value={shippingData.lastName}
                        onChange={(e) => setShippingData({...shippingData, lastName: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="address">Straatnaam</Label>
                      <Input 
                        id="address"
                        value={shippingData.address}
                        onChange={(e) => setShippingData({...shippingData, address: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="houseNumber">Huisnummer</Label>
                      <Input 
                        id="houseNumber"
                        value={shippingData.houseNumber}
                        onChange={(e) => setShippingData({...shippingData, houseNumber: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postcode</Label>
                      <Input 
                        id="postalCode"
                        placeholder="1234 AB"
                        value={shippingData.postalCode}
                        onChange={(e) => setShippingData({...shippingData, postalCode: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">Plaats</Label>
                      <Input 
                        id="city"
                        value={shippingData.city}
                        onChange={(e) => setShippingData({...shippingData, city: e.target.value})}
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="phone">Telefoonnummer (optioneel)</Label>
                      <Input 
                        id="phone"
                        type="tel"
                        placeholder="Voor updates over je bestelling"
                        value={shippingData.phone}
                        onChange={(e) => setShippingData({...shippingData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  {/* Shipping Method */}
                  <div className="border-t pt-6">
                    <h3 className="font-montserrat font-semibold mb-4">Verzendmethode</h3>
                    <RadioGroup defaultValue="standard">
                      <div className="flex items-center justify-between border rounded-md p-3 mb-3">
                        <div className="flex items-center">
                          <RadioGroupItem value="standard" id="standard" />
                          <Label htmlFor="standard" className="ml-2">Standaard bezorging (1-2 werkdagen)</Label>
                        </div>
                        <span className="font-semibold text-green-600">Gratis</span>
                      </div>
                      <div className="flex items-center justify-between border rounded-md p-3">
                        <div className="flex items-center">
                          <RadioGroupItem value="express" id="express" />
                          <Label htmlFor="express" className="ml-2">Express bezorging (volgende werkdag)</Label>
                        </div>
                        <span className="font-semibold">€4,95</span>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90"
                  >
                    Verder naar betaling
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Payment Information */}
            <div className={step === "payment" ? "block" : "hidden"}>
              <div className="bg-white rounded-lg border p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-montserrat font-semibold">Betaling</h2>
                  <button
                    onClick={() => setStep("shipping")}
                    className="text-sm text-primary hover:underline flex items-center"
                  >
                    Bezorggegevens wijzigen
                  </button>
                </div>
                
                <div className="mb-6 p-4 bg-gray-50 rounded-md">
                  <h3 className="font-medium mb-2">Bezorgen aan:</h3>
                  <p className="text-sm">{shippingData.firstName} {shippingData.lastName}</p>
                  <p className="text-sm">{shippingData.address} {shippingData.houseNumber}</p>
                  <p className="text-sm">{shippingData.postalCode} {shippingData.city}</p>
                  {shippingData.phone && <p className="text-sm">{shippingData.phone}</p>}
                </div>
                
                <form onSubmit={handlePlaceOrder}>
                  {/* Billing Address */}
                  <div className="mb-6">
                    <div className="flex items-center mb-4">
                      <Checkbox 
                        id="billing-same"
                        checked={billingIsSame}
                        onCheckedChange={(checked) => setBillingIsSame(checked as boolean)}
                      />
                      <label htmlFor="billing-same" className="ml-2 text-sm">
                        Factuuradres is hetzelfde als bezorgadres
                      </label>
                    </div>
                    
                    {!billingIsSame && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-4">
                        <div>
                          <Label htmlFor="billing-firstName">Voornaam</Label>
                          <Input id="billing-firstName" required={!billingIsSame} />
                        </div>
                        <div>
                          <Label htmlFor="billing-lastName">Achternaam</Label>
                          <Input id="billing-lastName" required={!billingIsSame} />
                        </div>
                        <div>
                          <Label htmlFor="billing-address">Straatnaam</Label>
                          <Input id="billing-address" required={!billingIsSame} />
                        </div>
                        <div>
                          <Label htmlFor="billing-houseNumber">Huisnummer</Label>
                          <Input id="billing-houseNumber" required={!billingIsSame} />
                        </div>
                        <div>
                          <Label htmlFor="billing-postalCode">Postcode</Label>
                          <Input id="billing-postalCode" placeholder="1234 AB" required={!billingIsSame} />
                        </div>
                        <div>
                          <Label htmlFor="billing-city">Plaats</Label>
                          <Input id="billing-city" required={!billingIsSame} />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Payment Methods */}
                  <div className="mb-6">
                    <h3 className="font-montserrat font-semibold mb-4">Betaalmethode</h3>
                    <Tabs defaultValue="ideal" onValueChange={setPaymentMethod} value={paymentMethod}>
                      <TabsList className="grid grid-cols-3 mb-4">
                        <TabsTrigger value="ideal">iDEAL</TabsTrigger>
                        <TabsTrigger value="creditcard">Creditcard</TabsTrigger>
                        <TabsTrigger value="paypal">PayPal</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="ideal" className="border rounded-md p-4">
                        <p className="text-sm mb-4">
                          Selecteer je bank om door te gaan met iDEAL betaling.
                        </p>
                        <select className="w-full p-2 border rounded-md">
                          <option value="">Selecteer je bank</option>
                          <option value="ing">ING</option>
                          <option value="abn">ABN AMRO</option>
                          <option value="rabobank">Rabobank</option>
                          <option value="sns">SNS Bank</option>
                          <option value="asn">ASN Bank</option>
                          <option value="triodos">Triodos Bank</option>
                        </select>
                      </TabsContent>
                      
                      <TabsContent value="creditcard" className="border rounded-md p-4">
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="card-number">Kaartnummer</Label>
                            <div className="relative">
                              <Input id="card-number" placeholder="1234 5678 9012 3456" required={paymentMethod === "creditcard"} />
                              <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="card-expiry">Vervaldatum</Label>
                              <Input id="card-expiry" placeholder="MM/JJ" required={paymentMethod === "creditcard"} />
                            </div>
                            <div>
                              <Label htmlFor="card-cvc">CVC code</Label>
                              <div className="relative">
                                <Input id="card-cvc" placeholder="123" required={paymentMethod === "creditcard"} />
                                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                  <Info className="h-4 w-4 text-gray-400" />
                                </button>
                              </div>
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="card-name">Naam op kaart</Label>
                            <Input id="card-name" placeholder="J. Janssen" required={paymentMethod === "creditcard"} />
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="paypal" className="border rounded-md p-4">
                        <p className="text-sm mb-4">
                          Je wordt doorgestuurd naar PayPal om de betaling af te ronden.
                        </p>
                        <div className="bg-blue-50 p-3 rounded-md flex items-start">
                          <Info className="h-5 w-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-blue-700">
                            Klik op "Bestelling plaatsen" om door te gaan naar PayPal.
                          </p>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                  
                  {/* Terms & Conditions */}
                  <div className="mb-6">
                    <div className="flex items-start">
                      <Checkbox id="terms" required className="mt-1" />
                      <label htmlFor="terms" className="ml-2 text-sm">
                        Ik ga akkoord met de 
                        <Link href="/terms" className="text-primary hover:underline mx-1">
                          algemene voorwaarden
                        </Link> 
                        en 
                        <Link href="/privacy" className="text-primary hover:underline ml-1">
                          privacybeleid
                        </Link>
                      </label>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90"
                  >
                    Bestelling plaatsen
                    <Lock className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <div className="flex justify-center mt-4">
                    <p className="text-xs text-gray-500 flex items-center">
                      <Lock className="h-3 w-3 mr-1" />
                      Veilig en versleuteld betalen
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg border p-6 sticky top-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-montserrat font-semibold">Je bestelling</h2>
                <span className="text-sm text-gray-500">{cartItems.length} items</span>
              </div>
              
              {/* Order Items */}
              <div className="max-h-60 overflow-y-auto mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex py-3 border-b last:border-b-0">
                    <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <h3 className="text-sm font-medium">{item.name}</h3>
                      <p className="text-xs text-gray-500">
                        {item.color} / {item.size} / Aantal: {item.quantity}
                      </p>
                      <p className="text-sm font-semibold mt-1">
                        €{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Order Details */}
              <div className="space-y-3 border-b pb-4 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotaal</span>
                  <span>€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Korting</span>
                  <span>-€{discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Verzendkosten</span>
                  <span className="text-green-600">Gratis</span>
                </div>
              </div>
              
              {/* Total */}
              <div className="flex justify-between items-center mb-6">
                <span className="font-montserrat font-semibold">Totaal (incl. BTW)</span>
                <span className="font-montserrat font-bold text-xl">€{total.toFixed(2)}</span>
              </div>
              
              {/* Need Help? */}
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Hulp nodig?</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Heb je vragen over je bestelling? Neem contact op met onze klantenservice.
                </p>
                <Link href="/contact" className="text-sm text-primary hover:underline flex items-center">
                  Naar contactpagina
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}