"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full" />
          <span className="text-xl font-bold text-gray-900">360 Virtuel</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-900 hover:text-blue-600 font-medium">
            Accueil
          </Link>
          <Link href="/visite" className="text-gray-900 hover:text-blue-600 font-medium">
            Visite 360°
          </Link>
          <Link href="/collections" className="text-gray-900 hover:text-blue-600 font-medium">
            Collections
          </Link>
          <Link href="/contact" className="text-gray-900 hover:text-blue-600 font-medium">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex gap-2">
          <Button variant="outline">Connexion</Button>
          <Button>Three</Button>
        </div>

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild={true}>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild={true}>
                <Link href="/">Accueil</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild={true}>
                <Link href="/visite">Visite 360°</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild={true}>
                <Link href="/collections">Collections</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild={true}>
                <Link href="/contact">Contact</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Connexion</DropdownMenuItem>
              <DropdownMenuItem className="text-blue-600 font-medium">
                Three
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}