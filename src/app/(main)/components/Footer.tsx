import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">360 Virtuel</h3>
            <p className="mb-4">
              Découvrez à travers nos visites immersives en 360°.
            </p>
            <Button variant="outline" asChild={true}>
              <Link href="/visite">Visite Virtuelle</Link>
            </Button>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Visiter</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white">Accueil</Link></li>
              <li><Link href="/collections" className="hover:text-white">Collections</Link></li>
              <li><Link href="/expositions" className="hover:text-white">Expositions</Link></li>
              <li><Link href="/events" className="hover:text-white">Événements</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Informations</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white">À propos</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/press" className="hover:text-white">Presse</Link></li>
              <li><Link href="/jobs" className="hover:text-white">Carrières</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">
              Abonnez-vous pour recevoir nos dernières actualités et offres spéciales.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 rounded-md bg-gray-800 text-white flex-1"
              />
              <Button variant="secondary">OK</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} 360 Virtuel. Tous droits réservés.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white">Confidentialité</Link>
            <Link href="/terms" className="hover:text-white">Conditions</Link>
            <Link href="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}