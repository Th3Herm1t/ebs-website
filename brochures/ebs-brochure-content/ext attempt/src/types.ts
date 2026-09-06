export type ViewMode = 'all' | 'single' | 'presentation';

export interface CurriculumModule {
  id: number;
  title: string;
  semester: string;
  category: 'Comptabilité' | 'Finance' | 'Quantitative' | 'Technologie & IA' | 'Droit & RSE';
  description: string;
  keyConcepts: string[];
}

export interface CareerOption {
  id: string;
  title: string;
  description: string;
  iconName: string;
  salaryRange?: string;
  sectors: string[];
}

export interface CertificationItem {
  id: string;
  partner: string;
  title: string;
  level: string;
  category: 'IA & Tech' | 'Finance & Comptabilité' | 'Banque d\'investissement';
  description: string;
  color: string;
}

export interface InternationalPathway {
  number: string;
  title: string;
  destination: string;
  destinationName: string;
  flag: string;
  description: string;
  partners: string[];
  image: string;
}

export interface AcademicPartner {
  id: string;
  name: string;
  country: string;
  city?: string;
  type: string;
  tagline?: string;
  logoType: string;
}
