import { Check } from "@/svg";
import styled from "styled-components";

export default function Robotic({
  dict,
  leftImage,
  rightImage,
}: {
  dict: any;
  leftImage: string;
  rightImage: string;
}) {
  return (
    <RoboticSection>
      <Left>
        <SectionPreTitle>{dict.subtitle}</SectionPreTitle>
        <SectionTitle>{dict.title}</SectionTitle>
        <InfoBox>
          <Check />
          <div>
            <InfoBoldText>{dict.features[0].title}</InfoBoldText>
            <InfoText>{dict.features[0].desc}</InfoText>
          </div>
        </InfoBox>
        <InfoBox>
          <Check />
          <div>
            <InfoBoldText>{dict.features[1].title}</InfoBoldText>
            <InfoText>{dict.features[1].desc}</InfoText>
          </div>
        </InfoBox>
        <InfoBox>
          <Check />
          <div>
            <InfoBoldText>{dict.features[2].title}</InfoBoldText>
            <InfoText>{dict.features[2].desc}</InfoText>
          </div>
        </InfoBox>
      </Left>
      <Right>
        <SectionImage src={leftImage} />
        <SectionImage src={rightImage} style={{ marginTop: "24px" }} />
      </Right>
    </RoboticSection>
  );
}

const RoboticSection = styled.section`
  width: 100%;
  padding: 128px 64px;
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 1024px) {
    padding: 72px 24px;
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  gap: 16px;
  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const SectionPreTitle = styled.h3`
  font-size: 14px;
  text-transform: uppercase;
  color: #0f5238;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-top: 16px;
`;

const SectionImage = styled.img`
  width: 100%;
  max-width: 276px;
  height: auto;
  border-radius: 16px;
`;
const InfoBox = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

const InfoText = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

const InfoBoldText = styled(InfoText)`
  font-weight: 700;
`;
