import { metadataForRoute } from "@/lib/route-metadata";
import { faqJsonLd, faqSchemaQuestions } from "@/lib/faq-schema";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return metadataForRoute("faq", (await params).locale);
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqSchemaQuestions)) }} />
      {children}
    </>
  );
}
