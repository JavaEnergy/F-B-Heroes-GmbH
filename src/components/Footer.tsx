import styled from "styled-components";

export default function Footer(props: { dict: any; lang: string }) {
  return <FooterElement></FooterElement>;
}

const FooterElement = styled.footer`
  width: 100%;
  padding: 64px 48px;
  background-color: #f4f4f2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
