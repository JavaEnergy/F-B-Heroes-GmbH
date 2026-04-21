import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { sendContactEmail } from "@/app/actions";

interface ContactProps {
  dict: any;
  inputBgColor?: string;
  inputColor?: string;
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

export default function Form({ dict, inputBgColor, inputColor }: ContactProps) {
  const { right, errors: errorDict } = dict.contact;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createContactSchema(errorDict)),
  });

  const onSubmit = async (data: any) => {
    try {
      await sendContactEmail(data);
      alert("Your message has been sent successfully!");
      reset();
    } catch (error) {
      alert("An error occurred while sending your message. Please try again.");
    }
  };
  return (
    <RightColumn
      onSubmit={handleSubmit(onSubmit)}
      style={{ backgroundColor: inputColor ? "#fff" : "transparent" }}
    >
      <FormGrid>
        <InputGroup
          $hasError={!!errors.firstName}
          inputbgcolor={inputBgColor}
          inputcolor={inputColor}
        >
          <label>{right.fields.firstName}</label>
          <input {...register("firstName")} type="text" />
          {errors.firstName && (
            <ErrorLabel>{errors.firstName.message?.toString()}</ErrorLabel>
          )}
        </InputGroup>

        <InputGroup
          $hasError={!!errors.lastName}
          inputbgcolor={inputBgColor}
          inputcolor={inputColor}
        >
          <label>{right.fields.lastName}</label>
          <input {...register("lastName")} type="text" />
          {errors.lastName && (
            <ErrorLabel>{errors.lastName.message?.toString()}</ErrorLabel>
          )}
        </InputGroup>

        <InputGroup
          $hasError={!!errors.email}
          inputbgcolor={inputBgColor}
          inputcolor={inputColor}
        >
          <label>{right.fields.email}</label>
          <input {...register("email")} type="email" />
          {errors.email && (
            <ErrorLabel>{errors.email.message?.toString()}</ErrorLabel>
          )}
        </InputGroup>

        <InputGroup
          $hasError={!!errors.company}
          inputbgcolor={inputBgColor}
          inputcolor={inputColor}
        >
          <label>{right.fields.company}</label>
          <input {...register("company")} type="text" />
          {errors.company && (
            <ErrorLabel>{errors.company.message?.toString()}</ErrorLabel>
          )}
        </InputGroup>

        <FullWidthGroup
          $hasError={!!errors.interest}
          inputbgcolor={inputBgColor}
          inputcolor={inputColor}
        >
          <label style={{ color: inputColor || "#e2e2e0" }}>
            {right.fields.interest}
          </label>
          <select {...register("interest")} defaultValue="">
            <option value="" disabled>
              {right.fields.placeholder}
            </option>
            {right.interestOptions.map(
              (opt: { value: string; label: string }) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ),
            )}
          </select>
          {errors.interest && (
            <ErrorLabel>{errors.interest.message?.toString()}</ErrorLabel>
          )}
        </FullWidthGroup>

        <FullWidthGroup
          $hasError={!!errors.message}
          inputbgcolor={inputBgColor}
          inputcolor={inputColor}
        >
          <label style={{ color: inputColor || "#e2e2e0" }}>
            {right.fields.message}
          </label>
          <textarea {...register("message")} rows={5} />
          {errors.message && (
            <ErrorLabel>{errors.message.message?.toString()}</ErrorLabel>
          )}
        </FullWidthGroup>
      </FormGrid>
      <SubmitButton type="submit">{right.submit}</SubmitButton>
    </RightColumn>
  );
}

const RightColumn = styled.form`
  flex: 1.2;
  width: 100%;
  padding: 48px;
  border-radius: 12px;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div<{
  $hasError?: boolean;
  inputbgcolor?: string;
  inputcolor?: string;
}>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: ${(props) => props.inputcolor || "#e2e2e0"};
    font-size: 14px;
    font-weight: 500;
  }

  input,
  select,
  textarea {
    background-color: ${(props) => props.inputbgcolor || "#1a1d1b"};
    border: 1px solid
      ${(props) => (props.$hasError ? "#ff4d4d" : "transparent")};
    border-radius: 8px;
    padding: 16px 20px;
    color: ${(props) => props.inputcolor || "#e2e2e0"};
    font-size: 16px;
    outline: none;
    width: 100%;
    transition: all 0.2s;

    &:focus {
      background-color: ${(props) => props.inputbgcolor || "#e2e2e0"};
      color: ${(props) => props.inputcolor || "#1a1d1b"};
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
  width: 50%;
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
