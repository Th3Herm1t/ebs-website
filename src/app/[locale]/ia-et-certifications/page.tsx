import { Sparkles, Brain, BarChart3, Globe, Shield } from "lucide-react";
import { PageHero, CtaSection } from "@/components/shared";
import { IA_CERTS_SHARED } from "@/components/program";

const competences = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    titre: "IA Générative & Prompting",
    description: "ChatGPT, Gemini, Claude, Copilot. Usage professionnel : rédaction, résumé, génération de contenu, analyse.",
    certs: "Google Prompting Essentials · IBM Prompt Engineering pour Tous",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    titre: "Agents IA & Automatisation",
    description: "Création de workflows autonomes avec n8n, IBM Watsonx Orchestrate, LangChain.",
    certs: "n8n Level 1 & 2 · IBM Watsonx · Databricks AI Agents",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    titre: "Analyse de données augmentée par l'IA",
    description: "Power BI + IA, Google Analytics 4, IBM Data Science, Looker Studio.",
    certs: "Google Data Analytics Certificate · IBM Cognitive Class Data Science",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    titre: "IA appliquée à votre domaine métier",
    description: "IA marketing, IA finance, IA cybersécurité, IA management.",
    certs: "Certifications spécifiques dans chaque filière",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    titre: "Éthique de l'IA & Utilisation responsable",
    description: "Comprendre les limites, les biais et les implications éthiques de l'IA.",
    certs: "Google AI Essentials · IBM Foundations of AI · DeepLearning.AI AI for Good",
  },
];

const programmeCerts = [
  { nom: "Licence Management", total: "57+", certs: "Google PM · Scrum SFC™ · IBM Business Analyst" },
  { nom: "Licence Marketing", total: "81+", certs: "Google Digital Mktg · HubSpot Digital · SEMrush SEO AI" },
  { nom: "Licence Finance", total: "64+", certs: "Bloomberg BMC · Bloomberg ESG · Goldman Sachs Forage" },
  { nom: "Licence Info – IA", total: "87+", certs: "Harvard CS50 AI · DeepLearning.AI ML/DL · Databricks GenAI" },
  { nom: "Licence Info – Cyber", total: "63+", certs: "Google Cyber · Cisco Ethical Hacker · Fortinet FCF/FCA" },
  { nom: "Master CRM Digital", total: "73+", certs: "HubSpot CRM · n8n Automation · IBM Watsonx" },
  { nom: "Master Startups", total: "59+", certs: "PMI · Google PM · Scrum SAC™ · IBM DevOps" },
  { nom: "Master Ingénierie Fin.", total: "64+", certs: "Bloomberg BMC/ESG · JP Morgan Quant · Goldman Sachs IB" },
];

export default function IAEtCertificationsPage() {
  return (
    <>
      <PageHero
        title="L'IA n'est pas une option chez EBS. C'est une obligation."
        subtitle="Depuis 2026, Espima Business School a pris une décision stratégique : intégrer l'Intelligence Artificielle comme compétence fondamentale dans TOUS ses programmes. Une décision unique en Tunisie."
        badge="IA & Certifications"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "IA & Certifications" }]}
        background="light"
      />

      {/* Pourquoi */}
      <section className="section-padding bg-white">
        <div className="max-w-[900px] mx-auto px-5 lg:px-12">
          <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy mb-6">
            Pourquoi l'IA dans chaque filière ?
          </h2>
          <p className="text-[16px] text-penn-body leading-relaxed">
            Le marché du travail a fondamentalement changé. En 2025, l'IA est présente dans tous les secteurs sans exception : finance, marketing, gestion, cybersécurité, entrepreneuriat. Les entreprises ne cherchent plus uniquement des experts en IA — elles cherchent des professionnels de TOUS les domaines qui savent utiliser l'IA pour être plus efficaces, plus créatifs, plus compétitifs. C'est pourquoi EBS a fait le choix d'intégrer les compétences en Intelligence Artificielle comme socle commun obligatoire dans tous ses programmes, de la Licence de Management au Master d'Ingénierie Financière. Chaque étudiant EBS repart en sachant utiliser l'IA dans son domaine métier.
          </p>
        </div>
      </section>

      {/* 5 Compétences */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy text-center mb-12">
            Les 5 compétences IA que maîtrisent TOUS les étudiants EBS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competences.map((c) => (
              <div key={c.titre} className="bg-white rounded-xl border border-penn-border p-6 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-penn-green/10 flex items-center justify-center mb-4 text-penn-green">
                  {c.icon}
                </div>
                <h3 className="text-[17px] font-extrabold text-penn-navy mb-2">{c.titre}</h3>
                <p className="text-[14px] text-penn-body leading-relaxed mb-3">{c.description}</p>
                <p className="text-[12px] font-semibold text-penn-green uppercase tracking-wide">{c.certs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 26 IA certs */}
      <section className="section-padding bg-white">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy text-center mb-4">
            26 Certifications IA disponibles pour tous les étudiants
          </h2>
          <p className="text-[15px] text-penn-body text-center mb-10 max-w-[700px] mx-auto">
            Ces certifications sont incluses dans TOUS les programmes, sans exception et sans frais supplémentaire.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {IA_CERTS_SHARED.map((cert) => (
              <div key={cert.name} className="flex items-center gap-3 px-4 py-3 bg-penn-bg-light rounded-lg border border-penn-border">
                <div className="w-2 h-2 rounded-full bg-penn-green shrink-0" />
                <div>
                  <p className="text-[13px] font-semibold text-penn-navy">{cert.name}</p>
                  <p className="text-[11px] text-penn-body">{cert.provider}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme breakdown */}
      <section className="section-padding bg-penn-bg-light">
        <div className="max-w-[1160px] mx-auto px-5 lg:px-12">
          <h2 className="text-[28px] md:text-[34px] font-extrabold text-penn-navy text-center mb-12">
            Les certifications, programme par programme
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-penn-green">
                  <th className="py-3 pr-4 text-[13px] font-extrabold text-penn-navy uppercase">Programme</th>
                  <th className="py-3 px-4 text-[13px] font-extrabold text-penn-navy uppercase">Total</th>
                  <th className="py-3 pl-4 text-[13px] font-extrabold text-penn-navy uppercase">Top 3 certifications</th>
                </tr>
              </thead>
              <tbody>
                {programmeCerts.map((p) => (
                  <tr key={p.nom} className="border-b border-penn-border hover:bg-white/50 transition-colors">
                    <td className="py-3 pr-4 text-[14px] font-bold text-penn-navy">{p.nom}</td>
                    <td className="py-3 px-4 text-[14px] font-extrabold text-penn-green">{p.total}</td>
                    <td className="py-3 pl-4 text-[13px] text-penn-body">{p.certs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaSection
        title="Prêt(e) à maîtriser l'IA ?"
        subtitle="Rejoignez EBS et obtenez vos certifications IA gratuitement."
        primaryCta={{ label: "Voir nos programmes", href: "/licences" }}
        secondaryCta={{ label: "Nous contacter", href: "/contact" }}
        background="penn-green"
      />
    </>
  );
}
