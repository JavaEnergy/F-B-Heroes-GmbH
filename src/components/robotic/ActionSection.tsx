"use client";

import { FullStorm, Storm } from "@/svg";
import styled from "styled-components";

interface GastroCheckProps {
  dict: {
    title: string;
    description: string;
    button: string;
    disclaimer: string;
  };
}

export default function GastroCheck({ dict }: GastroCheckProps) {
  return (
    <SectionElement>
      <DarkCard>
        <Title>{dict.title}</Title>
        <Description>{dict.description}</Description>

        <CtaButton href="/contact">
          {dict.button}
          <FullStorm />
        </CtaButton>

        <Disclaimer>{dict.disclaimer}</Disclaimer>
      </DarkCard>
    </SectionElement>
  );
}
const SectionElement = styled.section`
  width: 100%;
  padding: 96px 64px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #e6e9e7;

  @media (max-width: 1024px) {
    padding: 72px 12px 64px;
  }
`;

const DarkCard = styled.div`
  width: 100%;
  max-width: 1000px;
  background-color: #2d312f;
  border-radius: 40px;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 768px) {
    border-radius: 24px;
    padding: 40px 20px;
  }
`;

const Title = styled.h2`
  color: #ffffff;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 24px;
  max-width: 600px;
`;

const Description = styled.p`
  color: #a0a0a0;
  font-size: 18px;
  line-height: 1.6;
  max-width: 550px;
  margin-bottom: 40px;
`;

const CtaButton = styled.a`
  background-color: #99f6c4;
  color: #0f5238;
  padding: 20px 40px;
  border-radius: 100px;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const Disclaimer = styled.span`
  margin-top: 24px;
  color: #666;
  font-size: 14px;
`;

const IconPlaceholder = styled.div`
  width: 20px;
  height: 20px;
  background-color: rgba(15, 82, 56, 0.2);
  border-radius: 4px;
`;
