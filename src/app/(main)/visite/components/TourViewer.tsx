"use client";

import { useState, useEffect } from "react";
import { PannellumConfig } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Maximize2, Minimize2, RotateCcw } from "lucide-react";
import Script from "next/script";

interface TourViewerProps {
  pannellum: PannellumConfig;
}

export function TourViewer({pannellum}: TourViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);




  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const initializeViewer = () => {
    if (window.pannellum) {
      window.pannellum.viewer("panorama", pannellum);
    } else {
      console.error("pannellum n'est pas défini.");
    }
  };

  useEffect(() => {
    const scriptLoadedHandler = () => {
      initializeViewer();
    };

    if (window.pannellum) {
      scriptLoadedHandler();
    } else {
      const handler = () => {
        initializeViewer();
      };
      window.addEventListener("pannellum-loaded", handler);
      return () => window.removeEventListener("pannellum-loaded", handler);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative h-screen w-full">
      <Script
        src="https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Le script Pannellum a été chargé avec succès.");
          initializeViewer();
        }}
        onError={(e) => {
          console.error("Erreur lors du chargement du script Pannellum", e);
        }}
      />
      <div className="absolute top-4 left-10 right-4 z-10 flex justify-between items-start">
        <div className="flex gap-2">
          <Button 
            variant="secondary" 
            size="icon" 
            onClick={() => window.location.reload()}
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          <Button 
            variant="secondary" 
            size="icon" 
            onClick={toggleFullscreen}
          >
            {isFullscreen ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      <div id="panorama" style={{ width: "100%", height: "80vh" }} />

      <div className="absolute bottom-20 left-0 right-0 z-10 flex justify-center">
        <div className="bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
          <h2 className="text-xl font-bold">{pannellum.title}</h2>
          <p className="text-sm">{pannellum.description}</p>
        </div>
      </div>

    </div>
  );
}