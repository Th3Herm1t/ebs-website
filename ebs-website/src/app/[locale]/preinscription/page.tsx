import PreinscriptionClient from "./PreinscriptionClient";

export default async function PreinscriptionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <PreinscriptionClient locale={locale === "en" ? "en" : "fr"} />;
}
