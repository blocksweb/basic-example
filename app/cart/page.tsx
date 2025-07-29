"use client";

import { useState } from "react";
import Layout from "@/components/layout";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Trash2,
  MinusCircle,
  PlusCircle,
  ChevronRight,
  ShoppingCart,
  AlertCircle,
  Check,
  Truck,
} from "lucide-react";
import { useCart } from "@/context/cart-context";

// Recommended products
const recommendedProducts = [
  {
    id: "3",
    name: "Lightweight Running Jacket",
    price: 59.95,
    image:
      "https://images.unsplash.com/photo-1517940310602-26535839fe84?q=80&w=1974",
  },
  {
    id: "4",
    name: "Sport Performance Leggings",
    price: 49.95,
    image:
      "https://images.unsplash.com/photo-1506026798239-6b69395acf60?q=80&w=1974",
  },
];

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState("");

  // Calculate totals
  const discount = isPromoApplied ? 10 : 0;
  const shipping = subtotal >= 50 ? 0 : 4.95;
  const total = subtotal - discount + shipping;

  const handleQuantityChange = (id: string, newQuantity: number) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      // Check stock limit
      if (item.lowStock && item.stockLimit && newQuantity > item.stockLimit) {
        updateQuantity(id, item.stockLimit);
      } else {
        updateQuantity(id, newQuantity > 0 ? newQuantity : 1);
      }
    }
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "welcome10") {
      setIsPromoApplied(true);
      setPromoError("");
    } else {
      setIsPromoApplied(false);
      setPromoError("Ongeldige code. Probeer opnieuw.");
    }
  };

  return (
    <Layout>
      <div className="container-custom py-8">
        <h1 className="text-3xl font-montserrat font-bold text-primary mb-8">
          Winkelwagen
        </h1>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg border mb-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 md:p-6 border-b last:border-b-0"
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0">
                        <Link href={`/product/${item.id}`}>
                          <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-md overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </Link>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <div>
                            <Link
                              href={`/product/${item.id}`}
                              className="text-lg font-montserrat font-medium hover:text-primary"
                            >
                              {item.name}
                            </Link>
                            <div className="text-sm text-gray-500 mt-1">
                              <span>Kleur: {item.color}</span> |{" "}
                              <span>Maat: {item.size}</span>
                            </div>

                            {/* Mobile price (visible on small screens) */}
                            <div className="md:hidden mt-2">
                              {item.originalPrice &&
                              item.originalPrice > item.price ? (
                                <div className="flex items-center">
                                  <span className="font-semibold text-accent mr-2">
                                    €{item.price.toFixed(2)}
                                  </span>
                                  <span className="text-gray-500 text-sm line-through">
                                    €{item.originalPrice.toFixed(2)}
                                  </span>
                                </div>
                              ) : (
                                <span className="font-semibold">
                                  €{item.price.toFixed(2)}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Desktop price (hidden on small screens) */}
                          <div className="hidden md:block">
                            {item.originalPrice &&
                            item.originalPrice > item.price ? (
                              <div className="flex items-center">
                                <span className="font-semibold text-accent mr-2">
                                  €{item.price.toFixed(2)}
                                </span>
                                <span className="text-gray-500 text-sm line-through">
                                  €{item.originalPrice.toFixed(2)}
                                </span>
                              </div>
                            ) : (
                              <span className="font-semibold">
                                €{item.price.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4">
                          <div className="flex items-center">
                            {/* Quantity Selector */}
                            <div className="flex items-center border rounded-md">
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity - 1
                                  )
                                }
                                className="px-2 py-1 text-gray-500 hover:text-primary"
                                aria-label="Decrease quantity"
                              >
                                <MinusCircle className="h-4 w-4" />
                              </button>
                              <span className="w-8 text-center text-sm">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  handleQuantityChange(
                                    item.id,
                                    item.quantity + 1
                                  )
                                }
                                className={`px-2 py-1 text-gray-500 hover:text-primary ${
                                  item.lowStock &&
                                  item.stockLimit &&
                                  item.quantity >= item.stockLimit
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                                }`}
                                disabled={
                                  item.lowStock &&
                                  item.stockLimit &&
                                  item.quantity >= item.stockLimit
                                    ? true
                                    : false
                                }
                                aria-label="Increase quantity"
                              >
                                <PlusCircle className="h-4 w-4" />
                              </button>
                            </div>

                            {/* Low stock warning */}
                            {item.lowStock && item.stockLimit && (
                              <span className="text-xs text-red-500 ml-2 flex items-center">
                                <AlertCircle className="h-3 w-3 mr-1" />
                                Nog maar {item.stockLimit} beschikbaar
                              </span>
                            )}
                          </div>

                          <div className="flex items-center mt-3 md:mt-0">
                            {/* Subtotal (only on small screens) */}
                            <div className="md:hidden mr-4 font-semibold">
                              €{(item.price * item.quantity).toFixed(2)}
                            </div>

                            {/* Action buttons */}
                            <button
                              onClick={() => {}}
                              className="text-primary mr-4 text-sm hover:underline"
                              aria-label="Save for later"
                            >
                              Bewaren
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-red-500 text-sm hover:underline flex items-center"
                              aria-label="Remove item"
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Verwijderen
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <div className="mt-4">
                <Link href="/category/sportswear">
                  <Button variant="ghost" size="sm">
                    <ChevronRight className="h-4 w-4 mr-2 rotate-180" />
                    Verder winkelen
                  </Button>
                </Link>
              </div>

              {/* Recommended Products */}
              <div className="mt-8">
                <h2 className="text-xl font-montserrat font-semibold mb-4">
                  Vergeet je niet:
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {recommendedProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-4 p-4 border rounded-lg"
                    >
                      <Link
                        href={`/product/${product.id}`}
                        className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </Link>
                      <div className="flex-1">
                        <Link
                          href={`/product/${product.id}`}
                          className="font-medium text-sm hover:text-primary transition-colors"
                        >
                          {product.name}
                        </Link>
                        <p className="text-sm mt-1">
                          €{product.price.toFixed(2)}
                        </p>
                      </div>
                      <Button size="sm" variant="outline">
                        Toevoegen
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg border p-6 sticky top-4">
                <h2 className="text-xl font-montserrat font-semibold mb-4">
                  Bestelgegevens
                </h2>

                {/* Promo Code */}
                <div className="mb-6">
                  <label
                    htmlFor="promo-code"
                    className="text-sm font-medium mb-1 block"
                  >
                    Kortingscode
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="promo-code"
                      placeholder="Voer code in"
                      className={`flex-1 px-3 py-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary ${
                        promoError ? "border-red-500" : ""
                      }`}
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button className="rounded-l-none" onClick={applyPromoCode}>
                      Toepassen
                    </Button>
                  </div>
                  {promoError && (
                    <p className="text-xs text-red-500 mt-1">{promoError}</p>
                  )}
                  {isPromoApplied && (
                    <p className="text-xs text-green-600 mt-1 flex items-center">
                      <Check className="h-3 w-3 mr-1" />
                      Code toegepast: 10% korting
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-2">
                    Probeer "WELCOME10" voor 10% korting
                  </p>
                </div>

                {/* Order Details */}
                <div className="space-y-3 border-b pb-4 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotaal</span>
                    <span>€{subtotal.toFixed(2)}</span>
                  </div>
                  {isPromoApplied && (
                    <div className="flex justify-between text-green-600">
                      <span>Korting</span>
                      <span>-€{discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Verzendkosten</span>
                    {shipping === 0 ? (
                      <span className="text-green-600">Gratis</span>
                    ) : (
                      <span>€{shipping.toFixed(2)}</span>
                    )}
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center mb-6">
                  <span className="font-montserrat font-semibold">
                    Totaal (incl. BTW)
                  </span>
                  <span className="font-montserrat font-bold text-xl">
                    €{total.toFixed(2)}
                  </span>
                </div>

                {/* Free Shipping Notice */}
                {subtotal < 50 && (
                  <div className="bg-blue-50 p-3 rounded-md text-sm text-blue-800 mb-6 flex items-start">
                    <Truck className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                    <p>
                      Nog{" "}
                      <span className="font-semibold">
                        €{(50 - subtotal).toFixed(2)}
                      </span>{" "}
                      te gaan voor gratis verzending!
                    </p>
                  </div>
                )}

                {/* Checkout Button */}
                <Link href="/checkout">
                  <Button className="w-full bg-accent hover:bg-accent/90 mb-4">
                    Afrekenen
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                {/* Trust Signals */}
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-600" />
                    <span>Veilig betalen</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-600" />
                    <span>30 dagen retourrecht</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-green-600" />
                    <span>Klantenservice: 020-123-4567</span>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="mt-4 pt-4 border-t">
                  <p className="text-xs text-gray-500 mb-2">
                    Geaccepteerde betaalmethoden:
                  </p>
                  <div className="flex space-x-2">
                    <div className="bg-gray-100 text-primary text-xs px-2 py-1 rounded">
                      iDEAL
                    </div>
                    <div className="bg-gray-100 text-primary text-xs px-2 py-1 rounded">
                      PayPal
                    </div>
                    <div className="bg-gray-100 text-primary text-xs px-2 py-1 rounded">
                      Visa
                    </div>
                    <div className="bg-gray-100 text-primary text-xs px-2 py-1 rounded">
                      MasterCard
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
              <ShoppingCart className="h-12 w-12 text-gray-400" />
            </div>
            <h2 className="text-2xl font-montserrat font-semibold mb-2">
              Je winkelwagen is leeg
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Het lijkt erop dat je nog geen artikelen aan je winkelwagen hebt
              toegevoegd.
            </p>
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90">
                Terug naar homepage
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}
