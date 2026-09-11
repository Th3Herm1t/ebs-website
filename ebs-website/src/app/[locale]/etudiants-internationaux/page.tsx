import EtudiantsInternationauxClient from "./EtudiantsInternationauxClient";

export default async function EtudiantsInternationauxPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <EtudiantsInternationauxClient locale={locale === "en" ? "en" : "fr"} />;
}
