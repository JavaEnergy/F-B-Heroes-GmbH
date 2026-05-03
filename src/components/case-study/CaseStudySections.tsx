import styled from "styled-components";

interface Section {
  title: string | null;
  body: string;
  image: string | null;
}

interface Props {
  sections: Section[];
}

export default function CaseStudySections({ sections }: Props) {
  if (!sections || sections.length === 0) return null;

  return (
    <SectionElement>
      <Inner>
        {sections.map((section, index) => {
          const hasImage = !!section.image;
          const imageOnLeft = index % 2 === 0;

          return (
            <SectionBlock key={index} $hasImage={hasImage} $imageOnLeft={imageOnLeft}>
              {hasImage && imageOnLeft && (
                <ImageSide>
                  <img
                    src={`${section.image}?w=800&q=80&auto=format&fit=crop`}
                    alt={section.title ?? ""}
                  />
                </ImageSide>
              )}
              <TextSide>
                {section.title && <SectionTitle>{section.title}</SectionTitle>}
                <Body>{section.body}</Body>
              </TextSide>
              {hasImage && !imageOnLeft && (
                <ImageSide>
                  <img
                    src={`${section.image}?w=800&q=80&auto=format&fit=crop`}
                    alt={section.title ?? ""}
                  />
                </ImageSide>
              )}
            </SectionBlock>
          );
        })}
      </Inner>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  background-color: #ffffff;
  padding: 96px 64px;

  @media (max-width: 1024px) {
    padding: 64px 24px;
  }
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 96px;
`;

const SectionBlock = styled.div<{ $hasImage: boolean; $imageOnLeft: boolean }>`
  display: ${({ $hasImage }) => ($hasImage ? "grid" : "block")};
  grid-template-columns: ${({ $hasImage }) => ($hasImage ? "1fr 1fr" : "auto")};
  gap: 72px;
  align-items: center;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;

const TextSide = styled.div`
  max-width: 620px;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #0f5238;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
`;

const Body = styled.p`
  font-size: 17px;
  line-height: 1.8;
  color: #444;
  white-space: pre-line;
`;

const ImageSide = styled.div`
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 4 / 3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;
