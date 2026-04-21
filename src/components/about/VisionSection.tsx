"use client";

import { CheckTwo } from "@/svg";
import styled from "styled-components";

export default function VisionSection({ dict }: any) {
  return (
    <SectionElement>
      <Title>
        <CheckTwo /> {dict.title}
      </Title>
      <Description>"{dict.subtitle}"</Description>

      <Grid>
        <CardElement>
          <CardTitle>{dict.cards[0].title}</CardTitle>
          <CardDescription>{dict.cards[0].text}</CardDescription>
        </CardElement>
        <CardElement>
          <CardTitle>{dict.cards[1].title}</CardTitle>
          <CardDescription>{dict.cards[1].text}</CardDescription>
        </CardElement>
      </Grid>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  padding: 120px 64px;
  background-color: #f4f4f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
    padding: 72px 24px;
  }
`;

const Header = styled.div`
  max-width: 800px;
  margin-bottom: 80px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  color: #0f5238;
  background-color: #e2e3e1;
  border-radius: 20px;
  width: fit-content;
`;

const Description = styled.p`
  font-size: 36px;
  line-height: 1.6;
  font-weight: 700;
  width: 50%;
  text-align: center;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const CardElement = styled.div`
  padding: 48px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 16px;
`;

const CardDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #4a4a4a;
`;
