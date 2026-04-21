"use client";

import styled from "styled-components";
import LinkButton from "./shared/LinkButton";

interface PotentialCheckProps {
  dict: {
    badge: string;
    title: string;
    description: string;
    button: string;
  };
  image: string;
}

export default function PotentialCheck({ dict, image }: PotentialCheckProps) {
  return (
    <SectionElement>
      <Divider />
      <Container>
        <DarkCard>
          <ContentSide>
            <Badge>{dict.badge}</Badge>
            <Title>{dict.title}</Title>
            <Description>{dict.description}</Description>
            <ButtonWrapper>
              <LinkButton
                label={dict.button}
                url="#"
                bgcolor="#00734D"
                color="#fff"
              />
            </ButtonWrapper>
          </ContentSide>

          <ImageSide>
            <StyledImage src={image} alt="Potential Check Illustration" />
          </ImageSide>
        </DarkCard>
      </Container>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  background-color: #ffffff;
  padding-bottom: 96px;
  border-bottom: 1px solid #e6e9e7;
  @media (max-width: 1024px) {
    padding-bottom: 72px;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e2e2e0;
  margin-bottom: 96px;
`;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 64px;
  @media (max-width: 1024px) {
    padding: 0 24px;
  }
`;

const DarkCard = styled.div`
  background-color: #92f7c3;
  border-radius: 40px;
  padding: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 64px 40px;
    text-align: center;
  }
  @media (max-width: 768px) {
    padding: 32px 20px;
    border-radius: 24px;
  }
`;

const ContentSide = styled.div`
  flex: 1.2;
`;

const Badge = styled.span`
  display: block;
  color: #00734d;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  color: #00734d;
  font-size: 42px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 24px;
`;

const Description = styled.p`
  color: #00734d;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 540px;
  opacity: 0.8;

  @media (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const ImageSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    justify-content: center;
    width: 100%;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 440px;
  height: auto;
  border-radius: 24px;
  object-fit: cover;
`;
