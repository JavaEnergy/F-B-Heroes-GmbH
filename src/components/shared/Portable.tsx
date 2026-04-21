import styled from "styled-components";
import { PortableText } from "@portabletext/react";

const ptComponents = {
  block: {
    h1: ({ children }: any) => <Heading1>{children}</Heading1>,
    h2: ({ children }: any) => <Heading2>{children}</Heading2>,
    normal: ({ children }: any) => <Paragraph>{children}</Paragraph>,
  },
  list: {
    bullet: ({ children }: any) => <BulletList>{children}</BulletList>,
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <StyledLink href={value.href} rel={rel} target="_blank">
          {children}
        </StyledLink>
      );
    },
  },
};

export default function LegalContent({ data }: { data: any }) {
  return (
    <Wrapper>
      <Container>
        <PortableText value={data.content} components={ptComponents} />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 160px 24px;
  background-color: #f4f4f2;
  min-height: 100vh;
  @media (max-width: 768px) {
    padding: 120px 16px 72px;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Heading1 = styled.h1`
  font-size: 48px;
  margin-bottom: 40px;
  color: #1a1d1b;
`;

const Heading2 = styled.h2`
  font-size: 28px;
  margin: 48px 0 20px;
  color: #0f5238;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: #4a4a4a;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const BulletList = styled.ul`
  margin: 0 0 24px 24px;
  list-style: disc;
  li {
    margin-bottom: 12px;
    font-size: 18px;
    color: #4a4a4a;
  }
`;

const StyledLink = styled.a`
  color: #0f5238;
  text-decoration: underline;
  font-weight: 500;
  &:hover {
    color: #99f6c4;
  }
`;
