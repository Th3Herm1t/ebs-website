import PartenairesAcademiquesClient from "./PartenairesAcademiquesClient";

export default async function PartenairesAcademiquesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <PartenairesAcademiquesClient locale={locale === "en" ? "en" : "fr"} />;
}
