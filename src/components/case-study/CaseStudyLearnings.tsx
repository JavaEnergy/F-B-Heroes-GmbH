import styled from "styled-components";
import { ParseBold } from "@/lib/parse-bold";

interface Props {
  title: string;
  items: { text: string }[];
}

export default function CaseStudyLearnings({ title, items }: Props) {
  if (!items || items.length === 0) return null;

  return (
    <SectionElement>
      <Inner>
        <SectionTitle>{title}</SectionTitle>
        <Grid>
          {items.map((item, index) => (
            <LearningItem key={index}>
              <Number>{String(index + 1).padStart(2, "0")}</Number>
              <Text><ParseBold text={item.text} /></Text>
            </LearningItem>
          ))}
        </Grid>
      </Inner>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  background-color: #f4f4f2;
  padding: 96px 64px;

  @media (max-width: 1024px) {
    padding: 64px 24px;
  }

  @media (max-width: 600px) {
    padding: 48px 20px;
  }
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 64px;
  letter-spacing: -0.02em;
  color: #1a1a1a;

  @media (max-width: 1024px) {
    font-size: 26px;
    margin-bottom: 40px;
  }

  @media (max-width: 600px) {
    font-size: 22px;
    margin-bottom: 28px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const LearningItem = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 1px solid #e8ebe9;

  @media (max-width: 600px) {
    padding: 24px 20px;
    border-radius: 12px;
    gap: 12px;
  }
`;

const Number = styled.span`
  font-size: 48px;
  font-weight: 800;
  color: #0f5238;
  opacity: 0.25;
  line-height: 1;
  font-variant-numeric: tabular-nums;

  @media (max-width: 600px) {
    font-size: 36px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.75;
  color: #333;
  white-space: pre-line;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;
