"use client";
import { useSearchParams } from "next/navigation";
import { TourViewer } from "./components/TourViewer";
import { getPannellumById, PannellumConfig } from "@/lib/config";

export default function TourPage() {

  const searchParams = useSearchParams(); 
  const pannellumId = searchParams.get("pannellum");
  const pannellum = getPannellumById(pannellumId || "room1") as PannellumConfig;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Virtual Tour</h1>
      <TourViewer pannellum={pannellum} />
    </div>
  );
}