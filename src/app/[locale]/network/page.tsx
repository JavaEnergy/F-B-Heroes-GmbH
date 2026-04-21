import { getDictionary } from "@/lib/get-dictionary";
import { getNetworkPage } from "../../../../sanity/sanity-utils";
import { CurationSection, HeroSection } from "@/components/network";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function Network({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale as "en" | "de");
  const data = await getNetworkPage(locale);
  const t = dict.network.bottomCTA;

  return (
    <PageWrapper>
      <HeroSection {...data.hero} dict={dict.network.hero} />
      <CurationSection {...data.expertsSection} dict={dict.network.curation} />
      <CTASection>
        <CTAContainer>
          <TextContent>
            <CTATitle>{t.title}</CTATitle>
            <CTADescription>{t.description}</CTADescription>
          </TextContent>

          <CTAButton href={`/${locale}/contact`}>{t.button}</CTAButton>
        </CTAContainer>
      </CTASection>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  width: 100%;
`;

const CTASection = styled.section`
  width: 100%;
  padding: 0 64px 96px 64px;
  background-color: #ffffff;
  border-bottom: 1px solid #e6e9e7;
  @media (max-width: 1024px) {
    padding: 0 24px 80px;
  }
`;

const CTAContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #ededeb;
  border-radius: 16px;
  padding: 64px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  margin-top: 24px;

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 48px;
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    padding: 32px 20px;
  }
`;

const TextContent = styled.div`
  flex: 1;
  max-width: 700px;
`;

const CTATitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 16px;
`;

const CTADescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #4a4a4a;
`;

const CTAButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #0f5238; // Brand Green
  color: #ffffff;
  padding: 18px 32px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0a3a28;
    transform: translateY(-2px);
  }

  svg {
    margin-top: 1px;
  }
`;
