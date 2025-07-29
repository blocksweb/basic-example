import Layout from "@/components/layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Package, CalendarClock, Mail, ChevronRight } from "lucide-react";

export default function ConfirmationPage() {
  return (
    <Layout>
      <div className="container-custom py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6 bg-green-100 h-24 w-24 rounded-full flex items-center justify-center mx-auto">
            <Check className="h-12 w-12 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-montserrat font-bold text-primary mb-4">
            Bedankt voor je bestelling!
          </h1>
          
          <p className="text-gray-700 mb-6">
            We hebben je bestelling ontvangen en zijn al bezig met het verwerken ervan.
            Je ontvangt een bevestiging via e-mail naar <span className="font-medium">voorbeeld@email.nl</span>
          </p>
          
          <div className="bg-white border rounded-lg p-6 text-left mb-8">
            <h2 className="font-montserrat font-semibold text-xl mb-4">Bestelgegevens</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Bestelnummer</p>
                <p className="font-medium">#NL12345678</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Besteldatum</p>
                <p className="font-medium">15 mei 2025</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Betaalmethode</p>
                <p className="font-medium">iDEAL</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Totaalbedrag</p>
                <p className="font-medium">€94,85</p>
              </div>
            </div>
            
            <h3 className="font-medium mb-2 border-t pt-4">Bezorgadres</h3>
            <p className="text-sm">Jan Janssen</p>
            <p className="text-sm">Voorbeeldstraat 123</p>
            <p className="text-sm">1234 AB Amsterdam</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="p-4 border rounded-md flex flex-col items-center text-center">
              <Package className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">Verzending</h3>
              <p className="text-sm text-gray-600">Je bestelling wordt verzonden via PostNL</p>
            </div>
            <div className="p-4 border rounded-md flex flex-col items-center text-center">
              <CalendarClock className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">Verwachte levering</h3>
              <p className="text-sm text-gray-600">16-17 mei 2025</p>
            </div>
            <div className="p-4 border rounded-md flex flex-col items-center text-center">
              <Mail className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium">Updates</h3>
              <p className="text-sm text-gray-600">Je ontvangt updates via e-mail</p>
            </div>
          </div>
          
          <div className="space-x-4">
            <Link href="/account/orders">
              <Button variant="outline">
                Bekijk bestelling
              </Button>
            </Link>
            <Link href="/">
              <Button className="bg-accent hover:bg-accent/90">
                Verder winkelen
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-md inline-block">
            <p className="text-sm text-gray-600">
              Heb je vragen over je bestelling? Mail naar
              <a href="mailto:support@stylenl.nl" className="text-primary hover:underline mx-1">
                support@stylenl.nl
              </a>
              of bel
              <a href="tel:0201234567" className="text-primary hover:underline ml-1">
                020-123-4567
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}