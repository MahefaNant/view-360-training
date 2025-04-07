import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SceneCard } from "./components/SceneCard";
import { pannellums } from "@/lib/config";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Découvrez notre musée en 360°
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Plongez au cœur de nos collections grâce à une expérience immersive unique.
        </p>
        <Link href="/visite">
          <Button size="lg" className="px-8 py-6 text-lg">
            Commencer la visite
          </Button>
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Explorations disponibles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pannellums.map(pannellum => (
            <SceneCard key={pannellum.id} pannellum={pannellum} />
          ))}
        </div>
      </section>

      <section className="bg-blue-50 rounded-xl p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Prêt pour l expérience réelle ?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Notre visite virtuelle vous a plu ? Venez découvrir nos collections en personne !
        </p>
        <Button variant="secondary" size="lg" className="px-8 py-6 text-lg">
          Acheter un billet
        </Button>
      </section>
    </div>
  );
}