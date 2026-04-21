import { Dislike, Like } from "@/svg";
import styled from "styled-components";

export default function AdviseSection({ dict }: { dict: any }) {
  return (
    <SectionElement>
      <Wrapper>
        <Box>
          <Title>{dict.title}</Title>
          <Description>{dict.description}</Description>
        </Box>
        <Box>
          <BoxTitle>
            <Like /> {dict.recommend.title}
          </BoxTitle>
          <Fact>{dict.recommend.items[0]}</Fact>
          <Fact>{dict.recommend.items[1]}</Fact>
          <Fact>{dict.recommend.items[2]}</Fact>
        </Box>
        <Box>
          <BoxTitle>
            <Dislike /> {dict.adviseAgainst.title}
          </BoxTitle>
          <Fact style={{ opacity: 0.8 }}>{dict.adviseAgainst.items[0]}</Fact>
          <Fact style={{ opacity: 0.8 }}>{dict.adviseAgainst.items[1]}</Fact>
          <Fact style={{ opacity: 0.8 }}>{dict.adviseAgainst.items[2]}</Fact>
        </Box>
      </Wrapper>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  padding: 96px 64px;
  background-color: #f4f4f2;

  @media (max-width: 1024px) {
    padding: 75px 25px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  justify-content: center;
  align-items: stretch;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 28px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 30%;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
`;

const Description = styled.p`
  color: #404943;
  font-size: 16px;
  font-weight: 300;
`;

const BoxTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
`;

const Fact = styled.div`
  padding: 24px;
  border-radius: 12px;
  width: 100%;
  font-size: 16px;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;
