import { Search, Building2, ClipboardCheck, Star } from "lucide-react";
import { useTranslations } from 'next-intl';
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CareerSection() {
  const t = useTranslations('HomePage.career');

  const services = [
    {
      Icon: Search,
      title: t('steps.0'),
      href: "#",
    },
    {
      Icon: Building2,
      title: t('steps.1'),
      href: "#",
    },
    {
      Icon: ClipboardCheck,
      title: t('steps.2'),
      href: "#",
    },
    {
      Icon: Star,
      title: t('steps.3'),
      href: "#",
    },
  ];

  return (
    <section style={{ backgroundColor: "#f7f7f7", padding: "80px 0" }}>
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
          <ScrollReveal
            initialY={18}
            duration={0.55}
            className="flex-[0_0_calc(40%-20px)] min-w-[260px]"
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
              {t('tag')}
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
              {t('title1')}<br />
              {t('title2')}
            </h2>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal
            initialY={18}
            duration={0.55}
            delay={0.1}
            className="flex-[1_1_300px]"
          >
            <p style={{ fontSize: "15px", color: "#666666", lineHeight: "1.85", margin: "0 0 18px" }}>
              {t('desc1')}
            </p>
            <p style={{ fontSize: "15px", color: "#666666", lineHeight: "1.85", margin: 0 }}>
              {t('desc2')}
            </p>
          </ScrollReveal>
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
            <ScrollReveal
              key={i}
              initialY={16}
              duration={0.45}
              delay={0.18 + i * 0.08}
            >
              <a
                href={href}
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
                  height: "100%",
                }}
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
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Responsive: stack cards 2×2 on tablet, 1×4 on mobile */}
      <style>{`
        @media (max-width: 900px) {
          .career-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .career-grid > div > a {
            border-left: none !important;
          }
          .career-grid > div:nth-child(even) > a {
            border-left: 1px solid #e2e2e2 !important;
          }
          .career-grid > div:nth-child(n+3) > a {
            border-top: 1px solid #e2e2e2;
          }
        }
        @media (max-width: 540px) {
          .career-grid {
            grid-template-columns: 1fr !important;
          }
          .career-grid > div > a {
            border-left: none !important;
            border-top: none;
          }
          .career-grid > div + div > a {
            border-top: 1px solid #e2e2e2;
          }
        }
      `}</style>
    </section>
  );
}
