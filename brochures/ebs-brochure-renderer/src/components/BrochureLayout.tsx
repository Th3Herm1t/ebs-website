import React from 'react';
import type { ProgrammeData } from '../lib/types';
import { Award, Globe, Briefcase, Sparkles, CheckCircle2, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

interface BrochureLayoutProps {
  data: ProgrammeData;
}

export const BrochureLayout: React.FC<BrochureLayoutProps> = ({ data }) => {
  const { programme, sections } = data;
  const isMaster = programme.level === 'master';

  // Discipline accent color
  const accentColor = isMaster ? 'var(--ebs-navy)' : 'var(--ebs-crimson)';

  return (
    <div className="brochure-root">
      {/* =========================================================================
          PAGE 1 : COVER & IDENTITY
          ========================================================================= */}
      <section className="page page-1" id="page-1">
        <div className="page-inner" style={{ justifyContent: 'space-between' }}>
          {/* Header */}
          <div>
            <div className="page-header">
              <div className="brand-badge">
                EBS <span style={{ color: 'var(--ebs-crimson)' }}>—</span> ESPIMA BUSINESS SCHOOL
              </div>
              <div className="accreditation-pill">
                {sections.accreditation?.text || "DIPLÔME ACCRÉDITÉ PAR L'ÉTAT TUNISIEN"}
              </div>
            </div>

            {/* Level Tag & Title */}
            <div style={{ marginTop: '8mm', marginBottom: '6mm' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '2mm',
                background: 'var(--ebs-navy)',
                color: '#FFFFFF',
                padding: '2mm 4mm',
                borderRadius: '4px',
                fontSize: '8.5pt',
                fontWeight: 700,
                letterSpacing: '0.05em',
                marginBottom: '4mm'
              }}>
                <Award size={13} />
                {sections.duration?.text || `${programme.level.toUpperCase()} • 3 ANS`}
              </div>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '28pt',
                fontWeight: 900,
                color: 'var(--ebs-navy)',
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase'
              }}>
                {programme.name_source}
              </h1>
            </div>

            {/* Positioning Pitch */}
            <div style={{
              background: 'var(--bg-slate)',
              borderLeft: `4px solid ${accentColor}`,
              padding: '4mm 5mm',
              borderRadius: '0 6px 6px 0',
              marginBottom: '6mm'
            }}>
              {sections.positioning?.heading && (
                <p style={{ fontWeight: 800, fontSize: '9pt', color: 'var(--ebs-navy)', marginBottom: '2mm' }}>
                  {sections.positioning.heading}
                </p>
              )}
              <p style={{ fontSize: '8.2pt', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                {sections.positioning?.text}
              </p>
            </div>

            {/* Cover Themes Grid */}
            {sections.cover_themes && (
              <div style={{ marginBottom: '6mm' }}>
                <div style={{ fontSize: '7.5pt', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2.5mm' }}>
                  DOMAINES CLÉS DU PROGRAMME
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2mm' }}>
                  {sections.cover_themes.items?.map((theme, idx) => (
                    <span key={idx} style={{
                      background: '#FFFFFF',
                      border: '1px solid var(--border-medium)',
                      padding: '1.8mm 3.5mm',
                      borderRadius: '999px',
                      fontSize: '7.5pt',
                      fontWeight: 700,
                      color: 'var(--ebs-navy)'
                    }}>
                      {typeof theme === 'string' ? theme : theme.heading}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Contacts */}
          <div>
            {sections.cover_benefits && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${sections.cover_benefits.items?.length || 5}, 1fr)`,
                gap: '2mm',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '3mm',
                marginBottom: '3mm'
              }}>
                {sections.cover_benefits.items?.map((b, idx) => (
                  <div key={idx} style={{ textAlign: 'center', fontSize: '6.8pt', fontWeight: 700, color: 'var(--ebs-navy-light)' }}>
                    {typeof b === 'string' ? b : b.heading}
                  </div>
                ))}
              </div>
            )}
            <div className="page-footer">
              <div>www.ebs.tn • +216 71 18 26 25 • info@ebs.tn</div>
              <div style={{ fontWeight: 700 }}>UN PROGRAMME TOURNÉ VERS L’AVENIR</div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PAGE 2 : CURRICULUM, CERTIFICATIONS & CAREERS
          ========================================================================= */}
      <section className="page page-2" id="page-2">
        <div className="page-inner" style={{ justifyContent: 'space-between' }}>
          <div>
            <div className="page-header">
              <div className="brand-badge">EBS — PROGRAMME PÉDAGOGIQUE</div>
              <div style={{ fontSize: '7.5pt', fontWeight: 700, color: 'var(--text-muted)' }}>
                {programme.semester_count ? `${programme.semester_count} SEMESTRES` : 'FORMATION SUR 2 ANS'}
              </div>
            </div>

            {/* Curriculum Intro */}
            <div style={{ marginBottom: '4mm' }}>
              <div className="section-title">
                {sections.curriculum_intro?.heading || "CURRICULUM DE FORMATION"}
              </div>
              <p style={{ fontSize: '7.8pt', color: 'var(--text-secondary)', marginBottom: '3mm' }}>
                {sections.curriculum_intro?.text}
              </p>
            </div>

            {/* Modules or Competency Blocks */}
            {sections.curriculum_modules && (
              <div className="grid-2" style={{ marginBottom: '4.5mm' }}>
                {sections.curriculum_modules.items?.map((mod, idx) => (
                  <div key={idx} className="card" style={{ display: 'flex', alignItems: 'center', gap: '2.5mm' }}>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '5mm',
                      height: '5mm',
                      background: 'var(--ebs-navy)',
                      color: '#FFFFFF',
                      borderRadius: '3px',
                      fontSize: '6.5pt',
                      fontWeight: 800,
                      flexShrink: 0
                    }}>
                      {idx + 1}
                    </span>
                    <span style={{ fontSize: '7.4pt', fontWeight: 600, color: 'var(--ebs-navy)' }}>
                      {typeof mod === 'string' ? mod : mod.heading || mod.text}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Competency Blocks (for Masters) */}
            {sections.curriculum_blocks && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5mm', marginBottom: '4.5mm' }}>
                {sections.curriculum_blocks.groups?.map((grp, idx) => (
                  <div key={idx} className="card" style={{ padding: '2.5mm 3.5mm' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5mm' }}>
                      <span style={{ fontSize: '8pt', fontWeight: 700, color: 'var(--ebs-navy)' }}>
                        {grp.heading}
                      </span>
                      {grp.callout && (
                        <span style={{ background: 'var(--ebs-navy)', color: '#FFF', fontSize: '6pt', fontWeight: 700, padding: '0.8mm 2mm', borderRadius: '3px' }}>
                          {grp.callout}
                        </span>
                      )}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5mm' }}>
                      {grp.items?.map((it, i) => (
                        <span key={i} style={{ background: '#FFF', border: '1px solid var(--border-subtle)', padding: '0.8mm 2mm', borderRadius: '3px', fontSize: '6.8pt' }}>
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Certifications Highlight */}
            {sections.certifications && (
              <div style={{ marginBottom: '4.5mm' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2mm', marginBottom: '2.5mm' }}>
                  <Award size={14} color="var(--ebs-crimson)" />
                  <span style={{ fontSize: '8.5pt', fontWeight: 800, color: 'var(--ebs-navy)', textTransform: 'uppercase' }}>
                    CERTIFICATIONS PROFESSIONNELLES INCLUSES
                  </span>
                </div>
                <div className="grid-2">
                  {sections.certifications.items?.slice(0, 8).map((cert, idx) => (
                    <div key={idx} className="cert-badge">
                      <CheckCircle2 size={11} color="var(--ebs-crimson)" />
                      <div>
                        {typeof cert === 'object' && cert.issuer_source && (
                          <div className="cert-issuer">{cert.issuer_source}</div>
                        )}
                        <div className="cert-name">
                          {typeof cert === 'string' ? cert : cert.credential_source || cert.heading || cert.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Career Outcomes */}
            {sections.career_outcomes && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2mm', marginBottom: '2.5mm' }}>
                  <Briefcase size={14} color="var(--ebs-navy)" />
                  <span style={{ fontSize: '8.5pt', fontWeight: 800, color: 'var(--ebs-navy)', textTransform: 'uppercase' }}>
                    DÉBOUCHÉS PROFESSIONNELS
                  </span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.8mm' }}>
                  {sections.career_outcomes.items?.map((career, idx) => (
                    <span key={idx} style={{
                      background: 'var(--bg-slate)',
                      border: '1px solid var(--border-subtle)',
                      padding: '1.5mm 3mm',
                      borderRadius: '4px',
                      fontSize: '7.2pt',
                      fontWeight: 600,
                      color: 'var(--ebs-navy)'
                    }}>
                      {typeof career === 'string' ? career : career.heading || career.text}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="page-footer">
            <div>EBS.TN | L’EXCELLENCE ACADÉMIQUE AU SERVICE DE VOTRE AVENIR</div>
            <div>Page 2 / 4</div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PAGE 3 : PEDAGOGY, AI & WHY EBS
          ========================================================================= */}
      <section className="page page-3" id="page-3">
        <div className="page-inner" style={{ justifyContent: 'space-between' }}>
          <div>
            <div className="page-header">
              <div className="brand-badge">EBS — EXPÉRIENCE & MÉTHODOLOGIE</div>
              <div style={{ fontSize: '7.5pt', fontWeight: 700, color: 'var(--text-muted)' }}>PÉDAGOGIE ACTIVE</div>
            </div>

            {/* Why choose EBS */}
            <div style={{ marginBottom: '5mm' }}>
              <div className="section-title">
                {sections.reasons_to_choose?.heading || "POURQUOI CHOISIR L’EBS ?"}
              </div>
              <div className="grid-2">
                {sections.reasons_to_choose?.items?.slice(0, 6).map((reason, idx) => (
                  <div key={idx} className="card">
                    <div className="card-title">
                      {typeof reason === 'string' ? reason : reason.heading}
                    </div>
                    {typeof reason === 'object' && reason.text && (
                      <div className="card-text">{reason.text}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* AI Banner */}
            <div style={{
              background: 'linear-gradient(135deg, var(--ebs-navy) 0%, #1E3E62 100%)',
              color: '#FFFFFF',
              padding: '4.5mm 5mm',
              borderRadius: '6px',
              marginBottom: '5mm'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2mm', marginBottom: '2mm' }}>
                <Sparkles size={14} color="#F59E0B" />
                <span style={{ fontSize: '8.5pt', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  {sections.ai_learning?.heading || "L’INTELLIGENCE ARTIFICIELLE AU CŒUR DE LA FORMATION"}
                </span>
              </div>
              <div style={{ fontSize: '7.5pt', lineHeight: 1.4, opacity: 0.95, marginBottom: '2.5mm' }}>
                {sections.ai_learning?.callout || "L'IA N'EST PAS UN REMPLACEMENT, C'EST UN ACCÉLÉRATEUR DE VOTRE POTENTIEL ET DE VOTRE RÉUSSITE."}
              </div>
              {sections.ai_learning?.items && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5mm' }}>
                  {sections.ai_learning.items.map((item, idx) => (
                    <div key={idx} style={{ fontSize: '6.8pt', display: 'flex', alignItems: 'center', gap: '1.5mm' }}>
                      <span style={{ width: '1.5mm', height: '1.5mm', borderRadius: '50%', background: '#F59E0B' }} />
                      {typeof item === 'string' ? item : item.heading}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Transversal Soft Skills */}
            {sections.transversal_skills && (
              <div>
                <div style={{ fontSize: '8.5pt', fontWeight: 800, color: 'var(--ebs-navy)', textTransform: 'uppercase', marginBottom: '2.5mm' }}>
                  {sections.transversal_skills.heading || "COMPÉTENCES TRANSVERSALES DÉVELOPPÉES"}
                </div>
                <div className="grid-2">
                  {sections.transversal_skills.items?.map((skill, idx) => (
                    <div key={idx} className="card" style={{ padding: '2.5mm 3mm' }}>
                      <div style={{ fontSize: '7.8pt', fontWeight: 700, color: 'var(--ebs-navy)', marginBottom: '1mm' }}>
                        {typeof skill === 'string' ? skill : skill.heading}
                      </div>
                      {typeof skill === 'object' && skill.text && (
                        <div style={{ fontSize: '7pt', color: 'var(--text-secondary)', lineHeight: 1.35 }}>
                          {skill.text}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="page-footer">
            <div>Votre avenir commence ici.</div>
            <div>Page 3 / 4</div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PAGE 4 : INTERNATIONAL PATHWAYS, PARTNERS & BACK COVER
          ========================================================================= */}
      <section className="page page-4" id="page-4">
        <div className="page-inner" style={{ justifyContent: 'space-between' }}>
          <div>
            <div className="page-header">
              <div className="brand-badge">EBS — OUVERTURE INTERNATIONALE</div>
              <div className="accreditation-pill">ACCRÉDITÉ PAR L'ÉTAT</div>
            </div>

            {/* International Pathways */}
            <div style={{ marginBottom: '5mm' }}>
              <div className="section-title">
                <Globe size={14} />
                {sections.international_pathways?.heading || "PARCOURS D'ÉTUDES À L'INTERNATIONAL"}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5mm' }}>
                {sections.international_pathways?.items?.map((pathway, idx) => (
                  <div key={idx} className="card" style={{ borderLeft: '3px solid var(--ebs-navy)' }}>
                    <div style={{ fontSize: '8pt', fontWeight: 700, color: 'var(--ebs-navy)', marginBottom: '1mm', display: 'flex', alignItems: 'center', gap: '1.5mm' }}>
                      <ChevronRight size={12} color="var(--ebs-crimson)" />
                      {typeof pathway === 'string' ? pathway : pathway.heading}
                    </div>
                    {typeof pathway === 'object' && pathway.text && (
                      <div style={{ fontSize: '7.2pt', color: 'var(--text-secondary)', lineHeight: 1.35 }}>
                        {pathway.text}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Partners Grid */}
            {sections.academic_partners && (
              <div style={{ marginBottom: '4.5mm' }}>
                <div style={{ fontSize: '8pt', fontWeight: 800, color: 'var(--ebs-navy)', textTransform: 'uppercase', marginBottom: '2mm' }}>
                  UNIVERSITÉS & ÉCOLES PARTENAIRES
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '2mm',
                  background: 'var(--bg-slate)',
                  padding: '3mm',
                  borderRadius: '6px',
                  border: '1px solid var(--border-subtle)'
                }}>
                  {sections.academic_partners.items?.slice(0, 9).map((partner, idx) => (
                    <div key={idx} style={{
                      background: '#FFFFFF',
                      padding: '2mm',
                      borderRadius: '4px',
                      fontSize: '6.5pt',
                      fontWeight: 700,
                      textAlign: 'center',
                      color: 'var(--ebs-navy)',
                      border: '1px solid var(--border-subtle)'
                    }}>
                      {typeof partner === 'string' ? partner : partner.heading}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Contact Box & QR Code */}
          <div style={{
            background: 'var(--ebs-navy)',
            color: '#FFFFFF',
            padding: '4.5mm 5mm',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ fontSize: '10pt', fontWeight: 900, marginBottom: '1.5mm', letterSpacing: '-0.01em' }}>
                ESPIMA BUSINESS SCHOOL
              </div>
              <div style={{ fontSize: '7.2pt', opacity: 0.9, lineHeight: 1.5 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5mm' }}>
                  <MapPin size={10} color="#F59E0B" /> Les Berges du Lac 3 - Tunis
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5mm' }}>
                  <Phone size={10} color="#F59E0B" /> +216 71 18 26 25 • +216 55 582 843
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5mm' }}>
                  <Mail size={10} color="#F59E0B" /> info@ebs.tn • www.ebs.tn
                </div>
              </div>
            </div>

            {/* QR Code Container */}
            <div style={{
              background: '#FFFFFF',
              padding: '2mm',
              borderRadius: '6px',
              textAlign: 'center',
              width: '24mm',
              height: '24mm',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{ fontSize: '5pt', fontWeight: 800, color: 'var(--ebs-navy)', marginBottom: '1mm' }}>
                SCAN TO APPLY
              </div>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
                  sections.contacts_back?.qr?.payload || 'https://ebs.tn/fr/preinscription'
                )}`}
                alt="QR Code"
                style={{ width: '16mm', height: '16mm' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
