"use client";

import styled from "styled-components";

interface Props {
  dict: any;
}

export default function HeroSection({ dict }: Props) {
  const { hero } = dict.contact;

  return (
    <HeroContainer>
      <ContentWrapper>
        <Badge>{hero.badge}</Badge>
        <Title>{hero.title}</Title>
        <Description>{hero.description}</Description>
      </ContentWrapper>
    </HeroContainer>
  );
}
const HeroContainer = styled.section`
  width: 100%;
  padding: 120px 64px 80px 64px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 1024px) {
    padding: 72px 24px 56px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const Badge = styled.span`
  color: #0f5238;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 2.5px;
  text-transform: uppercase;
`;

const Title = styled.h1`
  font-size: 80px;
  font-weight: 700;
  color: #1a1d1b;
  line-height: 1.1;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 56px;
  }
`;

const Description = styled.p`
  font-size: 20px;
  color: #4a4a4a;
  line-height: 1.6;
  max-width: 700px;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
