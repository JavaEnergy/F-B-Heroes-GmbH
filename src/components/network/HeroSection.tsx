import styled from "styled-components";
import LinkButton from "../shared/LinkButton";

interface Props {
  badge: string;
  description: string;
  title: string;
  image: string;
  dict: any;
}

export default function HeroSection(props: Props) {
  return (
    <HeroContainer>
      <HeroLeft>
        <HeroSubtitle>{props.badge}</HeroSubtitle>
        <HeroTitle>{props.title}</HeroTitle>
        <HeroDescription>{props.description}</HeroDescription>
        <ButtonWrapper>
          <LinkButton
            label={props.dict.button}
            url="/contact"
            bgcolor="#0F5238"
            color="#fff"
          />
        </ButtonWrapper>
      </HeroLeft>
      <HeroRight>
        <HeroImage src={props.image} alt="Hero Image" />
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
  height: fit-content;
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

const InfoBox = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 56px;
  border-radius: 12px;
  padding: 24px;
  background-color: #f4f4f2;
`;

const ButtonWrapper = styled.div`
  margin-top: 40px;
`;
