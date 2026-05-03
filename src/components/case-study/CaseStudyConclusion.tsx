import styled from "styled-components";
import { ParseBold } from "@/lib/parse-bold";

interface Props {
  title: string;
  text: string | null;
}

export default function CaseStudyConclusion({ title, text }: Props) {
  if (!text) return null;

  return (
    <SectionElement>
      <Inner>
        <Accent />
        <Title>{title}</Title>
        <Text><ParseBold text={text} /></Text>
      </Inner>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  background-color: #ffffff;
  padding: 96px 64px;

  @media (max-width: 1024px) {
    padding: 64px 24px;
  }

  @media (max-width: 600px) {
    padding: 48px 20px;
  }
`;

const Inner = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Accent = styled.div`
  width: 48px;
  height: 3px;
  background-color: #0f5238;
  border-radius: 2px;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.02em;

  @media (max-width: 1024px) {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Text = styled.p`
  font-size: 20px;
  line-height: 1.8;
  color: #2a2a2a;
  white-space: pre-line;
  font-style: italic;

  @media (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 1.75;
  }
`;
