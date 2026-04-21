import styled from "styled-components";
import LinkButton from "../shared/LinkButton";
import Link from "next/link";
import RightArrow from "@/svg";

interface Props {
  description: string;
  title: string;
  image: string;
  badge: string;
}

export default function HeroSection(props: Props) {
  return (
    <HeroContainer>
      <HeroLeft>
        <HeroSubtitle>{props.badge}</HeroSubtitle>
        <HeroTitle>{props.title}</HeroTitle>
        <HeroDescription>{props.description}</HeroDescription>
      </HeroLeft>
      <HeroRight>
        <HeroImage src={props.image} alt="Hero Image" />
        <Stats>
          <StatsTitle>25+</StatsTitle>
          <StatsLabel>JAHRE ERFAHRUNG</StatsLabel>
        </Stats>
      </HeroRight>
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  width: 100%;
  padding: 80px 64px 128px 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 128px;
  @media (max-width: 1024px) {
    padding: 32px 24px 72px;
    gap: 40px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HeroLeft = styled.div`
  width: 40%;
  order: 1;
  @media (max-width: 1024px) {
    width: 100%;
    order: 0;
  }
`;
const HeroRight = styled.div`
  width: 30%;
  position: relative;
  order: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: 56px;
  font-weight: 700;
  margin-top: 32px;
`;

const HeroDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 24px;
  white-space: pre-line;
`;

const HeroSubtitle = styled.h3`
  font-size: 16px;
  text-transform: uppercase;
  color: #0f5238;
`;

const HeroImage = styled.img`
  width: 70%;
  border-radius: 16px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Stats = styled.div`
  background-color: #92f7c3;
  border-radius: 12px;
  padding: 32px;
  max-width: 240px;
  position: absolute;
  right: -64px;
  bottom: -32px;
  z-index: 2;
  @media (max-width: 1280px) {
    right: 0;
  }
  @media (max-width: 1024px) {
    position: static;
    margin-top: 16px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`;
const StatsTitle = styled.h3`
  font-size: 30px;
  font-weight: 700;
`;
const StatsLabel = styled.p`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
`;
