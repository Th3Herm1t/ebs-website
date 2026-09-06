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
  PwcLogo,
  BloombergLogo,
  CiscoLogo,
  CitiLogo,
  JPMorganLogo
} from './Logos';
import {
  TrendingUp,
  Search,
  PieChart,
  Landmark,
  Calculator,
  ClipboardCheck,
  Coins,
  UserCheck,
  Award,
  Globe,
  Briefcase,
  Lightbulb,
  Users,
  Presentation,
  Handshake,
  Monitor,
  BrainCircuit,
  MessageSquareText,
  Clock,
  CheckCircle2,
  Rocket,
  BarChart3,
  Target,
  GraduationCap,
  Laptop,
  CheckSquare,
  Shield,
  Layers,
  Settings,
  Sparkles
} from 'lucide-react';

interface Props {
  data: ProgrammeData;
}

export const LicenceFinanceBrochure: React.FC<Props> = () => {
  return (
    <div className="brochure-root licence-finance-brochure">
      {/* =========================================================================
          PAGE 1 : COVER & HIGH-DENSITY MARKETING HERO
          ========================================================================= */}
      <section className="page page-1" id="page-1" style={{ backgroundColor: '#FFFFFF', position: 'relative' }}>
        <div className="page-inner" style={{ padding: '10mm 12mm', display: 'flex', flexDirection: 'column', gap: '5mm', height: '100%', boxSizing: 'border-box' }}>
          {/* Row 1: Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '15mm', flexShrink: 0 }}>
            <EbsHeaderBrand />
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                backgroundColor: '#0096A6',
                color: '#FFFFFF',
                fontWeight: 900,
                fontSize: '9pt',
                padding: '5px 16px',
                borderRadius: '999px',
                letterSpacing: '0.04em'
              }}>
                Licence • Bac+3 • 3 ans
              </div>
              <AccreditationBadge />
            </div>
          </div>

          {/* Row 2: Hero Section (Both columns calibrated to exactly 175mm height) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '8mm', height: '175mm', flexShrink: 0 }}>
            {/* Left Column: Bold Typography & Continuous Dense Body */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4mm', height: '100%' }}>
              <div>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '32pt',
                  fontWeight: 900,
                  color: '#0A1C3E',
                  letterSpacing: '0.04em',
                  lineHeight: 1.05,
                  textTransform: 'uppercase'
                }}>
                  LICENCE EN
                </h2>
                <h1 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '72pt',
                  fontWeight: 900,
                  color: '#0096A6',
                  lineHeight: 0.85,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  marginBottom: '4mm'
                }}>
                  FINANCE
                </h1>
                <div style={{ width: '42mm', height: '5px', backgroundColor: '#0096A6', marginBottom: '4mm', borderRadius: '2px' }} />

                <h3 style={{
                  fontSize: '12.5pt',
                  fontWeight: 800,
                  color: '#0A1C3E',
                  lineHeight: 1.35,
                  textTransform: 'uppercase',
                  marginBottom: '4mm'
                }}>
                  MAÎTRISEZ <span style={{ color: '#0096A6' }}>LA FINANCE, LES DONNÉES</span> ET{' '}
                  <span style={{ color: '#0096A6' }}>L'INTELLIGENCE ARTIFICIELLE</span> POUR ACCOMPAGNER LES DÉCISIONS FINANCIÈRES DE DEMAIN.
                </h3>
              </div>

              {/* Dense Editorial Text Block */}
              <div style={{
                backgroundColor: '#F8FAFC',
                borderLeft: '5px solid #0096A6',
                padding: '6mm 7mm',
                borderRadius: '0 8px 8px 0',
                border: '1.5px solid #E2E8F0',
                borderLeftWidth: '5px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <p style={{ fontSize: '9.5pt', color: '#334155', lineHeight: 1.6, textAlign: 'justify' }}>
                  La Licence en Finance d’EBS prépare des spécialistes de premier plan capables d’évoluer dans les domaines de la finance d’entreprise, de la banque d’affaires, des marchés de capitaux et de la FinTech. Grâce aux certifications internationales Bloomberg (BMC & BFF), à la modélisation sous Python et aux cas réels assistés par l’Intelligence Artificielle, vous développerez une double expertise quantitative et stratégique immédiatement opérationnelle sur les marchés internationaux.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5mm', fontSize: '8.2pt', fontWeight: 800, color: '#0A1C3E', backgroundColor: '#FFF', padding: '3mm', borderRadius: '5px', border: '1px solid #CBD5E1' }}>
                  <div>✓ Analyse financière & diagnostic</div>
                  <div>✓ Modélisation DCF & LBO</div>
                  <div>✓ Terminal Bloomberg en salle</div>
                  <div>✓ Certifications Wall Street incluses</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual (120mm) + 5 Badges (45mm) = 175mm */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3mm', height: '100%' }}>
              <div style={{ height: '124mm', width: '100%' }}>
                <AssetPlaceholder
                  label="Photo / Visuel Hero Finance"
                  sublabel="Analyste financier / Trader & graphiques financiers"
                  height="100%"
                />
              </div>

              {/* 5 Stacked Badges */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8mm', height: '48mm', justifyContent: 'space-between' }}>
                {[
                  { title: 'ANALYSE FINANCIÈRE', icon: TrendingUp },
                  { title: 'DATA ANALYTICS', icon: PieChart },
                  { title: 'INTELLIGENCE ARTIFICIELLE', icon: BrainCircuit },
                  { title: 'MARCHÉS FINANCIERS', icon: Coins },
                  { title: 'GESTION DES RISQUES', icon: Landmark }
                ].map((theme, i) => {
                  const Icon = theme.icon;
                  return (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      backgroundColor: '#0A1C3E',
                      color: '#FFFFFF',
                      padding: '2.2mm 4mm',
                      borderRadius: '5px',
                      borderLeft: '4px solid #00BCEB'
                    }}>
                      <Icon size={16} color="#00BCEB" />
                      <span style={{ fontSize: '8pt', fontWeight: 900, letterSpacing: '0.04em' }}>{theme.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Row 3: Bottom 5 Value Pillars Banner */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '2.5mm',
            backgroundColor: '#F8FAFC',
            border: '1.5px solid #CBD5E1',
            borderRadius: '6px',
            padding: '4mm 3mm',
            textAlign: 'center',
            height: '28mm',
            boxSizing: 'border-box',
            alignItems: 'center',
            flexShrink: 0
          }}>
            <div>
              <TrendingUp size={26} color="#0096A6" style={{ margin: '0 auto 1.5mm auto' }} />
              <div style={{ fontSize: '8pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15 }}>EXPERTISE FINANCIÈRE</div>
            </div>
            <div style={{ borderLeft: '1px solid #CBD5E1' }}>
              <Landmark size={26} color="#0096A6" style={{ margin: '0 auto 1.5mm auto' }} />
              <div style={{ fontSize: '8pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15 }}>DÉCISIONS ÉCLAIRÉES</div>
            </div>
            <div style={{ borderLeft: '1px solid #CBD5E1' }}>
              <Award size={26} color="#0096A6" style={{ margin: '0 auto 1.5mm auto' }} />
              <div style={{ fontSize: '8pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15 }}>CERTIFICATIONS INCLUSES</div>
            </div>
            <div style={{ borderLeft: '1px solid #CBD5E1' }}>
              <Globe size={26} color="#0096A6" style={{ margin: '0 auto 1.5mm auto' }} />
              <div style={{ fontSize: '8pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15 }}>OUVERTURE INTERNATIONALE</div>
            </div>
            <div style={{ borderLeft: '1px solid #CBD5E1' }}>
              <Target size={26} color="#0096A6" style={{ margin: '0 auto 1.5mm auto' }} />
              <div style={{ fontSize: '8pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15 }}>CARRIÈRE D’AVENIR</div>
            </div>
          </div>

          {/* Row 4: Docked Bottom Contact Bar */}
          <div style={{ height: '12mm', flexShrink: 0 }}>
            <BottomContactBar slogan="UN PROGRAMME TOURNÉ VERS L'AVENIR" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          PAGE 2 : CURRICULUM (LEFT) & STAGE (RIGHT), DÉBOUCHÉS & CERTIFICATIONS
          ========================================================================= */}
      <section className="page page-2" id="page-2" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="page-inner" style={{ padding: '8mm 10mm', display: 'flex', flexDirection: 'column', gap: '4mm', height: '100%', boxSizing: 'border-box' }}>
          {/* Row 1: Top Banner (Left Curriculum Title & Paragraph + Right Campus Photo) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: '5mm', alignItems: 'center', height: '48mm', flexShrink: 0 }}>
            <div>
              <h3 style={{ fontSize: '9pt', fontWeight: 900, color: '#0A1C3E', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                UN PROGRAMME COMPLET POUR DEVENIR UN EXPERT DE LA
              </h3>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22pt',
                fontWeight: 900,
                color: '#0096A6',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase'
              }}>
                FINANCE DE DEMAIN
              </h2>
              <div style={{ width: '32mm', height: '3.5px', backgroundColor: '#0096A6', margin: '1mm 0 2mm 0' }} />
              <div style={{ fontSize: '8.5pt', fontWeight: 800, color: '#0A1C3E' }}>
                PROGRAMME SUR 6 SEMESTRES
              </div>
              <p style={{ fontSize: '7.8pt', color: '#475569', lineHeight: 1.4, marginTop: '0.5mm' }}>
                Le programme est structuré autour des principaux modules de formation suivants, répartis progressivement sur les six semestres de la Licence pour vous mener à une maîtrise des domaines essentiels de la finance.
              </p>
            </div>

            {/* Campus photo */}
            <div style={{ height: '46mm', width: '100%' }}>
              <AssetPlaceholder label="Photo Campus EBS" sublabel="Étudiant & Façade Campus EBS" height="100%" />
            </div>
          </div>

          {/* Row 2: Equal-Height Quadrants (Modules Clés vs Stage Professionnel) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '4.5mm', height: '84mm', flexShrink: 0 }}>
            {/* Left: 10 Modules */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '3mm 4mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ backgroundColor: '#0096A6', color: '#FFF', fontSize: '8pt', fontWeight: 900, padding: '1.8mm 6px', borderRadius: '4px', textAlign: 'center', marginBottom: '1.5mm', letterSpacing: '0.04em' }}>
                MODULES CLÉS DE LA LICENCE EN FINANCE
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5mm' }}>
                {[
                  'Comptabilité générale et analytique',
                  'Mathématiques financières, statistiques et économétrie',
                  'Analyse financière et diagnostic d’entreprise',
                  'Marchés financiers et produits d’investissement',
                  'Finance d’entreprise et évaluation (DCF, comparables)',
                  'Contrôle de gestion et reporting financier',
                  'FinTech et finance numérique',
                  'ESG, finance durable et gestion des risques',
                  'Python appliqué à la finance',
                  'Utilisation du Terminal Bloomberg'
                ].map((m, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '7.2pt', borderBottom: i < 9 ? '1px dotted #CBD5E1' : 'none', paddingBottom: '0.6mm' }}>
                    <span style={{ width: '17px', height: '17px', borderRadius: '50%', backgroundColor: '#0096A6', color: '#FFF', fontSize: '6.8pt', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {i + 1}
                    </span>
                    <span style={{ color: '#1E293B', fontWeight: 700 }}>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Stage Professionnel Card with Handshake Photo */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '3.5mm 4mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '7pt', fontWeight: 900, color: '#0096A6', textTransform: 'uppercase' }}>EXPÉRIENCE PROFESSIONNELLE</div>
                <div style={{ fontSize: '9.5pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase', marginBottom: '2mm' }}>STAGE EN ENTREPRISE</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3.5mm', alignItems: 'center' }}>
                <div style={{ fontSize: '7.5pt', color: '#334155', lineHeight: 1.45 }}>
                  <p style={{ marginBottom: '2mm' }}>
                    Le programme inclut un stage obligatoire en entreprise permettant aux étudiants d'acquérir une expérience concrète du monde financier, d'appliquer les concepts d'évaluation d'entreprise et de développer un réseau professionnel actif.
                  </p>
                  <p style={{ fontWeight: 700, color: '#0A1C3E' }}>
                    Opportunité d'insertion directe au sein de banques partenaires et de cabinets d'audit internationaux.
                  </p>
                </div>
                <div style={{ height: '48mm' }}>
                  <AssetPlaceholder label="Photo Stage" sublabel="Immersion pro & poignée de main" height="100%" />
                </div>
              </div>

              <div style={{ backgroundColor: '#E0F2FE', padding: '2mm 3mm', borderRadius: '4px', fontSize: '6.8pt', color: '#0369A1', fontWeight: 700, textAlign: 'center' }}>
                Immersion concrète en banque, cabinet d’audit ou direction financière
              </div>
            </div>
          </div>

          {/* Row 3: Equal-Height Quadrants (Débouchés Professionnels vs Certifications Incluses) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '4.5mm', height: '62mm', flexShrink: 0 }}>
            {/* Left: 8 Career Outcomes */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '3mm 3.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '8pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase' }}>
                DÉBOUCHÉS PROFESSIONNELS
              </div>
              <div style={{ fontSize: '6.5pt', color: '#64748B' }}>
                Les diplômés peuvent évoluer dans une grande variété de métiers :
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2mm', textAlign: 'center' }}>
                {[
                  { title: 'Analyste financier', icon: TrendingUp },
                  { title: 'Chargé d’études', icon: Search },
                  { title: 'Gestionnaire portefeuille', icon: PieChart },
                  { title: 'Conseiller bancaire', icon: Landmark },
                  { title: 'Contrôleur gestion', icon: Calculator },
                  { title: 'Auditeur junior', icon: ClipboardCheck },
                  { title: 'Gestionnaire trésorerie', icon: Coins },
                  { title: 'Entrepreneur financier', icon: UserCheck }
                ].map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <div key={i} style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '4px', padding: '2mm 1mm' }}>
                      <Icon size={15} color="#0096A6" style={{ margin: '0 auto 1mm auto' }} />
                      <div style={{ fontSize: '6pt', fontWeight: 800, color: '#0A1C3E', lineHeight: 1.15 }}>{c.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: 11 Certifications Showcase */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '3mm 3.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '8pt', fontWeight: 900, color: '#0A1C3E' }}>CERTIFICATIONS INCLUSES</span>
                <span style={{ fontSize: '6.5pt', fontWeight: 800, color: '#0096A6', backgroundColor: '#E0F2FE', padding: '1.5px 6px', borderRadius: '3px' }}>OFFERTES</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2mm' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#FFF', padding: '1.8mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <GoogleLogo style={{ height: '13px' }} />
                  <span style={{ fontSize: '6.5pt', fontWeight: 700, color: '#1E293B' }}>Google Prompting</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#FFF', padding: '1.8mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <IbmLogo style={{ height: '12px' }} />
                  <span style={{ fontSize: '6.5pt', fontWeight: 700, color: '#1E293B' }}>Finance & Accounting</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#FFF', padding: '1.8mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <PwcLogo style={{ height: '13px' }} />
                  <span style={{ fontSize: '6.5pt', fontWeight: 700, color: '#1E293B' }}>PwC Outils d’IA</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#FFF', padding: '1.8mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <BloombergLogo style={{ height: '13px' }} />
                  <span style={{ fontSize: '6.5pt', fontWeight: 700, color: '#1E293B' }}>Bloomberg BFF</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#FFF', padding: '1.8mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <CiscoLogo style={{ height: '13px' }} />
                  <span style={{ fontSize: '6.5pt', fontWeight: 700, color: '#1E293B' }}>Cisco AI Resume</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#FFF', padding: '1.8mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <BloombergLogo style={{ height: '13px' }} />
                  <span style={{ fontSize: '6.5pt', fontWeight: 700, color: '#1E293B' }}>Bloomberg BMC</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#FFF', padding: '1.8mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <PwcLogo style={{ height: '13px' }} />
                  <span style={{ fontSize: '6.5pt', fontWeight: 700, color: '#1E293B' }}>PwC Leaders Finance</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#FFF', padding: '1.8mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <CitiLogo style={{ height: '13px' }} />
                  <span style={{ fontSize: '6.5pt', fontWeight: 700, color: '#1E293B' }}>Citi Simulation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#FFF', padding: '1.8mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <CitiLogo style={{ height: '13px' }} />
                  <span style={{ fontSize: '6.5pt', fontWeight: 700, color: '#1E293B' }}>Citi Essentials</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#FFF', padding: '1.8mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <JPMorganLogo style={{ height: '13px' }} />
                  <span style={{ fontSize: '6.5pt', fontWeight: 700, color: '#1E293B' }}>JPMorgan Banking</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4: Formation d'Excellence Banner */}
          <div style={{
            backgroundColor: '#0A1C3E',
            color: '#FFFFFF',
            borderRadius: '6px',
            padding: '2.8mm 4mm',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '4mm',
            alignItems: 'center',
            height: '22mm',
            boxSizing: 'border-box',
            flexShrink: 0
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Lightbulb size={26} color="#00BCEB" />
              <div>
                <div style={{ fontSize: '8pt', fontWeight: 900, color: '#00BCEB' }}>UNE FORMATION D'EXCELLENCE</div>
                <div style={{ fontSize: '6.2pt', color: '#CBD5E1', lineHeight: 1.3 }}>Alliant théorie, pratique et innovation, la Licence en Finance prépare à devenir un acteur clé de la performance économique.</div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5mm', textAlign: 'center', fontSize: '5.8pt', fontWeight: 800, color: '#FFF' }}>
              <div><Users size={15} color="#00BCEB" style={{ margin: '0 auto 0.5mm auto' }} />ENSEIGNANTS EXPERTS</div>
              <div><Presentation size={15} color="#00BCEB" style={{ margin: '0 auto 0.5mm auto' }} />PÉDAGOGIE INTERACTIVE</div>
              <div><Monitor size={15} color="#00BCEB" style={{ margin: '0 auto 0.5mm auto' }} />OUTILS PROS</div>
              <div><Handshake size={15} color="#00BCEB" style={{ margin: '0 auto 0.5mm auto' }} />ACCOMPAGNEMENT</div>
            </div>
          </div>

          {/* Row 5: Footer */}
          <div style={{ height: '10mm', flexShrink: 0 }}>
            <BottomContactBar slogan="L’EXCELLENCE ACADÉMIQUE AU SERVICE DE VOTRE AVENIR" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          PAGE 3 : WHY EBS (LEFT) & SOFT SKILLS (RIGHT), ACTION & AI LEARNING
          ========================================================================= */}
      <section className="page page-3" id="page-3" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="page-inner" style={{ padding: '8mm 10mm', display: 'flex', flexDirection: 'column', gap: '4mm', height: '100%', boxSizing: 'border-box' }}>
          {/* Row 1: Top Banner (Left Title & Paragraph + Right Coins Photo & 5 Pillars) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '5mm', alignItems: 'center', height: '52mm', flexShrink: 0 }}>
            <div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '24pt',
                fontWeight: 900,
                color: '#0A1C3E',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase'
              }}>
                UNE FORMATION QUI <br />
                <span style={{ color: '#0096A6' }}>VOUS DONNE</span> <br />
                UNE LONGUEUR D'AVANCE
              </h2>
              <div style={{ width: '32mm', height: '3.5px', backgroundColor: '#0096A6', margin: '1mm 0 2mm 0' }} />
              <p style={{ fontSize: '8pt', color: '#475569', lineHeight: 1.4 }}>
                La Licence en Finance à l’EBS vous apporte bien plus que des connaissances : elle développe votre rigueur, votre esprit d’analyse et votre capacité à prendre les bonnes décisions dans un environnement financier en constante évolution.
              </p>
            </div>

            {/* Right Photo & Teal 5-Pillar Banner */}
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
              <div style={{ height: '32mm', width: '100%' }}>
                <AssetPlaceholder label="Photo Finance & Coins" sublabel="Investissement & Piliers Finance" height="100%" />
              </div>
              {/* Teal 5-Pillar Strip */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gap: '1mm',
                backgroundColor: '#0096A6',
                color: '#FFF',
                borderRadius: '4px',
                padding: '2mm 1mm',
                textAlign: 'center',
                fontSize: '5.2pt',
                fontWeight: 900,
                lineHeight: 1.15
              }}>
                <div>ANALYSE<br />DÉCISION<br />IMPACT</div>
                <div>COMPRÉHENSION<br />STRATÉGIE<br />PERFORMANCE</div>
                <div>MAÎTRISE<br />RISQUES<br />OPPORTUNITÉS</div>
                <div>EXPERTISE<br />FINANCIÈRE<br />RESPONSABLE</div>
                <div>VISION<br />VALEUR<br />RÉSULTATS</div>
              </div>
            </div>
          </div>

          {/* Row 2: Equal-Height Quadrants (7 Reasons vs 4 Soft Skills) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.08fr 1fr', gap: '4.5mm', height: '120mm', flexShrink: 0 }}>
            {/* Left: 7 Reasons */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '3.5mm 4mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', fontSize: '7.8pt', fontWeight: 900, padding: '2mm 6px', borderRadius: '4px', textAlign: 'center', marginBottom: '1.5mm' }}>
                POURQUOI CHOISIR LA LICENCE EN FINANCE À L'EBS ?
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.6mm' }}>
                {[
                  { title: 'APPROCHE PROFESSIONNALISANTE', desc: 'Des contenus conçus en lien direct avec les réalités du secteur financier et bancaire.', icon: Briefcase },
                  { title: 'ENCADREMENT DE QUALITÉ', desc: 'Des enseignants et intervenants experts, à l’écoute et proches des étudiants.', icon: Users },
                  { title: 'APPRENTISSAGE PAR LA PRATIQUE', desc: 'Mises en situation réelles, études de cas, outils professionnels (Bloomberg).', icon: Settings },
                  { title: 'OUVERTURE & PERSPECTIVES INTERNATIONALES', desc: 'Des partenariats académiques et des passerelles vers des universités de renom.', icon: Globe },
                  { title: 'CERTIFICATIONS INCLUSES', desc: 'Des certifications reconnues pour renforcer votre profil, sans frais supplémentaires.', icon: Award },
                  { title: 'STAGE EN ENTREPRISE', desc: 'Des opportunités de stage pour acquérir une expérience solide et booster votre employabilité.', icon: Handshake },
                  { title: 'PROJETS CONCRETS & CHALLENGE', desc: 'Des projets innovants pour développer esprit d’initiative et créativité.', icon: Lightbulb }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: i < 6 ? '1px dotted #CBD5E1' : 'none', paddingBottom: '0.8mm' }}>
                      <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#0096A6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={12} color="#FFF" />
                      </div>
                      <div>
                        <div style={{ fontSize: '7pt', fontWeight: 900, color: '#0A1C3E' }}>{item.title}</div>
                        <div style={{ fontSize: '6.2pt', color: '#475569', lineHeight: 1.25 }}>{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: 4 Soft Skills */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '3.5mm 4mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', fontSize: '7.8pt', fontWeight: 900, padding: '2mm 6px', borderRadius: '4px', textAlign: 'center', marginBottom: '1.5mm' }}>
                COMPÉTENCES TRANSVERSALES DÉVELOPPÉES
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5mm' }}>
                {[
                  {
                    title: 'Esprit critique et capacité de décision',
                    desc: 'Évaluer les situations financières complexes, anticiper les risques de marché et choisir la meilleure option d’investissement.'
                  },
                  {
                    title: 'Communication efficace & pitch financier',
                    desc: 'S’exprimer clairement à l’oral et à l’écrit, structurer des notes de synthèse et convaincre des investisseurs institutionnels.'
                  },
                  {
                    title: 'Gestion du temps et des priorités',
                    desc: 'Planifier, prioriser et optimiser son organisation pour performer avec rigueur dans l’urgence des clôtures financières.'
                  },
                  {
                    title: 'Compétences linguistiques : Anglais & Français',
                    desc: 'Maîtrise bilingue intégrale de la finance internationale avec préparation et passage des certifications officielles TOEFL & TCF.'
                  }
                ].map((s, idx) => (
                  <div key={idx} style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.8mm 3.2mm' }}>
                    <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0096A6', marginBottom: '0.6mm' }}>{s.title}</div>
                    <div style={{ fontSize: '6.5pt', color: '#475569', lineHeight: 1.35 }}>{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 3: 6-Step Action Pedagogy Strip */}
          <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '2.8mm 3.5mm', height: '26mm', boxSizing: 'border-box', flexShrink: 0 }}>
            <div style={{ textAlign: 'center', fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase', marginBottom: '1.2mm' }}>
              UNE PÉDAGOGIE TOURNÉE VERS L’ACTION
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '2mm', textAlign: 'center' }}>
              {[
                { title: 'Cours interactifs', icon: Presentation },
                { title: 'Travaux collaboratifs', icon: Users },
                { title: 'Études de cas réelles', icon: BarChart3 },
                { title: 'Projets d’entreprise', icon: Briefcase },
                { title: 'Évaluations continues', icon: CheckSquare },
                { title: 'Accompagnement sur-mesure', icon: UserCheck }
              ].map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <div key={idx} style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '4px', padding: '1.6mm 1mm' }}>
                    <StepIcon size={15} color="#0096A6" style={{ margin: '0 auto 0.6mm auto' }} />
                    <div style={{ fontSize: '6pt', fontWeight: 800, color: '#0A1C3E' }}>{step.title}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 4: AI Learning Callout */}
          <div style={{
            backgroundColor: '#0A1C3E',
            color: '#FFFFFF',
            borderRadius: '6px',
            padding: '2.8mm 4mm',
            display: 'grid',
            gridTemplateColumns: '26mm 1.3fr 1fr',
            gap: '3.5mm',
            alignItems: 'center',
            height: '24mm',
            boxSizing: 'border-box',
            flexShrink: 0
          }}>
            <div style={{ height: '19mm' }}>
              <AssetPlaceholder label="AI Graphic" height="100%" />
            </div>
            <div>
              <div style={{ fontSize: '7.8pt', fontWeight: 900, color: '#00BCEB', marginBottom: '1mm' }}>
                L'IA AU SERVICE DE VOTRE APPRENTISSAGE
              </div>
              <div style={{ fontSize: '6.2pt', color: '#CBD5E1', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8mm' }}>
                <div>✓ Outils intelligents d'apprentissage</div>
                <div>✓ Analyse de données & décision</div>
                <div>✓ Cas pratiques augmentés par l'IA</div>
                <div>✓ Compétences FinTech clés</div>
              </div>
            </div>
            <div style={{ backgroundColor: '#0096A6', padding: '2.2mm', borderRadius: '4px', textAlign: 'center', fontSize: '6.8pt', fontWeight: 900, lineHeight: 1.3 }}>
              L'IA N'EST PAS UN REMPLACEMENT, C'EST UN ACCÉLÉRATEUR DE VOTRE POTENTIEL ET DE VOTRE RÉUSSITE.
            </div>
          </div>

          {/* Row 5: Footer */}
          <div style={{ height: '10mm', flexShrink: 0 }}>
            <BottomContactBar slogan="L’EXCELLENCE ACADÉMIQUE AU SERVICE DE VOTRE AVENIR" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          PAGE 4 : INTERNATIONAL PATHWAYS, ACADEMIC PARTNERS & CORPORATE GRID
          ========================================================================= */}
      <section className="page page-4" id="page-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="page-inner" style={{ padding: '8mm 10mm', display: 'flex', flexDirection: 'column', gap: '4mm', height: '100%', boxSizing: 'border-box' }}>
          {/* Row 1: Top Banner (Left Title & Paragraph + Right Collaborative Students Photo) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5mm', alignItems: 'center', height: '48mm', flexShrink: 0 }}>
            <div>
              <h3 style={{ fontSize: '9pt', fontWeight: 900, color: '#0A1C3E', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                L'EXCELLENCE ACADÉMIQUE
              </h3>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22pt',
                fontWeight: 900,
                color: '#0096A6',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase'
              }}>
                AU SERVICE DE VOTRE AVENIR
              </h2>
              <div style={{ width: '32mm', height: '3.5px', backgroundColor: '#0096A6', margin: '1mm 0 2mm 0' }} />
              <p style={{ fontSize: '7.8pt', color: '#475569', lineHeight: 1.4 }}>
                Un parcours structuré et progressif qui vous permet d'acquérir les compétences essentielles pour construire votre avenir et réaliser vos ambitions internationales.
              </p>
            </div>

            {/* Students photo */}
            <div style={{ height: '46mm', width: '100%' }}>
              <AssetPlaceholder label="Photo Étudiantes Réunion" sublabel="Collaboration & Travail d'équipe" height="100%" />
            </div>
          </div>

          {/* Row 2: 3 Value Pillars (Diplôme, Expérience, Carrière) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3.5mm', height: '26mm', boxSizing: 'border-box', flexShrink: 0 }}>
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 3mm', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.8mm' }}>
                <GraduationCap size={17} color="#0096A6" />
                <span style={{ fontSize: '7.8pt', fontWeight: 900, color: '#0A1C3E' }}>DIPLÔME</span>
              </div>
              <p style={{ fontSize: '6.5pt', color: '#475569', lineHeight: 1.35 }}>Une formation académique reconnue et alignée sur les exigences du monde financier.</p>
            </div>
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 3mm', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.8mm' }}>
                <Laptop size={17} color="#0A1C3E" />
                <span style={{ fontSize: '7.8pt', fontWeight: 900, color: '#0A1C3E' }}>EXPÉRIENCE</span>
              </div>
              <p style={{ fontSize: '6.5pt', color: '#475569', lineHeight: 1.35 }}>Des projets concrets, des simulations Bloomberg et des stages qui développent vos compétences.</p>
            </div>
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 3mm', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.8mm' }}>
                <TrendingUp size={17} color="#0096A6" />
                <span style={{ fontSize: '7.8pt', fontWeight: 900, color: '#0A1C3E' }}>CARRIÈRE</span>
              </div>
              <p style={{ fontSize: '6.5pt', color: '#475569', lineHeight: 1.35 }}>Un accompagnement personnalisé pour vous aider à réussir votre insertion dans les banques et cabinets.</p>
            </div>
          </div>

          {/* Row 3: 3 International Pathways with Landmark Photos */}
          <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '3mm 4mm', height: '70mm', boxSizing: 'border-box', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '8pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase', textAlign: 'center' }}>
              3 PARCOURS POUR POURSUIVRE VOS ÉTUDES À L’INTERNATIONAL
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2mm' }}>
              {/* Pathway 1 */}
              <div style={{ display: 'grid', gridTemplateColumns: '26mm 1fr', gap: '3.5mm', alignItems: 'center', backgroundColor: '#FFF', padding: '2mm 3mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                <AssetPlaceholder label="Rome" height="14mm" />
                <div>
                  <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E' }}>
                    <span style={{ color: '#0096A6' }}>01.</span> 1 an à EBS + Bachelor 2 en Italie | Link University – Rome
                  </div>
                  <p style={{ fontSize: '6.2pt', color: '#64748B', lineHeight: 1.25 }}>Après validation de la 1ʳᵉ année à EBS, possibilité de poursuivre en 2ᵉ année de Bachelor en Italie.</p>
                </div>
              </div>

              {/* Pathway 2 */}
              <div style={{ display: 'grid', gridTemplateColumns: '26mm 1fr', gap: '3.5mm', alignItems: 'center', backgroundColor: '#FFF', padding: '2mm 3mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                <AssetPlaceholder label="Paris" height="14mm" />
                <div>
                  <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E' }}>
                    <span style={{ color: '#0096A6' }}>02.</span> 2 ans à EBS + Bachelor 3 à l’international | Italie ou France
                  </div>
                  <p style={{ fontSize: '6.2pt', color: '#64748B', lineHeight: 1.25 }}>Après 2 années validées à EBS, intégration en 3ᵉ année auprès de nos établissements partenaires.</p>
                </div>
              </div>

              {/* Pathway 3 */}
              <div style={{ display: 'grid', gridTemplateColumns: '26mm 1fr', gap: '3.5mm', alignItems: 'center', backgroundColor: '#FFF', padding: '2mm 3mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                <AssetPlaceholder label="Canada" height="14mm" />
                <div>
                  <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E' }}>
                    <span style={{ color: '#0096A6' }}>03.</span> Licence à EBS + Master à l’international | France • Canada • Italie
                  </div>
                  <p style={{ fontSize: '6.2pt', color: '#64748B', lineHeight: 1.25 }}>Accès direct aux Masters Grande École, MSc et cursus Bac+5 (UQAT, Excelia, PSB, EM Normandie, etc.).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4: Academic Partners Section (12 Genuine Logos) */}
          <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '2mm 3mm', height: '28mm', boxSizing: 'border-box', flexShrink: 0 }}>
            <div style={{ textAlign: 'center', fontSize: '7.2pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase', marginBottom: '1.2mm' }}>
              NOS PARTENAIRES ACADÉMIQUES INTERNATIONAUX (12 ÉCOLES & UNIVERSITÉS)
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '2mm', alignItems: 'center' }}>
              <div style={{ height: '9.5mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/uqat.webp" alt="UQAT" style={{ maxHeight: '9mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '9.5mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/link-university.jpeg" alt="Link" style={{ maxHeight: '9mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '9.5mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/epitech.webp" alt="EPITECH" style={{ maxHeight: '9mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '9.5mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/psb.webp" alt="PSB" style={{ maxHeight: '9mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '9.5mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/eklore.webp" alt="éklore" style={{ maxHeight: '9mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '9.5mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/excelia.webp" alt="Excelia" style={{ maxHeight: '9mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
            </div>
          </div>

          {/* Row 5: Corporate Partners Section */}
          <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '2mm 3mm', height: '26mm', boxSizing: 'border-box', flexShrink: 0 }}>
            <div style={{ textAlign: 'center', fontSize: '7.2pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase', marginBottom: '1.2mm' }}>
              NOS PARTENAIRES ENTREPRISES & RECRUTEMENT
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '2mm', alignItems: 'center' }}>
              <div style={{ height: '9mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires/satem.webp" alt="Satem" style={{ maxHeight: '8.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '9mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires/yperyon.webp" alt="Yperyon" style={{ maxHeight: '8.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '9mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires/arforghe.webp" alt="ARFORGHE" style={{ maxHeight: '8.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '9mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires/asteelflash.webp" alt="AsteelFlash" style={{ maxHeight: '8.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '9mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires/cayon.webp" alt="Cayon Cloud" style={{ maxHeight: '8.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '9mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires/medianet.webp" alt="Médianet" style={{ maxHeight: '8.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
            </div>
          </div>

          {/* Row 6: Bottom Action & Canonical QR Code Box */}
          <div style={{
            backgroundColor: '#0A1C3E',
            color: '#FFFFFF',
            borderRadius: '6px',
            padding: '2.5mm 4.5mm',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '24mm',
            boxSizing: 'border-box',
            flexShrink: 0
          }}>
            <div>
              <div style={{ fontSize: '8.5pt', fontWeight: 900, color: '#00BCEB', marginBottom: '0.5mm' }}>
                PRÊT À REJOINDRE L'EBS ?
              </div>
              <div style={{ fontSize: '6.5pt', color: '#CBD5E1', lineHeight: 1.35 }}>
                <div>📞 +216 71 18 26 25 | ✉️ info@ebs.tn</div>
                <div>📍 Les Berges du Lac 3 - Tunis, Tunisie | 🌐 www.ebs.tn</div>
              </div>
            </div>

            {/* Canonical QR code */}
            <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '4px', textAlign: 'center' }}>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https%3A%2F%2Febs.tn%2Flicences%2Ffinance"
                alt="QR Code Licence Finance"
                style={{ width: '13mm', height: '13mm' }}
              />
              <div style={{ fontSize: '4.5pt', fontWeight: 900, color: '#0A1C3E', marginTop: '0.4mm' }}>SCAN TO APPLY</div>
            </div>
          </div>

          {/* Row 7: Docked Footer */}
          <div style={{ height: '10mm', flexShrink: 0 }}>
            <BottomContactBar slogan="VOTRE AVENIR COMMENCE ICI." />
          </div>
        </div>
      </section>
    </div>
  );
};
