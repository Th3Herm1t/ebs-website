"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/shared";
import { CountryFlag } from "@/components/shared/CountryFlag";

interface AlumniLocation {
  country: string;
  code: string;
  count: number;
  lat: number;
  lng: number;
  highlight?: boolean;
}

const alumniLocations: AlumniLocation[] = [
  { country: "Tunisie", code: "TN", count: 350, lat: 36.8, lng: 10.18, highlight: true },
  { country: "France", code: "FR", count: 45, lat: 48.86, lng: 2.35 },
  { country: "Canada", code: "CA", count: 20, lat: 45.5, lng: -73.57 },
  { country: "Allemagne", code: "DE", count: 12, lat: 52.52, lng: 13.4 },
  { country: "Émirats", code: "AE", count: 15, lat: 25.2, lng: 55.27 },
  { country: "Belgique", code: "BE", count: 8, lat: 50.85, lng: 4.35 },
  { country: "Maroc", code: "MA", count: 8, lat: 33.97, lng: -6.85 },
  { country: "Suisse", code: "CH", count: 7, lat: 46.95, lng: 7.45 },
  { country: "Qatar", code: "QA", count: 6, lat: 25.29, lng: 51.53 },
  { country: "Royaume-Uni", code: "GB", count: 6, lat: 51.51, lng: -0.13 },
  { country: "Arabie Saoudite", code: "SA", count: 5, lat: 24.71, lng: 46.68 },
  { country: "Italie", code: "IT", count: 5, lat: 41.9, lng: 12.5 },
  { country: "Côte d'Ivoire", code: "CI", count: 4, lat: 5.36, lng: -4.01 },
  { country: "Turquie", code: "TR", count: 4, lat: 41.01, lng: 28.98 },
  { country: "Sénégal", code: "SN", count: 3, lat: 14.69, lng: -17.44 },
];

export default function AlumniWorldMap({ locale = "fr" }: { locale?: string }) {
  const isFr = locale === "fr";
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || mapRef.current.dataset.init) return;
    mapRef.current.dataset.init = "1";

    import("leaflet").then((L) => {
      if (!mapRef.current) return;

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);

      const map = L.map(mapRef.current, {
        center: [30, 10],
        zoom: 2.5,
        minZoom: 2,
        maxZoom: 6,
        scrollWheelZoom: false,
        attributionControl: false,
        zoomControl: false,
      });

      L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }).addTo(map);

      alumniLocations.forEach((loc) => {
        const radius = loc.highlight ? 18 : Math.max(6, Math.min(14, loc.count / 4));
        const color = loc.highlight ? "#FF6D00" : "#2B8FAB";

        const marker = L.circleMarker([loc.lat, loc.lng], {
          radius,
          fillColor: color,
          color: loc.highlight ? "#FF6D00" : "#2B8FAB",
          weight: loc.highlight ? 3 : 1.5,
          opacity: 1,
          fillOpacity: loc.highlight ? 0.45 : 0.35,
        }).addTo(map);

        marker.bindPopup(
          `<div style="text-align:center;font-family:system-ui,sans-serif;">
            <strong style="font-size:0.95rem;">${loc.country}</strong><br>
            <span style="color:#2B8FAB;font-weight:700;font-size:1.1rem;">${loc.count}</span>
            <span style="font-size:0.8rem;color:#555;"> ${isFr ? "diplômés" : "graduates"}</span>
          </div>`,
          { closeButton: false, className: "alumni-popup" }
        );

        if (loc.highlight) {
          L.circleMarker([loc.lat, loc.lng], {
            radius: 18,
            fillColor: "#FF6D00",
            color: "#FF6D00",
            weight: 2,
            opacity: 0.6,
            fillOpacity: 0.15,
            className: "alumni-pulse",
          }).addTo(map);
        }
      });

      mapInstance.current = map;
    });

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [isFr]);

  const sorted = [...alumniLocations].sort((a, b) => b.count - a.count);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <Badge variant="default" size="lg" className="mb-4">
            {isFr ? "Réseau Alumni" : "Alumni Network"}
          </Badge>
          <h2 className="text-[34px] md:text-[44px] font-extrabold text-penn-navy leading-[1.15]">
            {isFr ? "Nos diplômés dans le monde" : "Our graduates worldwide"}
          </h2>
          <p className="text-[16px] text-penn-body mt-3 max-w-[600px] mx-auto">
            {isFr
              ? `${alumniLocations.length}+ pays, 500+ diplômés — un réseau qui s'étend chaque année.`
              : `${alumniLocations.length}+ countries, 500+ graduates — a network growing every year.`}
          </p>
        </motion.div>

        <div
          ref={mapRef}
          id="alumni-map"
          className="w-full h-[420px] rounded-xl border border-penn-border mb-10"
        />

        <div className="flex flex-wrap justify-center gap-3">
          {sorted.map((loc, i) => (
            <motion.div
              key={loc.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border transition-all w-[calc(50%-6px)] sm:w-[calc(33.33%-8px)] md:w-[calc(20%-9.6px)] ${
                loc.highlight
                  ? "border-[#2B8FAB]/30 bg-[#2B8FAB]/5"
                  : "border-penn-border bg-penn-bg-light hover:border-[#2B8FAB]/20"
              }`}
            >
              <CountryFlag code={loc.code} className="w-6 h-4" />
              <div>
                <span className="font-extrabold text-[13px] text-penn-navy block leading-tight">
                  {loc.country}
                </span>
                <span className="text-[11px] text-penn-body/50">
                  {loc.count} {isFr ? "diplômés" : "grads"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
