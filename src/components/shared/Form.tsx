import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { sendContactEmail } from "@/app/actions";
import {
  CONTACT_INTEREST_VALUES,
  type ContactFormSubmission,
} from "@/lib/contact-interest";

interface ContactProps {
  dict: {
    contact: {
      right: {
        fields: {
          firstName: string;
          lastName: string;
          email: string;
          company: string;
          interest: string;
          message: string;
          placeholder: string;
        };
        interestOptions: Array<{ value: string; label: string }>;
        submit: string;
      };
      errors: {
        required: string;
        email: string;
      };
    };
  };
  inputBgColor?: string;
  inputColor?: string;
  panelBgColor?: string;
}

type ContactErrorsDict = ContactProps["dict"]["contact"]["errors"];

const createContactSchema = (errorDict: ContactErrorsDict) =>
  yup
    .object({
      firstName: yup.string().required(errorDict.required),
      lastName: yup.string().required(errorDict.required),
      email: yup.string().email(errorDict.email).required(errorDict.required),
      company: yup.string().required(errorDict.required),
      interest: yup
        .string()
        .oneOf([...CONTACT_INTEREST_VALUES], errorDict.required)
        .required(errorDict.required),
      message: yup.string().required(errorDict.required),
    })
    .required();

export default function Form({
  dict,
  inputBgColor,
  inputColor,
  panelBgColor,
}: ContactProps) {
  const { right, errors: errorDict } = dict.contact;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSubmission>({
    resolver: yupResolver(createContactSchema(errorDict)),
  });

  const onSubmit = async (data: ContactFormSubmission) => {
    try {
      await sendContactEmail(data);
      alert("Your message has been sent successfully!");
      reset();
    } catch {
      alert("An error occurred while sending your message. Please try again.");
    }
  };
  return (
    <RightColumn
      onSubmit={handleSubmit(onSubmit)}
      $panelbg={panelBgColor ?? inputBgColor}
    >
      <FormGrid>
        <InputGroup
          $hasError={!!errors.firstName}
          inputbgcolor={inputBgColor}
          inputcolor={inputColor}
        >
          <label htmlFor="firstName">{right.fields.firstName}</label>
          <input {...register("firstName")} id="firstName" type="text" />
          {errors.firstName && (
            <ErrorLabel>{errors.firstName.message?.toString()}</ErrorLabel>
          )}
        </InputGroup>

        <InputGroup
          $hasError={!!errors.lastName}
          inputbgcolor={inputBgColor}
          inputcolor={inputColor}
        >
          <label htmlFor="lastName">{right.fields.lastName}</label>
          <input {...register("lastName")} id="lastName" type="text" />
          {errors.lastName && (
            <ErrorLabel>{errors.lastName.message?.toString()}</ErrorLabel>
          )}
        </InputGroup>

        <InputGroup
          $hasError={!!errors.email}
          inputbgcolor={inputBgColor}
          inputcolor={inputColor}
        >
          <label htmlFor="email">{right.fields.email}</label>
          <input {...register("email")} id="email" type="email" />
          {errors.email && (
            <ErrorLabel>{errors.email.message?.toString()}</ErrorLabel>
          )}
        </InputGroup>

        <InputGroup
          $hasError={!!errors.company}
          inputbgcolor={inputBgColor}
          inputcolor={inputColor}
        >
          <label htmlFor="company">{right.fields.company}</label>
          <input {...register("company")} id="company" type="text" />
          {errors.company && (
            <ErrorLabel>{errors.company.message?.toString()}</ErrorLabel>
          )}
        </InputGroup>

        <FullWidthGroup
          $hasError={!!errors.interest}
          inputbgcolor={inputBgColor}
          inputcolor={inputColor}
        >
          <label htmlFor="interest" style={{ color: inputColor || "#e2e2e0" }}>
            {right.fields.interest}
          </label>
          <select {...register("interest")} id="interest" defaultValue="">
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
          <label htmlFor="message" style={{ color: inputColor || "#e2e2e0" }}>
            {right.fields.message}
          </label>
          <textarea {...register("message")} id="message" rows={5} />
          {errors.message && (
            <ErrorLabel>{errors.message.message?.toString()}</ErrorLabel>
          )}
        </FullWidthGroup>
      </FormGrid>
      <SubmitButton type="submit">{right.submit}</SubmitButton>
    </RightColumn>
  );
}

const RightColumn = styled.form<{ $panelbg?: string }>`
  flex: 1.2;
  width: 100%;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: ${(props) => props.$panelbg || "transparent"};

  @media (max-width: 768px) {
    padding: 0;
    border: none;
    background: transparent;
    border-radius: 0;
  }
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
      ${(props) =>
        props.$hasError ? "#ff4d4d" : "rgba(226, 226, 224, 0.18)"};
    border-radius: 12px;
    padding: 14px 16px;
    color: ${(props) => props.inputcolor || "#e2e2e0"};
    font-size: 16px;
    outline: none;
    width: 100%;
    transition: all 0.2s ease;

    &:focus {
      border-color: #92f7c3;
      box-shadow: 0 0 0 3px rgba(146, 247, 195, 0.25);
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

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 32px;
  }

  &:hover {
    background-color: #7ceba8;
    transform: translateY(-2px);
  }
`;
