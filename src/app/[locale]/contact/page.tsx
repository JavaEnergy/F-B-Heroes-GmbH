import PotentialCheck from "@/components/PotentialSection";
import { ContactForm, HeroSection } from "@/components/contact";
import { getDictionary } from "@/lib/get-dictionary";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Contact({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "de");
  return (
    <>
      <HeroSection dict={dict} />
      <ContactForm dict={dict} />
      <PotentialCheck
        dict={dict.contact.potentialCheck}
        image="/Container.png"
      />
    </>
  );
}
