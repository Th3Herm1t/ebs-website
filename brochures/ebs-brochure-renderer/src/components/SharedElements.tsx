import React from 'react';
import { 
  Check, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  Image as ImageIcon 
} from 'lucide-react';

/**
 * Placeholder component for missing visual assets (photos, 3D diagrams, etc.)
 * Strictly avoids invented / fake assets and cropped blurry screenshots.
 */
export const AssetPlaceholder: React.FC<{
  label: string;
  sublabel?: string;
  height?: string | number;
  width?: string | number;
  className?: string;
  style?: React.CSSProperties;
}> = ({ label, sublabel, height = '100%', width = '100%', className = '', style }) => {
  return (
    <div
      className={`asset-placeholder ${className}`}
      style={{
        width,
        height,
        backgroundColor: '#F1F5F9',
        border: '1.5px dashed #94A3B8',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px',
        textAlign: 'center',
        color: '#475569',
        boxSizing: 'border-box',
        ...style
      }}
    >
      <ImageIcon size={24} color="#64748B" style={{ marginBottom: '6px', opacity: 0.8 }} />
      <div style={{ fontSize: '7.5pt', fontWeight: 800, color: '#1E293B', textTransform: 'uppercase', letterSpacing: '0.04em', lineHeight: 1.2 }}>
        {label}
      </div>
      {sublabel && (
        <div style={{ fontSize: '6pt', color: '#64748B', marginTop: '3px', lineHeight: 1.2 }}>
          {sublabel}
        </div>
      )}
    </div>
  );
};

import { EbsBrandLogo } from './EbsBrandLogo';

/**
 * Authentic EBS Header Brand using genuine vector/svg logo from ebs-website
 */
export const EbsHeaderBrand: React.FC<{ variant?: 'light' | 'dark' }> = ({ variant = 'dark' }) => {
  const isLight = variant === 'light';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <EbsBrandLogo variant={variant} height="11mm" />
      <div style={{
        height: '24px',
        width: '1.5px',
        backgroundColor: isLight ? 'rgba(255,255,255,0.4)' : '#0A1C3E',
        opacity: 0.6
      }} />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'var(--font-sans)',
        fontWeight: 900,
        fontSize: '6.5pt',
        letterSpacing: '0.12em',
        lineHeight: 1.15,
        color: isLight ? '#FFFFFF' : '#0A1C3E'
      }}>
        <span>PENSEZ</span>
        <span>INNOVER</span>
        <span>RÉUSSIR</span>
      </div>
    </div>
  );
};

/**
 * Authentic State Accreditation Rosette Badge
 */
export const AccreditationBadge: React.FC<{ variant?: 'light' | 'dark' }> = ({ variant = 'dark' }) => {
  const isLight = variant === 'light';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ position: 'relative', width: '22px', height: '22px' }}>
        {/* Rosette scalloped seal */}
        <div style={{
          width: '22px',
          height: '22px',
          borderRadius: '50%',
          backgroundColor: '#0284C7',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
          border: '1.5px solid #FFFFFF'
        }}>
          <Check size={13} strokeWidth={3.5} />
        </div>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        lineHeight: 1.05
      }}>
        <span style={{
          fontSize: '6.5pt',
          fontWeight: 900,
          color: isLight ? '#FFFFFF' : '#0A1C3E',
          letterSpacing: '0.04em',
          textTransform: 'uppercase'
        }}>
          DIPLÔME ACCRÉDITÉ
        </span>
        <span style={{
          fontSize: '5.8pt',
          fontWeight: 800,
          color: '#0284C7',
          letterSpacing: '0.03em',
          textTransform: 'uppercase'
        }}>
          PAR L'ÉTAT TUNISIEN
        </span>
      </div>
    </div>
  );
};

/**
 * Standard Print Footer Contact Bar
 */
export const BottomContactBar: React.FC<{
  slogan?: string;
  theme?: 'dark' | 'light';
}> = ({
  slogan = "UN PROGRAMME TOURNÉ VERS L'AVENIR",
  theme = 'light'
}) => {
  const isDark = theme === 'dark';
  return (
    <div style={{
      width: '100%',
      paddingTop: '2.5mm',
      paddingBottom: '2.5mm',
      borderTop: isDark ? '1px solid rgba(255,255,255,0.15)' : '1px solid #E2E8F0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '6.5pt',
      fontWeight: 600,
      color: isDark ? '#94A3B8' : '#475569'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Globe size={11} color="#0284C7" />
          <span style={{ fontWeight: 800, color: isDark ? '#FFFFFF' : '#0A1C3E' }}>www.ebs.tn</span>
        </div>
        <span style={{ opacity: 0.3 }}>|</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Phone size={11} color="#0284C7" />
          <span>+216 71 18 26 25</span>
        </div>
        <span style={{ opacity: 0.3 }}>|</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Mail size={11} color="#0284C7" />
          <span>info@ebs.tn</span>
        </div>
        <span style={{ opacity: 0.3 }}>|</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <MapPin size={11} color="#0284C7" />
          <span>Lac 3 - Tunis, Tunisie</span>
        </div>
      </div>

      <div style={{
        borderLeft: `2px solid ${isDark ? '#00BCEB' : '#0A1C3E'}`,
        paddingLeft: '8px',
        fontWeight: 900,
        fontSize: '6.5pt',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        color: isDark ? '#38BDF8' : '#0A1C3E'
      }}>
        {slogan}
      </div>
    </div>
  );
};
