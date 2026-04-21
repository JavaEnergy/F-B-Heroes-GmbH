"use client";

import { Clock, Shield, User } from "@/svg";
import styled from "styled-components";

interface Props {
  dict: any;
}

export default function ConsultationDetails({ dict }: Props) {
  const { benefits } = dict.contact;

  const getIcon = (type: string) => {
    switch (type) {
      case "clock":
        return <Clock />;
      case "user":
        return <User />;
      case "shield":
        return <Shield />;
      default:
        return null;
    }
  };

  return (
    <SidebarContainer>
      <MainTitle>{benefits.title}</MainTitle>

      <BenefitsList>
        {benefits.items.map((item: any, index: number) => (
          <BenefitItem key={index}>
            <IconCircle>{getIcon(item.icon)}</IconCircle>
            <TextGroup>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDesc>{item.description}</ItemDesc>
            </TextGroup>
          </BenefitItem>
        ))}
      </BenefitsList>

      <QuoteCard>
        <QuoteText>{benefits.quote}</QuoteText>
        <AuthorInfo>
          <strong>{benefits.author}</strong>
          <span>{benefits.position}</span>
        </AuthorInfo>
      </QuoteCard>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const MainTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #1a1d1b;
  margin-bottom: 8px;
`;

const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const IconCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #99f6c4;
  color: #0f5238;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #1a1d1b;
`;

const ItemDesc = styled.span`
  font-size: 15px;
  color: #666;
`;

const QuoteCard = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 520px;
  gap: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);

  @media (max-width: 1024px) {
    max-width: 100%;
    padding: 24px 20px;
  }
`;

const QuoteText = styled.p`
  font-size: 18px;
  font-style: italic;
  line-height: 1.6;
  color: #4a4a4a;
  margin: 0;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  strong {
    font-size: 16px;
    color: #1a1d1b;
  }

  span {
    font-size: 14px;
    color: #888;
  }
`;
