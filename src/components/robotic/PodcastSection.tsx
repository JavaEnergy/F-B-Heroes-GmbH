import styled from "styled-components";

interface Props {
  dict: {
    badge: string;
    title: string;
    description: string;
  };
}

const VIDEOS = [
  {
    id: "kwoOsCYQ5O0",
    url: "https://www.youtube.com/watch?v=kwoOsCYQ5O0",
  },
  {
    id: "xwdqaZzeCAc",
    url: "https://www.youtube.com/watch?v=xwdqaZzeCAc",
  },
  {
    id: "oA5ukdd0PLU",
    url: "https://www.youtube.com/watch?v=oA5ukdd0PLU&t=512s",
  },
  {
    id: "ccSgfHcYOJw",
    url: "https://www.youtube.com/watch?v=ccSgfHcYOJw&t=165s",
  },
];

export default function PodcastSection({ dict }: Props) {
  return (
    <SectionElement>
      <Inner>
        <Header>
          <Badge>{dict.badge}</Badge>
          <Title>{dict.title}</Title>
          <Description>{dict.description}</Description>
        </Header>

        <Grid>
          {VIDEOS.map((video) => (
            <VideoCard key={video.id} href={video.url} target="_blank" rel="noopener noreferrer">
              <Thumbnail
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt="Podcast video"
                loading="lazy"
              />
              <Overlay>
                <PlayButton aria-label="Play video">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 5v14l11-7L8 5z" />
                  </svg>
                </PlayButton>
              </Overlay>
            </VideoCard>
          ))}
        </Grid>
      </Inner>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  background-color: #f4f4f2;
  padding: 96px 64px;

  @media (max-width: 1024px) {
    padding: 72px 24px;
  }

  @media (max-width: 600px) {
    padding: 56px 20px;
  }
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 600px) {
    margin-bottom: 36px;
    gap: 12px;
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
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.02em;
  line-height: 1.2;

  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  font-size: 17px;
  color: #555;
  line-height: 1.65;
  max-width: 580px;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const VideoCard = styled.a`
  position: relative;
  display: block;
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 16 / 9;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
  }

  @media (max-width: 600px) {
    border-radius: 12px;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;

  ${VideoCard}:hover & {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const PlayButton = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(15, 82, 56, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, background 0.3s ease;

  ${VideoCard}:hover & {
    transform: scale(1.12);
    background: #0f5238;
  }

  @media (max-width: 600px) {
    width: 52px;
    height: 52px;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;
