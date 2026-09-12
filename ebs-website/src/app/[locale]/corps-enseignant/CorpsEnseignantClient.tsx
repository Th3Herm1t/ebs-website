"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { ArrowDown, BookOpen, BriefcaseBusiness, GraduationCap, Sparkles } from "lucide-react";
import { Badge, CtaSection } from "@/components/shared";

type FacultyArea = "Management" | "Finance" | "Digital & Tech" | "Langues & Sciences";

type FacultyMember = {
  name: string;
  credential: string;
  areas: FacultyArea[];
  expertise: string[];
  image?: string;
  objectPosition?: string;
};

const faculty: FacultyMember[] = [
  { name: "Mehdi Ben Ghedifa", credential: "Enseignant et formateur", areas: ["Digital & Tech"], expertise: ["Marketing digital", "Communication digitale", "Veille stratégique"], image: "/images/faculty/mehdi-ben-ghedifa.png" },
  { name: "Ahmed Benhamouda", credential: "Enseignant en systèmes d'information", areas: ["Digital & Tech"], expertise: ["Systèmes d'information", "Bases de données", "Architecture des ordinateurs"] },
  { name: "Fayçal Chehab", credential: "Docteur en sciences de gestion", areas: ["Management"], expertise: ["Management stratégique", "Ressources humaines", "Leadership"], image: "/images/faculty/faycal-chehab.jpg" },
  { name: "Hatem Daoud", credential: "Professionnel de la finance et de la banque", areas: ["Finance"], expertise: ["Finance d'entreprise", "Ingénierie financière", "Banque"] },
  { name: "Dorra Denguezli", credential: "Enseignante permanente", areas: ["Langues & Sciences"], expertise: ["Études anglaises", "Études culturelles", "Enseignement de l'anglais"] },
  { name: "Mohamed Draoui", credential: "Consultant senior et expert en gestion des connaissances", areas: ["Management", "Digital & Tech"], expertise: ["Gestion des connaissances", "Transformation digitale", "Modélisation métier"] },
  { name: "Riadh Bez", credential: "Doctorant en physique", areas: ["Langues & Sciences"], expertise: ["Physique", "Physique quantique", "Matériaux magnétiques"], image: "/images/faculty/riadh-bez.jpg" },
  { name: "Hager Machouche Zaier", credential: "Docteure en sciences de gestion, marketing", areas: ["Management"], expertise: ["Marketing", "Comportement du consommateur", "Marketing digital"] },
  { name: "Karim Hantous", credential: "Docteur en sciences de gestion", areas: ["Management"], expertise: ["Ressources humaines", "Développement organisationnel", "Ingénierie de formation"] },
  { name: "Mounira Laabidi", credential: "Docteure en technologies de l'information et de la communication", areas: ["Digital & Tech"], expertise: ["Télécommunications", "Réseaux informatiques", "Cybersécurité"] },
  { name: "Slim Laribi", credential: "Expert e-commerce et omnicanal", areas: ["Management", "Digital & Tech"], expertise: ["E-commerce", "Web analytics", "Marketing automation"], image: "/images/faculty/slim-laribi.jpg" },
  { name: "Leila Chams Ben Othman", credential: "Docteure en sciences de gestion, marketing", areas: ["Management"], expertise: ["Marketing", "Comportement du consommateur", "Marketing de la mode"] },
  { name: "Manel Kembi", credential: "Enseignante universitaire d'anglais", areas: ["Langues & Sciences"], expertise: ["Linguistique anglaise", "Business English", "Anglais de spécialité"], image: "/images/faculty/manel-kembi.jpg" },
  { name: "Mouna Gueriri", credential: "Docteure en sciences de gestion, marketing", areas: ["Management"], expertise: ["Marketing", "Comportement du consommateur", "Relation client"] },
  { name: "Seyma Ben Gamra Bouhageb", credential: "Docteure en sciences économiques", areas: ["Management"], expertise: ["Management", "Innovation", "Entrepreneuriat"] },
  { name: "Sirine Chekili", credential: "Docteure en sciences de gestion, finance", areas: ["Finance"], expertise: ["Finance", "Analyse financière", "Gouvernance d'entreprise"] },
];

const areas: (FacultyArea | "Tous")[] = ["Tous", "Management", "Finance", "Digital & Tech", "Langues & Sciences"];

function initials(name: string) {
  return name.split(" ").filter((part) => !["Ben", "de", "en"].includes(part)).slice(0, 2).map((part) => part[0]).join("");
}

