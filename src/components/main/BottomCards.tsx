import RightArrow, { Star } from "@/svg";
import Link from "next/link";
import styled from "styled-components";

interface BottomCard {
  description: string;
  image: string | null;
  title: "F&B Heroes";
  link?: string;
}

export default function BottomCards(props: { cards: BottomCard[]; dict: any }) {
  const resolveCardLink = (card: BottomCard) => {
    if (card.title.toLowerCase().includes("f&b heroes")) return "/services";
    if (card.title.toLowerCase().includes("vend robotic")) return "/contact";
    return card.link || "#";
  };

  return (
    <BottomCardsSection>
      <SubTitleBox>
        <Star />
        {props.dict.badge}
      </SubTitleBox>
      <Title>{props.dict.subtitle}</Title>
      <Cards>
        {props.cards.map((card, index) => (
          <Card key={index} href={resolveCardLink(card)}>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
            <ViewText>
              {props.dict.cta} <RightArrow />
            </ViewText>
          </Card>
        ))}
      </Cards>
    </BottomCardsSection>
  );
}

const BottomCardsSection = styled.section`
  width: calc(100% - 32px);
  max-width: 100%;
  background-color: #f4f4f2;
  border-radius: 48px;
  padding: 96px 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: calc(100% - 24px);
    border-radius: 24px;
    padding: 56px 12px;
  }
`;

const SubTitleBox = styled.div`
  background-color: #92f7c3;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #00734d;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 16px;
`;

const Title = styled.h2`
  font-size: 16px;
  text-align: center;
  margin-top: 32px;
  font-weight: 500;
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  margin-top: 64px;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-top: 32px;
    gap: 16px;
  }
`;

const Card = styled(Link)`
  max-width: 373px;
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  border-radius: 12px;
  gap: 16px;
  cursor: pointer;
  text-decoration: none;
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

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 24px;

    &:hover {
      transform: none;
      scale: 1;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0);
    }
  }
`;
const CardTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  color: #0f5238;
`;

const CardDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

const ViewText = styled.span`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`;
