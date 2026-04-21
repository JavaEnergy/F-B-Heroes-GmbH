"use client";
import styled from "styled-components";
import Form from "../shared/Form";
import ConsultationDetails from "./ConsultationDetails";

interface ContactProps {
  dict: any;
}

export default function ContactForm({ dict }: ContactProps) {
  const { left } = dict.contact;

  return (
    <SectionElement>
      <Container>
        <FormCard>
          <LeftColumn>
            <ConsultationDetails dict={dict} />
          </LeftColumn>

          <Form
            dict={dict}
            inputColor="#000"
            inputBgColor="#E8E8E6"
            panelBgColor="transparent"
          />
        </FormCard>
      </Container>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  padding: 120px;
  background-color: #f4f4f2;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    padding: 72px 24px;
  }
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const FormCard = styled.div`
  border-radius: 40px;
  padding: 80px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 64px 40px;
    gap: 64px;
  }
  @media (max-width: 768px) {
    padding: 32px 20px;
    border-radius: 24px;
    gap: 40px;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
`;

const MainTitle = styled.h1`
  font-size: 56px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.1;
  margin-bottom: 32px;
`;

const SubDescription = styled.p`
  font-size: 20px;
  color: #a0a0a0;
  line-height: 1.6;
  max-width: 480px;
`;
