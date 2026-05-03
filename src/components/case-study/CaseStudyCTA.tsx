import styled from "styled-components";
import LinkButton from "@/components/shared/LinkButton";

interface Props {
  ctaText: string | null;
  ctaLink: string | null;
  locale: string;
}

export default function CaseStudyCTA({ ctaText, ctaLink, locale }: Props) {
  const label = ctaText || "Get in Touch";
  const href = ctaLink || `/${locale}/contact`;

  return (
    <SectionElement>
      <DarkCard>
        <LinkButton label={label} url={href} color="#0f5238" bgcolor="#99f6c4" />
      </DarkCard>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  background-color: #ffffff;
  padding: 0 64px 96px;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 0 24px 64px;
  }
`;

const DarkCard = styled.div`
  width: 100%;
  max-width: 1000px;
  background-color: #2d312f;
  border-radius: 32px;
  padding: 72px 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 768px) {
    border-radius: 20px;
    padding: 48px 24px;
  }
`;
