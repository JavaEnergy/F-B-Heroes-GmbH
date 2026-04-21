import RightArrow, { CheckTwo, Penta, RoboIcon } from "@/svg";
import Link from "next/link";
import styled from "styled-components";
import LinkButton from "../shared/LinkButton";

interface Props {
  badge: string;
  description: string;
  image: string;
  title: string;
  dict: any;
}

export default function HeroSection(props: Props) {
  const titles = props.title.split(" ");
  return (
    <HeroContainer>
      <HeroLeft>
        <Badge>{props.badge}</Badge>
        <HeroTitle>
          {titles[0]}
          <em style={{ color: "#0F5238" }}>{titles.slice(1).join(" ")}</em>
        </HeroTitle>
        <HeroDescription>{props.description}</HeroDescription>
        <Btns>
          <LinkButton
            label={props.dict.contactBtn}
            url={"/contact"}
            color={"#fff"}
            bgcolor={"#2D6A4F"}
          />
          <ContactLink href="/contact">
            {props.dict.learnMoreBtn} <RightArrow />
          </ContactLink>
        </Btns>
      </HeroLeft>
      <HeroRight>
        <HeroImage src={props.image} alt="Hero Image" />
        <ImageTitle>
          <Wrapper>
            <RoboIcon />
            98 %
          </Wrapper>
          {props.dict.statsText}
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

const ImageTitle = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  max-width: 282px;
  position: absolute;
  bottom: -32px;
  left: -32px;
  font-size: 14px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.06);
  background-color: #f4f4f2;
  align-items: center;
  @media (max-width: 1024px) {
    position: static;
    margin-top: 16px;
    max-width: 100%;
  }
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
  color: #2d6a4f;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Badge = styled.div`
  color: #0f5238;
  padding: 6px 16px;
  background-color: #92f7c3;
  border-radius: 20px;
  width: fit-content;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
`;
