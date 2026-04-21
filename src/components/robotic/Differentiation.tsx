import { DoubleCheck, Remove } from "@/svg";
import styled from "styled-components";

export default function Differentiation({ dict }: { dict: any }) {
  return (
    <SectionElement>
      <SectionTitle>{dict.badge}</SectionTitle>
      <SectionDescription>{dict.mainTitle}</SectionDescription>
      <Wrapper>
        <Traditional>
          <PreTitle>{dict.statusQuo.badge}</PreTitle>
          <TraditionalTitle>{dict.statusQuo.title}</TraditionalTitle>
          <Fact>
            <Remove /> {dict.statusQuo.bullets[0]}
          </Fact>
          <Fact>
            <Remove /> {dict.statusQuo.bullets[1]}
          </Fact>
          <Fact>
            <Remove /> {dict.statusQuo.bullets[2]}
          </Fact>
          <Quotes>"{dict.statusQuo.footer}"</Quotes>
        </Traditional>
        <Heroes
          style={{
            backgroundColor: "#0f5238",
            borderRadius: "0px 24px 24px 0px",
          }}
        >
          <HeroesPreTitle>{dict.myStandard.badge}</HeroesPreTitle>
          <HeroesTitle>{dict.myStandard.title}</HeroesTitle>
          <HeroFact>
            <DoubleCheck /> {dict.myStandard.bullets[0]}
          </HeroFact>
          <HeroFact>
            <DoubleCheck /> {dict.myStandard.bullets[1]}
          </HeroFact>
          <HeroFact>
            <DoubleCheck /> {dict.myStandard.bullets[2]}
          </HeroFact>
          <HeroesQuotes>"{dict.myStandard.footer}"</HeroesQuotes>
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
const SectionDescription = styled.p`
  margin-top: 16px;
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
    gap: 16px;
  }
`;

const Traditional = styled.div`
  padding: 48px;
  display: flex;
  flex-direction: column;
  background-color: #e2e3e1;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  gap: 16px;
  @media (max-width: 1024px) {
    border-radius: 24px;
    padding: 32px 24px;
  }
`;

const Heroes = styled(Traditional)`
  background-color: #0f5238;
  border-radius: 0px 24px 24px 0px;
  @media (max-width: 1024px) {
    border-radius: 24px;
  }
`;

const PreTitle = styled.h4`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: #707973;
`;

const HeroesPreTitle = styled(PreTitle)`
  color: #92f7c3;
`;

const TraditionalTitle = styled.h3`
  font-size: 20px;
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

const Quotes = styled.div`
  padding: 24px;
  border-radius: 12px;
  width: 100%;
  font-size: 16px;
  font-style: italic;
  background-color: #fff;
`;

const HeroesQuotes = styled(Quotes)`
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
`;
