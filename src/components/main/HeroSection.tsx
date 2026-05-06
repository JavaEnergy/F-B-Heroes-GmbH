import styled from "styled-components";
import LinkButton from "../shared/LinkButton";
import Link from "next/link";
import RightArrow from "@/svg";

interface Props {
  description: string;
  title: string;
  image: string;
  dict: any;
  stats: { label: string; number: number };
}

export default function HeroSection(props: Props) {
  return (
    <HeroContainer>
      <HeroLeft>
        <HeroTitle>{props.title}</HeroTitle>
        <HeroDescription>{props.description}</HeroDescription>
        <Btns>
          <LinkButton
            label={props.dict.home.viewServices}
            url={"/services"}
            color={"#fff"}
            bgcolor={"#2D6A4F"}
          />
          <ContactLink href="/contact">
            {props.dict.home.bookCall} <RightArrow />
          </ContactLink>
        </Btns>
      </HeroLeft>
      <HeroRight>
        <HeroImage src={props.image} alt="Hero Image" />
        <Stats>
          <StatsTitle>{props.stats.number}+</StatsTitle>
          <StatsLabel>{props.stats.label}</StatsLabel>
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
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const HeroRight = styled.div`
  width: 30%;
  position: relative;
  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: 56px;
  font-weight: 700;
`;

const HeroDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 24px;
`;

const Btns = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
`;

const ContactLink = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  color: #2d6a4f;
  display: flex;
  align-items: center;
  gap: 8px;
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
  left: -32px;
  bottom: -32px;
  @media (max-width: 1024px) {
    position: static;
    margin-top: 16px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
`;
const StatsTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
`;
const StatsLabel = styled.p`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
`;
