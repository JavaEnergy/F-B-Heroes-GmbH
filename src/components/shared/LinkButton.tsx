import Link from "next/link";
import styled from "styled-components";

interface ButtonProps {
  label: string;
  url: string;
  color: string;
  bgcolor: string;
}

export default function LinkButton(props: ButtonProps) {
  return (
    <Button href={props.url} color={props.color} bgcolor={props.bgcolor}>
      {props.label}
    </Button>
  );
}

const Button = styled(Link)<{ color: string; bgcolor: string }>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgcolor};
  font-size: 16px;
  font-weight: 600;
  padding: 16px 32px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: all 0.2s;
    color: ${(props) => props.bgcolor};
    background-color: ${(props) => props.color};
  }
`;
