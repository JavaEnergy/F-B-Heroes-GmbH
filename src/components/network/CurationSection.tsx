"use client";

import styled from "styled-components";
import LinkButton from "../shared/LinkButton";

interface Card {
  title: string;
  description: string;
  image: string;
}

interface Props {
  dict: any;
  title: string;
  description: string;
  cards: Card[];
}

export default function CurationSection({
  dict,
  title,
  description,
  cards,
}: Props) {
  return (
    <SectionElement>
      <Header>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Header>

      <GridWrapper>
        {cards?.map((card, index) => (
          <ExpertCard key={index}>
            <IconWrapper>
              <img src={card.image} alt={card.title} />
            </IconWrapper>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </ExpertCard>
        ))}

        <JoinCard>
          <JoinTitle>{dict.title}</JoinTitle>
          <JoinDescription>{dict.description}</JoinDescription>
          <ButtonBox>
            <LinkButton
              label={dict.button}
              url="/contact"
              bgcolor="#99F6C4"
              color="#0F5238"
            />
          </ButtonBox>
        </JoinCard>
      </GridWrapper>
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
  @media (max-width: 1024px) {
    padding: 72px 24px;
  }
`;

const Header = styled.div`
  max-width: 800px;
  margin-bottom: 80px;
`;

const Title = styled.h2`
  font-size: 48px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;
  color: #4a4a4a;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  width: fit-content;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ExpertCard = styled.div`
  background: #ffffff;
  max-width: 390px;
  padding: 40px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
  transition:
    transform 0.4s cubic-bezier(0.2, 1, 0.3, 1),
    box-shadow 0.4s cubic-bezier(0.2, 1, 0.3, 1),
    scale 0.4s cubic-bezier(0.2, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0);

  &:hover {
    transform: translateY(-12px);
    scale: 1.2;
    box-shadow: 0 10px 30px -5px rgba(15, 82, 56, 0.3);
  }
  &:active {
    transform: translateY(-4px);
    scale: 1.02;
    transition: all 0.1s ease;
  }
  @media (max-width: 1024px) {
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  margin-bottom: 32px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #1a1a1a;
`;

const CardDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #4a4a4a;
`;

const JoinCard = styled(ExpertCard)`
  background-color: #2d312f;
  color: #ffffff;
`;

const JoinTitle = styled(CardTitle)`
  color: #ffffff;
`;

const JoinDescription = styled(CardDescription)`
  color: #a0a0a0;
  margin-bottom: 32px;
`;

const ButtonBox = styled.div`
  margin-top: auto;
  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
