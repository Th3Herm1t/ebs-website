import React from 'react';
import type { ProgrammeData } from '../lib/types';
import {
  EbsHeaderBrand,
  AccreditationBadge,
  BottomContactBar,
  AssetPlaceholder
} from './SharedElements';
import {
  GoogleLogo,
  IbmLogo,
  CiscoLogo,
  HarvardLogo,
  DeepLearningAiLogo,
  FortinetLogo
} from './Logos';
import {
  Code,
  Shield,
  BrainCircuit,
  Terminal,
  Cpu,
  Database,
  Globe,
  Lock,
  Layers,
  Sparkles,
  Award,
  CheckCircle2,
  CheckSquare,
  GraduationCap,
  Laptop,
  Briefcase,
  Users,
  Presentation,
  Compass,
  Zap,
  Network,
  Cloud,
  Smartphone,
  Server,
  ArrowLeftRight,
  Target,
  Search,
  MessageSquareText,
  Lightbulb,
  Radio,
  TrendingUp
} from 'lucide-react';

interface Props {
  data: ProgrammeData;
}

export const LicenceInformatiqueBrochure: React.FC<Props> = () => {
  return (
    <div className="brochure-root licence-informatique-brochure">
      {/* =========================================================================
          PAGE 1 : HIGH-TECH DARK COVER & DOUBLE SPECIALISATION
          ========================================================================= */}
      <section className="page page-1" id="page-1" style={{ backgroundColor: '#070D18', color: '#FFFFFF', position: 'relative' }}>
        <div className="page-inner" style={{ padding: '8mm 10mm', display: 'flex', flexDirection: 'column', gap: '4mm', height: '100%', boxSizing: 'border-box' }}>
          {/* Row 1: Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '16mm', flexShrink: 0 }}>
            <EbsHeaderBrand variant="light" />
            <div style={{
              border: '1px solid #1E3A8A',
              backgroundColor: 'rgba(15, 23, 42, 0.8)',
              padding: '3mm 6mm',
              borderRadius: '6px',
              textAlign: 'right'
            }}>
              <div style={{ fontSize: '8.5pt', fontWeight: 900, color: '#00BCEB', letterSpacing: '0.05em' }}>
                IMAGINEZ. <span style={{ color: '#00BCEB' }}>CODEZ.</span> <span style={{ color: '#FF7A00' }}>INNOVEZ.</span>
              </div>
              <div style={{ fontSize: '6.5pt', color: '#94A3B8', fontWeight: 700 }}>
                CONSTRUISEZ LE NUMÉRIQUE DE DEMAIN.
              </div>
            </div>
          </div>

          {/* Row 2: Hero Section (Left Copy + Right Night Developer Visual) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '7mm', height: '178mm', flexShrink: 0 }}>
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '32pt',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  letterSpacing: '0.04em',
                  lineHeight: 1.05,
                  textTransform: 'uppercase'
                }}>
                  LICENCE
                </h2>
                <h1 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '60pt',
                  fontWeight: 900,
                  color: '#00BCEB',
                  lineHeight: 0.88,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  marginBottom: '3mm'
                }}>
                  INFORMATIQUE
                </h1>

                {/* Subtitle with Orange Bar */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderLeft: '4px solid #FF7A00',
                  paddingLeft: '3.5mm',
                  marginBottom: '4mm'
                }}>
                  <div style={{ fontSize: '11pt', fontWeight: 900, color: '#FFFFFF', textTransform: 'uppercase' }}>
                    GÉNIE LOGICIEL & SYSTÈMES D’INFORMATION
                  </div>
                </div>

                <div style={{ fontSize: '7.8pt', fontWeight: 800, color: '#00BCEB', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '2.5mm' }}>
                  DEUX OPTIONS POUR CONSTRUIRE VOTRE SPÉCIALISATION
                </div>

                {/* Dual Glowing Specialisation Badges */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5mm', marginBottom: '4mm' }}>
                  <div style={{
                    backgroundColor: 'rgba(0, 188, 235, 0.12)',
                    border: '1.5px solid #00BCEB',
                    borderRadius: '8px',
                    padding: '3mm',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    boxShadow: '0 0 15px rgba(0, 188, 235, 0.25)'
                  }}>
                    <BrainCircuit size={28} color="#00BCEB" style={{ marginBottom: '1.5mm' }} />
                    <span style={{ fontSize: '7.5pt', fontWeight: 900, color: '#00BCEB' }}>INTELLIGENCE ARTIFICIELLE</span>
                  </div>

                  <div style={{
                    backgroundColor: 'rgba(255, 122, 0, 0.12)',
                    border: '1.5px solid #FF7A00',
                    borderRadius: '8px',
                    padding: '3mm',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    boxShadow: '0 0 15px rgba(255, 122, 0, 0.25)'
                  }}>
                    <Lock size={28} color="#FF7A00" style={{ marginBottom: '1.5mm' }} />
                    <span style={{ fontSize: '7.5pt', fontWeight: 900, color: '#FF7A00' }}>CYBERSÉCURITÉ</span>
                  </div>
                </div>
              </div>

              {/* Editorial Description Box */}
              <div style={{
                backgroundColor: 'rgba(15, 23, 42, 0.75)',
                border: '1px solid #1E3A8A',
                borderLeft: '4px solid #00BCEB',
                padding: '4.5mm 5.5mm',
                borderRadius: '0 8px 8px 0'
              }}>
                <p style={{ fontSize: '8.8pt', color: '#CBD5E1', lineHeight: 1.55, textAlign: 'justify', marginBottom: '2.5mm' }}>
                  Une formation complète pour concevoir des solutions logicielles performantes, intelligentes et sécurisées, et construire votre expertise dans les métiers du numérique de demain. Alliant algorithmique avancée, génie logiciel moderne et certifications Harvard & Cisco.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2mm', fontSize: '7.5pt', fontWeight: 800, color: '#00BCEB' }}>
                  <div>✓ Socle algorithmique & Cloud</div>
                  <div>✓ Harvard CS50 & Fortinet</div>
                  <div>✓ Double Cursus EPITECH / EPSI</div>
                  <div>✓ Projets Live en Coding Lab</div>
                </div>
              </div>
            </div>

            {/* Right Column: Tall Night Developer Visual */}
            <div style={{ height: '100%', width: '100%' }}>
              <AssetPlaceholder
                label="Visuel Tech / Night Developer"
                sublabel="Développeur avec réseau neuronal 3D et hologrammes de sécurité"
                height="100%"
              />
            </div>
          </div>

          {/* Row 3: Bottom 4 Value Pillars */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '3mm',
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            border: '1px solid #1E3A8A',
            borderRadius: '6px',
            padding: '3.5mm 3mm',
            textAlign: 'center',
            height: '24mm',
            boxSizing: 'border-box',
            alignItems: 'center',
            flexShrink: 0
          }}>
            <div>
              <GraduationCap size={22} color="#00BCEB" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '7.8pt', fontWeight: 900, color: '#FFFFFF' }}>BAC+3 3 ANS</div>
            </div>
            <div style={{ borderLeft: '1px solid #334155' }}>
              <Award size={22} color="#00BCEB" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '7.2pt', fontWeight: 900, color: '#FFFFFF' }}>DIPLÔME ACCRÉDITÉ</div>
            </div>
            <div style={{ borderLeft: '1px solid #334155' }}>
              <Globe size={22} color="#00BCEB" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '7.2pt', fontWeight: 900, color: '#FFFFFF' }}>OUVERTURE INTL</div>
            </div>
            <div style={{ borderLeft: '1px solid #334155' }}>
              <CheckSquare size={22} color="#00BCEB" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '7.2pt', fontWeight: 900, color: '#FFFFFF' }}>CERTIFICATIONS INCLUSES</div>
            </div>
          </div>

          {/* Row 4: Footer */}
          <div style={{ height: '10mm', flexShrink: 0 }}>
            <BottomContactBar slogan="UN PROGRAMME TOURNÉ VERS L'AVENIR" theme="dark" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          PAGE 2 : SOCLE COMMUN (9 MODULES), DUAL SPECIALISATIONS & CERTIFICATIONS
          ========================================================================= */}
      <section className="page page-2" id="page-2" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="page-inner" style={{ padding: '8mm 10mm', display: 'flex', flexDirection: 'column', gap: '3.5mm', height: '100%', boxSizing: 'border-box' }}>
          {/* Row 1: Top Banner */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: '5mm', alignItems: 'center', height: '44mm', flexShrink: 0 }}>
            <div>
              <h3 style={{ fontSize: '8.5pt', fontWeight: 900, color: '#0A1C3E', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                UN PROGRAMME COMPLET POUR MAÎTRISER
              </h3>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20pt',
                fontWeight: 900,
                color: '#0096A6',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase'
              }}>
                LES TECHNOLOGIES DU NUMÉRIQUE
              </h2>
              <div style={{ width: '32mm', height: '3.5px', backgroundColor: '#0096A6', margin: '1mm 0 2mm 0' }} />
              <p style={{ fontSize: '7.5pt', color: '#475569', lineHeight: 1.35 }}>
                Le programme est structuré autour des principaux modules de formation suivants, répartis progressivement sur les six semestres de la Licence.
              </p>
            </div>

            {/* Cyber chip photo */}
            <div style={{ height: '42mm', width: '100%' }}>
              <AssetPlaceholder label="Carte Mère & Cloud 3D" sublabel="Composants haute technologie & puces IA" height="100%" />
            </div>
          </div>

          {/* Row 2: Socle Commun (9 Modules in 2 Rows) */}
          <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '2.5mm 3.5mm', height: '62mm', boxSizing: 'border-box', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5mm' }}>
              <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', fontSize: '7.2pt', fontWeight: 900, padding: '1.5mm 8px', borderRadius: '4px' }}>
                1. SOCLE COMMUN
              </div>
              <div style={{ fontSize: '6.8pt', color: '#64748B', fontWeight: 700 }}>
                Des compétences fondamentales solides pour construire votre expertise en informatique.
              </div>
            </div>

            {/* 9 Modules Grid: Row 1 has 5 modules, Row 2 has 4 modules */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2mm', textAlign: 'center' }}>
              {[
                { id: 1, title: 'Programmation & Algorithmique', desc: 'Maîtriser la programmation et la logique.', icon: Code },
                { id: 2, title: 'Développement Web', desc: 'Applications web modernes et dynamiques.', icon: Globe },
                { id: 3, title: 'Bases de données', desc: 'Concevoir et gérer des bases relationnelles et NoSQL.', icon: Database },
                { id: 4, title: 'Génie logiciel', desc: 'Concevoir des architectures logicielles robustes.', icon: Cpu },
                { id: 5, title: 'Systèmes d’information', desc: 'Comprendre et piloter les systèmes d’entreprise.', icon: Server }
              ].map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.id} style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '4px', padding: '1.5mm 1mm' }}>
                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#0096A6', color: '#FFF', fontSize: '6.5pt', fontWeight: 900, margin: '0 auto 1mm auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {m.id}
                    </div>
                    <Icon size={14} color="#0096A6" style={{ margin: '0 auto 0.5mm auto' }} />
                    <div style={{ fontSize: '6pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15 }}>{m.title}</div>
                    <div style={{ fontSize: '5pt', color: '#64748B', lineHeight: 1.15, marginTop: '0.5mm' }}>{m.desc}</div>
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2mm', textAlign: 'center' }}>
              {[
                { id: 6, title: 'Réseaux & Systèmes', desc: 'Administrer et sécuriser les réseaux.', icon: Network },
                { id: 7, title: 'Développement Mobile', desc: 'Applications mobiles iOS et Android natives.', icon: Smartphone },
                { id: 8, title: 'Cloud & Technologies Web', desc: 'Exploiter le Cloud AWS et architectures conteneurisées.', icon: Cloud },
                { id: 9, title: 'Data & IA', desc: 'Découvrir la Data Science et le Machine Learning.', icon: BrainCircuit }
              ].map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.id} style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '4px', padding: '1.5mm 1mm' }}>
                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#0096A6', color: '#FFF', fontSize: '6.5pt', fontWeight: 900, margin: '0 auto 1mm auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {m.id}
                    </div>
                    <Icon size={14} color="#0096A6" style={{ margin: '0 auto 0.5mm auto' }} />
                    <div style={{ fontSize: '6pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15 }}>{m.title}</div>
                    <div style={{ fontSize: '5pt', color: '#64748B', lineHeight: 1.15, marginTop: '0.5mm' }}>{m.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 3: Dual Specialisations with Central Arrow */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 24mm 1fr', gap: '3mm', height: '62mm', alignItems: 'stretch', flexShrink: 0 }}>
            {/* Left: IA Option */}
            <div style={{ backgroundColor: '#F0FDF4', border: '1.5px solid #0096A6', borderRadius: '6px', padding: '2.5mm 3.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1mm' }}>
                <BrainCircuit size={18} color="#0096A6" />
                <div>
                  <div style={{ fontSize: '6pt', fontWeight: 900, color: '#0096A6', textTransform: 'uppercase' }}>OPTION</div>
                  <div style={{ fontSize: '7.8pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase' }}>INTELLIGENCE ARTIFICIELLE</div>
                </div>
              </div>
              <div style={{ fontSize: '5.8pt', color: '#475569', marginBottom: '1mm' }}>Devenez acteur de l’innovation grâce au Machine Learning :</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1mm', fontSize: '5.6pt', color: '#1E293B', fontWeight: 700 }}>
                <div>• IA avancée & algorithmes</div>
                <div>• NLP & Prompt Eng.</div>
                <div>• Mathématiques pour l'IA</div>
                <div>• Vision par ordinateur</div>
                <div>• Machine Learning & DL</div>
                <div>• Big Data & Data Mining</div>
                <div>• Deep Learning avancé</div>
                <div>• LLM & IA générative</div>
              </div>
            </div>

            {/* Center Selector Badge */}
            <div style={{
              backgroundColor: '#0A1C3E',
              color: '#FFF',
              borderRadius: '6px',
              padding: '2mm',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
              <ArrowLeftRight size={18} color="#00BCEB" style={{ marginBottom: '1.5mm' }} />
              <div style={{ fontSize: '5.2pt', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.2 }}>
                CHOISISSEZ VOTRE SPÉCIALISATION S3
              </div>
            </div>

            {/* Right: Cybersécurité Option */}
            <div style={{ backgroundColor: '#FFF7ED', border: '1.5px solid #FF7A00', borderRadius: '6px', padding: '2.5mm 3.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1mm' }}>
                <Shield size={18} color="#FF7A00" />
                <div>
                  <div style={{ fontSize: '6pt', fontWeight: 900, color: '#FF7A00', textTransform: 'uppercase' }}>OPTION</div>
                  <div style={{ fontSize: '7.8pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase' }}>CYBERSÉCURITÉ</div>
                </div>
              </div>
              <div style={{ fontSize: '5.8pt', color: '#475569', marginBottom: '1mm' }}>Protégez les systèmes et les données critiques :</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1mm', fontSize: '5.6pt', color: '#1E293B', fontWeight: 700 }}>
                <div>• Fondamentaux sécurité</div>
                <div>• Sécurité systèmes admin</div>
                <div>• Réseaux & protocoles</div>
                <div>• Tests d'intrusion / Pentest</div>
                <div>• Cryptographie appliquée</div>
                <div>• Analyse forensique</div>
                <div>• Sécurité applications web</div>
                <div>• Cloud & DevSecOps</div>
              </div>
            </div>
          </div>

          {/* Row 4: Certifications Incluses (Left) vs Pratique & Stage (Right) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: '4.5mm', height: '58mm', flexShrink: 0 }}>
            {/* Left: 10 Certifications */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '2.5mm 3.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E' }}>CERTIFICATIONS INCLUSES</span>
                <span style={{ fontSize: '6pt', fontWeight: 800, color: '#0096A6', backgroundColor: '#E0F2FE', padding: '1.5px 5px', borderRadius: '3px' }}>OFFERTES</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5mm', textAlign: 'center' }}>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <HarvardLogo style={{ height: '9mm', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', fontWeight: 800 }}>CS50 Python</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <DeepLearningAiLogo style={{ height: '9mm', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', fontWeight: 800 }}>ML Spec</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <HarvardLogo style={{ height: '9mm', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', fontWeight: 800 }}>CS50 Cyber</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <CiscoLogo style={{ height: '9mm', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', fontWeight: 800 }}>Cyber Essentials</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <CiscoLogo style={{ height: '9mm', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', fontWeight: 800 }}>Linux Essentials</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <HarvardLogo style={{ height: '9mm', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', fontWeight: 800 }}>CS50 SQL</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <DeepLearningAiLogo style={{ height: '9mm', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', fontWeight: 800 }}>Math for ML</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <IbmLogo style={{ height: '9mm', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', fontWeight: 800 }}>Python Data & IA</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <FortinetLogo style={{ height: '9mm', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', fontWeight: 800 }}>Fortinet FCF</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <GoogleLogo style={{ height: '9mm', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', fontWeight: 800 }}>Google Prompting</div>
                </div>
              </div>
            </div>

            {/* Right: Pratique & Stage */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '2.5mm 3.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase' }}>
                PRATIQUE, PROJETS & STAGE EN ENTREPRISE
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2mm', fontSize: '6.2pt', color: '#334155' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Code size={13} color="#0096A6" />
                  <div><strong>Projets concrets :</strong> à chaque semestre pour développer votre portfolio.</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Users size={13} color="#0096A6" />
                  <div><strong>Travail en équipe :</strong> résolution de cas d'entreprise réels.</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Briefcase size={13} color="#0096A6" />
                  <div><strong>Stage de 4 mois :</strong> immersion professionnelle complète.</div>
                </div>
              </div>
              <div style={{ height: '18mm' }}>
                <AssetPlaceholder label="Stage IT & Projets" height="100%" />
              </div>
            </div>
          </div>

          {/* Row 5: Footer */}
          <div style={{ height: '9mm', flexShrink: 0 }}>
            <BottomContactBar slogan="UN PROGRAMME TOURNÉ VERS L'AVENIR" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          PAGE 3 : WHY EBS (6 BLOCKS), DUAL PILLARS (IA & CYBER) & CAREERS DIAGRAM
          ========================================================================= */}
      <section className="page page-3" id="page-3" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="page-inner" style={{ padding: '8mm 10mm', display: 'flex', flexDirection: 'column', gap: '3.5mm', height: '100%', boxSizing: 'border-box' }}>
          {/* Row 1: Top Banner (Left Copy + Right Night Dev Photo) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '5mm', alignItems: 'center', height: '56mm', flexShrink: 0 }}>
            <div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20pt',
                fontWeight: 900,
                color: '#0A1C3E',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase'
              }}>
                POURQUOI CHOISIR <br />
                <span style={{ color: '#0096A6' }}>LA LICENCE INFORMATIQUE DE L’EBS ?</span>
              </h2>
              <div style={{ width: '32mm', height: '3.5px', backgroundColor: '#0096A6', margin: '1mm 0 2mm 0' }} />
              <p style={{ fontSize: '7.2pt', color: '#475569', lineHeight: 1.35, marginBottom: '2mm' }}>
                Une formation de référence qui développe les compétences techniques et les qualités essentielles pour réussir dans les métiers du numérique. L'IA et la Cybersécurité sont au cœur du parcours.
              </p>

              {/* 6 Competency Pills Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5mm', fontSize: '5.8pt' }}>
                <div style={{ backgroundColor: '#F8FAFC', padding: '1.5mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <div style={{ fontWeight: 900, color: '#0096A6' }}>PENSER & RÉSOUDRE</div>
                  <div style={{ color: '#64748B', fontSize: '5pt' }}>Logique et méthode d'analyse.</div>
                </div>
                <div style={{ backgroundColor: '#F8FAFC', padding: '1.5mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <div style={{ fontWeight: 900, color: '#FF7A00' }}>INNOVER & CRÉER</div>
                  <div style={{ color: '#64748B', fontSize: '5pt' }}>Solutions innovantes & tests.</div>
                </div>
                <div style={{ backgroundColor: '#F8FAFC', padding: '1.5mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <div style={{ fontWeight: 900, color: '#0A1C3E' }}>ÊTRE AUTONOME</div>
                  <div style={{ color: '#64748B', fontSize: '5pt' }}>Apprentissage continu.</div>
                </div>
                <div style={{ backgroundColor: '#F8FAFC', padding: '1.5mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <div style={{ fontWeight: 900, color: '#0A1C3E' }}>COLLABORER</div>
                  <div style={{ color: '#64748B', fontSize: '5pt' }}>Travail d'équipe & Git.</div>
                </div>
                <div style={{ backgroundColor: '#F8FAFC', padding: '1.5mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <div style={{ fontWeight: 900, color: '#0096A6' }}>COMMUNIQUER</div>
                  <div style={{ color: '#64748B', fontSize: '5pt' }}>Pitch & valorisation tech.</div>
                </div>
                <div style={{ backgroundColor: '#F8FAFC', padding: '1.5mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <div style={{ fontWeight: 900, color: '#FF7A00' }}>S'OUVRIR AU MONDE</div>
                  <div style={{ color: '#64748B', fontSize: '5pt' }}>Anglais bilingue & mobilité.</div>
                </div>
              </div>
            </div>

            {/* Right Photo */}
            <div style={{ height: '54mm', width: '100%' }}>
              <AssetPlaceholder label="Photo Équipe Développeurs" sublabel="Étudiants codeurs face aux écrans" height="100%" />
            </div>
          </div>

          {/* Row 2: Dual Core Pillars (IA & Cybersécurité) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4.5mm', height: '64mm', flexShrink: 0 }}>
            {/* Pillar IA */}
            <div style={{
              backgroundColor: '#070D18',
              color: '#FFF',
              borderRadius: '6px',
              border: '1.5px solid #00BCEB',
              padding: '3mm 4mm',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BrainCircuit size={24} color="#00BCEB" />
                <div>
                  <div style={{ fontSize: '8pt', fontWeight: 900, color: '#00BCEB' }}>L'INTELLIGENCE ARTIFICIELLE</div>
                  <div style={{ fontSize: '6pt', color: '#94A3B8' }}>UN MOTEUR D'INNOVATION INCONTOURNABLE</div>
                </div>
              </div>
              <p style={{ fontSize: '6.5pt', color: '#CBD5E1', lineHeight: 1.35 }}>
                L'IA transforme tous les secteurs. À EBS, elle est intégrée au cœur du cursus pour vous permettre de concevoir et déployer des modèles d'IA générative et de deep learning.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5mm', textAlign: 'center', fontSize: '5.2pt', fontWeight: 800 }}>
                <div style={{ backgroundColor: 'rgba(0,188,235,0.1)', padding: '1mm', borderRadius: '3px' }}>Concepts IA & ML</div>
                <div style={{ backgroundColor: 'rgba(0,188,235,0.1)', padding: '1mm', borderRadius: '3px' }}>Frameworks modernes</div>
                <div style={{ backgroundColor: 'rgba(0,188,235,0.1)', padding: '1mm', borderRadius: '3px' }}>Projets concrets IA</div>
              </div>
            </div>

            {/* Pillar Cybersécurité */}
            <div style={{
              backgroundColor: '#070D18',
              color: '#FFF',
              borderRadius: '6px',
              border: '1.5px solid #FF7A00',
              padding: '3mm 4mm',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Shield size={24} color="#FF7A00" />
                <div>
                  <div style={{ fontSize: '8pt', fontWeight: 900, color: '#FF7A00' }}>LA CYBERSÉCURITÉ</div>
                  <div style={{ fontSize: '6pt', color: '#94A3B8' }}>UNE PRIORITÉ MONDIALE STRATÉGIQUE</div>
                </div>
              </div>
              <p style={{ fontSize: '6.5pt', color: '#CBD5E1', lineHeight: 1.35 }}>
                Face à la recrudescence des cybermenaces, notre formation vous prépare à auditer, sécuriser et protéger les infrastructures cloud, les réseaux d'entreprise et les données sensibles.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5mm', textAlign: 'center', fontSize: '5.2pt', fontWeight: 800 }}>
                <div style={{ backgroundColor: 'rgba(255,122,0,0.1)', padding: '1mm', borderRadius: '3px' }}>Audit & Vulnérabilités</div>
                <div style={{ backgroundColor: 'rgba(255,122,0,0.1)', padding: '1mm', borderRadius: '3px' }}>Pentesting & Réseaux</div>
                <div style={{ backgroundColor: 'rgba(255,122,0,0.1)', padding: '1mm', borderRadius: '3px' }}>Sécurité Cloud DevSec</div>
              </div>
            </div>
          </div>

          {/* Row 3: Career Radial Outcomes Diagram */}
          <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '3mm 4mm', height: '82mm', boxSizing: 'border-box', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '8.5pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase' }}>
                DÉBOUCHÉS PROFESSIONNELS
              </div>
              <div style={{ fontSize: '6.5pt', color: '#64748B' }}>
                Des métiers d'avenir dans des domaines en pleine expansion internationale :
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1.1fr', gap: '4mm', alignItems: 'center' }}>
              {/* Branch 1: Développement & Génie Logiciel */}
              <div style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm' }}>
                <div style={{ fontSize: '6.8pt', fontWeight: 900, color: '#0096A6', marginBottom: '1.5mm', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.8mm' }}>
                  💻 DÉVELOPPEMENT & GÉNIE LOGICIEL
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1mm', fontSize: '6pt', color: '#1E293B', fontWeight: 700 }}>
                  <div>• Développeur logiciel / applicatif</div>
                  <div>• Développeur Web et Mobile Full-Stack</div>
                  <div>• Ingénieur logiciel junior</div>
                  <div>• Intégrateur de solutions logicielles</div>
                  <div>• Testeur logiciel / QA Automation</div>
                </div>
              </div>

              {/* Center Hub */}
              <div style={{
                backgroundColor: '#0A1C3E',
                color: '#FFF',
                borderRadius: '50%',
                width: '38mm',
                height: '38mm',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                border: '3px solid #00BCEB',
                boxShadow: '0 0 15px rgba(0, 188, 235, 0.3)'
              }}>
                <div style={{ fontSize: '6pt', fontWeight: 800, color: '#00BCEB' }}>VOTRE FUTUR</div>
                <div style={{ fontSize: '7.8pt', fontWeight: 900 }}>DANS LE</div>
                <div style={{ fontSize: '6.8pt', fontWeight: 900, color: '#FF7A00' }}>NUMÉRIQUE</div>
              </div>

              {/* Branch 2 & 3: IA/Data and Cyber */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2mm' }}>
                <div style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2mm' }}>
                  <div style={{ fontSize: '6.5pt', fontWeight: 900, color: '#0096A6', marginBottom: '0.8mm' }}>
                    🧠 IA & DATA
                  </div>
                  <div style={{ fontSize: '5.8pt', color: '#1E293B', fontWeight: 700, lineHeight: 1.25 }}>
                    <div>• Data Engineer Junior</div>
                    <div>• Assistant Machine Learning Engineer</div>
                    <div>• Développeur en Intelligence Artificielle</div>
                  </div>
                </div>

                <div style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2mm' }}>
                  <div style={{ fontSize: '6.5pt', fontWeight: 900, color: '#FF7A00', marginBottom: '0.8mm' }}>
                    🔒 CYBERSÉCURITÉ
                  </div>
                  <div style={{ fontSize: '5.8pt', color: '#1E293B', fontWeight: 700, lineHeight: 1.25 }}>
                    <div>• Analyste cybersécurité junior (SOC)</div>
                    <div>• Administrateur sécurité des systèmes</div>
                    <div>• Consultant cybersécurité junior</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4: Footer */}
          <div style={{ height: '9mm', flexShrink: 0 }}>
            <BottomContactBar slogan="UN PROGRAMME TOURNÉ VERS L'AVENIR" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          PAGE 4 : INTERNATIONAL PATHWAYS (5 PARTNERS) & ACCOMPAGNEMENT
          ========================================================================= */}
      <section className="page page-4" id="page-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="page-inner" style={{ padding: '8mm 10mm', display: 'flex', flexDirection: 'column', gap: '3.5mm', height: '100%', boxSizing: 'border-box' }}>
          {/* Row 1: Top Banner */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5mm', alignItems: 'center', height: '44mm', flexShrink: 0 }}>
            <div>
              <h3 style={{ fontSize: '8.5pt', fontWeight: 900, color: '#0A1C3E', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                L'EXCELLENCE ACADÉMIQUE
              </h3>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20pt',
                fontWeight: 900,
                color: '#0096A6',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase'
              }}>
                AU SERVICE DE VOTRE AVENIR
              </h2>
              <div style={{ width: '32mm', height: '3.5px', backgroundColor: '#0096A6', margin: '1mm 0 2mm 0' }} />
              <p style={{ fontSize: '7.2pt', color: '#475569', lineHeight: 1.35 }}>
                Un parcours structuré et progressif qui vous permet d'acquérir les compétences essentielles pour construire votre avenir tech et réaliser vos ambitions à l'international.
              </p>
            </div>

            {/* Students photo */}
            <div style={{ height: '42mm', width: '100%' }}>
              <AssetPlaceholder label="Photo Développeurs Réunion" sublabel="Deux ingénieurs codeurs en réunion tech" height="100%" />
            </div>
          </div>

          {/* Row 2: 3 Value Pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3mm', height: '24mm', boxSizing: 'border-box', flexShrink: 0 }}>
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '5px', padding: '2mm 2.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.8mm' }}>
                <GraduationCap size={16} color="#0096A6" />
                <span style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E' }}>DIPLÔME</span>
              </div>
              <p style={{ fontSize: '6.2pt', color: '#475569', lineHeight: 1.35 }}>Formation académique d’État alignée sur les standards internationaux.</p>
            </div>
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '5px', padding: '2mm 2.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.8mm' }}>
                <Laptop size={16} color="#0A1C3E" />
                <span style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E' }}>EXPÉRIENCE</span>
              </div>
              <p style={{ fontSize: '6.2pt', color: '#475569', lineHeight: 1.35 }}>Des projets concrets semestriels et stages tech opérationnels.</p>
            </div>
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '5px', padding: '2mm 2.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.8mm' }}>
                <TrendingUp size={16} color="#0096A6" />
                <span style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E' }}>CARRIÈRE</span>
              </div>
              <p style={{ fontSize: '6.2pt', color: '#475569', lineHeight: 1.35 }}>Accompagnement personnalisé vers les ESN, startups et multinationales.</p>
            </div>
          </div>

          {/* Row 3: 5 International Partner Columns (EPITECH, EPSI, REDSUP, UQAT, LINK) */}
          <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '2.5mm 3.5mm', height: '94mm', boxSizing: 'border-box', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '8.5pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase' }}>
                POURSUIVRE D'ÉTUDES À L'INTERNATIONAL
              </div>
              <div style={{ fontSize: '6.2pt', color: '#64748B' }}>
                Grâce à nos partenariats avec des établissements reconnus, poursuivez votre parcours et spécialisez-vous dans des domaines d’avenir.
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2mm' }}>
              {/* Partner 1: EPITECH */}
              <div style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2mm 1.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center' }}>
                <img src="/images/partenaires-academiques/epitech.webp" alt="EPITECH" style={{ height: '7mm', objectFit: 'contain', margin: '0 auto 1mm auto' }} />
                <div style={{ fontSize: '6pt', fontWeight: 900, color: '#0A1C3E' }}>🇫🇷 FRANCE</div>
                <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', fontSize: '5.2pt', fontWeight: 900, padding: '1mm', borderRadius: '3px', margin: '1mm 0' }}>
                  APRÈS LICENCE (BAC+3)
                </div>
                <div style={{ fontSize: '5.5pt', color: '#475569', lineHeight: 1.25 }}>
                  Poursuite en Master (Bac+5)<br />
                  Diplôme reconnu par l'État français • Titre RNCP 7
                </div>
                <div style={{ borderTop: '1px dotted #CBD5E1', paddingTop: '1mm', marginTop: '1mm', fontSize: '5.2pt', color: '#0096A6', fontWeight: 800, textAlign: 'left' }}>
                  Spécialités :<br />• IA & Data<br />• Cybersécurité<br />• Cloud Computing<br />• Dev Logiciel
                </div>
              </div>

              {/* Partner 2: EPSI */}
              <div style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2mm 1.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center' }}>
                <img src="/images/partenaires-academiques/epsi.webp" alt="EPSI" style={{ height: '7mm', objectFit: 'contain', margin: '0 auto 1mm auto' }} />
                <div style={{ fontSize: '6pt', fontWeight: 900, color: '#0A1C3E' }}>🇫🇷 FRANCE</div>
                <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', fontSize: '5.2pt', fontWeight: 900, padding: '1mm', borderRadius: '3px', margin: '1mm 0' }}>
                  APRÈS BAC+2 OU LICENCE
                </div>
                <div style={{ fontSize: '5.5pt', color: '#475569', lineHeight: 1.25 }}>
                  Parcours Expert (Bac+5)<br />
                  Diplôme reconnu par l'État français • Titre RNCP 7
                </div>
                <div style={{ borderTop: '1px dotted #CBD5E1', paddingTop: '1mm', marginTop: '1mm', fontSize: '5.2pt', color: '#0096A6', fontWeight: 800, textAlign: 'left' }}>
                  Domaines :<br />• Développement<br />• Systèmes & Réseaux<br />• IA & Big Data<br />• Cybersécurité
                </div>
              </div>

              {/* Partner 3: REDSUP */}
              <div style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2mm 1.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center' }}>
                <div style={{ height: '7mm', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '8pt', color: '#DC2626' }}>REDSUP</div>
                <div style={{ fontSize: '6pt', fontWeight: 900, color: '#0A1C3E' }}>🇫🇷 FRANCE</div>
                <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', fontSize: '5.2pt', fontWeight: 900, padding: '1mm', borderRadius: '3px', margin: '1mm 0' }}>
                  APRÈS LICENCE (BAC+3)
                </div>
                <div style={{ fontSize: '5.5pt', color: '#475569', lineHeight: 1.25 }}>
                  Mastère Européen IT (Bac+5)<br />
                  Diplôme reconnu par l'État français • Titre RNCP 7
                </div>
                <div style={{ borderTop: '1px dotted #CBD5E1', paddingTop: '1mm', marginTop: '1mm', fontSize: '5.2pt', color: '#0096A6', fontWeight: 800, textAlign: 'left' }}>
                  Domaines :<br />• Cybersécurité<br />• Sécurité informatique<br />• Réseaux<br />• Technologies Info
                </div>
              </div>

              {/* Partner 4: UQAT */}
              <div style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2mm 1.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center' }}>
                <img src="/images/partenaires-academiques/uqat.webp" alt="UQAT" style={{ height: '7mm', objectFit: 'contain', margin: '0 auto 1mm auto' }} />
                <div style={{ fontSize: '6pt', fontWeight: 900, color: '#0A1C3E' }}>🇨🇦 CANADA</div>
                <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', fontSize: '5.2pt', fontWeight: 900, padding: '1mm', borderRadius: '3px', margin: '1mm 0' }}>
                  APRÈS LICENCE (BAC+3)
                </div>
                <div style={{ fontSize: '5.5pt', color: '#475569', lineHeight: 1.25 }}>
                  Poursuite en Maîtrise (Master)<br />
                  Université publique canadienne • Diplôme Bac+5
                </div>
                <div style={{ borderTop: '1px dotted #CBD5E1', paddingTop: '1mm', marginTop: '1mm', fontSize: '5.2pt', color: '#0096A6', fontWeight: 800, textAlign: 'left' }}>
                  Options :<br />• Maîtrise gestion projet (MGP)<br />• Gestion organisations (MGO)<br />• Technologies
                </div>
              </div>

              {/* Partner 5: LINK UNIVERSITY */}
              <div style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2mm 1.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center' }}>
                <img src="/images/partenaires-academiques/link-university.jpeg" alt="Link" style={{ height: '7mm', objectFit: 'contain', margin: '0 auto 1mm auto' }} />
                <div style={{ fontSize: '6pt', fontWeight: 900, color: '#0A1C3E' }}>🇮🇹 ITALIE</div>
                <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', fontSize: '5.2pt', fontWeight: 900, padding: '1mm', borderRadius: '3px', margin: '1mm 0' }}>
                  APRÈS LICENCE (BAC+3)
                </div>
                <div style={{ fontSize: '5.5pt', color: '#475569', lineHeight: 1.25 }}>
                  Possibilité MASTER (Bac+5)<br />
                  MA in Technologies & Communications
                </div>
                <div style={{ borderTop: '1px dotted #CBD5E1', paddingTop: '1mm', marginTop: '1mm', fontSize: '5.2pt', color: '#0096A6', fontWeight: 800, textAlign: 'left' }}>
                  Domaines :<br />• Technologies Info<br />• Comms numériques<br />• Langages & médias<br />• Innovation tech
                </div>
              </div>
            </div>
          </div>

          {/* Row 4: Accompagnement Sur Mesure Banner */}
          <div style={{
            backgroundColor: '#0A1C3E',
            color: '#FFFFFF',
            borderRadius: '6px',
            padding: '2.5mm 4mm',
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: '4mm',
            alignItems: 'center',
            height: '24mm',
            boxSizing: 'border-box',
            flexShrink: 0
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Globe size={24} color="#00BCEB" />
              <div>
                <div style={{ fontSize: '7.8pt', fontWeight: 900, color: '#00BCEB', marginBottom: '0.5mm' }}>
                  UN ACCOMPAGNEMENT SUR MESURE
                </div>
                <div style={{ fontSize: '6.2pt', color: '#CBD5E1', lineHeight: 1.35 }}>
                  ESPIMA Business School vous accompagne à chaque étape : choix du programme, préparation du dossier, démarches administratives et suivi personnalisé pour vos mobilités vers la France, l'Italie et le Canada.
                </div>
              </div>
            </div>

            <div style={{ height: '18mm' }}>
              <AssetPlaceholder label="Photo Accompagnement & Mobilité" height="100%" />
            </div>
          </div>

          {/* Row 5: Footer */}
          <div style={{ height: '9mm', flexShrink: 0 }}>
            <BottomContactBar slogan="VOTRE AVENIR COMMENCE ICI." />
          </div>
        </div>
      </section>
    </div>
  );
};
