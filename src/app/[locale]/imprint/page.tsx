import LegalContent from "@/components/shared/Portable";
import { getExtraPage } from "../../../../sanity/sanity-utils";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Imprint({ params }: Props) {
  const { locale } = await params;
  const data = await getExtraPage("imprint", locale);
  if (!data) return <div>Loading or No data found...</div>;
  return <LegalContent data={data} />;
}
