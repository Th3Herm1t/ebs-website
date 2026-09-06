export interface ProgrammeMetadata {
  name_source: string;
  name_normalized: string;
  level: 'licence' | 'master';
  duration_years: number;
  qualification_source: string | null;
  semester_count: number | null;
  curriculum_structure: string;
}

export interface SectionItem {
  heading?: string;
  text?: string;
  issuer_source?: string | null;
  credential_source?: string;
  items?: string[];
  callout?: string;
  partner?: string;
  country?: string;
  entry_source?: string;
  qualification_source?: string;
  recognition_source?: string;
  options_heading?: string;
  options?: string[];
}

export interface SectionGroup {
  heading?: string;
  items?: string[];
  callout?: string;
  country?: string;
  partners?: string[];
  semester?: number;
}

export interface ProgrammeSection {
  source_pages: number[];
  heading?: string;
  subheading?: string;
  text?: string;
  items?: (string | SectionItem)[];
  groups?: SectionGroup[];
  callout?: string;
  conditions_source?: string;
  programme_title_source?: string;
  qr_present?: boolean;
  qr_caption?: string;
  qr?: {
    source_page: number;
    payload: string | null;
    status: string;
  };
}

export interface ProgrammeData {
  schema_version: string;
  id: string;
  language: string;
  programme: ProgrammeMetadata;
  sections: Record<string, ProgrammeSection>;
  normalized_contacts: Array<{
    type: string;
    source_text: string;
    normalized_value: string;
    source_pages: number[];
  }>;
  page_coverage: Array<{
    page: number;
    visual_review_completed: boolean;
    section_ids: string[];
  }>;
}
