import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {
  ArrowUpRight,
  Check,
  CircleDot,
  Globe2,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react';
import type { ProgrammeData, ProgrammeSection, SectionGroup, SectionItem } from '../lib/types';
import { brochureLayouts, type SectionLayout } from '../lib/brochureLayouts';
import { EbsBrandLogo } from './EbsBrandLogo';

type Props = { data: ProgrammeData };

const themes: Record<string, { accent: string; ink: string; pale: string; image: string }> = {
  'licence-finance': { accent: '#00BCD4', ink: '#073B4C', pale: '#E8FAFC', image: '/images/programs/finance.jpg' },
  'licence-informatique': { accent: '#9C27B0', ink: '#27153B', pale: '#F7ECFA', image: '/images/programs/informatique.jpg' },
  'licence-management': { accent: '#2196F3', ink: '#102A43', pale: '#EAF5FE', image: '/images/programs/management.jpg' },
  'licence-marketing': { accent: '#E91E8C', ink: '#42142D', pale: '#FDECF5', image: '/images/metiers-avenir-digital-marketing.webp' },
  'master-crm-transformation-digitale': { accent: '#E91E63', ink: '#3D1222', pale: '#FDECF1', image: '/images/programs/program-hero.jpg' },
  'master-ingenierie-financiere': { accent: '#00897B', ink: '#073B36', pale: '#E7F5F3', image: '/images/programs/finance.jpg' },
  'master-management-projets': { accent: '#5E35B1', ink: '#27164C', pale: '#F0ECFA', image: '/images/trois-masters-adp-asteelflash.webp' },
  'master-marketing-digital-ia': { accent: '#E91E8C', ink: '#42142D', pale: '#FDECF5', image: '/images/master-marketing-digital-data-analytics.webp' },
};

const partnerLogos: Array<[RegExp, string]> = [
  [/UQAT/i, '/images/partenaires-academiques/uqat.webp'],
  [/LINK/i, '/images/partenaires-academiques/link-university.jpeg'],
  [/EPITECH/i, '/images/partenaires-academiques/epitech.webp'],
  [/EPSI/i, '/images/partenaires-academiques/epsi.webp'],
  [/REDSUP/i, '/images/partenaires-academiques/redsup.webp'],
  [/PARIS SCHOOL/i, '/images/partenaires-academiques/psb.webp'],
  [/ÉKLORE|EKLORE/i, '/images/partenaires-academiques/eklore.webp'],
  [/EXCELIA/i, '/images/partenaires-academiques/excelia.webp'],
  [/EM NORMANDIE/i, '/images/ebs-tn/EM_Normandie-Logo.png'],
  [/IDRAC/i, '/images/partenaires-academiques/idrac.webp'],
  [/IGEFI/i, '/images/partenaires-academiques/igefi.webp'],
  [/IFAG/i, '/images/partenaires-academiques/ifag.webp'],
  [/SUP.DE COM/i, '/images/partenaires-academiques/supdecom.webp'],
  [/SATEM/i, '/images/partenaires/satem.webp'],
  [/SOPRA/i, '/images/partenaires/soprahr.webp'],
  [/ASTEELFLASH/i, '/images/partenaires/asteelflash.webp'],
  [/ARFORGHE/i, '/images/partenaires/arforghe.webp'],
  [/ATB/i, '/images/partenaires/atb.webp'],
  [/CAYON/i, '/images/partenaires/cayon.webp'],
];

const issuerLogos: Array<[RegExp, string]> = [
  [/BLOOMBERG/i, '/images/icon/Bloomberg.svg'],
  [/SCRUMSTUDY/i, '/images/icon/scrumstudy.svg'],
  [/PMI/i, '/images/icon/pmi.svg'],
  [/IBM/i, '/images/icon/ibm.svg'],
  [/CISCO/i, '/images/icon/cisco-2.svg'],
  [/PWC/i, '/images/icon/pwc.png'],
  [/META/i, '/images/icon/meta.png'],
  [/N8N/i, '/images/icon/n8n.png'],
  [/HUBSPOT/i, '/images/icon/hubspot.svg'],
  [/SEMRUSH/i, '/images/icon/semrush.svg'],
  [/MICROSOFT/i, '/images/icon/microsoft.svg'],
  [/CITI/i, '/images/icon/citi.svg'],
  [/JPMORGAN/i, '/images/icon/jpmorgan.svg'],
];

const getLogo = (label: string, logos = partnerLogos) => logos.find(([pattern]) => pattern.test(label))?.[1];

const SourceText: React.FC<{ children: React.ReactNode; value?: string; className?: string }> = ({ children, value, className }) => (
  <span className={className} data-source-text={value}>{children}</span>
);

const PublicationText: React.FC<{ value: string; className?: string }> = ({ value, className }) => (
  <SourceText value={value} className={className}>{value}</SourceText>
);

function QrMark({ payload }: { payload: string }) {
  return (
    <QRCodeSVG className="qr-mark" value={payload} level="M" marginSize={4} role="img" aria-label={`QR code: ${payload}`} data-qr-payload={payload} />
  );
}

function ItemCard({ item }: { item: string | SectionItem }) {
  if (typeof item === 'string') {
    const logo = getLogo(item);
    return (
      <div className={logo ? 'logo-item' : 'list-item'}>
        {logo ? <img src={logo} alt="" /> : <Check size={11} />}
        <PublicationText value={item} />
      </div>
    );
  }

  if (item.credential_source) {
    const issuer = item.issuer_source || 'Certification professionnelle';
    const logo = getLogo(issuer, issuerLogos);
    return (
      <article className="credential-item">
        {logo && <img src={logo} alt="" />}
        <div>
          <PublicationText value={issuer} className="item-kicker" />
          <PublicationText value={item.credential_source} className="item-title" />
        </div>
      </article>
    );
  }

  if (item.partner) {
    const logo = getLogo(item.partner);
    return (
      <article className="pathway-item">
        <header>
          {logo && <img src={logo} alt="" />}
          <div><PublicationText value={item.country || ''} className="item-kicker" /><PublicationText value={item.partner} className="item-title" /></div>
        </header>
        {item.entry_source && <PublicationText value={item.entry_source} className="pathway-entry" />}
        {item.qualification_source && <PublicationText value={item.qualification_source} />}
        {item.recognition_source && <PublicationText value={item.recognition_source} className="muted" />}
        {item.options_heading && <PublicationText value={item.options_heading} className="item-kicker" />}
        {item.options && <div className="option-line">{item.options.map((option) => <PublicationText key={option} value={option} />)}</div>}
      </article>
    );
  }

  return (
    <article className="text-item">
      {item.heading && <PublicationText value={item.heading} className="item-title" />}
      {item.text && <PublicationText value={item.text} />}
      {item.items && <div className="compact-list">{item.items.map((value) => <PublicationText key={value} value={value} />)}</div>}
      {item.callout && <PublicationText value={item.callout} className="callout" />}
    </article>
  );
}

function GroupCard({ group }: { group: SectionGroup }) {
  return (
    <article className="group-item">
      <header>
        {group.semester && <span className="group-number">S{group.semester}</span>}
        <div>
          {group.country && <PublicationText value={group.country} className="item-kicker" />}
          {group.heading && <PublicationText value={group.heading} className="item-title" />}
        </div>
      </header>
      {group.items && <div className="compact-list">{group.items.map((value) => <PublicationText key={value} value={value} />)}</div>}
      {group.partners && <div className="partner-list">{group.partners.map((value) => <ItemCard key={value} item={value} />)}</div>}
      {group.callout && <PublicationText value={group.callout} className="callout" />}
    </article>
  );
}

function SectionBlock({ sectionId, section, layout }: { sectionId: string; section: ProgrammeSection; layout: SectionLayout }) {
  const isContact = sectionId === 'contacts_back';
  const items = section.items || [];
  return (
    <section
      className={`content-section layout-${layout.variant || 'standard'} section-${sectionId}`}
      data-section-id={sectionId}
      style={{
        gridColumn: `${layout.column} / span ${layout.span}`,
        gridRow: `${layout.row} / span ${layout.rowSpan || 1}`,
      }}
    >
      {section.heading && <h2><CircleDot size={13} /><PublicationText value={section.heading} /></h2>}
      {section.programme_title_source && <PublicationText value={section.programme_title_source} className="programme-repeat" />}
      {section.text && <PublicationText value={section.text} className="section-copy" />}
      {section.groups && <div className="group-grid">{section.groups.map((group, index) => <GroupCard key={`${group.heading || group.country}-${index}`} group={group} />)}</div>}
      {!isContact && items.length > 0 && (
        <div className={`item-grid ${items.length > 8 ? 'item-grid-dense' : ''}`}>
          {items.map((item, index) => <ItemCard key={`${typeof item === 'string' ? item : item.heading || item.credential_source || item.partner}-${index}`} item={item} />)}
        </div>
      )}
      {section.callout && <PublicationText value={section.callout} className="section-callout" />}
      {section.conditions_source && <PublicationText value={section.conditions_source} className="conditions" />}
      {(isContact || section.qr?.payload) && (
        <div className="contact-cta">
          {isContact && <div className="contact-lines">
            <span><Phone size={11} /> +216 71 18 26 25</span>
            <span><Mail size={11} /> info@ebs.tn</span>
            <span><Globe2 size={11} /> www.ebs.tn</span>
            <span><MapPin size={11} /> Lac 3, Tunis</span>
          </div>}
          {section.qr?.payload && <div><QrMark payload={section.qr.payload} />{section.qr_caption && <PublicationText value={section.qr_caption} className="qr-caption" />}</div>}
        </div>
      )}
    </section>
  );
}

function PageHeader({ page, level }: { page: number; level: string }) {
  return (
    <header className="editorial-header">
      <EbsBrandLogo variant={page === 3 ? 'light' : 'dark'} height="9mm" />
      <span>{level === 'master' ? 'MASTERS' : 'LICENCES'} 2026</span>
      <span>0{page} / 04</span>
    </header>
  );
}

const pageLabels: Record<number, { eyebrow: string; word: string }> = {
  2: { eyebrow: 'Architecture du parcours', word: 'PROGRAMME' },
  3: { eyebrow: 'Compétences et expérience', word: 'POTENTIEL' },
  4: { eyebrow: 'Ouverture et avenir', word: 'INTERNATIONAL' },
};

function Cover({ data }: Props) {
  const sections = data.sections;
  const positioning = sections.positioning;
  const description = sections.cover_description;
  const themesSection = sections.cover_themes || sections.cover_benefits;
  const accreditation = sections.accreditation;
  const duration = sections.duration?.text || `${data.programme.level === 'master' ? 'Master' : 'Licence'} • ${data.programme.duration_years} ans`;
  return (
    <section className="page cover-page">
      <img className="cover-photo" src={themes[data.id].image} alt="" />
      <div className="cover-wash" />
      <div className="orb orb-one" /><div className="orb orb-two" /><div className="dot-field" />
      <div className="cover-content">
        <div className="cover-top"><EbsBrandLogo variant="light" height="13mm" /><PublicationText value={accreditation.text || ''} className="accreditation" /></div>
        <div className="cover-level"><GraduationCap size={15} /><PublicationText value={duration} /></div>
        <h1><PublicationText value={data.programme.name_source} /></h1>
        {positioning?.heading && <h2><PublicationText value={positioning.heading} /></h2>}
        {description?.heading && <h2><PublicationText value={description.heading} /></h2>}
        {(positioning?.text || description?.text) && <p><PublicationText value={(positioning.text || description.text) as string} /></p>}
        {themesSection?.items && <div className="cover-themes">{themesSection.items.map((item) => typeof item === 'string' && <PublicationText key={item} value={item} />)}</div>}
        <div className="cover-footer"><span>www.ebs.tn</span><span>+216 71 18 26 25</span><span>info@ebs.tn</span><ArrowUpRight size={19} /></div>
      </div>
    </section>
  );
}

export const AuthoritativeBrochure: React.FC<Props> = ({ data }) => {
  const theme = themes[data.id];
  const coverage = data.page_coverage || [];
  return (
    <div className="brochure-root authoritative-brochure" data-programme-id={data.id} style={{ '--accent': theme.accent, '--ink': theme.ink, '--pale': theme.pale, '--programme-image': `url("${theme.image}")` } as React.CSSProperties}>
      <Cover data={data} />
      {[2, 3, 4].map((pageNumber) => {
        const pageLayout = brochureLayouts[data.id][pageNumber as 2 | 3 | 4];
        const pageSections = (coverage.find((entry) => entry.page === pageNumber)?.section_ids || [])
          .filter((sectionId) => !sectionId.startsWith('footer'));
        return (
          <section className={`page content-page content-page-${pageNumber} brochure-${data.id}`} key={pageNumber}>
            <div className="interior-photo"><img src={theme.image} alt="" /></div>
            <div className="page-display-word">{pageLabels[pageNumber].word}</div>
            <div className="page-geometry"><Sparkles size={18} /></div>
            <div className="page-inner editorial-page-inner">
              <PageHeader page={pageNumber} level={data.programme.level} />
              <div className="page-kicker"><span>0{pageNumber}</span>{pageLabels[pageNumber].eyebrow}</div>
              <div className="editorial-grid explicit-layout" style={{ gridTemplateRows: pageLayout.rows }}>
                {pageSections.map((sectionId) => data.sections[sectionId] && pageLayout.sections[sectionId] && (
                  <SectionBlock key={sectionId} sectionId={sectionId} section={data.sections[sectionId]} layout={pageLayout.sections[sectionId]} />
                ))}
              </div>
              <footer className="editorial-footer"><span>EBS.TN</span><span>L’excellence académique au service de votre avenir</span><span>{data.programme.name_normalized}</span></footer>
            </div>
          </section>
        );
      })}
    </div>
  );
};