export default function CorpsEnseignantPage() {
  const [activeArea, setActiveArea] = useState<FacultyArea | "Tous">("Tous");
  const visibleFaculty = activeArea === "Tous" ? faculty : faculty.filter((member) => member.areas.includes(activeArea));

  return (
    <>
      <section className="relative overflow-hidden pt-40 pb-24">
        <div className="absolute inset-0 z-0">
          <Image src="/images/heroes/hero-corps-enseignant.png" alt="" fill className="object-cover" priority sizes="100vw" />
        </div>
        <div className="absolute inset-0 z-[1] bg-gradient-to-br from-penn-navy/80 via-[#1a2035]/70 to-penn-navy/80" />
        <div className="absolute inset-0 z-[1] opacity-[0.03] bg-[radial-gradient(circle_at_30%_60%,_#2B8FAB_0%,_transparent_50%)]" />

        <div className="relative z-10 mx-auto max-w-[1280px] px-5 lg:px-12">
          <div className="max-w-[760px]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge variant="outline" size="lg" className="mb-8 border-white/20 text-white/80">
                <div className="h-1 w-1 rounded-full bg-penn-green" /> Corps enseignant
              </Badge>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="mb-6 text-[40px] font-extrabold leading-[1.05] tracking-[-1px] text-white md:text-[52px] lg:text-[64px]">
              Des expertises qui font<br /><span className="text-penn-green">grandir les ambitions</span>.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="max-w-[650px] text-[17px] leading-relaxed text-white/70 md:text-[19px]">
              Une communauté d'enseignants, chercheurs et professionnels réunie autour d'une même exigence : transmettre des savoirs solides, concrets et ouverts sur les réalités de demain.
            </motion.p>
          </div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="mt-16 grid grid-cols-3 gap-3 md:max-w-[760px] md:gap-4">
            {[
              { value: "16", label: "Profils présentés" },
              { value: "6", label: "Portraits" },
              { value: "4", label: "Pôles d'expertise" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-center backdrop-blur-sm md:p-5">
                <p className="mb-1 text-[28px] font-extrabold leading-none text-white md:text-[36px]">{stat.value}</p>
                <p className="text-[11px] font-medium text-white/50 md:text-[13px]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }} className="mt-10"><ArrowDown className="mx-auto h-5 w-5 animate-bounce text-white/30" /></motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-penn-green" />
        <div className="mx-auto max-w-[1280px] px-5 lg:px-12">
          <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-[650px]">
              <div className="mb-4 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-penn-green"><Sparkles className="h-4 w-4" /> Annuaire académique</div>
              <h2 className="text-[34px] font-extrabold leading-[1.1] text-penn-navy md:text-[48px]">Une diversité de regards,<br />une même exigence.</h2>
              <p className="mt-5 text-[16px] leading-relaxed text-penn-body">Explorez les domaines d'expertise représentés au sein de notre communauté académique.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {areas.map((area) => (
                <button key={area} type="button" onClick={() => setActiveArea(area)} className={`rounded-full px-4 py-2.5 text-[12px] font-extrabold transition-all ${activeArea === area ? "bg-penn-navy text-white shadow-lg shadow-penn-navy/15" : "border border-penn-border bg-white text-penn-body hover:border-penn-green hover:text-penn-navy"}`}>
                  {area}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {visibleFaculty.map((member, index) => (
              <motion.article key={member.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.4, delay: index * 0.04 }} className="group flex min-h-[370px] flex-col overflow-hidden rounded-2xl border border-penn-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-penn-green/30 hover:shadow-xl">
                <div className="relative aspect-[3/4] overflow-hidden bg-penn-navy">
                  {member.image ? (
                    <Image src={member.image} alt={member.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-[center_10%] object-cover transition-transform duration-500 group-hover:scale-105" style={{ objectPosition: member.objectPosition }} />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(43,143,171,0.55),transparent_45%),linear-gradient(135deg,#111a31,#23385c)] text-[48px] font-extrabold tracking-[-3px] text-white/90">{initials(member.name)}</div>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-penn-navy/60 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-penn-green">{member.areas.join(" · ")}</p>
                  <h3 className="mt-2 text-[20px] font-extrabold leading-tight text-penn-navy">{member.name}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-penn-body">{member.credential}</p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {member.expertise.map((expertise) => <span key={expertise} className="rounded-full bg-penn-bg-light px-2.5 py-1 text-[10px] font-bold text-penn-body">{expertise}</span>)}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-penn-bg-light py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-6 px-5 md:grid-cols-3 lg:px-12">
          {[
            { icon: <GraduationCap className="h-6 w-6" />, title: "Pédagogie exigeante", text: "Des savoirs académiques structurés et actualisés." },
            { icon: <BriefcaseBusiness className="h-6 w-6" />, title: "Ancrage professionnel", text: "Des expertises connectées aux enjeux des organisations." },
            { icon: <BookOpen className="h-6 w-6" />, title: "Approche pluridisciplinaire", text: "Management, finance, technologies, langues et sciences dialoguent." },
          ].map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-penn-border bg-white p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-penn-green/10 text-penn-green">{pillar.icon}</div>
              <h3 className="text-[18px] font-extrabold text-penn-navy">{pillar.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-penn-body">{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaSection title="Vous souhaitez rejoindre notre équipe enseignante ?" subtitle="EBS accueille des enseignants, experts et professionnels passionnés par la transmission et l'innovation pédagogique." primaryCta={{ label: "Nous contacter", href: "/contact" }} background="penn-green" />
    </>
  );
}
