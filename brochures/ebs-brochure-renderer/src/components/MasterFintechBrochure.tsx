import React from 'react';
import type { ProgrammeData } from '../lib/types';
import {
  EbsHeaderBrand,
  AccreditationBadge,
  BottomContactBar,
  AssetPlaceholder
} from './SharedElements';
import {
  BloombergLogo,
  CitiLogo,
  JPMorganLogo,
  HarvardLogo,
  DeepLearningAiLogo,
  GoldmanSachsLogo
} from './Logos';
import {
  TrendingUp,
  LineChart,
  BarChart3,
  BrainCircuit,
  Shield,
  Layers,
  Award,
  Globe,
  Briefcase,
  Users,
  GraduationCap,
  Laptop,
  CheckSquare,
  UserCheck,
  Target,
  Sparkles,
  PieChart,
  Building2,
  DollarSign,
  ArrowRight,
  Landmark,
  FileSpreadsheet,
  QrCode,
  Phone,
  Mail,
  MapPin,
  CheckCircle2
} from 'lucide-react';

interface Props {
  data: ProgrammeData;
}

export const MasterFintechBrochure: React.FC<Props> = () => {
  return (
    <div className="brochure-root master-fintech-brochure">
      {/* =========================================================================
          PAGE 1 : COVER & HIGH-DENSITY FINANCIAL ENGINEERING HERO
          ========================================================================= */}
      <section className="page page-1" id="page-1" style={{ backgroundColor: '#070D18', color: '#FFFFFF', position: 'relative' }}>
        <div className="page-inner" style={{ padding: '8mm 10mm', display: 'flex', flexDirection: 'column', gap: '4mm', height: '100%', boxSizing: 'border-box' }}>
          {/* Row 1: Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '15mm', flexShrink: 0 }}>
            <EbsHeaderBrand variant="light" />
            <div style={{
              border: '1px solid #1E3A8A',
              backgroundColor: 'rgba(15, 23, 42, 0.8)',
              padding: '3mm 6mm',
              borderRadius: '6px',
              textAlign: 'right'
            }}>
              <div style={{ fontSize: '8pt', fontWeight: 900, color: '#F59E0B', letterSpacing: '0.06em' }}>
                INNOVER | FORMER | RÉUSSIR
              </div>
              <div style={{ fontSize: '6.5pt', color: '#94A3B8', fontWeight: 700 }}>
                PENSEZ CARRIÈRE
              </div>
            </div>
          </div>

          {/* Row 2: Hero Section */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '6mm', height: '180mm', flexShrink: 0 }}>
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
              <div>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '30pt',
                  fontWeight: 900,
                  color: '#FFFFFF',
                  letterSpacing: '0.04em',
                  lineHeight: 1.05,
                  textTransform: 'uppercase'
                }}>
                  MASTER
                </h2>
                <h1 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '26pt',
                  fontWeight: 900,
                  color: '#F59E0B',
                  lineHeight: 1.05,
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                  marginBottom: '3mm'
                }}>
                  EN INGÉNIERIE FINANCIÈRE
                </h1>
                <div style={{ width: '38mm', height: '4.5px', backgroundColor: '#F59E0B', marginBottom: '3.5mm', borderRadius: '2px' }} />

                <h3 style={{
                  fontSize: '10.5pt',
                  fontWeight: 800,
                  color: '#E2E8F0',
                  lineHeight: 1.35,
                  textTransform: 'uppercase',
                  marginBottom: '3mm'
                }}>
                  PRÉPAREZ-VOUS À DEVENIR UN EXPERT DE LA <span style={{ color: '#F59E0B' }}>FINANCE</span>, DE L'ANALYSE FINANCIÈRE ET DE L'INGÉNIERIE DES MARCHÉS.
                </h3>
              </div>

              {/* Editorial Description Box */}
              <div style={{
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                border: '1px solid #1E3A8A',
                borderLeft: '4px solid #F59E0B',
                padding: '4.5mm 5.5mm',
                borderRadius: '0 8px 8px 0'
              }}>
                <p style={{ fontSize: '8.5pt', color: '#CBD5E1', lineHeight: 1.5, textAlign: 'justify', marginBottom: '3mm' }}>
                  Ce Master d'excellence d'ESPIMA Business School forme des spécialistes capables d'accompagner les entreprises et les institutions financières dans leurs décisions stratégiques. Il associe finance d'entreprise, marchés financiers, gestion des risques, Business Intelligence, Intelligence Artificielle et FinTech.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5mm', fontSize: '7.5pt', fontWeight: 800, color: '#F59E0B' }}>
                  <div>▸ ANALYSER</div>
                  <div>▸ DÉCIDER</div>
                  <div>▸ INVESTIR</div>
                  <div>▸ INNOVER</div>
                </div>
              </div>

              {/* Stock chart hologram visual */}
              <div style={{ height: '34mm' }}>
                <AssetPlaceholder label="Graphique Boursier 3D" sublabel="Barres financières en néon cyan et globe connecté" height="100%" />
              </div>
            </div>

            {/* Right Column: Campus Photo + Accreditation Badge + 6 Round Icons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5mm', height: '100%' }}>
              <div style={{ height: '75mm', width: '100%' }}>
                <AssetPlaceholder label="Photo Campus EBS" sublabel="Trois étudiants entrant sur le campus moderne" height="100%" />
              </div>

              <div style={{
                backgroundColor: '#FFFFFF',
                color: '#0A1C3E',
                borderRadius: '6px',
                padding: '3mm 4mm',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <Award size={26} color="#F59E0B" />
                <div>
                  <div style={{ fontSize: '8.5pt', fontWeight: 900, textTransform: 'uppercase' }}>MASTER ACCRÉDITÉ</div>
                  <div style={{ fontSize: '6.8pt', color: '#64748B' }}>Par l'État Tunisien • Diplôme Bac+5</div>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2.5mm',
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                border: '1px solid #1E3A8A',
                borderRadius: '6px',
                padding: '3.5mm 3mm',
                flexGrow: 1
              }}>
                <div style={{ textAlign: 'center', padding: '1mm' }}>
                  <Landmark size={18} color="#F59E0B" style={{ margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '6.5pt', fontWeight: 900 }}>Finance d'entreprise</div>
                </div>
                <div style={{ textAlign: 'center', padding: '1mm' }}>
                  <BrainCircuit size={18} color="#F59E0B" style={{ margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '6.5pt', fontWeight: 900 }}>IA intégrée</div>
                </div>
                <div style={{ textAlign: 'center', padding: '1mm' }}>
                  <TrendingUp size={18} color="#F59E0B" style={{ margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '6.5pt', fontWeight: 900 }}>Marchés financiers</div>
                </div>
                <div style={{ textAlign: 'center', padding: '1mm' }}>
                  <Globe size={18} color="#F59E0B" style={{ margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '6.5pt', fontWeight: 900 }}>Ouverture intl</div>
                </div>
                <div style={{ textAlign: 'center', padding: '1mm' }}>
                  <FileSpreadsheet size={18} color="#F59E0B" style={{ margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '6.5pt', fontWeight: 900 }}>Certifications pro</div>
                </div>
                <div style={{ textAlign: 'center', padding: '1mm' }}>
                  <Users size={18} color="#F59E0B" style={{ margin: '0 auto 1mm auto' }} />
                  <div style={{ fontSize: '6.5pt', fontWeight: 900 }}>Experts métiers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Docked Bottom Contact Bar */}
          <div style={{ height: '11mm', flexShrink: 0 }}>
            <BottomContactBar slogan="VOTRE AVENIR COMMENCE ICI." theme="dark" />
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
                MASTER EN INGÉNIERIE FINANCIÈRE
              </h3>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20pt',
                fontWeight: 900,
                color: '#0A1C3E',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase'
              }}>
                UN PROGRAMME COMPLET ET OPÉRATIONNEL <br />
                <span style={{ color: '#059669' }}>SUR 2 ANNÉES</span>
              </h2>
              <div style={{ width: '32mm', height: '3.5px', backgroundColor: '#059669', margin: '1mm 0 2mm 0' }} />
              <p style={{ fontSize: '7.2pt', color: '#475569', lineHeight: 1.35 }}>
                Un parcours progressif en 4 semestres qui combine finance d'entreprise, ingénierie financière, marchés financiers, gestion des risques, Business Intelligence et IA pour développer des compétences très recherchées.
              </p>
            </div>

            {/* Trading Floor Visual */}
            <div style={{ height: '46mm', width: '100%' }}>
              <AssetPlaceholder label="Photo Trading Floor & Bloomberg" sublabel="Deux analystes financiers devant multi-écrans boursiers" height="100%" />
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
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#0A1C3E', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Landmark size={12} />
                    </div>
                    <span style={{ fontSize: '9pt', fontWeight: 900, color: '#0A1C3E' }}>01</span>
                  </div>
                  <div style={{ fontSize: '6.5pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15, marginBottom: '2mm' }}>
                    FINANCE D'ENTREPRISE & INGÉNIERIE
                  </div>
                  <div style={{ fontSize: '5.8pt', color: '#475569', lineHeight: 1.35 }}>
                    • Finance d'entreprise<br />
                    • Diagnostic financier<br />
                    • Décision d'investissement<br />
                    • Évaluation d'entreprise<br />
                    • Restructuration financière<br />
                    • Ingénierie financière
                  </div>
                </div>
                <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', fontSize: '5pt', fontWeight: 900, textAlign: 'center', padding: '1mm', borderRadius: '3px' }}>
                  STRATÉGIE & VALORISATION
                </div>
              </div>

              {/* Card 2 */}
              <div style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 2mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5mm' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#059669', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <BarChart3 size={12} />
                    </div>
                    <span style={{ fontSize: '9pt', fontWeight: 900, color: '#059669' }}>02</span>
                  </div>
                  <div style={{ fontSize: '6.5pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15, marginBottom: '2mm' }}>
                    ANALYSE FINANCIÈRE & DÉCISION
                  </div>
                  <div style={{ fontSize: '5.8pt', color: '#475569', lineHeight: 1.35 }}>
                    • Analyse financière<br />
                    • Modélisation financière<br />
                    • Tableaux de bord<br />
                    • Contrôle de gestion<br />
                    • Performance financière<br />
                    • Décision stratégique
                  </div>
                </div>
                <div style={{ backgroundColor: '#059669', color: '#FFF', fontSize: '5pt', fontWeight: 900, textAlign: 'center', padding: '1mm', borderRadius: '3px' }}>
                  MODÉLISATION & PILOTAGE
                </div>
              </div>

              {/* Card 3 */}
              <div style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 2mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5mm' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#0284C7', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <TrendingUp size={12} />
                    </div>
                    <span style={{ fontSize: '9pt', fontWeight: 900, color: '#0284C7' }}>03</span>
                  </div>
                  <div style={{ fontSize: '6.5pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15, marginBottom: '2mm' }}>
                    MARCHÉS FINANCIERS & GESTION RISQUES
                  </div>
                  <div style={{ fontSize: '5.8pt', color: '#475569', lineHeight: 1.35 }}>
                    • Marchés financiers<br />
                    • Gestion de portefeuille<br />
                    • Produits dérivés<br />
                    • Gestion des risques<br />
                    • Finance internationale<br />
                    • Réglementation Bâle
                  </div>
                </div>
                <div style={{ backgroundColor: '#0284C7', color: '#FFF', fontSize: '5pt', fontWeight: 900, textAlign: 'center', padding: '1mm', borderRadius: '3px' }}>
                  MARCHÉS & RISQUES
                </div>
              </div>

              {/* Card 4 */}
              <div style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 2mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5mm' }}>
                    <div style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: '#F59E0B', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <BrainCircuit size={12} />
                    </div>
                    <span style={{ fontSize: '9pt', fontWeight: 900, color: '#F59E0B' }}>04</span>
                  </div>
                  <div style={{ fontSize: '6.5pt', fontWeight: 900, color: '#0A1C3E', lineHeight: 1.15, marginBottom: '2mm' }}>
                    BI & INTELLIGENCE ARTIFICIELLE
                  </div>
                  <div style={{ fontSize: '5.8pt', color: '#475569', lineHeight: 1.35 }}>
                    • Business Intelligence<br />
                    • Data Analytics client<br />
                    • IA appliquée à la finance<br />
                    • Analyse prédictive<br />
                    • Power BI & Python<br />
                    • FinTech & Blockchain
                  </div>
                </div>
                <div style={{ backgroundColor: '#F59E0B', color: '#FFF', fontSize: '5pt', fontWeight: 900, textAlign: 'center', padding: '1mm', borderRadius: '3px' }}>
                  DATA & FINTECH
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
                    • Études de cas réelles<br />
                    • Projets d'entreprises<br />
                    • Audit & Conseil M&A<br />
                    • Soft Skills & Pitch<br />
                    • Mémoire de fin d'études<br />
                    • Stage obligatoire 6 mois
                  </div>
                </div>
                <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', fontSize: '5pt', fontWeight: 900, textAlign: 'center', padding: '1mm', borderRadius: '3px' }}>
                  IMMERSION & IMPACT
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
                  { title: 'Analyste financier', icon: LineChart },
                  { title: 'Ingénieur financier', icon: Target },
                  { title: 'Risk Manager', icon: Shield },
                  { title: 'Gestionnaire portefeuille', icon: PieChart },
                  { title: 'Consultant Finance', icon: Users },
                  { title: 'Auditeur financier', icon: FileSpreadsheet },
                  { title: 'Analyste ESG', icon: Globe },
                  { title: 'DAF', icon: Building2 },
                  { title: 'CFO', icon: TrendingUp },
                  { title: 'Expert FinTech', icon: BrainCircuit }
                ].map((c, idx) => {
                  const Icon = c.icon;
                  return (
                    <div key={idx} style={{ backgroundColor: '#FFF', border: '1px solid #CBD5E1', borderRadius: '3px', padding: '1mm' }}>
                      <Icon size={12} color="#059669" style={{ margin: '0 auto 0.5mm auto' }} />
                      <div style={{ fontSize: '4.8pt', fontWeight: 800, color: '#0A1C3E', lineHeight: 1.1 }}>{c.title}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Stage & Immersion */}
            <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', borderRadius: '6px', padding: '3mm 3.5mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Briefcase size={20} color="#F59E0B" />
                <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#F59E0B' }}>
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
            {/* Visual Calculator & Charts */}
            <div style={{ height: '50mm', width: '100%' }}>
              <AssetPlaceholder label="Photo Calculatrice Financière & Graphiques" sublabel="Feuilles de calcul, stylos et courbe boursière globale" height="100%" />
            </div>

            <div>
              <h3 style={{ fontSize: '8.5pt', fontWeight: 900, color: '#0A1C3E', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                MASTER EN INGÉNIERIE FINANCIÈRE
              </h3>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20pt',
                fontWeight: 900,
                color: '#0A1C3E',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase'
              }}>
                6 RAISONS <br />
                <span style={{ color: '#059669' }}>DE CHOISIR L'EXCELLENCE</span> <br />
                POUR CONSTRUIRE VOTRE AVENIR
              </h2>
              <div style={{ width: '32mm', height: '3.5px', backgroundColor: '#059669', margin: '1mm 0 2mm 0' }} />
              <p style={{ fontSize: '7.2pt', color: '#475569', lineHeight: 1.35 }}>
                Un Master conçu pour développer des compétences très recherchées, vous rendre opérationnel dès demain et vous ouvrir les portes d'une carrière solide et internationale dans la finance.
              </p>
            </div>
          </div>

          {/* Row 2: 6 Reason Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5mm', height: '70mm', flexShrink: 0 }}>
            {[
              { id: '01', title: 'IA INTÉGRÉE DANS LES CURSUS', desc: 'L’intelligence artificielle est intégrée dans tous les modules pour vous donner une longueur d’avance et vous préparer aux métiers de demain.' },
              { id: '02', title: '20+ CERTIFICATIONS INTERNATIONALES', desc: 'Obtenez des certifications reconnues par les entreprises et valorisées par les recruteurs pour renforcer votre profil et votre employabilité.' },
              { id: '03', title: 'PROJETS RÉELS & ÉTUDES DE CAS', desc: 'Apprenez en agissant sur des projets concrets d’entreprises et des études de cas réels pour développer votre sens de l’analyse et votre impact.' },
              { id: '04', title: 'OUTILS & LOGICIELS PROFESSIONNELS', desc: 'Maîtrisez les outils financiers et logiciels les plus utilisés par les professionnels (Bloomberg, Excel avancé, Power BI, EViews...).' },
              { id: '05', title: 'OUVERTURE INTERNATIONALE', desc: 'Partenariats prestigieux et possibilités de poursuite d’études en France, en Italie et au Canada pour construire une carrière sans frontières.' },
              { id: '06', title: 'ACCOMPAGNEMENT VERS LA RÉUSSITE', desc: 'Un accompagnement personnalisé vers l’emploi : coaching, ateliers, job dating et suivi de votre insertion professionnelle.' }
            ].map((r, idx) => (
              <div key={idx} style={{ backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '5px', padding: '2.5mm 3mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1mm' }}>
                  <span style={{ fontSize: '6.8pt', fontWeight: 900, color: '#059669' }}>{r.title}</span>
                  <span style={{ fontSize: '8pt', fontWeight: 900, color: '#0A1C3E' }}>{r.id}</span>
                </div>
                <div style={{ fontSize: '5.8pt', color: '#475569', lineHeight: 1.3 }}>
                  {r.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Row 3: Certifications Reconnues (Left) vs Compétences (Right) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4mm', height: '62mm', flexShrink: 0 }}>
            {/* Left: 8 Certifications */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '2.5mm 3mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E' }}>DES CERTIFICATIONS RECONNUES</span>
                <span style={{ fontSize: '5.8pt', fontWeight: 800, color: '#059669' }}>OFFERTES</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5mm', textAlign: 'center' }}>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <CitiLogo style={{ height: '9px', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Quant Analysis</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <BloombergLogo style={{ height: '9px', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Market Concepts</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <div style={{ fontSize: '5pt', fontWeight: 900, color: '#EA580C' }}>databricks</div>
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>AI & Data</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <GoldmanSachsLogo style={{ height: '9px', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Risk Mgmt</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <DeepLearningAiLogo style={{ height: '9px', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Math for ML</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <JPMorganLogo style={{ height: '9px', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Quant Research</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <HarvardLogo style={{ height: '9px', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Data Science</div>
                </div>
                <div style={{ backgroundColor: '#FFF', padding: '1mm', borderRadius: '3px', border: '1px solid #CBD5E1' }}>
                  <BloombergLogo style={{ height: '9px', margin: '0 auto' }} />
                  <div style={{ fontSize: '4.8pt', color: '#64748B' }}>Fundamentals</div>
                </div>
              </div>
            </div>

            {/* Right: 8 Compétences */}
            <div style={{ backgroundColor: '#0A1C3E', color: '#FFF', borderRadius: '6px', padding: '2.5mm 3mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#F59E0B' }}>
                DÉVELOPPEZ LES COMPÉTENCES CLÉS DE DEMAIN
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5mm', textAlign: 'center', fontSize: '5.2pt' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '1.2mm', borderRadius: '3px' }}>Analyse avancée</div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '1.2mm', borderRadius: '3px' }}>Ingénierie fin.</div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '1.2mm', borderRadius: '3px' }}>Gestion risques</div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '1.2mm', borderRadius: '3px' }}>Finance quant.</div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '1.2mm', borderRadius: '3px' }}>IA & Finance</div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '1.2mm', borderRadius: '3px' }}>Business Intel.</div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '1.2mm', borderRadius: '3px' }}>Décision strat.</div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '1.2mm', borderRadius: '3px' }}>Finance intl.</div>
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
                MASTER EN INGÉNIERIE FINANCIÈRE
              </h3>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '20pt',
                fontWeight: 900,
                color: '#059669',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase'
              }}>
                VOTRE AVENIR, NOTRE ENGAGEMENT.
              </h2>
              <div style={{ width: '32mm', height: '3.5px', backgroundColor: '#059669', margin: '1mm 0 2mm 0' }} />
              <p style={{ fontSize: '6.8pt', color: '#475569', lineHeight: 1.35 }}>
                À EBS, nous formons les experts financiers capables de relever les défis d'aujourd'hui et de demain. Grâce à notre réseau académique international et à nos partenaires entreprises, nous vous offrons des opportunités concrètes et un avenir sans frontières.
              </p>
            </div>

            {/* Right Visual */}
            <div style={{ height: '42mm', width: '100%' }}>
              <AssetPlaceholder label="Photo Cadres Finance & Globe" sublabel="Équipe de direction financière devant skyline mondiale" height="100%" />
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

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '2mm', alignItems: 'center' }}>
              <div style={{ height: '10mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/em-normandie.webp" alt="EM Normandie" style={{ maxHeight: '9.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '10mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/excelia.webp" alt="Excelia" style={{ maxHeight: '9.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '10mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/igefi.webp" alt="IGEFI" style={{ maxHeight: '9.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '10mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/idrac.webp" alt="IDRAC" style={{ maxHeight: '9.5mm', maxWidth: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ height: '10mm', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/images/partenaires-academiques/epitech.webp" alt="EPITECH" style={{ maxHeight: '9.5mm', maxWidth: '100%', objectFit: 'contain' }} />
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
                Des institutions financières et cabinets d'audit qui recrutent nos diplômés :
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2mm', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ fontWeight: 900, fontSize: '6.8pt', color: '#0284C7' }}>STB BANK</div>
              <div style={{ fontWeight: 900, fontSize: '6.8pt', color: '#DC2626' }}>ASTEELFLASH</div>
              <div style={{ fontWeight: 900, fontSize: '6.5pt', color: '#0A1C3E' }}>ARFORGHE</div>
              <div style={{ fontWeight: 900, fontSize: '6.8pt', color: '#DC2626' }}>ATB BANK</div>
              <div style={{ fontWeight: 900, fontSize: '6.8pt', color: '#D97706' }}>AUDITA</div>
              <div style={{ fontWeight: 900, fontSize: '6.8pt', color: '#DC2626' }}>TMI</div>
              <div style={{ fontWeight: 900, fontSize: '6.8pt', color: '#EA580C' }}>SOPRA HR</div>
            </div>
          </div>

          {/* Row 4: Parcours à EBS (Left) vs Contact / CTA (Right) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: '4mm', height: '48mm', flexShrink: 0 }}>
            {/* Left: Parcours */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1.5px solid #CBD5E1', borderRadius: '6px', padding: '2.5mm 3mm', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#0A1C3E', marginBottom: '0.8mm' }}>
                  VOTRE PARCOURS À EBS
                </div>
                <div style={{ fontSize: '6pt', color: '#475569', lineHeight: 1.3 }}>
                  Vous intégrez un cursus d'excellence associant modélisation financière, ingénierie de marché, BI, certifications Bloomberg et stages en banque ou cabinet d'audit.
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '5.2pt', fontWeight: 800, color: '#059669', textAlign: 'center', borderTop: '1px dotted #CBD5E1', paddingTop: '1.5mm' }}>
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
                <div style={{ fontSize: '7.5pt', fontWeight: 900, color: '#F59E0B', marginBottom: '0.8mm' }}>
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
