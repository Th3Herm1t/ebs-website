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
  CiscoLogo,
  MetaLogo,
  HubspotLogo
} from './Logos';
import {
  Megaphone,
  Share2,
  Search,
  BarChart3,
  TrendingUp,
  BrainCircuit,
  Award,
  Globe,
  Briefcase,
  Users,
  Presentation,
  CheckSquare,
  UserCheck,
  GraduationCap,
  Laptop,
  Target,
  Rocket,
  Send,
  Sparkles,
  Smartphone,
  Eye,
  MessageSquareText,
  MousePointerClick
} from 'lucide-react';

interface Props {
  data: ProgrammeData;
}

export const LicenceMarketingBrochure: React.FC<Props> = () => {
  return (
    <div className="brochure-root licence-marketing-brochure">
      {/* =========================================================================
          PAGE 1 : COVER & HIGH-DENSITY MARKETING HERO
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
                  LICENCE EN
                </h2>
                <h1 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '44pt',
                  fontWeight: 900,
                  color: '#7A1CAC',
                  lineHeight: 0.9,
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                  marginBottom: '3mm'
                }}>
                  MARKETING
                </h1>
                <div style={{ width: '38mm', height: '5px', backgroundColor: '#7A1CAC', marginBottom: '4mm', borderRadius: '2px' }} />

                <h3 style={{
                  fontSize: '11.5pt',
                  fontWeight: 800,
                  color: '#0A1C3E',
                  lineHeight: 1.35,
                  textTransform: 'uppercase',
                  marginBottom: '3mm'
                }}>
                  MAÎTRISEZ LE <span style={{ color: '#7A1CAC' }}>MARKETING DIGITAL</span>, EXPLOITEZ{' '}
                  <span style={{ color: '#7A1CAC' }}>L'INTELLIGENCE ARTIFICIELLE</span> ET CRÉEZ DES STRATÉGIES À FORT IMPACT.
                </h3>
              </div>

              {/* Editorial Description Box */}
              <div style={{
                backgroundColor: '#FAF5FF',
                borderLeft: '5px solid #7A1CAC',
                padding: '5.5mm 6.5mm',
                borderRadius: '0 8px 8px 0',
                border: '1.5px solid #F3E8FF',
                borderLeftWidth: '5px'
              }}>
                <p style={{ fontSize: '9.2pt', color: '#334155', lineHeight: 1.55, textAlign: 'justify', marginBottom: '3mm' }}>
                  Cette Licence forme des professionnels capables de comprendre les besoins des consommateurs, d'analyser les tendances du marché et de concevoir des stratégies marketing performantes. De la création de contenu à l'analyse de données, en passant par la communication digitale, vous développerez les compétences clés dans un monde connecté.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2mm', fontSize: '7.8pt', fontWeight: 800, color: '#0A1C3E' }}>
                  <div>✓ SEO, Google Ads & Social Ads</div>
                  <div>✓ Certifications Meta & HubSpot</div>
                  <div>✓ Growth Hacking & IA Marketing</div>
                  <div>✓ Double diplomation internationale</div>
                </div>
              </div>

              {/* 3 Pillar Highlight Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2.5mm' }}>
                <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 2mm', textAlign: 'center' }}>
                  <Megaphone size={16} color="#7A1CAC" style={{ margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '6.8pt', fontWeight: 900, color: '#0A1C3E' }}>DIGITAL & DATA</div>
                  <div style={{ fontSize: '5.5pt', color: '#64748B', marginTop: '0.5mm' }}>Google & Meta Ads</div>
                </div>
                <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 2mm', textAlign: 'center' }}>
                  <BrainCircuit size={16} color="#0A1C3E" style={{ margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '6.8pt', fontWeight: 900, color: '#0A1C3E' }}>IA & CRÉATION</div>
                  <div style={{ fontSize: '5.5pt', color: '#64748B', marginTop: '0.5mm' }}>Copywriting & Chatbots</div>
                </div>
                <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 2mm', textAlign: 'center' }}>
                  <Globe size={16} color="#7A1CAC" style={{ margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '6.8pt', fontWeight: 900, color: '#0A1C3E' }}>DOUBLE DIPLÔME</div>
                  <div style={{ fontSize: '5.5pt', color: '#64748B', marginTop: '0.5mm' }}>France • Italie • Canada</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual */}
            <div style={{ height: '100%', width: '100%' }}>
              <AssetPlaceholder
                label="Photo Marketeuse & Laptop"
                sublabel="Étudiante travaillant sur ordinateur avec graphiques et tasse EBS"
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
              <Megaphone size={24} color="#7A1CAC" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '7.8pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15 }}>MARKETING DIGITAL</div>
            </div>
            <div style={{ borderLeft: '1px solid #CBD5E1' }}>
              <BrainCircuit size={24} color="#0A1C3E" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '7.8pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15 }}>IA APPLIQUÉE</div>
            </div>
            <div style={{ borderLeft: '1px solid #CBD5E1' }}>
              <Target size={24} color="#7A1CAC" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '7.8pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15 }}>STRATÉGIES IMPACT</div>
            </div>
            <div style={{ borderLeft: '1px solid #CBD5E1' }}>
              <BarChart3 size={24} color="#0A1C3E" style={{ margin: '0 auto 1mm auto' }} />
              <div style={{ fontSize: '7.8pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15 }}>PERFORMANCE MESURÉE</div>
            </div>
            <div style={{ borderLeft: '1px solid #CBD5E1' }}>
              <Users size={24} color="#7A1CAC" style={{ margin: '0 auto 1mm auto' }} />
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
                LICENCE EN MARKETING
              </h3>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '22pt',
                fontWeight: 900,
                color: '#7A1CAC',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase'
              }}>
                MARKETER DE DEMAIN
              </h2>
              <div style={{ width: '32mm', height: '3.5px', backgroundColor: '#7A1CAC', margin: '1mm 0 2mm 0' }} />
              <p style={{ fontSize: '7.5pt', color: '#475569', lineHeight: 1.35 }}>
                Un programme complet pour devenir un marketer complet, agile, capable de concevoir des campagnes omnicanales et de piloter les outils d'IA les plus avancés.
              </p>
            </div>

            {/* Campus photo */}
            <div style={{ height: '46mm', width: '100%' }}>
              <AssetPlaceholder label="Photo Campus EBS" sublabel="Façade Campus & étudiants entrant" height="100%" />
            </div>
          </div>

          {/* Row 2: 10 Modules (Left) vs 9 Certifications (Right) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '4.5mm', height: '116mm', flexShrink: 0 }}>
            {/* Left: 10 Modules */}
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
                  { id: '01', title: 'FONDEMENTS DU MARKETING & COMPORTEMENT' },
                  { id: '02', title: 'MARKETING DIGITAL STRATÉGIQUE & E-COMMERCE' },
                  { id: '03', title: 'SEO / SEA & RÉFÉRENCEMENT GOOGLE ADS' },
                  { id: '04', title: 'SOCIAL MEDIA MARKETING & COMMUNITY MGMT' },
                  { id: '05', title: 'GOOGLE ANALYTICS 4 - ANALYSE DE PERFORMANCES' },
                  { id: '06', title: 'CONTENT MARKETING, COPYWRITING & STORYTELLING' },
                  { id: '07', title: 'CRM, RELATION CLIENT & HUBSPOT AUTOMATION' },
                  { id: '08', title: 'LINKEDIN MARKETING & SOCIAL SELLING B2B' },
                  { id: '09', title: 'IA APPLIQUÉE AU MARKETING' },
                  { id: '10', title: 'PUBLICITÉ PROGRAMMATIQUE (DV360, SA360)' }
                ].map((m, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '6.8pt', borderBottom: i < 9 ? '1px dotted #CBD5E1' : 'none', paddingBottom: '0.6mm' }}>
                    <span style={{ backgroundColor: '#7A1CAC', color: '#FFF', fontSize: '6.5pt', fontWeight: 900, padding: '1px 5px', borderRadius: '3px', flexShrink: 0 }}>
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
                  <span style={{ fontSize: '6.2pt', fontWeight: 800, color: '#7A1CAC', backgroundColor: '#FAF5FF', padding: '1.5px 5px', borderRadius: '3px' }}>OFFERTES</span>
                </div>
                <div style={{ fontSize: '6.2pt', color: '#64748B', marginTop: '0.5mm' }}>
                  Certifications internationales reconnues par les agences et entreprises :
                </div>
              </div>

              {/* 3x3 Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.8mm', textAlign: 'center' }}>
                <div style={{ backgroundColor: '#FFF', padding: '1.5mm 1mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <CiscoLogo style={{ height: '11px', margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '5.2pt', fontWeight: 800, color: '#1E293B' }}>Cisco Apply AI</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1.5mm 1mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <PwcLogo style={{ height: '11px', margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '5.2pt', fontWeight: 800, color: '#1E293B' }}>PwC Outils IA</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1.5mm 1mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <MetaLogo style={{ height: '11px', margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '5.2pt', fontWeight: 800, color: '#1E293B' }}>Meta Associate</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1.5mm 1mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <IbmLogo style={{ height: '10px', margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '5.2pt', fontWeight: 800, color: '#1E293B' }}>IBM Chatbots IA</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1.5mm 1mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <div style={{ fontSize: '5pt', fontWeight: 900, color: '#EA580C' }}>SEMRUSH</div>
                  <div style={{ fontSize: '5.2pt', fontWeight: 800, color: '#1E293B' }}>Content & SEO</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1.5mm 1mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <GoogleLogo style={{ height: '11px', margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '5.2pt', fontWeight: 800, color: '#1E293B' }}>AI Performance Ads</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1.5mm 1mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <div style={{ fontSize: '5pt', fontWeight: 900, color: '#EA580C' }}>SEMRUSH</div>
                  <div style={{ fontSize: '5.2pt', fontWeight: 800, color: '#1E293B' }}>Beginner SEO</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1.5mm 1mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <HubspotLogo style={{ height: '11px', margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '5.2pt', fontWeight: 800, color: '#1E293B' }}>Digital Marketing</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1.5mm 1mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                  <GoogleLogo style={{ height: '11px', margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '5.2pt', fontWeight: 800, color: '#1E293B' }}>Ads Measurement</div>
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
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#7A1CAC', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Briefcase size={18} color="#FFF" />
              </div>
              <div>
                <div style={{ fontSize: '8pt', fontWeight: 900, color: '#0A1C3E' }}>STAGE PROFESSIONNEL</div>
                <div style={{ fontSize: '6.5pt', color: '#7A1CAC', fontWeight: 800 }}>AGENCE & ANNONCEUR</div>
              </div>
            </div>
            <div style={{ fontSize: '6.8pt', color: '#334155', lineHeight: 1.35, borderLeft: '2px solid #CBD5E1', paddingLeft: '3mm' }}>
              Un stage en entreprise d'une durée de 2 à 3 mois au cours du cursus pour développer vos compétences opérationnelles en digital, analytics et média.
            </div>
            <div style={{ height: '22mm' }}>
              <AssetPlaceholder label="Photo Stage Marketing" sublabel="Marketeuse et interface Data" height="100%" />
            </div>
          </div>

          {/* Row 4: 7 Career Outcomes */}
          <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '2.5mm 3.5mm', height: '28mm', boxSizing: 'border-box', flexShrink: 0 }}>
            <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E', textTransform: 'uppercase', marginBottom: '1.2mm' }}>
              DES DÉBOUCHÉS VARIÉS ET PORTEURS
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1.8mm', textAlign: 'center' }}>
              {[
                { title: 'AI-Driven Marketer', icon: BrainCircuit },
                { title: 'Responsable Marketing', icon: Megaphone },
                { title: 'Chef de Produit', icon: Target },
                { title: 'Digital Mkt Manager', icon: Laptop },
                { title: 'Marketing Data Analyst', icon: BarChart3 },
                { title: 'Responsable CRM', icon: Users },
                { title: 'Spécialiste SEO / SEA', icon: Search }
              ].map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={i} style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '4px', padding: '1.5mm 1mm' }}>
                    <Icon size={14} color="#7A1CAC" style={{ margin: '0 auto 0.8mm auto' }} />
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
                <span style={{ color: '#7A1CAC' }}>VOUS DONNE</span> <br />
                UNE LONGUEUR D'AVANCE
              </h2>
              <div style={{ width: '32mm', height: '3.5px', backgroundColor: '#7A1CAC', margin: '1mm 0 2mm 0' }} />
              <p style={{ fontSize: '7.5pt', color: '#475569', lineHeight: 1.4 }}>
                La Licence en Marketing à l'EBS vous apporte bien plus que des connaissances : elle développe votre personnalité, vos compétences analytiques et créatives, et votre capacité à transformer les données en stratégies gagnantes.
              </p>
            </div>

            {/* Right Photo */}
            <div style={{ height: '50mm', width: '100%' }}>
              <AssetPlaceholder label="Wordcloud Marketing 3D" sublabel="Customer, Strategy, Data, Audience, Vision" height="100%" />
            </div>
          </div>

          {/* Row 2: Equal-Height Quadrants (5 Reasons vs 4 Soft Skills) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.08fr 1fr', gap: '4.5mm', height: '118mm', flexShrink: 0 }}>
            {/* Left: 5 Reasons */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '3.5mm 4mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', fontSize: '7.5pt', fontWeight: 900, padding: '2mm 6px', borderRadius: '4px', textAlign: 'center', marginBottom: '1.5mm' }}>
                POURQUOI CHOISIR LA LICENCE EN MARKETING À L'EBS ?
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2mm' }}>
                {[
                  { title: 'APPROCHE PROFESSIONNALISANTE', desc: 'Des contenus conçus en lien direct avec les réalités des agences et régies.', icon: Briefcase, color: '#0A1C3E' },
                  { title: 'ENCADREMENT DE QUALITÉ', desc: 'Des directeurs marketing et experts médias à l’écoute des étudiants.', icon: Users, color: '#7A1CAC' },
                  { title: 'APPRENTISSAGE PAR LA PRATIQUE', desc: 'Mises en situation réelles, budgets Ads réels et challenges marketing.', icon: Target, color: '#0A1C3E' },
                  { title: 'OUVERTURE INTERNATIONALE', desc: 'Partenariats académiques prestigieux en France, Italie et Canada.', icon: Send, color: '#7A1CAC' },
                  { title: 'CERTIFICATIONS GRATUITES', desc: 'Meta, Google, HubSpot et IBM entièrement intégrées au cursus sans frais.', icon: Award, color: '#0A1C3E' }
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
                    desc: 'Évaluer les métriques (ROAS, CAC, LTV) et arbitrer les investissements média avec rigueur.'
                  },
                  {
                    title: 'Communication efficace & Storytelling',
                    desc: 'S’exprimer clairement et captiver les audiences à travers un copywriting percutant.'
                  },
                  {
                    title: 'Gestion du temps et des priorités',
                    desc: 'Piloter les calendriers éditoriaux et respecter les lancements de campagnes en toute agilité.'
                  },
                  {
                    title: 'Compétences linguistiques : Anglais & Français',
                    desc: 'Maîtriser le vocabulaire marketing international avec préparation aux tests TOEFL & TCF.'
                  }
                ].map((s, idx) => (
                  <div key={idx} style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 3mm' }}>
                    <div style={{ fontSize: '7.2pt', fontWeight: 900, color: '#7A1CAC', marginBottom: '0.5mm' }}>{s.title}</div>
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
                    <StepIcon size={14} color="#7A1CAC" style={{ margin: '0 auto 0.5mm auto' }} />
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
              <AssetPlaceholder label="IA Marketing" height="100%" />
            </div>
            <div>
              <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#A855F7', marginBottom: '1mm' }}>
                L'IA AU SERVICE DE VOTRE APPRENTISSAGE
              </div>
              <div style={{ fontSize: '6pt', color: '#CBD5E1', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8mm' }}>
                <div>✓ Outils intelligents de création</div>
                <div>✓ Analyse prédictive des leads</div>
                <div>✓ Automatisation HubSpot & CRM</div>
                <div>✓ Chatbots & agents conversationnels</div>
              </div>
            </div>
            <div style={{ backgroundColor: '#7A1CAC', padding: '2.2mm', borderRadius: '4px', textAlign: 'center', fontSize: '6.5pt', fontWeight: 900, lineHeight: 1.3 }}>
              L'IA N'EST PAS UN REMPLACEMENT, C'EST UN ACCÉLÉRATEUR DE VOTRE CRÉATIVITÉ ET DE VOTRE IMPACT.
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
                color: '#7A1CAC',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase'
              }}>
                AU SERVICE DE VOTRE AVENIR
              </h2>
              <div style={{ width: '32mm', height: '3.5px', backgroundColor: '#7A1CAC', margin: '1mm 0 2mm 0' }} />
              <p style={{ fontSize: '7.5pt', color: '#475569', lineHeight: 1.4 }}>
                Un parcours structuré et progressif qui vous permet d'acquérir les compétences essentielles pour construire votre avenir marketing et réaliser vos ambitions.
              </p>
            </div>

            {/* Campaign Visual */}
            <div style={{ height: '44mm', width: '100%' }}>
              <AssetPlaceholder label="Photo Équipe Campagne Média" sublabel="Réunion de cadres avec icônes vidéo, blog, SEO, ROI" height="100%" />
            </div>
          </div>

          {/* Row 2: 3 Value Pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3.5mm', height: '24mm', boxSizing: 'border-box', flexShrink: 0 }}>
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '5px', padding: '2mm 2.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.8mm' }}>
                <GraduationCap size={16} color="#0A1C3E" />
                <span style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E' }}>DIPLÔME</span>
              </div>
              <p style={{ fontSize: '6.2pt', color: '#475569', lineHeight: 1.35 }}>Formation académique reconnue par l’État tunisien et alignée sur l'international.</p>
            </div>
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '5px', padding: '2mm 2.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.8mm' }}>
                <Laptop size={16} color="#7A1CAC" />
                <span style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E' }}>EXPÉRIENCE</span>
              </div>
              <p style={{ fontSize: '6.2pt', color: '#475569', lineHeight: 1.35 }}>Des cas réels de campagnes d'agences, certifications et simulations business.</p>
            </div>
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '5px', padding: '2mm 2.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '0.8mm' }}>
                <TrendingUp size={16} color="#0A1C3E" />
                <span style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E' }}>CARRIÈRE</span>
              </div>
              <p style={{ fontSize: '6.2pt', color: '#475569', lineHeight: 1.35 }}>Accompagnement personnalisé pour propulser votre carrière en agence ou corporate.</p>
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
                  <p style={{ fontSize: '6.2pt', color: '#64748B', lineHeight: 1.25 }}>Après validation de la 1ʳᵉ année de Licence à EBS, poursuite en 2ᵉ année de Bachelor en Communication & Média en Italie.</p>
                </div>
              </div>

              {/* Pathway 2 */}
              <div style={{ display: 'grid', gridTemplateColumns: '26mm 1fr', gap: '3.5mm', alignItems: 'center', backgroundColor: '#FFF', padding: '2mm 3mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                <AssetPlaceholder label="Paris (France)" height="16mm" />
                <div>
                  <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E' }}>
                    <span style={{ color: '#7A1CAC' }}>02.</span> 2 ans à EBS + Bachelor 3 à l’international | Établissements partenaires en France
                  </div>
                  <p style={{ fontSize: '6.2pt', color: '#64748B', lineHeight: 1.25 }}>Intégration en 3ᵉ année de Bachelor Communication/Marketing (SUP DE COM, IDRAC, PSB, Excelia) en France.</p>
                </div>
              </div>

              {/* Pathway 3 */}
              <div style={{ display: 'grid', gridTemplateColumns: '26mm 1fr', gap: '3.5mm', alignItems: 'center', backgroundColor: '#FFF', padding: '2mm 3mm', borderRadius: '4px', border: '1px solid #CBD5E1' }}>
                <AssetPlaceholder label="Canada" height="16mm" />
                <div>
                  <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E' }}>
                    <span style={{ color: '#0A1C3E' }}>03.</span> Licence à EBS + Master à l’international | France • Canada • Italie
                  </div>
                  <p style={{ fontSize: '6.2pt', color: '#64748B', lineHeight: 1.25 }}>Accès direct aux Masters Grande École, Masters en Marketing Digital ou MSc à l'international après votre Licence.</p>
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
                <img src="/images/partenaires-academiques/psb.webp" alt="PSB" style={{ maxHeight: '10.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '11mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/idrac.webp" alt="IDRAC" style={{ maxHeight: '10.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '11mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/excelia.webp" alt="Excelia" style={{ maxHeight: '10.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '11mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/sup-de-com.webp" alt="Sup de Com" style={{ maxHeight: '10.5mm', maxWidth: '100%', objectFit: 'contain' }} />
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
            <div style={{ fontSize: '7pt', fontWeight: 900, color: '#A855F7' }}>
              L'EXCELLENCE ACADÉMIQUE AU SERVICE DE VOTRE AVENIR
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
