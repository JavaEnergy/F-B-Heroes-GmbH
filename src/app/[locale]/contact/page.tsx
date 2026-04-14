import PotentialCheck from "@/components/PotentialSection";
import ContactForm from "@/components/shared/ContactForm";
import { getDictionary } from "@/lib/get-dictionary";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Contact({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "de");
  return (
    <>
      <ContactForm dict={dict} />
      <PotentialCheck
        dict={dict.contact.potentialCheck}
        image="/Container.png"
      />
    </>
  );
}
