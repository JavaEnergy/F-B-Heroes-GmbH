import { DoubleCheck, Remove } from "@/svg";
import styled from "styled-components";

export default function Differentiation({ dict }: { dict: any }) {
  return (
    <SectionElement>
      <SectionTitle>{dict.title}</SectionTitle>
      <Wrapper>
        <Traditional>
          <TraditionalTitle>{dict.traditional.label}</TraditionalTitle>
          <Fact>
            <Remove /> {dict.traditional.items[0]}
          </Fact>
          <Fact>
            <Remove /> {dict.traditional.items[1]}
          </Fact>
          <Fact>
            <Remove /> {dict.traditional.items[1]}
          </Fact>
        </Traditional>
        <Heroes>
          <HeroesTitle>{dict.heroes.label}</HeroesTitle>
          <HeroFact>
            <DoubleCheck /> {dict.heroes.items[0]}
          </HeroFact>
          <HeroFact>
            <DoubleCheck /> {dict.heroes.items[1]}
          </HeroFact>
          <HeroFact>
            <DoubleCheck /> {dict.heroes.items[2]}
          </HeroFact>
        </Heroes>
      </Wrapper>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  padding: 96px 64px;
  background-color: #f4f4f2;
  @media (max-width: 1024px) {
    padding: 72px 24px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 30px;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 64px;
  width: 100%;
  justify-content: center;
  gap: 16px;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Traditional = styled.div`
  padding: 48px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  gap: 16px;
  @media (max-width: 1024px) {
    border-radius: 24px;
  }
`;

const Heroes = styled(Traditional)`
  background-color: #0f5238;
  border-radius: 0px 24px 24px 0px;
  @media (max-width: 1024px) {
    border-radius: 24px;
  }
`;

const TraditionalTitle = styled.h3`
  font-size: 20px;
  opacity: 60%;
  color: #404943;
`;
const HeroesTitle = styled(TraditionalTitle)`
  color: #fff;
`;

const Fact = styled.h4`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 500;
`;

const HeroFact = styled(Fact)`
  color: #fff;
`;
