"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PannellumConfig } from "@/lib/config";

interface PannellumCardProps {
  pannellum: PannellumConfig;
}

export function SceneCard({ pannellum }: PannellumCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 md:h-60">
        <Image
          src={pannellum.image}
          alt={pannellum.title}
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{pannellum.title}</h3>
        <p className="text-gray-600 mb-4">{pannellum.description}</p>
        <Link href={`/visite?pannellum=${pannellum.id}`}>
          <Button className="w-full">Explorer</Button>
        </Link>
      </div>
    </div>
  );
}