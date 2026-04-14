import HeroSection, {
  BottomCards,
  Partners,
  Robotic,
  Steps,
} from "@/components/main";
import { getHomePage } from "../../../sanity/sanity-utils";
import { getDictionary } from "@/lib/get-dictionary";
import styled from "styled-components";
import ContactForm from "@/components/shared/ContactForm";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "de");
  const data = await getHomePage(locale);
  const finalCards = data.finalCards;
  const realitat = data.realitat;
  const greenIndex = realitat.title.indexOf(":") + 1;
  if (!data) return <div>Loading or No data found...</div>;
  return (
    <>
      <HeroSection
        {...data.hero}
        dict={dict}
        stats={data.stats[0]}
      ></HeroSection>
      <RealitatSection>
        <RealityTitle>{dict.home.reality}</RealityTitle>
        <RealityHeading>
          {realitat.title.substring(0, greenIndex)}
          <span style={{ color: "#0f5238" }}>
            {realitat.title.substring(greenIndex)}
          </span>
        </RealityHeading>
        <Line />
        <RealityDescription>{realitat.description}</RealityDescription>
      </RealitatSection>
      <Steps dict={dict.homeStrategy} />
      <Partners dict={dict.home} partners={data.partnerschaften} />
      <Robotic
        dict={dict.homeInnovation}
        leftImage={data.dividerImages.leftImage}
        rightImage={data.dividerImages.rightImage}
      />
      <BottomCards cards={finalCards} dict={dict.home} />
      <ContactForm dict={dict} />
    </>
  );
}

const RealitatSection = styled.section`
  width: 100%;
  background-color: #f4f4f2;
  padding: 96px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const RealityTitle = styled.h3`
  font-size: 14px;
  text-transform: uppercase;
  color: #0f5238;
`;

const RealityHeading = styled.h2`
  font-size: 40px;
  width: 50%;
  margin-top: 16px;
`;

const Line = styled.hr`
  width: 96px;
  height: 4px;
  background-color: #0f5238;
  margin: 32px 0;
`;

const RealityDescription = styled.p`
  font-size: 20px;
  width: 50%;
`;
