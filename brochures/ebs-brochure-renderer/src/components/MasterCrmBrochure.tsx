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
  N8nLogo
} from './Logos';
import {
  Target,
  Database,
  BrainCircuit,
  Zap,
  TrendingUp,
  Award,
  Globe,
  Users,
  Briefcase,
  Laptop,
  CheckCircle2,
  CheckSquare,
  GraduationCap,
  Sparkles,
  Rocket,
  BarChart3,
  Layers,
  Search,
  MessageSquareText,
  Clock,
  Compass,
  Repeat,
  UserCheck,
  Building,
  Handshake,
  QrCode,
  Phone,
  Mail,
  MapPin,
  Cpu,
  Bot
} from 'lucide-react';

interface Props {
  data: ProgrammeData;
}

export const MasterCrmBrochure: React.FC<Props> = () => {
  return (
    <div className="brochure-root master-crm-brochure">
      {/* =========================================================================
          PAGE 1 : COVER & HIGH-DENSITY CRM HERO
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
                Master • Bac+5 • 2 ans
              </div>
              <AccreditationBadge />
            </div>
          </div>

          {/* Row 2: Hero Section */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1fr)', gap: '6mm', height: '180mm', flexShrink: 0 }}>
            {/* Left Column */}
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
                  MASTER
                </h2>
                <h1 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '44pt',
                  fontWeight: 900,
                  color: '#0096A6',
                  lineHeight: 0.9,
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                  marginBottom: '2mm'
                }}>
                  CRM &
                </h1>
                <div style={{
                  fontSize: '18pt',
                  fontWeight: 900,
                  color: '#0A1C3E',
                  lineHeight: 1.05,
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                  marginBottom: '3mm'
                }}>
                  TRANSFORMATION DIGITALE
                </div>
                <div style={{ width: '38mm', height: '4.5px', backgroundColor: '#0096A6', marginBottom: '3.5mm', borderRadius: '2px' }} />

                <h3 style={{
                  fontSize: '11pt',
                  fontWeight: 800,
                  color: '#0A1C3E',
                  lineHeight: 1.35,
                  textTransform: 'uppercase',
                  marginBottom: '3mm'
                }}>
                  DEVENEZ UN EXPERT DE LA <span style={{ color: '#0096A6' }}>RELATION CLIENT</span> ET DE LA{' '}
                  <span style={{ color: '#0096A6' }}>TRANSFORMATION DIGITALE</span>.
                </h3>
              </div>

              {/* Editorial Description Box */}
              <div style={{
                backgroundColor: '#F0FDFA',
                borderLeft: '5px solid #0096A6',
                padding: '5.5mm 6.5mm',
                borderRadius: '0 8px 8px 0',
                border: '1.5px solid #CCFBF1',
                borderLeftWidth: '5px'
              }}>
                <p style={{ fontSize: '9.2pt', color: '#334155', lineHeight: 1.55, textAlign: 'justify', marginBottom: '3mm' }}>
                  Devenez un expert de la relation client et de la transformation digitale. Exploitez la data, l'IA et les technologies innovantes pour concevoir des expériences clients uniques et créer de la valeur durable au sein des grandes organisations et startups tech.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2mm', fontSize: '7.8pt', fontWeight: 800, color: '#0A1C3E' }}>
                  <div>✓ HubSpot & Salesforce Workflows</div>
                  <div>✓ n8n & IA Générative Intégrée</div>
                  <div>✓ Data Analytics & Power BI</div>
                  <div>✓ Double Diplomation Internationale</div>
                </div>
              </div>

              {/* 3 Pillar Highlight Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2.5mm' }}>
                <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 2mm', textAlign: 'center' }}>
                  <Users size={16} color="#0096A6" style={{ margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '6.8pt', fontWeight: 900, color: '#0A1C3E' }}>EXPÉRIENCE CLIENT</div>
                  <div style={{ fontSize: '5.5pt', color: '#64748B', marginTop: '0.5mm' }}>Vision 360° & Omnicanal</div>
                </div>
                <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 2mm', textAlign: 'center' }}>
                  <Bot size={16} color="#0A1C3E" style={{ margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '6.8pt', fontWeight: 900, color: '#0A1C3E' }}>AUTOMATION & n8n</div>
                  <div style={{ fontSize: '5.5pt', color: '#64748B', marginTop: '0.5mm' }}>Workflows intelligents</div>
                </div>
                <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 2mm', textAlign: 'center' }}>
                  <BarChart3 size={16} color="#0096A6" style={{ margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '6.8pt', fontWeight: 900, color: '#0A1C3E' }}>DATA & REVOPS</div>
                  <div style={{ fontSize: '5.5pt', color: '#64748B', marginTop: '0.5mm' }}>Business Intelligence</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Campus + CRM Node Visual */}
            <div style={{ height: '100%', width: '100%' }}>
              <AssetPlaceholder
                label="Photo Campus & Nœud CRM 3D"
                sublabel="Bâtiment EBS et schéma central CRM avec icônes connectées"
                height="100%"
              />
            </div>
          </div>

          {/* Row 3: Bottom 6 Value Pillars Banner */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: '2mm',
            backgroundColor: '#0A1C3E',
            color: '#FFFFFF',
            borderRadius: '6px',
            padding: '3mm 2.5mm',
            textAlign: 'center',
            height: '26mm',
            boxSizing: 'border-box',
            alignItems: 'center',
            flexShrink: 0
          }}>
            <div>
              <Users size={20} color="#00BCEB" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '6.5pt', fontWeight: 900, lineHeight: 1.2 }}>CRM & IA</div>
            </div>
            <div style={{ borderLeft: '1px solid #1E293B' }}>
              <BarChart3 size={20} color="#00BCEB" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '6.5pt', fontWeight: 900, lineHeight: 1.2 }}>DATA & BI</div>
            </div>
            <div style={{ borderLeft: '1px solid #1E293B' }}>
              <Bot size={20} color="#00BCEB" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '6.5pt', fontWeight: 900, lineHeight: 1.2 }}>AUTOMATISATION</div>
            </div>
            <div style={{ borderLeft: '1px solid #1E293B' }}>
              <Laptop size={20} color="#00BCEB" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '6.5pt', fontWeight: 900, lineHeight: 1.2 }}>TRANSFORMATION</div>
            </div>
            <div style={{ borderLeft: '1px solid #1E293B' }}>
              <TrendingUp size={20} color="#00BCEB" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '6.5pt', fontWeight: 900, lineHeight: 1.2 }}>REVOPS</div>
            </div>
            <div style={{ borderLeft: '1px solid #1E293B' }}>
              <Award size={20} color="#00BCEB" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '6.5pt', fontWeight: 900, lineHeight: 1.2 }}>CERTIFICATIONS</div>
            </div>
          </div>

          {/* Row 4: Docked Bottom Contact Bar */}
          <div style={{ height: '11mm', flexShrink: 0 }}>
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
                UN PROGRAMME COMPLET ET VISIONNAIRE SUR 2 ANS
              </h3>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '18pt',
                fontWeight: 900,
                color: '#0096A6',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase'
              }}>
                POUR MAÎTRISER LA RELATION CLIENT ET PILOTER LA TRANSFORMATION DIGITALE
              </h2>
              <div style={{ width: '32mm', height: '3.5px', backgroundColor: '#0096A6', margin: '1mm 0 2mm 0' }} />
              <p style={{ fontSize: '7.2pt', color: '#475569', lineHeight: 1.35 }}>
                Pensé pour répondre aux défis actuels des entreprises, ce Master vous forme à piloter la relation client à chaque étape du parcours, à exploiter la data, à automatiser les processus et à conduire la transformation digitale.
              </p>
            </div>

            {/* Dashboard Visual */}
            <div style={{ height: '46mm', width: '100%' }}>
              <AssetPlaceholder label="Photo Analytics & Laptop 3D" sublabel="Dashboard CRM, hexagones IA & Analytics" height="100%" />
            </div>
          </div>

          {/* Row 2: 5 Grands Blocs de Compétences sur 2 Ans */}
          <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '3mm 3.5mm', height: '116mm', boxSizing: 'border-box', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '8pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase' }}>
                LE PROGRAMME EN 5 GRANDS BLOCS DE COMPÉTENCES SUR 2 ANS
              </div>
            </div>

            {/* 5 Column Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2mm', height: '98mm' }}>
              {/* Card 1 */}
              <div style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 2mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5mm' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#0096A6', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Users size={12} />
                    </div>
                    <span style={{ fontSize: '9pt', fontWeight: 900, color: '#0096A6' }}>01</span>
                  </div>
                  <div style={{ fontSize: '6.8pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15, marginBottom: '2mm' }}>
                    CRM STRATÉGIQUE & EXPÉRIENCE CLIENT
                  </div>
                  <div style={{ fontSize: '6pt', color: '#475569', lineHeight: 1.35 }}>
                    • CRM omnicanal<br />
                    • Customer Journey<br />
                    • Fidélisation & Churn<br />
                    • Satisfaction client<br />
                    • Customer Success
                  </div>
                </div>
                <div style={{ backgroundColor: '#0096A6', color: '#FFF', fontSize: '5.2pt', fontWeight: 900, textAlign: 'center', padding: '1.2mm', borderRadius: '3px' }}>
                  VISION 360° CLIENT
                </div>
              </div>

              {/* Card 2 */}
              <div style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 2mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5mm' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#0096A6', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Bot size={12} />
                    </div>
                    <span style={{ fontSize: '9pt', fontWeight: 900, color: '#0096A6' }}>02</span>
                  </div>
                  <div style={{ fontSize: '6.8pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15, marginBottom: '2mm' }}>
                    MARKETING AUTOMATION & CRM INTELLIGENT
                  </div>
                  <div style={{ fontSize: '6pt', color: '#475569', lineHeight: 1.35 }}>
                    • HubSpot Enterprise<br />
                    • Email Automation<br />
                    • Workflows avancés<br />
                    • n8n Open-Source<br />
                    • CRM Automation
                  </div>
                </div>
                <div style={{ backgroundColor: '#0096A6', color: '#FFF', fontSize: '5.2pt', fontWeight: 900, textAlign: 'center', padding: '1.2mm', borderRadius: '3px' }}>
                  AUTOMATISER & ENGAGER
                </div>
              </div>

              {/* Card 3 */}
              <div style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 2mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5mm' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#0096A6', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <BarChart3 size={12} />
                    </div>
                    <span style={{ fontSize: '9pt', fontWeight: 900, color: '#0096A6' }}>03</span>
                  </div>
                  <div style={{ fontSize: '6.8pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15, marginBottom: '2mm' }}>
                    DATA ANALYTICS & BUSINESS INTEL.
                  </div>
                  <div style={{ fontSize: '6pt', color: '#475569', lineHeight: 1.35 }}>
                    • Data Analytics client<br />
                    • Power BI & Dashboards<br />
                    • Customer Analytics<br />
                    • Big Data CRM<br />
                    • Analyse prédictive
                  </div>
                </div>
                <div style={{ backgroundColor: '#0096A6', color: '#FFF', fontSize: '5.2pt', fontWeight: 900, textAlign: 'center', padding: '1.2mm', borderRadius: '3px' }}>
                  COMPRENDRE & PRÉDIRE
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
                  <div style={{ fontSize: '6.8pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15, marginBottom: '2mm' }}>
                    TRANSFORMATION DIGITALE & IA
                  </div>
                  <div style={{ fontSize: '6pt', color: '#475569', lineHeight: 1.35 }}>
                    • IA générative & prompts<br />
                    • Business Analysis<br />
                    • Systèmes d'information<br />
                    • Conduite changement<br />
                    • Innovation digitale
                  </div>
                </div>
                <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', fontSize: '5.2pt', fontWeight: 900, textAlign: 'center', padding: '1.2mm', borderRadius: '3px' }}>
                  INNOVER & TRANSFORMER
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
                  <div style={{ fontSize: '6.8pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15, marginBottom: '2mm' }}>
                    PROFESSIONNALISATION & EXPERTISE
                  </div>
                  <div style={{ fontSize: '6pt', color: '#475569', lineHeight: 1.35 }}>
                    • Études de cas réelles<br />
                    • Soft Skills & Négociation<br />
                    • Certifications pro<br />
                    • Mémoire professionnel<br />
                    • Stage de fin d'études
                  </div>
                </div>
                <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', fontSize: '5.2pt', fontWeight: 900, textAlign: 'center', padding: '1.2mm', borderRadius: '3px' }}>
                  EXPERTISE & IMPACT
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Débouchés (Left) vs Stage Professionnel (Right) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: '4.5mm', height: '56mm', flexShrink: 0 }}>
            {/* Left: 10 Débouchés */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '3mm 3.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase' }}>
                DÉBOUCHÉS : DES MÉTIERS D'AVENIR
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5mm', fontSize: '6.2pt', color: '#1E293B', fontWeight: 700 }}>
                <div>✓ Responsable CRM</div>
                <div>✓ Data Analyst CRM</div>
                <div>✓ Customer Experience Mgr</div>
                <div>✓ Business Intelligence Mgr</div>
                <div>✓ CRM Analytics Manager</div>
                <div>✓ RevOps Manager</div>
                <div>✓ Chef de projet CRM</div>
                <div>✓ Digital Transformation Mgr</div>
                <div>✓ Marketing Automation Mgr</div>
                <div>✓ Consultant CRM & Data</div>
              </div>
            </div>

            {/* Right: Stage & Immersion */}
            <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', borderRadius: '6px', padding: '3mm 3.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Handshake size={20} color="#00BCEB" />
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
          PAGE 3 : 6 RAISONS D'EXCELLENCE, 8 CERTIFICATIONS & 8 COMPÉTENCES
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
                6 RAISONS <br />
                <span style={{ color: '#0096A6' }}>DE CHOISIR L'EXCELLENCE</span> <br />
                POUR CONSTRUIRE VOTRE AVENIR
              </h2>
              <div style={{ width: '32mm', height: '3.5px', backgroundColor: '#0096A6', margin: '1mm 0 2mm 0' }} />
              <p style={{ fontSize: '7.5pt', color: '#475569', lineHeight: 1.4 }}>
                Le Master CRM & Transformation Digitale vous donne les clés pour devenir un leader capable de comprendre vos clients, d'exploiter la donnée et de piloter des stratégies digitales à fort impact.
              </p>
            </div>

            {/* CRM Funnel Visual */}
            <div style={{ height: '50mm', width: '100%' }}>
              <AssetPlaceholder label="Funnel CRM & Dashboard" sublabel="Attirer, Convertir, Engager, Fidéliser & KPIs" height="100%" />
            </div>
          </div>

          {/* Row 2: 6 Hexagonal Reason Cards (3x2 Grid) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5mm', height: '70mm', flexShrink: 0 }}>
            {[
              { id: '01', title: 'CRM & IA AU CŒUR DU PROGRAMME', bullets: ['Comprenez vos clients à 360°', 'Exploitez la data et l’IA prédictive', 'Créez des expériences mémorables'] },
              { id: '02', title: 'CERTIFICATIONS RECONNUES', bullets: ['Validez vos compétences internationales', 'Microsoft, Meta, Google & HubSpot', 'Boostez votre employabilité immédiate'] },
              { id: '03', title: 'PROJETS RÉELS & BUSINESS CASES', bullets: ['Projets concrets d’entreprises partenaires', 'Mise en pratique sur des cas réels', 'Portefeuille de réalisations concrètes'] },
              { id: '04', title: 'OUTILS & PLATEFORMES PROS', bullets: ['Maîtrisez les outils leaders du marché', 'Salesforce, HubSpot, Power BI, n8n', 'Opérationnel dès le premier jour'] },
              { id: '05', title: 'OUVERTURE INTERNATIONALE', bullets: ['Partenariats académiques prestigieux', 'Mobilité vers la France, Italie, Canada', 'Accès à des opportunités mondiales'] },
              { id: '06', title: 'ACCOMPAGNEMENT CARRIÈRE', bullets: ['Coaching et simulations d’entretiens', 'Accès direct au réseau alumni EBS', 'Suivi individualisé vers l’emploi'] }
            ].map((r, idx) => (
              <div key={idx} style={{ backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 3mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1mm' }}>
                  <span style={{ fontSize: '6.8pt', fontWeight: 900, color: '#0096A6' }}>{r.title}</span>
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

          {/* Row 3: Certifications Reconnues (Left) vs Compétences Recherchées (Right) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4mm', height: '62mm', flexShrink: 0 }}>
            {/* Left: 8 Certifications */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '2.5mm 3mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E' }}>CERTIFICATIONS RECONNUES</span>
                <span style={{ fontSize: '5.8pt', fontWeight: 800, color: '#0096A6' }}>INTÉGRÉES</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5mm', textAlign: 'center' }}>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <div style={{ fontSize: '5.2pt', fontWeight: 900 }}>MS Learn</div>
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Microsoft</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <MetaLogo style={{ height: '9px', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Blueprint</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <GoogleLogo style={{ height: '9px', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Prompting</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <IbmLogo style={{ height: '8px', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>watsonx</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <GoogleLogo style={{ height: '9px', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Analytics</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <div style={{ fontSize: '5.2pt', fontWeight: 900, color: '#EAB308' }}>Power BI</div>
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Microsoft</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <N8nLogo style={{ height: '8px', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>n8n Workflows</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <HubspotLogo style={{ height: '9px', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>HubSpot CRM</div>
                </div>
              </div>
            </div>

            {/* Right: 8 Compétences */}
            <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', borderRadius: '6px', padding: '2.5mm 3mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#00BCEB' }}>
                LES COMPÉTENCES LES PLUS RECHERCHÉES
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5mm', textAlign: 'center', fontSize: '5.2pt' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '1.2mm', borderRadius: '3px' }}>CRM Omnicanal</div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '1.2mm', borderRadius: '3px' }}>Customer Exp.</div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '1.2mm', borderRadius: '3px' }}>Business Intel.</div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '1.2mm', borderRadius: '3px' }}>IA & Data Science</div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '1.2mm', borderRadius: '3px' }}>Automation Workflows</div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '1.2mm', borderRadius: '3px' }}>Data Analytics</div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '1.2mm', borderRadius: '3px' }}>Transfo Digitale</div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '1.2mm', borderRadius: '3px' }}>RevOps & Perf.</div>
              </div>
            </div>
          </div>

          {/* Row 4: Quotation Banner */}
          <div style={{
            backgroundColor: '#F0FDFA',
            border: '1px solid #0096A6',
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
            « Un Master pour ceux qui veulent comprendre leurs clients, transformer les données en décisions et créer de la valeur durable. »
          </div>

          {/* Row 5: Footer */}
          <div style={{ height: '9mm', flexShrink: 0 }}>
            <BottomContactBar slogan="L’EXCELLENCE ACADÉMIQUE AU SERVICE DE VOTRE AVENIR" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          PAGE 4 : ENGAGEMENT, PARTNERS (ACADEMIC & ENTERPRISE) & CTA
          ========================================================================= */}
      <section className="page page-4" id="page-4" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="page-inner" style={{ padding: '8mm 10mm', display: 'flex', flexDirection: 'column', gap: '3mm', height: '100%', boxSizing: 'border-box' }}>
          {/* Row 1: Top Banner */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5mm', alignItems: 'center', height: '44mm', flexShrink: 0 }}>
            <div>
              <h3 style={{ fontSize: '8.5pt', fontWeight: 900, color: '#0A1C3E', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                MASTER EN CRM & TRANSFORMATION DIGITALE
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
                VOTRE AVENIR, NOTRE ENGAGEMENT.
              </h2>
              <div style={{ width: '32mm', height: '3.5px', backgroundColor: '#0096A6', margin: '1mm 0 2mm 0' }} />
              <p style={{ fontSize: '6.8pt', color: '#475569', lineHeight: 1.35 }}>
                À EBS, nous formons les futurs experts du CRM, de la transformation digitale et de l'expérience client capables d'accompagner les entreprises dans leur évolution numérique.
              </p>
            </div>

            {/* Right Visual */}
            <div style={{ height: '42mm', width: '100%' }}>
              <AssetPlaceholder label="Dashboard CRM Tablette & Skyline" sublabel="Interface client connectée avec 75% KPI" height="100%" />
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
          <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '2.5mm 3.5mm', height: '40mm', boxSizing: 'border-box', flexShrink: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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

          {/* Row 4: Parcours à EBS (Left) vs Prêt à passer à l'action (Right CTA) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: '4mm', height: '48mm', flexShrink: 0 }}>
            {/* Left: Parcours */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '2.5mm 3mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E', marginBottom: '0.8mm' }}>
                  VOTRE PARCOURS À EBS
                </div>
                <div style={{ fontSize: '6pt', color: '#475569', lineHeight: 1.3 }}>
                  Vous intégrez un parcours structuré associant CRM, transformation digitale, IA, Business Intelligence, projets réels et stage en entreprise.
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '5.2pt', fontWeight: 800, color: '#0096A6', textAlign: 'center', borderTop: '1px dotted #CBD5E1', paddingTop: '1.5mm' }}>
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
