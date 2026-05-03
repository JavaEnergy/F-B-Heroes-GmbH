import Link from "next/link";
import styled from "styled-components";

interface Props {
  preTitle: string | null;
  title: string;
  subtitle: string | null;
  introText: string | null;
  heroImage: string | null;
  backLabel: string;
  locale: string;
}

export default function CaseStudyHero({
  preTitle,
  title,
  subtitle,
  introText,
  heroImage,
  backLabel,
  locale,
}: Props) {
  return (
    <SectionElement>
      <Inner>
        <Left>
          <BackLink href={`/${locale}/robotic-gastronomy`}>{backLabel}</BackLink>
          {preTitle && <Badge>{preTitle}</Badge>}
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
          {introText && <Intro>{introText}</Intro>}
        </Left>
        {heroImage && (
          <Right>
            <ImageWrapper>
              <img src={`${heroImage}?w=900&q=80&auto=format&fit=crop`} alt={title} />
            </ImageWrapper>
          </Right>
        )}
      </Inner>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #e6e9e7;
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 80px 64px 96px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 48px 24px 64px;
    gap: 40px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const BackLink = styled(Link)`
  display: inline-block;
  color: #0f5238;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  margin-bottom: 32px;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const Badge = styled.span`
  display: inline-block;
  color: #0f5238;
  background-color: #92f7c3;
  padding: 5px 14px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  width: fit-content;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 64px;
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.05;
  margin-bottom: 16px;
  color: #1a1a1a;

  @media (max-width: 1024px) {
    font-size: 48px;
  }
  @media (max-width: 600px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  font-style: italic;
  color: #0f5238;
  font-weight: 500;
  margin-bottom: 28px;
  line-height: 1.5;
`;

const Intro = styled.p`
  font-size: 17px;
  line-height: 1.75;
  color: #444;
  max-width: 520px;
  white-space: pre-line;
`;

const Right = styled.div``;

const ImageWrapper = styled.div`
  aspect-ratio: 4 / 5;
  border-radius: 24px;
  overflow: hidden;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 1024px) {
    aspect-ratio: 16 / 9;
    border-radius: 16px;
  }
`;
