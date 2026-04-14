"use client";

import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface ContactProps {
  dict: any;
}

const createContactSchema = (errorDict: any) =>
  yup
    .object({
      firstName: yup.string().required(errorDict.required),
      lastName: yup.string().required(errorDict.required),
      email: yup.string().email(errorDict.email).required(errorDict.required),
      company: yup.string().required(errorDict.required),
      interest: yup.string().required(errorDict.required),
      message: yup.string().required(errorDict.required),
    })
    .required();

export default function ContactForm({ dict }: ContactProps) {
  const { left, right, errors: errorDict } = dict.contact;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createContactSchema(errorDict)),
  });

  const onSubmit = (data: any) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <SectionElement>
      <Container>
        <FormCard onSubmit={handleSubmit(onSubmit)}>
          <LeftColumn>
            <MainTitle>{left.title}</MainTitle>
            <SubDescription>{left.description}</SubDescription>
          </LeftColumn>

          <RightColumn>
            <FormGrid>
              <InputGroup $hasError={!!errors.firstName}>
                <label>{right.fields.firstName}</label>
                <input {...register("firstName")} type="text" />
                {errors.firstName && (
                  <ErrorLabel>
                    {errors.firstName.message?.toString()}
                  </ErrorLabel>
                )}
              </InputGroup>

              <InputGroup $hasError={!!errors.lastName}>
                <label>{right.fields.lastName}</label>
                <input {...register("lastName")} type="text" />
                {errors.lastName && (
                  <ErrorLabel>{errors.lastName.message?.toString()}</ErrorLabel>
                )}
              </InputGroup>

              <InputGroup $hasError={!!errors.email}>
                <label>{right.fields.email}</label>
                <input {...register("email")} type="email" />
                {errors.email && (
                  <ErrorLabel>{errors.email.message?.toString()}</ErrorLabel>
                )}
              </InputGroup>

              <InputGroup $hasError={!!errors.company}>
                <label>{right.fields.company}</label>
                <input {...register("company")} type="text" />
                {errors.company && (
                  <ErrorLabel>{errors.company.message?.toString()}</ErrorLabel>
                )}
              </InputGroup>

              <FullWidthGroup $hasError={!!errors.interest}>
                <label>{right.fields.interest}</label>
                <select {...register("interest")} defaultValue="">
                  <option value="" disabled>
                    {right.fields.placeholder}
                  </option>
                  <option value="robotics">Robotic Gastronomy</option>
                  <option value="strategy">Strategy & Consulting</option>
                  <option value="network">Network Partner</option>
                </select>
                {errors.interest && (
                  <ErrorLabel>{errors.interest.message?.toString()}</ErrorLabel>
                )}
              </FullWidthGroup>

              <FullWidthGroup $hasError={!!errors.message}>
                <label>{right.fields.message}</label>
                <textarea {...register("message")} rows={5} />
                {errors.message && (
                  <ErrorLabel>{errors.message.message?.toString()}</ErrorLabel>
                )}
              </FullWidthGroup>
            </FormGrid>
            <SubmitButton type="submit">{right.submit}</SubmitButton>
          </RightColumn>
        </FormCard>
      </Container>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  padding: 120px 64px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const FormCard = styled.form`
  background-color: #2d312f;
  border-radius: 40px;
  padding: 80px;
  display: flex;
  gap: 80px;
  align-items: flex-start;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 64px 40px;
    gap: 64px;
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

const RightColumn = styled.div`
  flex: 1.2;
  width: 100%;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div<{ $hasError?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
  }

  input,
  select,
  textarea {
    background-color: #27272a;
    border: 1px solid
      ${(props) => (props.$hasError ? "#ff4d4d" : "transparent")};
    border-radius: 8px;
    padding: 16px 20px;
    color: #fff;
    font-size: 16px;
    outline: none;
    width: 100%;
    transition: all 0.2s;

    &:focus {
      background-color: #e2e2e0;
      color: #1a1d1b;
    }
  }

  select {
    appearance: none;
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2399f6c4'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
    background-size: 24px;

    option {
      background: #ededeb;
      color: #1a1d1b;
    }
  }
`;

const ErrorLabel = styled.span`
  color: #ff4d4d;
  font-size: 12px;
  font-weight: 500;
  margin-top: 4px;
`;

const FullWidthGroup = styled(InputGroup)`
  grid-column: span 2;
  @media (max-width: 640px) {
    grid-column: span 1;
  }
`;

const SubmitButton = styled.button`
  background-color: #99f6c4;
  color: #0f5238;
  width: 100%;
  padding: 20px;
  border-radius: 12px;
  border: none;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 48px;

  &:hover {
    background-color: #7ceba8;
    transform: translateY(-2px);
  }
`;
