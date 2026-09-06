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
  PmiLogo,
  ScrumStudyLogo,
  BloombergLogo
} from './Logos';
import {
  Briefcase,
  Users,
  Award,
  Globe,
  TrendingUp,
  BrainCircuit,
  MessageSquareText,
  Clock,
  Presentation,
  CheckSquare,
  UserCheck,
  GraduationCap,
  Laptop,
  BarChart3,
  Target,
  Sparkles,
  Rocket,
  Shield,
  Layers,
  Send,
  Cpu,
  Search,
  Building,
  Handshake,
  CheckCircle2
} from 'lucide-react';

interface Props {
  data: ProgrammeData;
}

export const LicenceManagementBrochure: React.FC<Props> = () => {
  return (
    <div className="brochure-root licence-management-brochure">
      {/* =========================================================================
          PAGE 1 : COVER & HIGH-DENSITY MANAGEMENT HERO
          ========================================================================= */}
      <section className="page page-1" id="page-1" style={{ backgroundColor: '#FFFFFF', position: 'relative' }}>
        <div className="page-inner" style={{ padding: '8mm 10mm', display: 'flex', flexDirection: 'column', gap: '4mm', height: '100%', boxSizing: 'border-box' }}>
          {/* Row 1: Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '15mm', flexShrink: 0 }}>
            <EbsHeaderBrand />
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                backgroundColor: '#0A1C3E',
                color: '#FFFFFF',
                fontWeight: 900,
                fontSize: '8.5pt',
                padding: '4px 14px',
                borderRadius: '999px',
                letterSpacing: '0.04em'
              }}>
                Licence • Bac+3 • 3 ans
              </div>
              <AccreditationBadge />
            </div>
          </div>

          {/* Row 2: Hero Section */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)', gap: '6mm', height: '180mm', flexShrink: 0 }}>
            {/* Left Column: Bold Typography & Continuous Editorial Copy */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4mm' }}>
              <div>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '26pt',
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
                  fontSize: '38pt',
                  fontWeight: 900,
                  color: '#FF6B00',
                  lineHeight: 0.9,
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                  marginBottom: '3mm'
                }}>
                  MANAGEMENT
                </h1>
                <div style={{ width: '38mm', height: '5px', backgroundColor: '#FF6B00', marginBottom: '4mm', borderRadius: '2px' }} />

                <h3 style={{
                  fontSize: '12pt',
                  fontWeight: 800,
                  color: '#0A1C3E',
                  lineHeight: 1.35,
                  textTransform: 'uppercase',
                  marginBottom: '3mm'
                }}>
                  DEVENEZ UN <span style={{ color: '#FF6B00' }}>MANAGER AUGMENTÉ</span> PAR{' '}
                  <span style={{ color: '#FF6B00' }}>L'INTELLIGENCE ARTIFICIELLE</span>, PRÊT À RELEVER LES DÉFIS DES ENTREPRISES DE DEMAIN.
                </h3>
              </div>

              {/* Editorial Description Box */}
              <div style={{
                backgroundColor: '#FFF7ED',
                borderLeft: '5px solid #FF6B00',
                padding: '5.5mm 6.5mm',
                borderRadius: '0 8px 8px 0',
                border: '1.5px solid #FFEDD5',
                borderLeftWidth: '5px'
              }}>
                <p style={{ fontSize: '9.2pt', color: '#334155', lineHeight: 1.55, textAlign: 'justify', marginBottom: '3mm' }}>
                  Cette Licence forme des managers capables de piloter des équipes, des projets et des organisations dans un environnement digital. Grâce à l’Intelligence Artificielle, vous apprendrez à automatiser certaines tâches, à analyser les données et à prendre de meilleures décisions pour créer plus de valeur durable.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2mm', fontSize: '7.8pt', fontWeight: 800, color: '#0A1C3E' }}>
                  <div>✓ Pilotage stratégique & Agile</div>
                  <div>✓ Certifications PMI & SCRUM</div>
                  <div>✓ Management de l'innovation</div>
                  <div>✓ Double diplomation internationale</div>
                </div>
              </div>

              {/* 3 Pillar Highlight Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2.5mm' }}>
                <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 2mm', textAlign: 'center' }}>
                  <Target size={16} color="#FF6B00" style={{ margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '6.8pt', fontWeight: 900, color: '#0A1C3E' }}>MANAGEMENT AGILE</div>
                  <div style={{ fontSize: '5.5pt', color: '#64748B', marginTop: '0.5mm' }}>PMI Kickoff & Scrum SAC™</div>
                </div>
                <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 2mm', textAlign: 'center' }}>
                  <BrainCircuit size={16} color="#0A1C3E" style={{ margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '6.8pt', fontWeight: 900, color: '#0A1C3E' }}>IA & DÉCISION</div>
                  <div style={{ fontSize: '5.5pt', color: '#64748B', marginTop: '0.5mm' }}>Google Prompting & Data</div>
                </div>
                <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 2mm', textAlign: 'center' }}>
                  <Globe size={16} color="#FF6B00" style={{ margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '6.8pt', fontWeight: 900, color: '#0A1C3E' }}>DOUBLE DIPLÔME</div>
                  <div style={{ fontSize: '5.5pt', color: '#64748B', marginTop: '0.5mm' }}>France • Italie • Canada</div>
                </div>
              </div>
            </div>

            {/* Right Column: Students Hero Visual */}
            <div style={{ height: '100%', width: '100%' }}>
              <AssetPlaceholder
                label="Photo Étudiants Management"
                sublabel="Deux étudiants souriants avec ordinateurs et fond skyline executive"
                height="100%"
              />
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
            padding: '3.5mm 2.5mm',
            textAlign: 'center',
            height: '26mm',
            boxSizing: 'border-box',
            alignItems: 'center',
            flexShrink: 0
          }}>
            <div>
              <BrainCircuit size={24} color="#FF6B00" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '7.8pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15 }}>IA INTÉGRÉE</div>
            </div>
            <div style={{ borderLeft: '1px solid #CBD5E1' }}>
              <Award size={24} color="#0A1C3E" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '7.8pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15 }}>CERTIFICATIONS INCLUSES</div>
            </div>
            <div style={{ borderLeft: '1px solid #CBD5E1' }}>
              <Briefcase size={24} color="#FF6B00" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '7.8pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15 }}>COMPÉTENCES PRATIQUES</div>
            </div>
            <div style={{ borderLeft: '1px solid #CBD5E1' }}>
              <Globe size={24} color="#0A1C3E" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '7.8pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15 }}>OUVERTURE INTERNATIONALE</div>
            </div>
            <div style={{ borderLeft: '1px solid #CBD5E1' }}>
              <Users size={24} color="#FF6B00" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '7.8pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15 }}>ACCOMPAGNEMENT SUR MESURE</div>
            </div>
          </div>

          {/* Row 4: Docked Bottom Contact Bar */}
          <div style={{ height: '11mm', flexShrink: 0 }}>
            <BottomContactBar slogan="UN PROGRAMME TOURNÉ VERS L'AVENIR" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          PAGE 2 : CURRICULUM (10 MODULES) & CERTIFICATIONS (9 IN A 3X3 GRID)
          ========================================================================= */}
      <section className="page page-2" id="page-2" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="page-inner" style={{ padding: '8mm 10mm', display: 'flex', flexDirection: 'column', gap: '3.5mm', height: '100%', boxSizing: 'border-box' }}>
          {/* Row 1: Top Banner */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '5mm', alignItems: 'center', height: '48mm', flexShrink: 0 }}>
            <div>
              <h3 style={{ fontSize: '9pt', fontWeight: 900, color: '#0A1C3E', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                UN PROGRAMME COMPLET POUR DEVENIR UN
              </h3>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22pt',
                fontWeight: 900,
                color: '#FF6B00',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase'
              }}>
                MANAGER DE DEMAIN
              </h2>
              <div style={{ width: '32mm', height: '3.5px', backgroundColor: '#FF6B00', margin: '1mm 0 2mm 0' }} />
              <p style={{ fontSize: '7.5pt', color: '#475569', lineHeight: 1.35 }}>
                La Licence en Management à l'EBS vous apporte bien plus que des connaissances : elle développe votre personnalité, vos compétences et votre capacité à transformer les défis en opportunités.
              </p>
            </div>

            {/* Campus photo */}
            <div style={{ height: '46mm', width: '100%' }}>
              <AssetPlaceholder label="Photo Campus EBS" sublabel="Façade Campus & étudiants entrant" height="100%" />
            </div>
          </div>

          {/* Row 2: 10 Modules (Left) vs 9 Certifications (Right in 3x3 Grid) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: '4.5mm', height: '116mm', flexShrink: 0 }}>
            {/* Left: 10 Modules with Navy Rectangular Pills */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '3mm 4mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '8pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase', marginBottom: '0.5mm' }}>
                  PROGRAMME SUR 6 SEMESTRES
                </div>
                <div style={{ fontSize: '6.5pt', color: '#64748B', marginBottom: '1.5mm' }}>
                  Modules structurés pour une montée en compétences progressive :
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2mm' }}>
                {[
                  { id: '01', title: 'FONDEMENTS DU MANAGEMENT' },
                  { id: '02', title: 'PILOTAGE DES ORGANISATIONS' },
                  { id: '03', title: 'OUTILS ET MÉTHODES DE GESTION' },
                  { id: '04', title: 'STRATÉGIE D’ENTREPRISE ET ANALYSE DE MARCHÉ' },
                  { id: '05', title: 'BUSINESS ANALYTICS ET TABLEAUX DE BORD' },
                  { id: '06', title: 'MANAGEMENT DES RESSOURCES HUMAINES' },
                  { id: '07', title: 'ENTREPRENEURIAT, INNOVATION ET CRÉATION' },
                  { id: '08', title: 'DROIT DES AFFAIRES ET ENVIRONNEMENT RÉGLEMENTAIRE' },
                  { id: '09', title: 'IA APPLIQUÉE AU MANAGEMENT' },
                  { id: '10', title: 'ANGLAIS DES AFFAIRES & SOFT SKILLS' }
                ].map((m, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '7pt', borderBottom: i < 9 ? '1px dotted #CBD5E1' : 'none', paddingBottom: '0.6mm' }}>
                    <span style={{ backgroundColor: '#0A1C3E', color: '#FFF', fontSize: '6.5pt', fontWeight: 900, padding: '1px 5px', borderRadius: '3px', flexShrink: 0 }}>
                      {m.id}
                    </span>
                    <span style={{ color: '#1E293B', fontWeight: 800 }}>{m.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 9 Certifications (3x3 Grid) */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '3mm 3.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '8pt', fontWeight: 900, color: '#0A1C3E' }}>CERTIFICATIONS INCLUSES</span>
                  <span style={{ fontSize: '6.2pt', fontWeight: 800, color: '#FF6B00', backgroundColor: '#FFF7ED', padding: '1.5px 5px', borderRadius: '3px' }}>OFFERTES</span>
                </div>
                <div style={{ fontSize: '6.2pt', color: '#64748B', marginTop: '0.5mm' }}>
                  Obtenez des certifications internationales pour valoriser votre parcours :
                </div>
              </div>

              {/* 3x3 Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.8mm', textAlign: 'center' }}>
                <div style={{ backgroundColor: '#FFF', padding: '1.5mm 1mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <GoogleLogo style={{ height: '11px', margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '5.2pt', fontWeight: 800, color: '#1E293B' }}>Google Prompting</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1.5mm 1mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <ScrumStudyLogo style={{ height: '11px', margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '5.2pt', fontWeight: 800, color: '#1E293B' }}>Scrum with AI (SAC™)</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1.5mm 1mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <div style={{ fontSize: '5pt', fontWeight: 900, color: '#0369A1' }}>MSI Institute</div>
                  <div style={{ fontSize: '5.2pt', fontWeight: 800, color: '#1E293B' }}>Business Mgmt</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1.5mm 1mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <GoogleLogo style={{ height: '11px', margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '5.2pt', fontWeight: 800, color: '#1E293B' }}>Google Agile</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1.5mm 1mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <IbmLogo style={{ height: '10px', margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '5.2pt', fontWeight: 800, color: '#1E293B' }}>IBM Reports</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1.5mm 1mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <PmiLogo style={{ height: '11px', margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '5.2pt', fontWeight: 800, color: '#1E293B' }}>PMI Kickoff</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1.5mm 1mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <div style={{ fontSize: '5pt', fontWeight: 900, color: '#0369A1' }}>MSI Institute</div>
                  <div style={{ fontSize: '5.2pt', fontWeight: 800, color: '#1E293B' }}>Project Mgmt</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1.5mm 1mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <CiscoLogo style={{ height: '11px', margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '5.2pt', fontWeight: 800, color: '#1E293B' }}>Business Venture</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1.5mm 1mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <BloombergLogo style={{ height: '11px', margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '5.2pt', fontWeight: 800, color: '#1E293B' }}>Client Engagement</div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Stage Professionnel Banner with Photo Inset */}
          <div style={{
            backgroundColor: '#F8FAFC',
            border: '1.5px solid #CBD5E1',
            borderRadius: '6px',
            padding: '2.5mm 4mm',
            display: 'grid',
            gridTemplateColumns: '40mm 1fr 45mm',
            gap: '4mm',
            alignItems: 'center',
            height: '28mm',
            boxSizing: 'border-box',
            flexShrink: 0
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#0A1C3E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Briefcase size={18} color="#FF6B00" />
              </div>
              <div>
                <div style={{ fontSize: '8pt', fontWeight: 900, color: '#0A1C3E' }}>STAGE PROFESSIONNEL</div>
                <div style={{ fontSize: '6.5pt', color: '#FF6B00', fontWeight: 800 }}>IMMERSION PRO</div>
              </div>
            </div>
            <div style={{ fontSize: '6.8pt', color: '#334155', lineHeight: 1.35, borderLeft: '2px solid #CBD5E1', paddingLeft: '3mm' }}>
              Un stage en entreprise d'une durée de 2 à 3 mois au cours du cursus pour développer vos compétences opérationnelles et acquérir une expérience concrète.
            </div>
            <div style={{ height: '22mm' }}>
              <AssetPlaceholder label="Photo Stage" sublabel="Femme au bureau" height="100%" />
            </div>
          </div>

          {/* Row 4: 7 Career Outcomes */}
          <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '2.5mm 3.5mm', height: '28mm', boxSizing: 'border-box', flexShrink: 0 }}>
            <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase', marginBottom: '1.2mm' }}>
              DES DÉBOUCHÉS VARIÉS ET PORTEURS
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1.8mm', textAlign: 'center' }}>
              {[
                { title: 'Manager augmenté IA', icon: BrainCircuit },
                { title: 'Chef de projet junior', icon: Target },
                { title: 'Manager d’équipe', icon: Users },
                { title: 'Business Analyst', icon: BarChart3 },
                { title: 'Resp. administratif', icon: CheckSquare },
                { title: 'Entrepreneur', icon: Rocket },
                { title: 'Dév. commercial', icon: Handshake }
              ].map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={i} style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '4px', padding: '1.5mm 1mm' }}>
                    <Icon size={14} color="#FF6B00" style={{ margin: '0 auto 0.8mm auto' }} />
                    <div style={{ fontSize: '5.8pt', fontWeight: 800, color: '#0A1C3E', lineHeight: 1.15 }}>{c.title}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 5: Footer */}
          <div style={{ height: '9mm', flexShrink: 0 }}>
            <BottomContactBar slogan="L’EXCELLENCE ACADÉMIQUE AU SERVICE DE VOTRE AVENIR" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          PAGE 3 : WHY EBS (5 REASONS), SOFT SKILLS, ACTION PEDAGOGY & AI BOX
          ========================================================================= */}
      <section className="page page-3" id="page-3" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="page-inner" style={{ padding: '8mm 10mm', display: 'flex', flexDirection: 'column', gap: '3.5mm', height: '100%', boxSizing: 'border-box' }}>
          {/* Row 1: Top Banner */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5mm', alignItems: 'center', height: '52mm', flexShrink: 0 }}>
            <div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22pt',
                fontWeight: 900,
                color: '#0A1C3E',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase'
              }}>
                UNE FORMATION QUI <br />
                <span style={{ color: '#FF6B00' }}>VOUS DONNE</span> <br />
                UNE LONGUEUR D'AVANCE
              </h2>
              <div style={{ width: '32mm', height: '3.5px', backgroundColor: '#FF6B00', margin: '1mm 0 2mm 0' }} />
              <p style={{ fontSize: '7.5pt', color: '#475569', lineHeight: 1.4 }}>
                La Licence en Management à l'EBS vous ouvre les portes d'un leadership éclairé et d'une vision stratégique. Elle vous prépare à piloter les organisations avec agilité, à innover et à créer de la valeur durable dans un monde en constante évolution.
              </p>
            </div>

            {/* Right Photo */}
            <div style={{ height: '50mm', width: '100%' }}>
              <AssetPlaceholder label="Photo Réunion Executives" sublabel="Cadres en réunion skyline & carte mondiale" height="100%" />
            </div>
          </div>

          {/* Row 2: Equal-Height Quadrants (5 Reasons vs 4 Soft Skills) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.08fr 1fr', gap: '4.5mm', height: '118mm', flexShrink: 0 }}>
            {/* Left: 5 Reasons */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '3.5mm 4mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', fontSize: '7.5pt', fontWeight: 900, padding: '2mm 6px', borderRadius: '4px', textAlign: 'center', marginBottom: '1.5mm' }}>
                POURQUOI CHOISIR LA LICENCE EN MANAGEMENT À L'EBS ?
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2mm' }}>
                {[
                  { title: 'APPROCHE PROFESSIONNALISANTE', desc: 'Des contenus conçus en lien direct avec les réalités du monde professionnel.', icon: Briefcase, color: '#0A1C3E' },
                  { title: 'ENCADREMENT DE QUALITÉ', desc: 'Des enseignants et intervenants experts et à l’écoute des étudiants.', icon: Users, color: '#FF6B00' },
                  { title: 'APPRENTISSAGE PAR LA PRATIQUE', desc: 'Des mises en situation réelles pour apprendre en faisant, avec des projets concrets.', icon: Target, color: '#0A1C3E' },
                  { title: 'OUVERTURE INTERNATIONALE', desc: 'Des partenariats académiques, des échanges et de la mobilité étudiante.', icon: Send, color: '#FF6B00' },
                  { title: 'CERTIFICATIONS GRATUITES', desc: 'Accès à des certifications internationales offertes pour renforcer votre profil.', icon: Award, color: '#0A1C3E' }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: i < 4 ? '1px dotted #CBD5E1' : 'none', paddingBottom: '1mm' }}>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={12} color="#FFF" />
                      </div>
                      <div>
                        <div style={{ fontSize: '7.2pt', fontWeight: 900, color: '#0A1C3E' }}>{item.title}</div>
                        <div style={{ fontSize: '6.2pt', color: '#475569', lineHeight: 1.25 }}>{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: 4 Soft Skills */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '3.5mm 4mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', fontSize: '7.5pt', fontWeight: 900, padding: '2mm 6px', borderRadius: '4px', textAlign: 'center', marginBottom: '1.5mm' }}>
                COMPÉTENCES TRANSVERSALES DÉVELOPPÉES
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2mm' }}>
                {[
                  {
                    title: 'Esprit critique et capacité de décision',
                    desc: 'Évaluer les situations avec rigueur, anticiper les risques et choisir la meilleure option.'
                  },
                  {
                    title: 'Communication efficace',
                    desc: 'S’exprimer clairement à l’oral et à l’écrit et convaincre avec impact dans les négociations.'
                  },
                  {
                    title: 'Gestion du temps et des priorités',
                    desc: 'Planifier, prioriser et optimiser son organisation pour gagner en efficacité opérationnelle.'
                  },
                  {
                    title: 'Compétences linguistiques : Anglais & Français',
                    desc: 'Renforcer vos compétences linguistiques avec une préparation aux certifications TOEFL & TCF.'
                  }
                ].map((s, idx) => (
                  <div key={idx} style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 3mm' }}>
                    <div style={{ fontSize: '7.2pt', fontWeight: 900, color: '#FF6B00', marginBottom: '0.5mm' }}>{s.title}</div>
                    <div style={{ fontSize: '6.2pt', color: '#475569', lineHeight: 1.3 }}>{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 3: 6-Step Action Pedagogy Strip */}
          <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '2.8mm 3.5mm', height: '26mm', boxSizing: 'border-box', flexShrink: 0 }}>
            <div style={{ textAlign: 'center', fontSize: '7.2pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase', marginBottom: '1.2mm' }}>
              UNE PÉDAGOGIE TOURNÉE VERS L’ACTION
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '2mm', textAlign: 'center' }}>
              {[
                { title: 'Cours interactifs', icon: Presentation },
                { title: 'Travaux de groupe', icon: Users },
                { title: 'Études de cas réelles', icon: BarChart3 },
                { title: 'Projets d’entreprise', icon: Briefcase },
                { title: 'Évaluations continues', icon: CheckSquare },
                { title: 'Accompagnement', icon: UserCheck }
              ].map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <div key={idx} style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '4px', padding: '1.5mm 1mm' }}>
                    <StepIcon size={14} color="#FF6B00" style={{ margin: '0 auto 0.5mm auto' }} />
                    <div style={{ fontSize: '5.8pt', fontWeight: 800, color: '#0A1C3E' }}>{step.title}</div>
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
              <AssetPlaceholder label="Chip IA" height="100%" />
            </div>
            <div>
              <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#00BCEB', marginBottom: '1mm' }}>
                L'IA AU SERVICE DE VOTRE APPRENTISSAGE
              </div>
              <div style={{ fontSize: '6pt', color: '#CBD5E1', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8mm' }}>
                <div>✓ Outils intelligents de gestion</div>
                <div>✓ Analyse de données & décision</div>
                <div>✓ Cas pratiques augmentés par l'IA</div>
                <div>✓ Compétences managériales clés</div>
              </div>
            </div>
            <div style={{ backgroundColor: '#FF6B00', padding: '2.2mm', borderRadius: '4px', textAlign: 'center', fontSize: '6.5pt', fontWeight: 900, lineHeight: 1.3 }}>
              L'IA N'EST PAS UN REMPLACEMENT, C'EST UN ACCÉLÉRATEUR DE VOTRE POTENTIEL ET DE VOTRE RÉUSSITE.
            </div>
          </div>

          {/* Row 5: Footer */}
          <div style={{ height: '9mm', flexShrink: 0 }}>
            <BottomContactBar slogan="L’EXCELLENCE ACADÉMIQUE AU SERVICE DE VOTRE AVENIR" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          PAGE 4 : INTERNATIONAL PATHWAYS, 12 ACADEMIC PARTNERS & CONTACT
          ========================================================================= */}
      <section className="page page-4" id="page-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="page-inner" style={{ padding: '8mm 10mm', display: 'flex', flexDirection: 'column', gap: '3.5mm', height: '100%', boxSizing: 'border-box' }}>
          {/* Row 1: Top Banner */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5mm', alignItems: 'center', height: '46mm', flexShrink: 0 }}>
            <div>
              <h3 style={{ fontSize: '9pt', fontWeight: 900, color: '#0A1C3E', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                L'EXCELLENCE ACADÉMIQUE
              </h3>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22pt',
                fontWeight: 900,
                color: '#FF6B00',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase'
              }}>
                AU SERVICE DE VOTRE AVENIR
              </h2>
              <div style={{ width: '32mm', height: '3.5px', backgroundColor: '#FF6B00', margin: '1mm 0 2mm 0' }} />
              <p style={{ fontSize: '7.5pt', color: '#475569', lineHeight: 1.4 }}>
                Un parcours structuré et progressif qui vous permet d'acquérir les compétences essentielles pour construire votre avenir et réaliser vos ambitions.
              </p>
            </div>

            {/* Manager visual */}
            <div style={{ height: '44mm', width: '100%' }}>
              <AssetPlaceholder label="Photo Manager Leader" sublabel="Cadre pointant vers l'avenir avec titre MANAGEMENT" height="100%" />
            </div>
          </div>

          {/* Row 2: 3 Value Pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3.5mm', height: '24mm', boxSizing: 'border-box', flexShrink: 0 }}>
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '5px', padding: '2mm 2.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.8mm' }}>
                <GraduationCap size={16} color="#0A1C3E" />
                <span style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E' }}>DIPLÔME</span>
              </div>
              <p style={{ fontSize: '6.2pt', color: '#475569', lineHeight: 1.35 }}>Formation académique reconnue et alignée sur les exigences du monde professionnel.</p>
            </div>
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '5px', padding: '2mm 2.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.8mm' }}>
                <Laptop size={16} color="#FF6B00" />
                <span style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E' }}>EXPÉRIENCE</span>
              </div>
              <p style={{ fontSize: '6.2pt', color: '#475569', lineHeight: 1.35 }}>Des projets concrets, des activités et simulations qui développent vos compétences.</p>
            </div>
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '5px', padding: '2mm 2.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.8mm' }}>
                <TrendingUp size={16} color="#0A1C3E" />
                <span style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E' }}>CARRIÈRE</span>
              </div>
              <p style={{ fontSize: '6.2pt', color: '#475569', lineHeight: 1.35 }}>Accompagnement personnalisé pour atteindre vos objectifs et réussir votre insertion.</p>
            </div>
          </div>

          {/* Row 3: 3 International Pathways */}
          <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '3mm 4mm', height: '78mm', boxSizing: 'border-box', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '8.5pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase', textAlign: 'center' }}>
              3 PARCOURS POUR POURSUIVRE VOS ÉTUDES À L’INTERNATIONAL
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2mm' }}>
              {/* Pathway 1 */}
              <div style={{ display: 'grid', gridTemplateColumns: '26mm 1fr', gap: '3.5mm', alignItems: 'center', backgroundColor: '#FFF', padding: '2mm 3mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                <AssetPlaceholder label="Rome (Italie)" height="16mm" />
                <div>
                  <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E' }}>
                    <span style={{ color: '#0A1C3E' }}>01.</span> 1 an à EBS + Bachelor 2 en Italie | Link University – Rome
                  </div>
                  <p style={{ fontSize: '6.2pt', color: '#64748B', lineHeight: 1.25 }}>Après validation de la 1ʳᵉ année de Licence à EBS, possibilité de poursuivre en 2ᵉ année de Bachelor en Italie.</p>
                </div>
              </div>

              {/* Pathway 2 */}
              <div style={{ display: 'grid', gridTemplateColumns: '26mm 1fr', gap: '3.5mm', alignItems: 'center', backgroundColor: '#FFF', padding: '2mm 3mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                <AssetPlaceholder label="Paris (France)" height="16mm" />
                <div>
                  <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E' }}>
                    <span style={{ color: '#FF6B00' }}>02.</span> 2 ans à EBS + Bachelor 3 à l’international | Établissements partenaires en Italie ou en France
                  </div>
                  <p style={{ fontSize: '6.2pt', color: '#64748B', lineHeight: 1.25 }}>Après 2 années validées à EBS, intégration en 3ᵉ année de Bachelor proposée par nos établissements partenaires.</p>
                </div>
              </div>

              {/* Pathway 3 */}
              <div style={{ display: 'grid', gridTemplateColumns: '26mm 1fr', gap: '3.5mm', alignItems: 'center', backgroundColor: '#FFF', padding: '2mm 3mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                <AssetPlaceholder label="Canada" height="16mm" />
                <div>
                  <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E' }}>
                    <span style={{ color: '#0A1C3E' }}>03.</span> Licence à EBS + Master à l’international | France • Canada • Italie
                  </div>
                  <p style={{ fontSize: '6.2pt', color: '#64748B', lineHeight: 1.25 }}>Accès direct aux Masters Grande École, MSc ou autre cursus Bac+5 dans l'un de nos partenaires internationaux.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Row 4: Academic Partners Section (12 Genuine Logos) */}
          <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '2.5mm 3.5mm', height: '42mm', boxSizing: 'border-box', flexShrink: 0 }}>
            <div style={{ textAlign: 'center', fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase', marginBottom: '2mm' }}>
              PARTENAIRES ACADÉMIQUES
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '3mm', alignItems: 'center' }}>
              <div style={{ height: '11mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/uqat.webp" alt="UQAT" style={{ maxHeight: '10.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '11mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/link-university.jpeg" alt="Link" style={{ maxHeight: '10.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '11mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/epitech.webp" alt="EPITECH" style={{ maxHeight: '10.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '11mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/psb.webp" alt="PSB" style={{ maxHeight: '10.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '11mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/eklore.webp" alt="éklore" style={{ maxHeight: '10.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '11mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/excelia.webp" alt="Excelia" style={{ maxHeight: '10.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
            </div>
          </div>

          {/* Row 5: Dark Navy Contact Banner */}
          <div style={{
            backgroundColor: '#0A1C3E',
            color: '#FFFFFF',
            borderRadius: '6px',
            padding: '2.5mm 4.5mm',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '18mm',
            boxSizing: 'border-box',
            flexShrink: 0
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div>📞 +216 71 18 26 25</div>
              <div>✉️ info@ebs.tn</div>
              <div>📍 Les Berges du Lac 3 - Tunis</div>
              <div>🌐 www.ebs.tn</div>
            </div>
            <div style={{ fontSize: '7pt', fontWeight: 900, color: '#FF6B00' }}>
              L'EXCELLENCE ACADÉMIQUE AU SERVICE DE VOTRE AVENIR
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
