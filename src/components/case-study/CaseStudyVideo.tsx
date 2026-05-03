"use client";

import styled from "styled-components";

interface Props {
  videoUrl: string | null;
}

function getEmbedUrl(url: string): string | null {
  const ytMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
  );
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;

  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;

  return null;
}

export default function CaseStudyVideo({ videoUrl }: Props) {
  if (!videoUrl) return null;

  const embedUrl = getEmbedUrl(videoUrl);
  if (!embedUrl) return null;

  return (
    <SectionElement>
      <Inner>
        <VideoWrapper>
          <iframe
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Case study video"
          />
        </VideoWrapper>
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
  max-width: 1000px;
  margin: 0 auto;
`;

const VideoWrapper = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  border-radius: 20px;
  overflow: hidden;
  background-color: #000;

  iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: none;
  }
`;
