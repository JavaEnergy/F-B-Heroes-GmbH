import { Business, Fork, Rocket } from "@/svg";
import styled from "styled-components";

export default function Steps(props: { dict: any }) {
  return (
    <StepContainer>
      <Left>
        <StepTitle>{props.dict.title}</StepTitle>
        <Quote>"{props.dict.quote}"</Quote>
        <Author>- {props.dict.author}</Author>
        <DescriptionQuote>{props.dict.description}</DescriptionQuote>
      </Left>
      <Right>
        <StepBox>
          <div>
            <StepBoxTitle>{props.dict.stepLabel} 01</StepBoxTitle>
            <StepBoxDescription>{props.dict.steps[0]}</StepBoxDescription>
          </div>
          <Business />
        </StepBox>
        <StepBox style={{ width: "95%", backgroundColor: "#2D6A4F" }}>
          <div>
            <StepBoxTitle>{props.dict.stepLabel} 02</StepBoxTitle>
            <StepBoxDescription style={{ color: "#A8E7C5" }}>
              {props.dict.steps[1]}
            </StepBoxDescription>
          </div>
          <Fork />
        </StepBox>
        <StepBox style={{ width: "90%", backgroundColor: "#92F7C3" }}>
          <div>
            <StepBoxTitle style={{ color: "#006C48" }}>
              {props.dict.stepLabel} 03
            </StepBoxTitle>
            <StepBoxDescription style={{ color: "#00734D" }}>
              {props.dict.steps[2]}
            </StepBoxDescription>
          </div>
          <Rocket />
        </StepBox>
      </Right>
    </StepContainer>
  );
}

const StepContainer = styled.section`
  width: 100%;
  padding: 128px 63px;
  display: flex;
  align-items: center;
  gap: 48px;
  @media (max-width: 1024px) {
    padding: 72px 24px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Left = styled.div`
  width: 35%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Right = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  @media (max-width: 1024px) {
    width: 100%;
    align-items: stretch;
  }
`;

const StepTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
`;

const Quote = styled.p`
  font-size: 16px;
  font-style: italic;
  margin-top: 24px;
  color: var(--medium-gray);
`;

const DescriptionQuote = styled.p`
  font-size: 16px;
  margin-top: 24px;
  color: var(--medium-gray);
`;

const Author = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

const StepBox = styled.div`
  border-radius: 8px;
  padding: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0f5238;
  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const StepBoxTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
`;

const StepBoxDescription = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-top: 4px;
`;
