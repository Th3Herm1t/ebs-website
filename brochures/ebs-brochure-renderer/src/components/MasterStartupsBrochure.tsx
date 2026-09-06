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
  PmiLogo,
  ScrumStudyLogo,
  N8nLogo
} from './Logos';
import {
  Rocket,
  Target,
  BrainCircuit,
  Zap,
  TrendingUp,
  Award,
  Globe,
  Users,
  Briefcase,
  Laptop,
  CheckSquare,
  UserCheck,
  GraduationCap,
  Sparkles,
  BarChart3,
  Layers,
  Search,
  MessageSquareText,
  Clock,
  Compass,
  Repeat,
  Lightbulb,
  QrCode,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Gem,
  Kanban
} from 'lucide-react';

interface Props {
  data: ProgrammeData;
}

export const MasterStartupsBrochure: React.FC<Props> = () => {
  return (
    <div className="brochure-root master-startups-brochure">
      {/* =========================================================================
          PAGE 1 : COVER & HIGH-DENSITY STARTUP HERO
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

          {/* Row 2: Hero Section */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1.05fr)', gap: '6mm', height: '124mm', flexShrink: 0 }}>
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
                  MASTER EN
                </h2>
                <h1 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '25pt',
                  fontWeight: 900,
                  color: '#0A1C3E',
                  lineHeight: 1.05,
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                  marginBottom: '2mm'
                }}>
                  MANAGEMENT DE PROJETS <br />
                  <span style={{ color: '#0070F3' }}>INNOVANTS & STARTUPS</span>
                </h1>
                <div style={{ width: '38mm', height: '4px', backgroundColor: '#0070F3', marginBottom: '3mm', borderRadius: '2px' }} />

                <h3 style={{
                  fontSize: '11pt',
                  fontWeight: 800,
                  color: '#0A1C3E',
                  lineHeight: 1.35,
                  textTransform: 'uppercase',
                  marginBottom: '3mm'
                }}>
                  PILOTEZ LES PROJETS. TRANSFORMEZ LES IDÉES. <br />
                  <span style={{ color: '#FF7A00' }}>CRÉEZ L'AVENIR.</span>
                </h3>
              </div>

              {/* Editorial Description Box */}
              <div style={{
                backgroundColor: '#EFF6FF',
                borderLeft: '5px solid #0070F3',
                padding: '4.5mm 5.5mm',
                borderRadius: '0 8px 8px 0',
                border: '1.5px solid #DBEAFE',
                borderLeftWidth: '5px'
              }}>
                <p style={{ fontSize: '8.8pt', color: '#334155', lineHeight: 1.5, textAlign: 'justify', marginBottom: '2.5mm' }}>
                  Ce Master vous forme à devenir un leader capable de concevoir, financer et piloter des projets innovants et des startups à forte valeur ajoutée. Grâce à l’agilité, l’IA appliquée et l’accompagnement par des incubateurs de référence.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5mm', fontSize: '7.5pt', fontWeight: 800, color: '#0A1C3E' }}>
                  <div>✓ Méthodes Agiles & Scrum</div>
                  <div>✓ Lean Startup & Incubation</div>
                  <div>✓ Financement de l'innovation</div>
                  <div>✓ Double Diplomation France</div>
                </div>
              </div>
            </div>

            {/* Right Column: Startup Team Blueprints Visual */}
            <div style={{ height: '100%', width: '100%' }}>
              <AssetPlaceholder
                label="Photo Équipe Startup Réunion"
                sublabel="Quatre fondateurs analysant un plan de projet avec icône fusée"
                height="100%"
              />
            </div>
          </div>

          {/* Row 3: 6 Navy Value Pillars */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '2mm',
            backgroundColor: '#0A1C3E',
            color: '#FFFFFF',
            borderRadius: '6px',
            padding: '3mm 2.5mm',
            textAlign: 'center',
            height: '24mm',
            boxSizing: 'border-box',
            alignItems: 'center',
            flexShrink: 0
          }}>
            <div>
              <Kanban size={18} color="#00BCEB" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '6.2pt', fontWeight: 900, lineHeight: 1.2 }}>MANAGEMENT DE PROJET</div>
            </div>
            <div style={{ borderLeft: '1px solid #1E293B' }}>
              <Lightbulb size={18} color="#00BCEB" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '6.2pt', fontWeight: 900, lineHeight: 1.2 }}>INNOVATION & STARTUPS</div>
            </div>
            <div style={{ borderLeft: '1px solid #1E293B' }}>
              <Repeat size={18} color="#00BCEB" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '6.2pt', fontWeight: 900, lineHeight: 1.2 }}>AGILITÉ & LEAN</div>
            </div>
            <div style={{ borderLeft: '1px solid #1E293B' }}>
              <BarChart3 size={18} color="#00BCEB" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '6.2pt', fontWeight: 900, lineHeight: 1.2 }}>BUSINESS ANALYSIS & IA</div>
            </div>
            <div style={{ borderLeft: '1px solid #1E293B' }}>
              <BrainCircuit size={18} color="#00BCEB" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '6.2pt', fontWeight: 900, lineHeight: 1.2 }}>IA APPLIQUÉE</div>
            </div>
            <div style={{ borderLeft: '1px solid #1E293B' }}>
              <Rocket size={18} color="#00BCEB" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '6.2pt', fontWeight: 900, lineHeight: 1.2 }}>ENTREPRENEURIAT</div>
            </div>
          </div>

          {/* Row 4: Split Banner (Accreditation & Copy Left vs Campus Photo Right) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5mm', height: '62mm', flexShrink: 0, alignItems: 'stretch' }}>
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '3.5mm 4mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Award size={26} color="#0070F3" />
                <div>
                  <div style={{ fontSize: '8.5pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase' }}>
                    MASTER ACCRÉDITÉ PAR L'ÉTAT TUNISIEN
                  </div>
                  <div style={{ fontSize: '6.5pt', color: '#64748B' }}>Diplôme national Bac+5 reconnu</div>
                </div>
              </div>
              <div style={{ borderTop: '1px dotted #CBD5E1', paddingTop: '2mm' }}>
                <div style={{ fontSize: '8pt', fontWeight: 900, color: '#0A1C3E', marginBottom: '1mm' }}>
                  DEVENEZ LE MANAGER QUI TRANSFORME LES IDÉES EN PROJETS À SUCCÈS
                </div>
                <p style={{ fontSize: '7pt', color: '#475569', lineHeight: 1.4 }}>
                  Grâce à l'IA et à l'innovation, développez les compétences clés pour piloter, innover et entreprendre. Nos partenariats académiques et incubateurs partenaires maximisent votre employabilité.
                </p>
              </div>
            </div>

            <div style={{ height: '100%', width: '100%' }}>
              <AssetPlaceholder label="Photo Campus EBS" sublabel="Façade Campus moderne & étudiants" height="100%" />
            </div>
          </div>

          {/* Row 5: Docked Bottom Contact Bar */}
          <div style={{ height: '10mm', flexShrink: 0 }}>
            <BottomContactBar slogan="L'EXCELLENCE ACADÉMIQUE AU SERVICE DE VOTRE AVENIR" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          PAGE 2 : CURRICULUM EN 4 SEMESTRES & STAGE
          ========================================================================= */}
      <section className="page page-2" id="page-2" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="page-inner" style={{ padding: '8mm 10mm', display: 'flex', flexDirection: 'column', gap: '3.5mm', height: '100%', boxSizing: 'border-box' }}>
          {/* Row 1: Top Banner */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '5mm', alignItems: 'center', height: '44mm', flexShrink: 0 }}>
            <div>
              <h3 style={{ fontSize: '8.5pt', fontWeight: 900, color: '#0A1C3E', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                MASTER MANAGEMENT DE PROJETS INNOVANTS & STARTUPS
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
                Devenez un leader de projets innovants et startups à l'ère de l'IA. Ce Master vous prépare à concevoir, piloter et réussir des projets innovants et des startups performantes grâce à l'innovation, l'agilité et la transformation digitale.
              </p>
            </div>

            {/* Brainstorm visual */}
            <div style={{ height: '42mm', width: '100%' }}>
              <AssetPlaceholder label="Photo Brainstorming Startup" sublabel="Trois étudiants souriants avec ordinateur et post-its" height="100%" />
            </div>
          </div>

          {/* Row 2: 4 Semestre Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2mm', height: '122mm', flexShrink: 0 }}>
            {[
              {
                sem: '1',
                title: 'FONDAMENTAUX DU MANAGEMENT ET DE L’INNOVATION',
                icon: Kanban,
                modules: ['Management de projet', 'Fondamentaux du management', 'Marketing de l’innovation', 'Comprendre les données avec l’IA', 'Outils collaboratifs & digitaux', 'Analyse professionnelle']
              },
              {
                sem: '2',
                title: 'MÉTHODES ET OUTILS AGILES & STARTUP',
                icon: Rocket,
                modules: ['Gestion financière de projet', 'Méthodes agiles & Lean Startup', 'Design Thinking & UX', 'Business Intelligence', 'Intelligence artificielle appliquée', 'Soft skills & Pitching']
              },
              {
                sem: '3',
                title: 'RISQUES, STRATÉGIE ET FINANCEMENT',
                icon: Target,
                modules: ['Gestion des risques', 'Modélisation économique', 'Droit des affaires & IP', 'Startup Management', 'Financement de l’innovation & VC']
              },
              {
                sem: '4',
                title: 'LEADERSHIP, CROISSANCE ET INCUBATION',
                icon: TrendingUp,
                modules: ['Stratégie & croissance (Scale-up)', 'Management d’équipe & leadership', 'Éthique & responsabilité (RSE)', 'Projet de fin d’études (PFE)', 'Accompagnement startup / Incubation']
              }
            ].map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} style={{
                  backgroundColor: '#F8FAFC',
                  border: '1.5px solid #CBD5E1',
                  borderRadius: '6px',
                  padding: '2.5mm 3.5mm',
                  display: 'grid',
                  gridTemplateColumns: '24mm 1.3fr 2.2fr',
                  gap: '4mm',
                  alignItems: 'center',
                  flexGrow: 1
                }}>
                  <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', padding: '2mm', borderRadius: '4px', textAlign: 'center' }}>
                    <div style={{ fontSize: '5.5pt', fontWeight: 900, textTransform: 'uppercase' }}>SEMESTRE</div>
                    <div style={{ fontSize: '14pt', fontWeight: 900, lineHeight: 1 }}>{s.sem}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Icon size={16} color="#0070F3" />
                    <div style={{ fontSize: '7.2pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.2 }}>{s.title}</div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1mm', fontSize: '5.8pt', color: '#475569', lineHeight: 1.25 }}>
                    {s.modules.map((m, i) => (
                      <div key={i}>• {m}</div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Row 3: Débouchés (Left) vs Desk Photo (Center) vs Stage (Right) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1.15fr', gap: '4mm', height: '54mm', flexShrink: 0 }}>
            {/* Left: Débouchés */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '2.5mm 3mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '7.2pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase' }}>
                DÉBOUCHÉS PROFESSIONNELS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1mm', fontSize: '5.8pt', color: '#1E293B', fontWeight: 700 }}>
                <div>✓ Chef de projet innovant</div>
                <div>✓ Product Owner / Scrum Master</div>
                <div>✓ Consultant en innovation & transfo</div>
                <div>✓ Entrepreneur / Fondateur de startup</div>
                <div>✓ Responsable incubation ou accélération</div>
              </div>
            </div>

            {/* Center: Desk visual */}
            <div style={{ height: '100%' }}>
              <AssetPlaceholder label="Photo Desk & Dashboard" sublabel="Ordinateur avec graphiques et tasse de café" height="100%" />
            </div>

            {/* Right: Stage & Projet */}
            <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', borderRadius: '6px', padding: '2.5mm 3.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Briefcase size={16} color="#00BCEB" />
                <div style={{ fontSize: '7pt', fontWeight: 900, color: '#00BCEB' }}>
                  STAGE & PROJET DE FIN D'ÉTUDES
                </div>
              </div>
              <p style={{ fontSize: '5.8pt', color: '#CBD5E1', lineHeight: 1.35 }}>
                Mise en pratique en entreprise à travers un stage professionnalisant et la réalisation d'un projet de fin d'études innovant ou entrepreneurial.
              </p>
              <div style={{ fontSize: '5.5pt', color: '#94A3B8' }}>
                Accompagnement dédié par notre incubateur partenaire.
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
          PAGE 3 : 6 RAISONS D'EXCELLENCE, 9 CERTIFICATIONS & 8 COMPÉTENCES
          ========================================================================= */}
      <section className="page page-3" id="page-3" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="page-inner" style={{ padding: '8mm 10mm', display: 'flex', flexDirection: 'column', gap: '3.5mm', height: '100%', boxSizing: 'border-box' }}>
          {/* Row 1: Top Banner */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5mm', alignItems: 'center', height: '52mm', flexShrink: 0 }}>
            <div>
              <h3 style={{ fontSize: '8.5pt', fontWeight: 900, color: '#0A1C3E', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                6 RAISONS
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
                DE CHOISIR CE MASTER <br />
                <span style={{ color: '#0070F3' }}>POUR CONSTRUIRE VOTRE AVENIR</span>
              </h2>
              <div style={{ width: '32mm', height: '3.5px', backgroundColor: '#0070F3', margin: '1mm 0 2mm 0' }} />
              <p style={{ fontSize: '7.2pt', color: '#475569', lineHeight: 1.4 }}>
                Ce Master vous donne les clés pour devenir un leader capable de concevoir, piloter et réussir des projets innovants et des startups à fort impact.
              </p>
            </div>

            {/* Gantt visual */}
            <div style={{ height: '50mm', width: '100%' }}>
              <AssetPlaceholder label="Planning Gantt & Agile 3D" sublabel="Ordinateur portable avec calendrier et icônes d'équipe" height="100%" />
            </div>
          </div>

          {/* Row 2: 6 Reason Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5mm', height: '70mm', flexShrink: 0 }}>
            {[
              { id: '01', title: 'APPROCHE ORIENTÉE RÉSULTATS', bullets: ['Pédagogie active basée sur des projets', 'Résolution de cas réels d’entreprises', 'Vision stratégique et opérationnelle'] },
              { id: '02', title: 'COMPÉTENCES RECONNUES', bullets: ['Certifications internationales incluses', 'Méthodes agiles & Lean Management', 'Employabilité renforcée sur le marché'] },
              { id: '03', title: 'DES PROJETS CONCRETS', bullets: ['Travaillez sur des projets innovants', 'Business cases et études de marché réelles', 'Mise en pratique dès le premier semestre'] },
              { id: '04', title: 'OUTILS & PLATEFORMES PROS', bullets: ['Utilisation des meilleurs outils du marché', 'Plateformes collaboratives & n8n', 'Préparation au travail moderne'] },
              { id: '05', title: 'OUVERTURE INTERNATIONALE', bullets: ['Partenariats académiques prestigieux', 'Opportunités d’échanges et de mobilité', 'Carrière internationale facilitée'] },
              { id: '06', title: 'ACCOMPAGNEMENT PERSONNALISÉ', bullets: ['Coaching et suivi par des professionnels', 'Développement du leadership', 'Réseau alumni actif et opportunités'] }
            ].map((r, idx) => (
              <div key={idx} style={{ backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 3mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1mm' }}>
                  <span style={{ fontSize: '6.8pt', fontWeight: 900, color: '#0070F3' }}>{r.title}</span>
                  <span style={{ fontSize: '8pt', fontWeight: 900, color: '#0A1C3E' }}>{r.id}</span>
                </div>
                <div style={{ fontSize: '5.8pt', color: '#475569', lineHeight: 1.3 }}>
                  {r.bullets.map((b, i) => (
                    <div key={i}>• {b}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Row 3: Certifications Incluses (Left) vs Compétences Clés (Right) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: '4mm', height: '62mm', flexShrink: 0 }}>
            {/* Left: 9 Certifications */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '2.5mm 3mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '7.2pt', fontWeight: 900, color: '#0A1C3E' }}>CERTIFICATIONS INCLUSES DANS LE PARCOURS</span>
                <span style={{ fontSize: '5.5pt', fontWeight: 800, color: '#0070F3' }}>OFFERTES</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5mm', textAlign: 'center' }}>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <GoogleLogo style={{ height: '9px', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Google PM</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <PmiLogo style={{ height: '9px', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Disciplined Agile</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <div style={{ fontSize: '5pt', fontWeight: 900, color: '#D97706' }}>MSI Six Sigma</div>
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>White Belt</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <ScrumStudyLogo style={{ height: '9px', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Scrum Operations</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <ScrumStudyLogo style={{ height: '9px', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Scrum with AI SAC™</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <IbmLogo style={{ height: '8px', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Agentic AI</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <IbmLogo style={{ height: '8px', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Generative AI</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <div style={{ fontSize: '5pt', fontWeight: 900, color: '#EAB308' }}>Power BI</div>
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Microsoft</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <N8nLogo style={{ height: '8px', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>n8n Automation</div>
                </div>
              </div>
            </div>

            {/* Right: 8 Compétences */}
            <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', borderRadius: '6px', padding: '2.5mm 3mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '7.2pt', fontWeight: 900, color: '#00BCEB' }}>
                DES COMPÉTENCES CLÉS POUR RÉUSSIR
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1mm', fontSize: '5.4pt' }}>
                <div>• Gestion de projet avancée</div>
                <div>• Méthodes agiles & Lean</div>
                <div>• Analyse données & BI</div>
                <div>• Leadership & management</div>
                <div>• Innovation & Design Thinking</div>
                <div>• Entrepreneuriat & valeur</div>
                <div>• Finance de l’innovation</div>
                <div>• Communication & négociation</div>
              </div>
            </div>
          </div>

          {/* Row 4: Quotation Banner */}
          <div style={{
            backgroundColor: '#EFF6FF',
            border: '1px solid #0070F3',
            borderRadius: '6px',
            padding: '2mm 4mm',
            textAlign: 'center',
            fontSize: '6.8pt',
            fontWeight: 800,
            color: '#0A1C3E',
            height: '14mm',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            « Un Master pour devenir un leader capable de transformer vos idées en projets et vos projets en succès durables. »
          </div>

          {/* Row 5: Footer */}
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
                MASTER EN MANAGEMENT DE PROJETS INNOVANTS & STARTUPS
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
                À EBS, nous formons des leaders capables de concevoir, piloter et transformer des idées en projets à fort impact et des startups performantes.
              </p>
            </div>

            {/* Right Visual: Radial project node & laptop */}
            <div style={{ height: '42mm', width: '100%' }}>
              <AssetPlaceholder label="Schéma Radial Projet Réussi" sublabel="Stratégie, Innovation, Collaboration, Leadership, Performance, Agilité" height="100%" />
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
                <img src="/images/partenaires-academiques/ifag.webp" alt="IFAG" style={{ maxHeight: '9.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '10mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/idrac.webp" alt="IDRAC" style={{ maxHeight: '9.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '10mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/psb.webp" alt="PSB" style={{ maxHeight: '9.5mm', maxWidth: '100%', objectFit: 'contain' }} />
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
              <div style={{ fontWeight: 900, fontSize: '7.5pt', color: '#DC2626' }}>TMI</div>
              <div style={{ fontWeight: 900, fontSize: '7.5pt', color: '#EA580C' }}>SOPRA HR</div>
              <div style={{ fontWeight: 900, fontSize: '6.5pt', color: '#0A1C3E' }}>ARFORGHE</div>
              <div style={{ fontWeight: 900, fontSize: '7.5pt', color: '#DC2626' }}>ASTEELFLASH</div>
              <div style={{ fontWeight: 900, fontSize: '7.5pt', color: '#DC2626' }}>ATB BANK</div>
            </div>
          </div>

          {/* Row 4: Parcours (Left), CTA & QR (Center), 3 Pillars (Right) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr 45mm', gap: '3.5mm', height: '48mm', flexShrink: 0 }}>
            {/* Left: Parcours */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '2.5mm 3mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '7pt', fontWeight: 900, color: '#0A1C3E', marginBottom: '0.8mm' }}>
                  VOTRE PARCOURS À EBS
                </div>
                <div style={{ fontSize: '5.6pt', color: '#475569', lineHeight: 1.25 }}>
                  Un parcours professionnalisant alliant management de projet, innovation, IA, projets réels et stages en entreprise.
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '4.8pt', fontWeight: 800, color: '#0070F3', textAlign: 'center' }}>
                <div>Admission</div>
                <div>→</div>
                <div>Formation</div>
                <div>→</div>
                <div>Certifications</div>
                <div>→</div>
                <div>Diplôme</div>
              </div>
            </div>

            {/* Center: Dark CTA Box with QR Code */}
            <div style={{
              backgroundColor: '#0A1C3E',
              color: '#FFFFFF',
              borderRadius: '6px',
              padding: '2.5mm 3mm',
              display: 'grid',
              gridTemplateColumns: '1fr 20mm',
              gap: '2mm',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontSize: '7pt', fontWeight: 900, color: '#00BCEB', marginBottom: '0.5mm' }}>
                  PRÊT À PASSER À L'ACTION ?
                </div>
                <div style={{ fontSize: '5.2pt', color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: '0.5mm' }}>
                  <div>📞 (+216) 71 18 26 25</div>
                  <div>✉️ info@ebs.tn</div>
                  <div>🌐 www.ebs.tn</div>
                  <div>📍 Lac 3 - Tunis, Tunisie</div>
                </div>
              </div>
              <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', textAlign: 'center' }}>
                <QrCode size={36} color="#0A1C3E" style={{ margin: '0 auto' }} />
                <div style={{ fontSize: '4.2pt', fontWeight: 900, color: '#0A1C3E' }}>SCANNEZ MOI</div>
              </div>
            </div>

            {/* Right: 3 Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5mm', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '6pt', fontWeight: 900, color: '#0A1C3E' }}>
                <Gem size={14} color="#0070F3" /> EXCELLENCE
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '6pt', fontWeight: 900, color: '#0A1C3E' }}>
                <Globe size={14} color="#0070F3" /> OUVERTURE
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '6pt', fontWeight: 900, color: '#0A1C3E' }}>
                <TrendingUp size={14} color="#0070F3" /> EMPLOYABILITÉ
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
