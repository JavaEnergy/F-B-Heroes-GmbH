import styled from "styled-components";

interface CardType {
  description: string;
  icon: string;
  title: string;
}

interface Props {
  title: string;
  description: string;
  cards: CardType[];
}

export default function Overview({ title, description, cards }: Props) {
  return (
    <SectionElement>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
      <Cards>
        {cards.map((card) => (
          <Card key={card.title}>
            <img src={card.icon} alt={card.title} width={48} />
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </Card>
        ))}
      </Cards>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  padding: 96px 64px;
  background-color: #fff;
`;

const SectionTitle = styled.h2`
  font-size: 30px;
`;

const SectionDescription = styled.p`
  font-size: 16px;
  margin-top: 16px;
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  margin-top: 64px;
  gap: 24px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  max-width: 286px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  background-color: #f4f4f2;
  border-radius: 12px;
  gap: 16px;
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
`;

const CardTitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
`;

const CardDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
