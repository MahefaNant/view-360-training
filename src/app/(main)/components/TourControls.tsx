"use client";

import { Button } from "@/components/ui/button";
import { SceneConfig } from "@/lib/config";

interface TourControlsProps {
  scenes: SceneConfig[];
  currentSceneId: string;
  onSceneChange: (sceneId: string) => void;
}

export function TourControls({ scenes, currentSceneId, onSceneChange }: TourControlsProps) {
  return (
    <div className="flex flex-wrap gap-2 p-4 bg-background/90 backdrop-blur-sm rounded-lg shadow-lg">
      {scenes.map(scene => (
        <Button
          key={scene.id}
          variant={currentSceneId === scene.id ? "default" : "outline"}
          onClick={() => onSceneChange(scene.id)}
          className="text-sm"
        >
          {scene.title}
        </Button>
      ))}
    </div>
  );
}