import RightArrow, { Code, Wrench } from "@/svg";
import styled from "styled-components";

interface PartnerProps {
  dict: {
    brand: string;
    title: string;
    description: string;
    features: string[];
    link: string;
    liveDemo: {
      label: string;
      title: string;
    };
  };
  image: string;
}

export default function Partner({ dict, image }: PartnerProps) {
  const halfBrand = dict.brand.split(" ");
  return (
    <SectionElement>
      <WhiteCard>
        <LeftContent>
          <Brand>
            {halfBrand[0]}{" "}
            <span style={{ color: "black" }}>{halfBrand[1]}</span>
          </Brand>
          <MainTitle>{dict.title}</MainTitle>
          <Description>{dict.description}</Description>

          <FeatureList>
            {dict.features.map((feature, idx) => (
              <FeatureItem key={idx}>
                {idx === 0 ? <Code /> : <Wrench />}
                {feature}
              </FeatureItem>
            ))}
          </FeatureList>

          <ExternalLink href="#" target="_blank">
            {dict.link}
            <RightArrow />
          </ExternalLink>
        </LeftContent>

        <RightContent>
          <ImageWrapper>
            <CircleImage src={image} alt={dict.brand} />
            <LiveDemoCard>
              <BadgeText>{dict.liveDemo.label}</BadgeText>
              <DemoTitle>{dict.liveDemo.title}</DemoTitle>
            </LiveDemoCard>
          </ImageWrapper>
        </RightContent>
      </WhiteCard>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  padding: 96px 64px;
  background-color: #f4f4f2;

  @media (max-width: 1024px) {
    padding: 72px 12px;
  }
`;

const WhiteCard = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 40px;
  padding: 80px;
  display: flex;
  align-items: center;
  gap: 64px;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 32px 20px;
    gap: 32px;
    border-radius: 24px;
  }
`;

const LeftContent = styled.div`
  flex: 1.2;
`;

const Brand = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #0f5238;
  margin-bottom: 24px;
`;

const MainTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #000;
  margin-bottom: 24px;
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: 18px;
  color: #4a4a4a;
  line-height: 1.6;
  margin-bottom: 32px;
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 40px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;

const ExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #0f5238;
  font-weight: 700;
  text-decoration: none;
  border-bottom: 1.5px solid #0f5238;
  padding-bottom: 2px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const RightContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const CircleImage = styled.img`
  width: 420px;
  height: 420px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #f0f0f0;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const LiveDemoCard = styled.div`
  position: absolute;
  bottom: 20px;
  left: -20px;
  background: #ffffff;
  padding: 16px 24px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const BadgeText = styled.span`
  font-size: 10px;
  font-weight: 800;
  color: #0f5238;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const DemoTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;
