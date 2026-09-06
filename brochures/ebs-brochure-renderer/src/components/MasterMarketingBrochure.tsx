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
  HubspotLogo,
  MetaLogo,
  LinkedinLogo
} from './Logos';
import {
  Sparkles,
  BrainCircuit,
  Megaphone,
  Search,
  BarChart3,
  TrendingUp,
  Award,
  Globe,
  Users,
  Briefcase,
  Laptop,
  CheckSquare,
  UserCheck,
  GraduationCap,
  Target,
  Zap,
  Layers,
  Repeat,
  Share2,
  Cpu,
  Bot,
  QrCode,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Gem,
  ShoppingCart,
  Compass,
  Rocket
} from 'lucide-react';

interface Props {
  data: ProgrammeData;
}

export const MasterMarketingBrochure: React.FC<Props> = () => {
  return (
    <div className="brochure-root master-marketing-brochure">
      {/* =========================================================================
          PAGE 1 : COVER & HIGH-DENSITY AI MARKETING HERO
          ========================================================================= */}
      <section className="page page-1" id="page-1" style={{ backgroundColor: '#FFFFFF', position: 'relative' }}>
        <div className="page-inner" style={{ padding: '8mm 10mm', display: 'flex', flexDirection: 'column', gap: '3.5mm', height: '100%', boxSizing: 'border-box' }}>
          {/* Row 1: Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '15mm', flexShrink: 0 }}>
            <EbsHeaderBrand />
            <div style={{
              backgroundColor: '#0A1C3E',
              color: '#FFFFFF',
              fontWeight: 900,
              fontSize: '8.5pt',
              padding: '4px 14px',
              borderRadius: '999px',
              letterSpacing: '0.04em'
            }}>
              Master • Bac+5 • 2 ans
            </div>
          </div>

          {/* Row 2: Hero Section (Split Left AI Visual vs Right Copy & Campus) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '6mm', height: '180mm', flexShrink: 0 }}>
            {/* Left Column: AI Neural Visual with Inset Pill */}
            <div style={{ position: 'relative', height: '100%' }}>
              <AssetPlaceholder
                label="Visuel Profil IA 3D"
                sublabel="Profil féminin haute technologie avec nœuds neuronaux et texte AI"
                height="100%"
              />
              <div style={{
                position: 'absolute',
                bottom: '8mm',
                left: '6mm',
                backgroundColor: 'rgba(10, 28, 62, 0.92)',
                color: '#FFF',
                padding: '3mm 5mm',
                borderRadius: '6px',
                border: '1px solid #0070F3'
              }}>
                <div style={{ fontSize: '14pt', fontWeight: 900, color: '#00BCEB', lineHeight: 1 }}>AI</div>
                <div style={{ fontSize: '6pt', fontWeight: 800, color: '#CBD5E1', letterSpacing: '0.05em' }}>
                  INNOVER • ANALYSER • CRÉER • TRANSFORMER
                </div>
              </div>
            </div>

            {/* Right Column: Copy, Campus & Accreditation */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '24pt',
                  fontWeight: 900,
                  color: '#0A1C3E',
                  letterSpacing: '0.04em',
                  lineHeight: 1.05,
                  textTransform: 'uppercase'
                }}>
                  MASTER
                </h2>
                <h1 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '22pt',
                  fontWeight: 900,
                  color: '#0070F3',
                  lineHeight: 1.05,
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                  marginBottom: '2mm'
                }}>
                  EN MARKETING DIGITAL <br />
                  & INTELLIGENCE ARTIFICIELLE
                </h1>
                <div style={{ width: '38mm', height: '4px', backgroundColor: '#0070F3', marginBottom: '3mm', borderRadius: '2px' }} />

                <h3 style={{
                  fontSize: '10.5pt',
                  fontWeight: 800,
                  color: '#0A1C3E',
                  lineHeight: 1.35,
                  textTransform: 'uppercase',
                  marginBottom: '3mm'
                }}>
                  PRÉPAREZ-VOUS À DEVENIR UN LEADER DU <span style={{ color: '#0070F3' }}>MARKETING DIGITAL</span> AVEC UNE EXPERTISE EN{' '}
                  <span style={{ color: '#0070F3' }}>INTELLIGENCE ARTIFICIELLE</span>.
                </h3>

                <p style={{ fontSize: '8pt', color: '#475569', lineHeight: 1.45, marginBottom: '3mm' }}>
                  Ce Master d'excellence de l'ESPIMA Business School offre une formation innovante et complète. Destiné aux étudiants ambitieux, il prépare les futurs professionnels à exceller dans la gestion de projet numérique et l'application de l'IA au marketing stratégique et opérationnel.
                </p>
              </div>

              {/* Campus photo + Accreditation */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2mm' }}>
                <div style={{ height: '44mm', width: '100%' }}>
                  <AssetPlaceholder label="Photo Campus & 4 Étudiants" sublabel="Étudiants souriants devant EBS avec texte 'Des talents tournés vers demain'" height="100%" />
                </div>
                <div style={{
                  backgroundColor: '#F8FAFC',
                  border: '1px solid #CBD5E1',
                  borderRadius: '5px',
                  padding: '2mm 3.5mm',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Award size={20} color="#0070F3" />
                  <div>
                    <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase' }}>MASTER ACCRÉDITÉ</div>
                    <div style={{ fontSize: '6pt', color: '#64748B' }}>Par l'État Tunisien • Diplôme Bac+5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: 6 Bottom Value Pillars */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '2mm',
            backgroundColor: '#F8FAFC',
            border: '1.5px solid #CBD5E1',
            borderRadius: '6px',
            padding: '3mm 2.5mm',
            textAlign: 'center',
            height: '24mm',
            boxSizing: 'border-box',
            alignItems: 'center',
            flexShrink: 0
          }}>
            <div>
              <Target size={18} color="#0070F3" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '6.2pt', fontWeight: 900, color: '#0A1C3E' }}>PROJETS RÉELS</div>
            </div>
            <div style={{ borderLeft: '1px solid #CBD5E1' }}>
              <BrainCircuit size={18} color="#0A1C3E" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '6.2pt', fontWeight: 900, color: '#0A1C3E' }}>IA INTÉGRÉE</div>
            </div>
            <div style={{ borderLeft: '1px solid #CBD5E1' }}>
              <Briefcase size={18} color="#0070F3" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '6.2pt', fontWeight: 900, color: '#0A1C3E' }}>COMPÉTENCES AVENIR</div>
            </div>
            <div style={{ borderLeft: '1px solid #CBD5E1' }}>
              <Globe size={18} color="#0A1C3E" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '6.2pt', fontWeight: 900, color: '#0A1C3E' }}>OUVERTURE INTL</div>
            </div>
            <div style={{ borderLeft: '1px solid #CBD5E1' }}>
              <Award size={18} color="#0070F3" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '6.2pt', fontWeight: 900, color: '#0A1C3E' }}>CERTIFICATIONS PRO</div>
            </div>
            <div style={{ borderLeft: '1px solid #CBD5E1' }}>
              <Users size={18} color="#0A1C3E" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '6.2pt', fontWeight: 900, color: '#0A1C3E' }}>EXPERTS MÉTIERS</div>
            </div>
          </div>

          {/* Row 4: Footer */}
          <div style={{ height: '10mm', flexShrink: 0 }}>
            <BottomContactBar slogan="VOTRE AVENIR COMMENCE ICI." />
          </div>
        </div>
      </section>

      {/* =========================================================================
          PAGE 2 : 5 BLOCS DE COMPÉTENCES SUR 2 ANS, DÉBOUCHÉS & STAGE
          ========================================================================= */}
      <section className="page page-2" id="page-2" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="page-inner" style={{ padding: '8mm 10mm', display: 'flex', flexDirection: 'column', gap: '3.5mm', height: '100%', boxSizing: 'border-box' }}>
          {/* Row 1: Top Banner */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '5mm', alignItems: 'center', height: '48mm', flexShrink: 0 }}>
            <div>
              <h3 style={{ fontSize: '8.5pt', fontWeight: 900, color: '#0A1C3E', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                MASTER EN MARKETING DIGITAL & INTELLIGENCE ARTIFICIELLE
              </h3>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '18pt',
                fontWeight: 900,
                color: '#0070F3',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase'
              }}>
                UN PROGRAMME COMPLET ET OPÉRATIONNEL SUR 2 ANNÉES
              </h2>
              <div style={{ width: '32mm', height: '3.5px', backgroundColor: '#0070F3', margin: '1mm 0 2mm 0' }} />
              <p style={{ fontSize: '7.2pt', color: '#475569', lineHeight: 1.35 }}>
                Un parcours progressif en 4 semestres qui combine marketing digital, data et intelligence artificielle pour développer des compétences concrètes et recherchées par les entreprises.
              </p>
            </div>

            {/* Marketing Analytics Visual */}
            <div style={{ height: '46mm', width: '100%' }}>
              <AssetPlaceholder label="Dashboard Marketing Analytics" sublabel="Traffic 125.4K, Conversions 7.2K, Canaux d'acquisition" height="100%" />
            </div>
          </div>

          {/* Row 2: 5 Grands Blocs de Compétences sur 2 Ans */}
          <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '3mm 3.5mm', height: '116mm', boxSizing: 'border-box', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '8pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase' }}>
                LE PROGRAMME EN 5 GRANDS BLOCS DE COMPÉTENCES
              </div>
            </div>

            {/* 5 Column Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2mm', height: '98mm' }}>
              {/* Card 1 */}
              <div style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 2mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5mm' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#0070F3', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Target size={12} />
                    </div>
                    <span style={{ fontSize: '9pt', fontWeight: 900, color: '#0070F3' }}>01</span>
                  </div>
                  <div style={{ fontSize: '6.5pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15, marginBottom: '2mm' }}>
                    MARKETING STRATÉGIQUE & DIGITAL
                  </div>
                  <div style={{ fontSize: '5.8pt', color: '#475569', lineHeight: 1.35 }}>
                    • Marketing stratégique<br />
                    • Marketing digital<br />
                    • E-business & e-commerce<br />
                    • Communication digitale<br />
                    • Comportement consommateur<br />
                    • Branding & positionnement<br />
                    • Étude de marché
                  </div>
                </div>
                <div style={{ backgroundColor: '#0070F3', color: '#FFF', fontSize: '5pt', fontWeight: 900, textAlign: 'center', padding: '1mm', borderRadius: '3px' }}>
                  STRATÉGIE & MARQUE
                </div>
              </div>

              {/* Card 2 */}
              <div style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 2mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5mm' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#059669', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <TrendingUp size={12} />
                    </div>
                    <span style={{ fontSize: '9pt', fontWeight: 900, color: '#059669' }}>02</span>
                  </div>
                  <div style={{ fontSize: '6.5pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15, marginBottom: '2mm' }}>
                    ACQUISITION & PERFORMANCE
                  </div>
                  <div style={{ fontSize: '5.8pt', color: '#475569', lineHeight: 1.35 }}>
                    • SEO / SEA Google Ads<br />
                    • Google Analytics 4<br />
                    • Looker Studio & Dataviz<br />
                    • Social Media Marketing<br />
                    • Content Marketing<br />
                    • Growth Hacking<br />
                    • A/B Testing & CRO
                  </div>
                </div>
                <div style={{ backgroundColor: '#059669', color: '#FFF', fontSize: '5pt', fontWeight: 900, textAlign: 'center', padding: '1mm', borderRadius: '3px' }}>
                  TRAFIC & CONVERSION
                </div>
              </div>

              {/* Card 3 */}
              <div style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 2mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5mm' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#7A1CAC', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Users size={12} />
                    </div>
                    <span style={{ fontSize: '9pt', fontWeight: 900, color: '#7A1CAC' }}>03</span>
                  </div>
                  <div style={{ fontSize: '6.5pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15, marginBottom: '2mm' }}>
                    CRM & MARKETING AUTOMATION
                  </div>
                  <div style={{ fontSize: '5.8pt', color: '#475569', lineHeight: 1.35 }}>
                    • CRM Enterprise<br />
                    • HubSpot CRM<br />
                    • Email Marketing<br />
                    • Workflows & Scénarios<br />
                    • n8n Automation<br />
                    • Fidélisation client<br />
                    • Rétention & LTV
                  </div>
                </div>
                <div style={{ backgroundColor: '#7A1CAC', color: '#FFF', fontSize: '5pt', fontWeight: 900, textAlign: 'center', padding: '1mm', borderRadius: '3px' }}>
                  RELATION & RETENTION
                </div>
              </div>

              {/* Card 4 */}
              <div style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 2mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5mm' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#0A1C3E', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <BrainCircuit size={12} />
                    </div>
                    <span style={{ fontSize: '9pt', fontWeight: 900, color: '#0A1C3E' }}>04</span>
                  </div>
                  <div style={{ fontSize: '6.5pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15, marginBottom: '2mm' }}>
                    DATA & INTELLIGENCE ARTIFICIELLE
                  </div>
                  <div style={{ fontSize: '5.8pt', color: '#475569', lineHeight: 1.35 }}>
                    • Data Marketing<br />
                    • Business Intelligence<br />
                    • Tableaux de bord avancés<br />
                    • IA générative & prompts<br />
                    • ChatGPT, Gemini, Copilot<br />
                    • Analyse prédictive<br />
                    • Segmentation avancée
                  </div>
                </div>
                <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', fontSize: '5pt', fontWeight: 900, textAlign: 'center', padding: '1mm', borderRadius: '3px' }}>
                  IA & PRÉDICTION
                </div>
              </div>

              {/* Card 5 */}
              <div style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 2mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5mm' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#0A1C3E', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Briefcase size={12} />
                    </div>
                    <span style={{ fontSize: '9pt', fontWeight: 900, color: '#0A1C3E' }}>05</span>
                  </div>
                  <div style={{ fontSize: '6.5pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15, marginBottom: '2mm' }}>
                    PROFESSIONNALISATION & EXPERTISE
                  </div>
                  <div style={{ fontSize: '5.8pt', color: '#475569', lineHeight: 1.35 }}>
                    • Études de cas avancées<br />
                    • Projets réels d'entreprises<br />
                    • Consulting & Audit digital<br />
                    • Mémoire de fin d'études<br />
                    • Soft Skills & Leadership<br />
                    • Insertion professionnelle<br />
                    • Stage obligatoire 6 mois
                  </div>
                </div>
                <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', fontSize: '5pt', fontWeight: 900, textAlign: 'center', padding: '1mm', borderRadius: '3px' }}>
                  EXPERTISE & INSERTION
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Débouchés (Left) vs Stage Professionnel (Right) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: '4.5mm', height: '56mm', flexShrink: 0 }}>
            {/* Left: 10 Débouchés */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '3mm 3.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase' }}>
                DÉBOUCHÉS PROFESSIONNELS
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5mm', textAlign: 'center' }}>
                {[
                  { title: 'Directeur Mkt (CMO)', icon: Users },
                  { title: 'Resp. Acquisition', icon: Megaphone },
                  { title: 'Growth Hacker', icon: Rocket },
                  { title: 'Consultant Digital', icon: Briefcase },
                  { title: 'Marketing Analyst', icon: BarChart3 },
                  { title: 'CRM Manager', icon: Users },
                  { title: 'Resp. E-commerce', icon: ShoppingCart },
                  { title: 'Expert IA Marketing', icon: BrainCircuit },
                  { title: 'Chef Transfo Digitale', icon: Laptop },
                  { title: 'Entrepreneur', icon: Target }
                ].map((c, idx) => {
                  const Icon = c.icon;
                  return (
                    <div key={idx} style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '3px', padding: '1mm' }}>
                      <Icon size={12} color="#0070F3" style={{ margin: '0 auto 0.5mm auto' }} />
                      <div style={{ fontSize: '4.8pt', fontWeight: 800, color: '#0A1C3E', lineHeight: 1.1 }}>{c.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Stage & Immersion */}
            <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', borderRadius: '6px', padding: '3mm 3.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Briefcase size={20} color="#00BCEB" />
                <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#00BCEB' }}>
                  STAGE & IMMERSION PROFESSIONNELLE
                </div>
              </div>
              <p style={{ fontSize: '6.2pt', color: '#CBD5E1', lineHeight: 1.35 }}>
                Un stage obligatoire en entreprise pour valoriser vos compétences, participer activement à des projets concrets et développer durablement votre réseau professionnel.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1mm', fontSize: '5.8pt', color: '#FFF' }}>
                <div>💼 Expérience professionnelle obligatoire en entreprise</div>
                <div>👤 Accompagnement personnalisé pour votre recherche</div>
                <div>📈 Renforcement de votre employabilité professionnelle</div>
              </div>
            </div>
          </div>

          {/* Row 4: Footer */}
          <div style={{ height: '9mm', flexShrink: 0 }}>
            <BottomContactBar slogan="L’EXCELLENCE ACADÉMIQUE AU SERVICE DE VOTRE AVENIR" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          PAGE 3 : 6 RAISONS D'EXCELLENCE & CERTIFICATIONS RECONNUES
          ========================================================================= */}
      <section className="page page-3" id="page-3" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="page-inner" style={{ padding: '8mm 10mm', display: 'flex', flexDirection: 'column', gap: '3.5mm', height: '100%', boxSizing: 'border-box' }}>
          {/* Row 1: Top Banner */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5mm', alignItems: 'center', height: '52mm', flexShrink: 0 }}>
            <div>
              <h3 style={{ fontSize: '8.5pt', fontWeight: 900, color: '#0A1C3E', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                MASTER EN MARKETING DIGITAL & INTELLIGENCE ARTIFICIELLE
              </h3>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22pt',
                fontWeight: 900,
                color: '#0A1C3E',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase'
              }}>
                6 RAISONS <br />
                <span style={{ color: '#0070F3' }}>DE CHOISIR L'EXCELLENCE</span> <br />
                POUR CONSTRUIRE VOTRE AVENIR
              </h2>
              <div style={{ width: '32mm', height: '3.5px', backgroundColor: '#0070F3', margin: '1mm 0 2mm 0' }} />
              <p style={{ fontSize: '7.2pt', color: '#475569', lineHeight: 1.4 }}>
                Un Master conçu pour développer des compétences recherchées, vous rendre opérationnel dès demain et vous ouvrir les portes d'une carrière internationale.
              </p>
            </div>

            {/* AI Laptop Visual */}
            <div style={{ height: '50mm', width: '100%' }}>
              <AssetPlaceholder label="Photo Ordinateur IA & Marketing" sublabel="Écran d'analyse prédictive, segmentation et recommandation IA" height="100%" />
            </div>
          </div>

          {/* Row 2: 6 Reason Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5mm', height: '80mm', flexShrink: 0 }}>
            {[
              { id: '01', title: 'IA INTÉGRÉE DANS TOUS LES CURSUS', desc: 'L’intelligence artificielle est intégrée dans toutes les matières pour vous donner une longueur d’avance et vous préparer aux métiers de demain.' },
              { id: '02', title: '20+ CERTIFICATIONS INTERNATIONALES', desc: 'Obtenez des certifications reconnues par l’industrie et valorisées par les recruteurs pour renforcer vos compétences et votre employabilité.' },
              { id: '03', title: 'PROJETS RÉELS & ÉTUDES DE CAS', desc: 'Apprenez en agissant sur des projets concrets d’entreprises et des études de cas réelles pour développer votre sens de l’analyse et votre impact.' },
              { id: '04', title: 'OUTILS & LOGICIELS PROFESSIONNELS', desc: 'Maîtrisez les outils et logiciels les plus utilisés par les professionnels du marketing digital et de la data (HubSpot, Google Ads, Meta, n8n).' },
              { id: '05', title: 'OUVERTURE INTERNATIONALE', desc: 'Partenariats prestigieux et possibilités de poursuite d’études en France, en Italie et au Canada pour construire une carrière sans frontières.' },
              { id: '06', title: 'ACCOMPAGNEMENT VERS LA RÉUSSITE', desc: 'Un accompagnement personnalisé vers l’emploi : coaching, ateliers, job dating et suivi de votre insertion professionnelle.' }
            ].map((r, idx) => (
              <div key={idx} style={{ backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '3mm 3.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1mm' }}>
                  <span style={{ fontSize: '6.8pt', fontWeight: 900, color: '#0070F3' }}>{r.title}</span>
                  <span style={{ fontSize: '8pt', fontWeight: 900, color: '#0A1C3E' }}>{r.id}</span>
                </div>
                <div style={{ fontSize: '5.8pt', color: '#475569', lineHeight: 1.35 }}>
                  {r.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Row 3: Certifications Reconnues Banner */}
          <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '3mm 4mm', height: '48mm', boxSizing: 'border-box', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '7.8pt', fontWeight: 900, color: '#0A1C3E' }}>DES CERTIFICATIONS RECONNUES POUR VALORISER VOTRE PROFIL</span>
              <span style={{ fontSize: '6pt', fontWeight: 800, color: '#0070F3' }}>OFFERTES</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2mm', textAlign: 'center' }}>
              <div style={{ backgroundColor: '#FFF', padding: '1.5mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                <GoogleLogo style={{ height: '9px', margin: '0 auto 1mm auto' }} />
                <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Digital Garage</div>
              </div>
              <div style={{ backgroundColor: '#FFF', padding: '1.5mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                <GoogleLogo style={{ height: '9px', margin: '0 auto 1mm auto' }} />
                <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Google Ads</div>
              </div>
              <div style={{ backgroundColor: '#FFF', padding: '1.5mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                <HubspotLogo style={{ height: '9px', margin: '0 auto 1mm auto' }} />
                <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Academy</div>
              </div>
              <div style={{ backgroundColor: '#FFF', padding: '1.5mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                <MetaLogo style={{ height: '9px', margin: '0 auto 1mm auto' }} />
                <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Blueprint</div>
              </div>
              <div style={{ backgroundColor: '#FFF', padding: '1.5mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                <LinkedinLogo style={{ height: '9px', margin: '0 auto 1mm auto' }} />
                <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Marketing Sol.</div>
              </div>
              <div style={{ backgroundColor: '#FFF', padding: '1.5mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                <div style={{ fontSize: '5pt', fontWeight: 900, color: '#00A4EF' }}>Microsoft</div>
                <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Learn</div>
              </div>
              <div style={{ backgroundColor: '#FFF', padding: '1.5mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                <IbmLogo style={{ height: '8px', margin: '0 auto 1mm auto' }} />
                <div style={{ fontSize: '4.8pt', color: '#64748B' }}>SkillsBuild</div>
              </div>
            </div>
          </div>

          {/* Row 4: Footer */}
          <div style={{ height: '9mm', flexShrink: 0 }}>
            <BottomContactBar slogan="L’EXCELLENCE ACADÉMIQUE AU SERVICE DE VOTRE AVENIR" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          PAGE 4 : ENGAGEMENT, PARTNERS, ROADMAP & CTA
          ========================================================================= */}
      <section className="page page-4" id="page-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="page-inner" style={{ padding: '8mm 10mm', display: 'flex', flexDirection: 'column', gap: '3mm', height: '100%', boxSizing: 'border-box' }}>
          {/* Row 1: Top Banner */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5mm', alignItems: 'center', height: '44mm', flexShrink: 0 }}>
            <div>
              <h3 style={{ fontSize: '8.5pt', fontWeight: 900, color: '#0A1C3E', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                MASTER EN MARKETING DIGITAL & INTELLIGENCE ARTIFICIELLE
              </h3>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20pt',
                fontWeight: 900,
                color: '#0070F3',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase'
              }}>
                VOTRE AVENIR, NOTRE ENGAGEMENT.
              </h2>
              <div style={{ width: '32mm', height: '3.5px', backgroundColor: '#0070F3', margin: '1mm 0 2mm 0' }} />
              <p style={{ fontSize: '6.8pt', color: '#475569', lineHeight: 1.35 }}>
                À EBS, nous formons les leaders du digital capables de relever les défis d'aujourd'hui et de demain. Grâce à notre réseau académique international et à nos partenaires entreprises, nous vous offrons des opportunités concrètes et un avenir sans frontières.
              </p>
            </div>

            {/* Right Visual: Skyline Leaders with Globe */}
            <div style={{ height: '42mm', width: '100%' }}>
              <AssetPlaceholder label="Photo Leaders Digital & Globe 3D" sublabel="Cadres face à la ville avec sphère mondiale" height="100%" />
            </div>
          </div>

          {/* Row 2: Partenaires Académiques Internationaux */}
          <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '2.5mm 3.5mm', height: '52mm', boxSizing: 'border-box', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '7.8pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase' }}>
                NOS PARTENAIRES ACADÉMIQUES INTERNATIONAUX
              </div>
              <div style={{ fontSize: '5.8pt', color: '#64748B' }}>
                Des universités et écoles de renom en France, en Italie et au Canada vous ouvrent les portes d'une poursuite d'études d'excellence.
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2mm', alignItems: 'center' }}>
              <div style={{ height: '10mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/em-normandie.webp" alt="EM Normandie" style={{ maxHeight: '9.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '10mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/excelia.webp" alt="Excelia" style={{ maxHeight: '9.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '10mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/sup-de-com.webp" alt="Sup de Com" style={{ maxHeight: '9.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '10mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/psb.webp" alt="PSB" style={{ maxHeight: '9.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '10mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/idrac.webp" alt="IDRAC" style={{ maxHeight: '9.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3mm', alignItems: 'center', borderTop: '1px dotted #CBD5E1', paddingTop: '1.5mm' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/link-university.jpeg" alt="Link" style={{ maxHeight: '9mm', objectFit: 'contain' }} />
                <span style={{ fontSize: '6pt', fontWeight: 800, color: '#0A1C3E' }}>Link University - Rome (Italie)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/uqat.webp" alt="UQAT" style={{ maxHeight: '9mm', objectFit: 'contain' }} />
                <span style={{ fontSize: '6pt', fontWeight: 800, color: '#0A1C3E' }}>UQAT - Québec (Canada)</span>
              </div>
            </div>
          </div>

          {/* Row 3: Partenaires Entreprises */}
          <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '2.5mm 3.5mm', height: '38mm', boxSizing: 'border-box', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase' }}>
                NOS PARTENAIRES ENTREPRISES
              </div>
              <div style={{ fontSize: '5.8pt', color: '#64748B' }}>
                Des entreprises leaders qui collaborent avec EBS pour votre employabilité et votre insertion professionnelle :
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '2.5mm', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ fontWeight: 900, fontSize: '7.5pt', color: '#E11D48' }}>SATEM</div>
              <div style={{ fontWeight: 900, fontSize: '7.5pt', color: '#0284C7' }}>YPERYON</div>
              <div style={{ fontWeight: 900, fontSize: '6.5pt', color: '#0A1C3E' }}>ARFORGHE</div>
              <div style={{ fontWeight: 900, fontSize: '7.5pt', color: '#DC2626' }}>ASTEELFLASH</div>
              <div style={{ fontWeight: 900, fontSize: '7pt', color: '#0369A1' }}>CAYON CLOUD</div>
              <div style={{ fontWeight: 900, fontSize: '7.5pt', color: '#F59E0B' }}>MEDIANET</div>
            </div>
          </div>

          {/* Row 4: Parcours (Left) vs Dark CTA with QR (Right) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: '4mm', height: '48mm', flexShrink: 0 }}>
            {/* Left: Parcours */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '2.5mm 3mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E', marginBottom: '0.8mm' }}>
                  VOTRE PARCOURS À EBS
                </div>
                <div style={{ fontSize: '6pt', color: '#475569', lineHeight: 1.3 }}>
                  Vous intégrez un parcours structuré et professionnalisant qui combine enseignements académiques, certifications internationales, projets réels et stage en entreprise.
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '5.2pt', fontWeight: 800, color: '#0070F3', textAlign: 'center', borderTop: '1px dotted #CBD5E1', paddingTop: '1.5mm' }}>
                <div>Admission</div>
                <div>→</div>
                <div>Formation</div>
                <div>→</div>
                <div>Certifications</div>
                <div>→</div>
                <div>Stage</div>
                <div>→</div>
                <div>Diplôme</div>
              </div>
            </div>

            {/* Right: Dark Navy CTA Box with QR Code */}
            <div style={{
              backgroundColor: '#0A1C3E',
              color: '#FFFFFF',
              borderRadius: '6px',
              padding: '2.5mm 3.5mm',
              display: 'grid',
              gridTemplateColumns: '1fr 22mm',
              gap: '3mm',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#00BCEB', marginBottom: '0.8mm' }}>
                  PRÊT À PASSER À L'ACTION ?
                </div>
                <div style={{ fontSize: '5.8pt', color: '#CBD5E1', marginBottom: '1.5mm' }}>
                  Rejoignez EBS et construisez votre avenir !
                </div>
                <div style={{ fontSize: '5.6pt', color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: '0.5mm' }}>
                  <div>📞 (+216) 71 182 625</div>
                  <div>✉️ info@ebs.tn</div>
                  <div>🌐 www.ebs.tn</div>
                  <div>📍 Lac 3 - Tunis, Tunisie</div>
                </div>
              </div>
              <div style={{ backgroundColor: '#FFF', padding: '1.5mm', borderRadius: '4px', textAlign: 'center' }}>
                <QrCode size={40} color="#0A1C3E" style={{ margin: '0 auto' }} />
                <div style={{ fontSize: '4.5pt', fontWeight: 900, color: '#0A1C3E', marginTop: '0.5mm' }}>SCANNEZ MOI</div>
              </div>
            </div>
          </div>

          {/* Row 5: Footer */}
          <div style={{ height: '9mm', flexShrink: 0 }}>
            <BottomContactBar slogan="L’EXCELLENCE ACADÉMIQUE AU SERVICE DE VOTRE AVENIR" />
          </div>
        </div>
      </section>
    </div>
  );
};
