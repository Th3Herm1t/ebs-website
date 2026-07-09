import { metadataForRoute } from "@/lib/route-metadata";
import { admissionsFaqSchemaQuestions, faqJsonLd } from "@/lib/faq-schema";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataForRoute("admissions", (await params).locale);
}

export default function AdmissionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(admissionsFaqSchemaQuestions)) }} />
      {children}
    </>
  );
}
