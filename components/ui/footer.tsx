import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white mt-12">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Klantenservice</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-accent transition-colors">
                  Retourneren & Ruilen
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-accent transition-colors">
                  Verzending
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="hover:text-accent transition-colors">
                  Maattabel
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Over Ons</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  Over StyleNL
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-accent transition-colors">
                  Vacatures
                </Link>
              </li>
              <li>
                <Link href="/loyalty" className="hover:text-accent transition-colors">
                  Loyalty Programma
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-accent transition-colors">
                  Algemene Voorwaarden
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-accent transition-colors">
                  Privacybeleid
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Categorieën</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/casual" className="hover:text-accent transition-colors">
                  Casual Collectie
                </Link>
              </li>
              <li>
                <Link href="/category/sportswear" className="hover:text-accent transition-colors">
                  Sportswear Collectie
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="hover:text-accent transition-colors">
                  Nieuw Binnen
                </Link>
              </li>
              <li>
                <Link href="/sale" className="hover:text-accent transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Contact & Socials</h3>
            <p className="mb-2">Amsterdam, NL</p>
            <p className="mb-2">support@stylenl.nl</p>
            <p className="mb-4">020-123-4567</p>
            
            <div className="flex space-x-4 mb-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            
            {/* Payment Methods */}
            <h4 className="text-sm font-montserrat font-medium mb-2 mt-4">Betaalmethoden</h4>
            <div className="flex space-x-2">
              <div className="bg-white text-primary text-xs px-2 py-1 rounded">iDEAL</div>
              <div className="bg-white text-primary text-xs px-2 py-1 rounded">PayPal</div>
              <div className="bg-white text-primary text-xs px-2 py-1 rounded">Visa</div>
              <div className="bg-white text-primary text-xs px-2 py-1 rounded">MasterCard</div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-light mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            © 2025 StyleNL. Alle rechten voorbehouden. KvK: 12345678 | BTW: NL123456789B01
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Veilige betalingen</span>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}