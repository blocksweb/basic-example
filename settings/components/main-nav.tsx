"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Menu,
  ShoppingCart,
  User,
  Heart,
  Search,
  X,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCart } from "@/context/cart-context";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Casual", href: "/category/casual" },
  { name: "Sportswear", href: "/category/sportswear" },
  { name: "Nieuw Binnen", href: "/new-arrivals" },
  { name: "Loyalty", href: "/loyalty" },
];

function MainNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full">
      {/* Announcement Bar - moved outside the header */}
      <div className="bg-primary text-white py-2 text-center text-sm">
        <p>
          Gratis verzending bij bestellingen boven €50 | Standaard bezorging in
          1-2 werkdagen
        </p>
      </div>

      {/* Main Header */}
      <header
        className={`w-full transition-all duration-300 bg-white ${
          isScrolled ? "shadow-md py-2" : "py-4"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="mr-2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="flex flex-col h-full">
                  <div className="flex-1 py-4">
                    <nav className="flex flex-col space-y-4">
                      {navLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`px-4 py-2 font-medium text-lg hover:bg-gray-100 rounded-md ${
                            pathname === link.href
                              ? "text-primary"
                              : "text-gray-800"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                      <div className="pt-4 border-t mt-4">
                        <div className="px-4 py-2 text-lg font-medium text-gray-800">
                          Categorieën
                        </div>
                        <div className="space-y-2 pl-4">
                          <Link
                            href="/category/casual/men"
                            className="block px-4 py-2 hover:bg-gray-100 rounded-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Heren Casual
                          </Link>
                          <Link
                            href="/category/casual/women"
                            className="block px-4 py-2 hover:bg-gray-100 rounded-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Dames Casual
                          </Link>
                          <Link
                            href="/category/sportswear/men"
                            className="block px-4 py-2 hover:bg-gray-100 rounded-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Heren Sportswear
                          </Link>
                          <Link
                            href="/category/sportswear/women"
                            className="block px-4 py-2 hover:bg-gray-100 rounded-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            Dames Sportswear
                          </Link>
                        </div>
                      </div>
                    </nav>
                  </div>

                  <div className="border-t py-4">
                    <div className="space-y-3">
                      <Link
                        href="/account"
                        className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <User className="h-5 w-5 mr-2" />
                        <span>Mijn Account</span>
                      </Link>
                      <Link
                        href="/wishlist"
                        className="flex items-center px-4 py-2 hover:bg-gray-100 rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Heart className="h-5 w-5 mr-2" />
                        <span>Wishlist</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-montserrat font-bold text-primary">
                StyleNL
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium hover:text-primary transition-colors ${
                    pathname === link.href ? "text-primary" : "text-gray-800"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="relative group">
                <button className="flex items-center font-medium text-gray-800 hover:text-primary transition-colors">
                  Categorieën
                  <ChevronDown className="h-4 w-4 ml-1" />
                </button>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md p-4 w-48 hidden group-hover:block">
                  <Link
                    href="/category/casual/men"
                    className="block py-2 hover:text-primary"
                  >
                    Heren Casual
                  </Link>
                  <Link
                    href="/category/casual/women"
                    className="block py-2 hover:text-primary"
                  >
                    Dames Casual
                  </Link>
                  <Link
                    href="/category/sportswear/men"
                    className="block py-2 hover:text-primary"
                  >
                    Heren Sportswear
                  </Link>
                  <Link
                    href="/category/sportswear/women"
                    className="block py-2 hover:text-primary"
                  >
                    Dames Sportswear
                  </Link>
                </div>
              </div>
            </nav>

            {/* Search & Icons */}
            <div className="flex items-center">
              {/* Search */}
              <div className="relative mr-2">
                {isSearchOpen ? (
                  <div className="absolute right-0 top-0 flex items-center">
                    <Input
                      type="text"
                      placeholder="Zoeken..."
                      className="w-[200px] md:w-[300px]"
                      autoFocus
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsSearchOpen(false)}
                      className="ml-1"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSearchOpen(true)}
                  >
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                  </Button>
                )}
              </div>

              {/* Account */}
              <Link href="/account" prefetch={false}>
                <Button variant="ghost" size="icon" className="hidden sm:flex">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Account</span>
                </Button>
              </Link>

              {/* Wishlist */}
              <Link href="/wishlist" prefetch={false}>
                <Button variant="ghost" size="icon" className="hidden sm:flex">
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Wishlist</span>
                </Button>
              </Link>

              {/* Cart */}
              <Link href="/cart" prefetch={false}>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-accent text-white">
                      {totalItems}
                    </Badge>
                  )}
                  <span className="sr-only">Cart</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

MainNav.schema = {
  displayName: "Main Navigation",
  options: [
    {
      name: "feature1",
      type: "component",
      label: "Feature 1",
    },
  ],
};

export default MainNav;
