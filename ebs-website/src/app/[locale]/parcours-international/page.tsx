import ParcoursInternationalClient from "./ParcoursInternationalClient";

export default async function ParcoursInternationalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <ParcoursInternationalClient locale={locale === "en" ? "en" : "fr"} />;
}
