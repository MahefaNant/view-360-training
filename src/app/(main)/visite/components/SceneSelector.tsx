"use client";

import { SceneConfig } from "@/lib/config";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface SceneSelectorProps {
  currentScene: SceneConfig;
  onSceneChange: (scene: SceneConfig) => void;
}

export function SceneSelector({ currentScene }: SceneSelectorProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild={true}>
        <Button variant="secondary" className="gap-2">
          <MapPin className="h-4 w-4" />
          {currentScene.title}
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}