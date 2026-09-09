"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { siteConfig } from "@/lib/site-data";

const CENTER: [number, number] = [siteConfig.geo.lat, siteConfig.geo.lng];
const BRAND = "#1fb6d6";

export default function ZoneMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || el.dataset.init) return;
    el.dataset.init = "1";

    let map: import("leaflet").Map | undefined;

    (async () => {
      const L = await import("leaflet");

      map = L.map(el, {
        center: CENTER,
        zoom: 9,
        zoomControl: false,
        attributionControl: true,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
        touchZoom: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 19,
      }).addTo(map);

      L.circle(CENTER, {
        radius: siteConfig.serviceRadiusKm * 1000,
        color: BRAND,
        weight: 2,
        fillColor: BRAND,
        fillOpacity: 0.15,
      }).addTo(map);

      L.circleMarker(CENTER, {
        radius: 6,
        color: "#ffffff",
        weight: 2,
        fillColor: BRAND,
        fillOpacity: 1,
      }).addTo(map);
    })();

    return () => {
      map?.remove();
      delete el.dataset.init;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-[320px] w-full"
      aria-label={`Zone d'intervention de ${siteConfig.name} autour de ${siteConfig.city}`}
    />
  );
}
