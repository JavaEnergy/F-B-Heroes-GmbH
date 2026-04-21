import { CheckTwo, Penta } from "@/svg";
import styled from "styled-components";

interface Props {
  subtitle: string;
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
        <HeroSubtitle>{props.subtitle}</HeroSubtitle>
        <HeroTitle>{props.title}</HeroTitle>
        <HeroDescription>{props.description}</HeroDescription>
        <InfoBox>
          <Penta />
          <div>
            <p style={{ fontWeight: "700" }}>{props.dict.title}</p>
            <p>{props.dict.description}</p>
          </div>
        </InfoBox>
      </HeroLeft>
      <HeroRight>
        <HeroImage src={props.image} alt="Hero Image" />
        <ImageTitle>
          <CheckTwo />
          {props.dict.expertise}
        </ImageTitle>
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
  width: 50%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const HeroRight = styled.div`
  width: 50%;
  position: relative;
  @media (max-width: 1024px) {
    width: 100%;
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
`;

const HeroImage = styled.img`
  width: 70%;
  border-radius: 16px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const HeroSubtitle = styled.h3`
  font-size: 16px;
  text-transform: uppercase;
  color: #0f5238;
`;
const ImageTitle = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  max-width: 240px;
  position: absolute;
  right: 32px;
  transform: translateX(-100%);
  bottom: 32px;
  font-size: 14px;
  color: #0f5238;
  text-transform: uppercase;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.06);
  display: flex;
  gap: 16px;
  background-color: #f4f4f2;
  align-items: center;
  @media (max-width: 1024px) {
    position: static;
    transform: none;
    margin-top: 16px;
    max-width: 100%;
  }
`;

const InfoBox = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 56px;
  border-radius: 12px;
  padding: 24px;
  background-color: #f4f4f2;
`;
