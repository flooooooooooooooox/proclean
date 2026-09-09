"use client";

import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import { communes, siteConfig } from "@/lib/site-data";

const BRAND = "#f4511e";
const MUTED = "#9aa3ad";
const CENTER: [number, number] = [siteConfig.geo.lat, siteConfig.geo.lng];

/** Commune présélectionnée : Caen, le centre de la zone d'intervention. */
const DEFAULT_INDEX = 0;

export default function ZoneExplorer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);
  const markersRef = useRef<import("leaflet").CircleMarker[]>([]);
  const [active, setActive] = useState(DEFAULT_INDEX);
  const [ready, setReady] = useState(false);

  // Initialisation de la carte (une seule fois)
  useEffect(() => {
    const el = containerRef.current;
    if (!el || el.dataset.init) return;
    el.dataset.init = "1";

    let cancelled = false;

    (async () => {
      const L = await import("leaflet");
      if (cancelled) return;

      const map = L.map(el, {
        center: CENTER,
        zoom: 9,
        zoomControl: true,
        scrollWheelZoom: false, // évite de piéger le défilement de la page
        dragging: true,
        doubleClickZoom: true,
        touchZoom: true,
        keyboard: true,
      });
      mapRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 19,
      }).addTo(map);

      // Périmètre d'intervention
      L.circle(CENTER, {
        radius: siteConfig.serviceRadiusKm * 1000,
        color: BRAND,
        weight: 2,
        fillColor: BRAND,
        fillOpacity: 0.08,
        interactive: false,
      }).addTo(map);

      // Un point par commune
      markersRef.current = communes.map((commune, index) => {
        const marker = L.circleMarker([commune.lat, commune.lng], {
          radius: 6,
          color: "#ffffff",
          weight: 2,
          fillColor: MUTED,
          fillOpacity: 1,
        })
          .addTo(map)
          .bindTooltip(commune.name, { direction: "top", offset: [0, -6] });

        marker.on("click", () => setActive(index));
        return marker;
      });

      setReady(true);
    })();

    return () => {
      cancelled = true;
      mapRef.current?.remove();
      mapRef.current = null;
      markersRef.current = [];
      delete el.dataset.init;
    };
  }, []);

  // Mise en évidence de la commune sélectionnée
  useEffect(() => {
    if (!ready) return;
    const map = mapRef.current;
    if (!map) return;

    markersRef.current.forEach((marker, index) => {
      const isActive = index === active;
      marker.setStyle({ fillColor: isActive ? BRAND : MUTED });
      marker.setRadius(isActive ? 10 : 6);
      if (isActive) marker.bringToFront();
    });

    const commune = communes[active];
    map.flyTo([commune.lat, commune.lng], active === DEFAULT_INDEX ? 9 : 11, {
      duration: 0.8,
    });
  }, [active, ready]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="overflow-hidden rounded-2xl shadow-sm ring-1 ring-navy/8">
        <div
          ref={containerRef}
          className="h-[300px] w-full sm:h-[380px]"
          aria-label={`Carte de la zone d'intervention de ${siteConfig.name} dans le Calvados`}
        />
        <p className="border-t border-navy/8 bg-white px-4 py-2.5 text-[11px] text-navy/45">
          Déplacez la carte, ou choisissez une commune pour la localiser.
        </p>
      </div>

      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
          {communes.length} communes desservies
        </p>
        <p className="mt-2 font-heading text-lg font-extrabold text-navy">
          {communes[active].name}
        </p>
        <p className="mt-1 text-[13px] text-navy/55">
          {active === DEFAULT_INDEX
            ? `Notre point de départ : ${siteConfig.name} est basée à ${siteConfig.city}.`
            : `Nous intervenons à ${communes[active].name} pour l'ensemble de nos prestations.`}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {communes.map((commune, index) => {
            const isActive = index === active;
            return (
              <li key={commune.name}>
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  aria-pressed={isActive}
                  className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-brand text-white shadow-md shadow-brand/25"
                      : "bg-white text-navy/60 ring-1 ring-navy/10 hover:-translate-y-0.5 hover:text-brand-dark hover:ring-brand/40"
                  }`}
                >
                  {commune.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
