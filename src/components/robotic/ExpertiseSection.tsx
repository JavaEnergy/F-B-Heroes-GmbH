import styled from "styled-components";

interface CardType {
  description: string;
  image: string;
  label: string;
  title: string;
}

interface ExpertiseSectionProps {
  title: string;
  cards: CardType[];
}

export default function ExpertiseSection(props: ExpertiseSectionProps) {
  return (
    <SectionElement>
      <SectionTitle>{props.title}</SectionTitle>
      <Wrapper>
        {props.cards.map((card, index) => (
          <CardElement key={index}>
            <CardImage src={card.image} alt={card.title} />
            <CardPreTitle>{card.label}</CardPreTitle>
            <CardTitle>{card.title}</CardTitle>
            <p>{card.description}</p>
          </CardElement>
        ))}
      </Wrapper>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  padding: 96px 64px;
  background-color: #fff;

  @media (max-width: 1024px) {
    padding: 72px 12px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  text-align: center;
`;

const Wrapper = styled.div`
  margin-top: 64px;
  display: flex;
  gap: 68px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    gap: 20px;
    flex-direction: column;
    align-items: center;
  }
`;

const CardElement = styled.div`
  max-width: 380px;
  width: 100%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 12px;
  & img {
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    width: 100%;
  }
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 0 10px 2px #0f5238;
  transition:
    transform 0.4s cubic-bezier(0.2, 1, 0.3, 1),
    scale 0.4s cubic-bezier(0.2, 1, 0.3, 1);

  &:hover {
    transform: translateY(-12px);
    scale: 1.2;
    box-shadow: 0 10px 30px -5px rgba(15, 82, 56, 0.3);
    z-index: 10;
  }
  &:active {
    transform: translateY(-4px);
    scale: 1.02;
    transition: all 0.1s ease;
  }

  @media (max-width: 768px) {
    max-width: 420px;
    padding: 10px;

    &:hover {
      transform: none;
      scale: 1;
      box-shadow: 0 0 10px 2px #0f5238;
    }
  }
`;

const CardPreTitle = styled.h4`
  color: #0f5238;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`;

const CardTitle = styled(SectionTitle)`
  text-align: left;
`;

const CardImage = styled.img`
  height: 280px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 180px;
  }
`;
