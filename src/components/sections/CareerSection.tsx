"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Search, Building2, ClipboardCheck, Star } from "lucide-react";

const services = [
  {
    Icon: Search,
    title: "Sélection des meilleures offres de stages",
    href: "#",
  },
  {
    Icon: Building2,
    title: "Placement au sein d'une entreprise partenaire",
    href: "#",
  },
  {
    Icon: ClipboardCheck,
    title: "Déroulement du stage et évaluation des compétences",
    href: "#",
  },
  {
    Icon: Star,
    title: "Priorité de recrutement pour les étudiants sélectionnés",
    href: "#",
  },
];

export default function CareerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} style={{ backgroundColor: "#f7f7f7", padding: "80px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 30px" }}>

        {/* ── Top row: left heading / right description ── */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            marginBottom: "60px",
            alignItems: "flex-start",
          }}
        >
          {/* Left */}
          <motion.div
            style={{ flex: "0 0 calc(40% - 20px)", minWidth: "260px" }}
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55 }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#999999",
                margin: "0 0 14px",
              }}
            >
              EBS CAREER
            </p>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: 700,
                color: "#1a1a1a",
                lineHeight: "1.18",
                margin: 0,
                textTransform: "none",
              }}
            >
              Des opportunités de carrière<br />
              Avec nos partenaires entreprises
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            style={{ flex: "1 1 300px" }}
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p style={{ fontSize: "15px", color: "#666666", lineHeight: "1.85", margin: "0 0 18px" }}>
              Grâce à son réseau de partenaires entreprises, EBS facilite l'accès de ses étudiants à des stages, des projets en entreprise et des opportunités de pré-embauche dans différents secteurs d'activité.
            </p>
            <p style={{ fontSize: "15px", color: "#666666", lineHeight: "1.85", margin: 0 }}>
              Dans de nombreux cas, les étudiants ayant effectué leur stage au sein d'une entreprise partenaire bénéficient d'un avantage significatif lors des recrutements, l'entreprise ayant déjà pu évaluer leurs compétences, leur potentiel et leur capacité d'intégration.
            </p>
          </motion.div>
        </div>

        {/* ── Bottom row: 4 service cards ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            border: "1px solid #e2e2e2",
            backgroundColor: "#ffffff",
          }}
          className="career-grid"
        >
          {services.map(({ Icon, title, href }, i) => (
            <motion.a
              key={i}
              href={href}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.18 + i * 0.08 }}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "36px 30px 30px",
                borderLeft: i > 0 ? "1px solid #e2e2e2" : "none",
                textDecoration: "none",
                color: "inherit",
                backgroundColor: "#ffffff",
                transition: "background-color 0.2s ease",
                cursor: "pointer",
                minHeight: "200px",
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#f9f9f9")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#ffffff")}
            >
              {/* Icon */}
              <div style={{ marginBottom: "22px" }}>
                <Icon
                  strokeWidth={1.2}
                  style={{ width: "46px", height: "46px", color: "#4a90d9" }}
                />
              </div>

              {/* Title */}
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#1a1a1a",
                  lineHeight: "1.55",
                  margin: "0 0 auto",
                  flex: 1,
                }}
              >
                {title}
              </p>

              {/* Arrow */}
              <div style={{ marginTop: "28px" }}>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "20px",
                    color: "#1a1a1a",
                    fontWeight: 300,
                    lineHeight: 1,
                    transition: "transform 0.2s ease",
                  }}
                >
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Responsive: stack cards 2×2 on tablet, 1×4 on mobile */}
      <style>{`
        @media (max-width: 900px) {
          .career-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .career-grid a:nth-child(n) {
            border-left: none !important;
          }
          .career-grid a:nth-child(even) {
            border-left: 1px solid #e2e2e2 !important;
          }
          .career-grid a:nth-child(n+3) {
            border-top: 1px solid #e2e2e2;
          }
        }
        @media (max-width: 540px) {
          .career-grid {
            grid-template-columns: 1fr !important;
          }
          .career-grid a {
            border-left: none !important;
          }
          .career-grid a + a {
            border-top: 1px solid #e2e2e2;
          }
        }
      `}</style>
    </section>
  );
}
