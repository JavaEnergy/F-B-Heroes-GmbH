import { getDictionary } from "@/lib/get-dictionary";
import { getAboutPage } from "../../../../sanity/sanity-utils";
import { CoreSection, HeroSection, VisionSection } from "@/components/about";
import styled from "styled-components";
import LinkButton from "@/components/shared/LinkButton";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Network({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "de");
  const data = await getAboutPage(locale);
  console.log("About Page Data:", data.cardsSection);
  return (
    <>
      <HeroSection {...data.hero} />
      <VisionSection dict={dict.about.vision} />
      <CoreSection {...data.cardsSection} />
      <CTASection>
        <CTAContainer>
          <CTATitle>{dict.about.bottomCTA.title}</CTATitle>
          <CTADescription>{dict.about.bottomCTA.description}</CTADescription>
          <ButtonWrapper>
            <LinkButton
              label={dict.about.bottomCTA.button}
              url="/contact"
              bgcolor="#99F6C4" // Bright green from your theme
              color="#0F5238" // Dark green text for contrast
            />
          </ButtonWrapper>
          <Circle />
          <Circle style={{ right: "-10%", top: "-10%", left: "auto" }} />
        </CTAContainer>
      </CTASection>
    </>
  );
}

const CTASection = styled.section`
  width: 100%;
  padding: 80px 64px 120px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  position: relative;
  @media (max-width: 1024px) {
    padding: 72px 24px;
  }
`;

const CTAContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  background-color: #00734d;
  border-radius: 40px;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
  @media (max-width: 768px) {
    border-radius: 24px;
    padding: 48px 20px;
  }
`;

const CTATitle = styled.h2`
  color: #ffffff;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 24px;
  line-height: 1.1;
`;

const CTADescription = styled.p`
  color: #b1f0ce;
  font-size: 18px;
  line-height: 1.6;
  max-width: 550px;
  margin-bottom: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Circle = styled.div`
  position: absolute;
  width: 60%;
  height: 60%;
  bottom: -10%;
  left: -10%;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
`;
