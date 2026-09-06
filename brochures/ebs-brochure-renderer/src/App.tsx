import React, { useState, useEffect } from 'react';
import { AuthoritativeBrochure } from './components/AuthoritativeBrochure';
import type { ProgrammeData } from './lib/types';

// Import JSON data directly from ebs-brochure-content
import licenceFinance from '../../ebs-brochure-content/json/licence-finance.json';
import licenceInformatique from '../../ebs-brochure-content/json/licence-informatique.json';
import licenceManagement from '../../ebs-brochure-content/json/licence-management.json';
import licenceMarketing from '../../ebs-brochure-content/json/licence-marketing.json';
import masterCrm from '../../ebs-brochure-content/json/master-crm-transformation-digitale.json';
import masterFintech from '../../ebs-brochure-content/json/master-ingenierie-financiere.json';
import masterStartups from '../../ebs-brochure-content/json/master-management-projets.json';
import masterMarketing from '../../ebs-brochure-content/json/master-marketing-digital-ia.json';

const programmesMap: Record<string, ProgrammeData> = {
  'licence-finance': licenceFinance as unknown as ProgrammeData,
  'licence-informatique': licenceInformatique as unknown as ProgrammeData,
  'licence-management': licenceManagement as unknown as ProgrammeData,
  'licence-marketing': licenceMarketing as unknown as ProgrammeData,
  'master-crm-transformation-digitale': masterCrm as unknown as ProgrammeData,
  'master-ingenierie-financiere': masterFintech as unknown as ProgrammeData,
  'master-management-projets': masterStartups as unknown as ProgrammeData,
  'master-marketing-digital-ia': masterMarketing as unknown as ProgrammeData,
};

export const App: React.FC = () => {
  const [selectedProgramme, setSelectedProgramme] = useState<string>('licence-informatique');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const progParam = params.get('programme') || params.get('id') || window.location.pathname.replace(/^\//, '');
    if (progParam && programmesMap[progParam]) {
      setSelectedProgramme(progParam);
    }
  }, []);

  const data = programmesMap[selectedProgramme] || programmesMap['licence-informatique'];

  return (
    <div>
      {/* Interactive Screen Toolbar */}
      <div className="screen-toolbar" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '50px',
        backgroundColor: '#0B192C',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        zIndex: 9999,
        boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span style={{ fontWeight: 800, fontSize: '14px', letterSpacing: '0.05em' }}>
            EBS BROCHURE RENDERER (2026)
          </span>
          <select
            value={selectedProgramme}
            onChange={(e) => {
              setSelectedProgramme(e.target.value);
              const url = new URL(window.location.href);
              url.searchParams.set('programme', e.target.value);
              window.history.pushState({}, '', url.toString());
            }}
            style={{
              padding: '6px 12px',
              borderRadius: '4px',
              border: '1px solid #334155',
              background: '#1E293B',
              color: '#FFFFFF',
              fontSize: '13px',
              cursor: 'pointer'
            }}
          >
            {Object.keys(programmesMap).map((id) => (
              <option key={id} value={id}>
                {programmesMap[id].programme.name_source} ({programmesMap[id].programme.level})
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={() => window.print()}
          style={{
            background: '#C00000',
            color: '#FFFFFF',
            border: 'none',
            padding: '7px 16px',
            borderRadius: '4px',
            fontWeight: 700,
            fontSize: '12px',
            cursor: 'pointer'
          }}
        >
          Print / Export PDF
        </button>
      </div>

      {/* 4-Page Printable Brochure Sheet Canvas */}
      <main className="brochure-container" style={{ marginTop: '50px' }}>
        <AuthoritativeBrochure data={data} />
      </main>
    </div>
  );
};
