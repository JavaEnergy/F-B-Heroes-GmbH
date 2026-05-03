import styled from "styled-components";

interface Props {
  text: string | null;
}

export default function CaseStudyConclusion({ text }: Props) {
  if (!text) return null;

  return (
    <SectionElement>
      <Inner>
        <Accent />
        <Text>{text}</Text>
      </Inner>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  background-color: #ffffff;
  padding: 96px 64px;

  @media (max-width: 1024px) {
    padding: 64px 24px;
  }
`;

const Inner = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Accent = styled.div`
  width: 48px;
  height: 3px;
  background-color: #0f5238;
  border-radius: 2px;
`;

const Text = styled.p`
  font-size: 20px;
  line-height: 1.8;
  color: #2a2a2a;
  white-space: pre-line;
  font-style: italic;
`;
