export const CONTACT_INTEREST_OPTIONS = [
  { value: "robotics", label: "Robotic Gastronomy" },
  { value: "strategy", label: "Strategy & Consulting" },
  { value: "network", label: "Network Partner" },
  { value: "consultation", label: "consultation" },
] as const;

export const CONTACT_INTEREST_VALUES = CONTACT_INTEREST_OPTIONS.map(
  (option) => option.value,
);

export type ContactInterest = (typeof CONTACT_INTEREST_OPTIONS)[number]["value"];

export const CONTACT_INTEREST_LABELS: Record<ContactInterest, string> =
  CONTACT_INTEREST_OPTIONS.reduce(
    (labels, option) => {
      labels[option.value] = option.label;
      return labels;
    },
    {} as Record<ContactInterest, string>,
  );

export const getContactInterestLabel = (value: string) =>
  CONTACT_INTEREST_LABELS[value as ContactInterest] ?? value;

export interface ContactFormSubmission {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  interest: string;
  message: string;
}
