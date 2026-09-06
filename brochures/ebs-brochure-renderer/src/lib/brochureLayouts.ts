export type SectionLayout = {
  column: number;
  span: number;
  row: number;
  rowSpan?: number;
  variant?: 'feature' | 'rail' | 'strip' | 'intro' | 'action' | 'visual';
};

export type PageLayout = {
  rows: string;
  sections: Record<string, SectionLayout>;
};

type BrochureLayout = Record<2 | 3 | 4, PageLayout>;

const section = (
  column: number,
  span: number,
  row: number,
  variant?: SectionLayout['variant'],
  rowSpan?: number,
): SectionLayout => ({ column, span, row, variant, rowSpan });

export const brochureLayouts: Record<string, BrochureLayout> = {
  'licence-finance': {
    2: {
      rows: 'auto minmax(0, .9fr) minmax(0, 1.15fr) auto',
      sections: {
        curriculum_intro: section(1, 12, 1, 'intro'),
        curriculum_modules: section(1, 6, 2, 'feature'),
        career_outcomes: section(7, 6, 2, 'rail'),
        certifications: section(1, 8, 3, 'feature'),
        professional_experience: section(9, 4, 3, 'visual'),
        excellence: section(1, 12, 4, 'strip'),
      },
    },
    3: {
      rows: 'auto minmax(0, 1.2fr) minmax(0, .8fr) auto',
      sections: {
        skills_intro: section(1, 8, 1, 'intro'),
        skills_keywords: section(9, 4, 1, 'strip'),
        reasons_to_choose: section(1, 12, 2, 'feature'),
        transversal_skills: section(1, 6, 3, 'rail'),
        pedagogy: section(7, 6, 3, 'rail'),
        ai_learning: section(1, 12, 4, 'action'),
      },
    },
    4: {
      rows: 'auto minmax(0, 1fr) auto',
      sections: {
        closing: section(1, 4, 1, 'intro'),
        closing_benefits: section(5, 8, 1, 'strip'),
        international_pathways: section(1, 7, 2, 'feature'),
        academic_partners: section(8, 5, 2, 'rail'),
        contacts_back: section(1, 12, 3, 'action'),
      },
    },
  },
  'licence-informatique': {
    2: {
      rows: 'auto auto auto auto minmax(0, 1fr)',
      sections: {
        curriculum_intro: section(1, 12, 1, 'intro'),
        curriculum_core: section(1, 12, 2, 'feature'),
        specialisation_choice: section(1, 12, 3, 'strip'),
        specialisation_ai: section(1, 6, 4, 'feature'),
        specialisation_cybersecurity: section(7, 6, 4, 'feature'),
        certifications: section(1, 7, 5, 'feature'),
        professional_experience: section(8, 5, 5, 'rail'),
      },
    },
    3: {
      rows: 'auto auto minmax(0, 1fr) auto',
      sections: {
        skills_intro: section(1, 12, 1, 'intro'),
        transversal_skills: section(1, 12, 2, 'strip'),
        ai_learning: section(1, 6, 3, 'feature'),
        cybersecurity_learning: section(7, 6, 3, 'feature'),
        career_outcomes: section(1, 12, 4, 'strip'),
      },
    },
    4: {
      rows: 'auto minmax(0, 1fr) auto',
      sections: {
        closing: section(1, 4, 1, 'intro'),
        closing_benefits: section(5, 8, 1, 'strip'),
        international_pathways: section(1, 8, 2, 'feature', 2),
        international_support: section(9, 4, 2, 'visual'),
        contacts_back: section(9, 4, 3, 'action'),
      },
    },
  },
  'licence-management': {
    2: {
      rows: 'auto minmax(0, 1.25fr) minmax(0, .75fr)',
      sections: {
        curriculum_intro: section(1, 12, 1, 'intro'),
        curriculum_modules: section(1, 7, 2, 'feature'),
        certifications: section(8, 5, 2, 'feature'),
        career_outcomes: section(1, 7, 3, 'rail'),
        professional_experience: section(8, 5, 3, 'visual'),
      },
    },
    3: {
      rows: 'auto minmax(0, 1.05fr) minmax(0, .95fr)',
      sections: {
        skills_intro: section(1, 12, 1, 'intro'),
        reasons_to_choose: section(1, 7, 2, 'feature'),
        transversal_skills: section(8, 5, 2, 'rail'),
        pedagogy: section(1, 6, 3, 'rail'),
        ai_learning: section(7, 6, 3, 'action'),
      },
    },
    4: {
      rows: 'auto minmax(0, 1fr) auto',
      sections: {
        closing: section(1, 4, 1, 'intro'),
        closing_benefits: section(5, 8, 1, 'strip'),
        international_pathways: section(1, 7, 2, 'feature'),
        academic_partners: section(8, 5, 2, 'rail'),
        contacts_back: section(1, 12, 3, 'action'),
      },
    },
  },
  'licence-marketing': {
    2: {
      rows: 'auto minmax(0, 1.2fr) minmax(0, .8fr)',
      sections: {
        curriculum_intro: section(1, 12, 1, 'strip'),
        curriculum_modules: section(1, 7, 2, 'feature'),
        certifications: section(8, 5, 2, 'feature'),
        career_outcomes: section(1, 7, 3, 'rail'),
        professional_experience: section(8, 5, 3, 'visual'),
      },
    },
    3: {
      rows: 'auto minmax(0, 1.05fr) minmax(0, .95fr)',
      sections: {
        skills_intro: section(1, 12, 1, 'intro'),
        reasons_to_choose: section(1, 7, 2, 'feature'),
        transversal_skills: section(8, 5, 2, 'rail'),
        pedagogy: section(1, 6, 3, 'rail'),
        ai_learning: section(7, 6, 3, 'action'),
      },
    },
    4: {
      rows: 'auto minmax(0, 1fr) auto',
      sections: {
        closing: section(1, 4, 1, 'intro'),
        closing_benefits: section(5, 8, 1, 'strip'),
        international_pathways: section(1, 7, 2, 'feature'),
        academic_partners: section(8, 5, 2, 'rail'),
        contacts_back: section(1, 12, 3, 'action'),
      },
    },
  },
  'master-crm-transformation-digitale': {
    2: {
      rows: 'auto repeat(3, minmax(0, 1fr))',
      sections: {
        curriculum_intro: section(1, 12, 1, 'intro'),
        curriculum_blocks: section(1, 8, 2, 'feature', 3),
        curriculum_visual_labels: section(9, 4, 2, 'strip'),
        career_outcomes: section(9, 4, 3, 'rail'),
        professional_experience: section(9, 4, 4, 'visual'),
      },
    },
    3: {
      rows: 'auto repeat(3, minmax(0, 1fr)) auto',
      sections: {
        reasons_intro: section(1, 12, 1, 'intro'),
        reasons_to_choose: section(1, 8, 2, 'feature', 3),
        certification_logos: section(9, 4, 2, 'rail'),
        skills: section(9, 4, 3, 'rail'),
        quote: section(9, 4, 4, 'visual'),
        funnel_labels: section(1, 12, 5, 'strip'),
      },
    },
    4: {
      rows: 'auto auto minmax(0, 1fr) auto',
      sections: {
        closing: section(1, 5, 1, 'intro', 2),
        closing_values: section(6, 7, 1, 'strip'),
        closing_visual_labels: section(6, 7, 2, 'strip'),
        academic_partners: section(1, 7, 3, 'feature'),
        enterprise_partners: section(8, 5, 3, 'rail'),
        student_journey: section(1, 8, 4, 'strip'),
        contacts_back: section(9, 4, 4, 'action'),
      },
    },
  },
  'master-ingenierie-financiere': {
    2: {
      rows: 'auto repeat(2, minmax(0, 1fr))',
      sections: {
        curriculum_intro: section(1, 12, 1, 'intro'),
        curriculum_blocks: section(1, 8, 2, 'feature', 2),
        career_outcomes: section(9, 4, 2, 'rail'),
        professional_experience: section(9, 4, 3, 'visual'),
      },
    },
    3: {
      rows: 'auto minmax(0, 1fr) auto',
      sections: {
        reasons_intro: section(1, 12, 1, 'intro'),
        reasons_to_choose: section(1, 6, 2, 'feature'),
        certifications: section(7, 6, 2, 'feature'),
        skills: section(1, 12, 3, 'strip'),
      },
    },
    4: {
      rows: 'auto minmax(0, 1fr) auto auto',
      sections: {
        closing: section(1, 4, 1, 'intro'),
        closing_values: section(5, 8, 1, 'strip'),
        academic_partners: section(1, 7, 2, 'feature'),
        enterprise_partners: section(8, 5, 2, 'rail'),
        student_journey: section(1, 8, 3, 'strip'),
        contacts_back: section(9, 4, 3, 'rail'),
        cta: section(1, 12, 4, 'action'),
      },
    },
  },
  'master-management-projets': {
    2: {
      rows: 'auto repeat(2, minmax(0, 1fr))',
      sections: {
        curriculum_intro: section(1, 12, 1, 'intro'),
        curriculum_semesters: section(1, 8, 2, 'feature', 2),
        career_outcomes: section(9, 4, 2, 'rail'),
        professional_experience: section(9, 4, 3, 'visual'),
      },
    },
    3: {
      rows: 'auto minmax(0, 1fr) auto',
      sections: {
        reasons_intro: section(1, 12, 1, 'intro'),
        reasons_to_choose: section(1, 7, 2, 'feature'),
        certifications: section(8, 5, 2, 'feature'),
        skills: section(1, 8, 3, 'strip'),
        quote: section(9, 4, 3, 'visual'),
      },
    },
    4: {
      rows: 'auto minmax(0, 1fr) auto',
      sections: {
        closing: section(1, 5, 1, 'intro'),
        closing_visual_labels: section(6, 4, 1, 'strip'),
        closing_values: section(10, 3, 1, 'strip'),
        academic_partners: section(1, 7, 2, 'feature'),
        enterprise_partners: section(8, 5, 2, 'rail'),
        student_journey: section(1, 8, 3, 'strip'),
        contacts_back: section(9, 4, 3, 'action'),
      },
    },
  },
  'master-marketing-digital-ia': {
    2: {
      rows: 'auto repeat(2, minmax(0, 1fr))',
      sections: {
        curriculum_intro: section(1, 12, 1, 'intro'),
        curriculum_blocks: section(1, 8, 2, 'feature', 2),
        career_outcomes: section(9, 4, 2, 'rail'),
        professional_experience: section(9, 4, 3, 'visual'),
      },
    },
    3: {
      rows: 'auto repeat(2, minmax(0, 1fr))',
      sections: {
        reasons_intro: section(1, 12, 1, 'intro'),
        reasons_to_choose: section(1, 8, 2, 'feature', 2),
        certification_logos: section(9, 4, 2, 'rail'),
        ai_visual_labels: section(9, 4, 3, 'action'),
      },
    },
    4: {
      rows: 'auto minmax(0, 1fr) auto',
      sections: {
        closing: section(1, 4, 1, 'intro'),
        closing_values: section(5, 8, 1, 'strip'),
        academic_partners: section(1, 7, 2, 'feature'),
        enterprise_partners: section(8, 5, 2, 'rail'),
        student_journey: section(1, 8, 3, 'strip'),
        contacts_back: section(9, 4, 3, 'action'),
      },
    },
  },
};
