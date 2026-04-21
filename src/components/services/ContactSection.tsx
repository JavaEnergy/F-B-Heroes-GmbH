import styled from "styled-components";
import LinkButton from "../shared/LinkButton";
import { Storm } from "@/svg";

export default function ContactSection({ dict }: { dict: any }) {
  return (
    <SectionElement>
      <Wrapper>
        <SectionTitle>{dict.title}</SectionTitle>
        <SectionDescription>{dict.description}</SectionDescription>
        <LinkButton
          label={dict.button}
          url="/contact"
          color="#002113"
          bgcolor="#92F7C3"
        />
        <IconBox>
          <Storm />
        </IconBox>
      </Wrapper>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  padding: 96px 0;
  background-color: #fff;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 72px 12px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  text-align: center;
  color: #fff;
`;

const SectionDescription = styled.p`
  font-size: 18px;
  text-align: center;
  color: #b1f0ce;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: min(100%, 1120px);
  padding: 64px;
  gap: 32px;
  background-color: #0f5238;
  align-items: center;
  border-radius: 32px;

  @media (max-width: 768px) {
    padding: 40px 20px;
    border-radius: 24px;
  }
`;

const IconBox = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  opacity: 0.5;
`;
