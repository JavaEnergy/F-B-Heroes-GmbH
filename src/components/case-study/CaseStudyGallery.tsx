"use client";

import { useRef, useState } from "react";
import styled from "styled-components";

interface Props {
  images: { url: string }[];
}

export default function CaseStudyGallery({ images }: Props) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number>(0);

  if (!images || images.length === 0) return null;

  const total = images.length;
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
  };

  return (
    <SectionElement>
      <Inner>
        <CarouselWrapper
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Track style={{ transform: `translateX(-${current * 100}%)` }}>
            {images.map((img, i) => (
              <Slide key={i}>
                <img
                  src={`${img.url}?w=1200&q=80&auto=format&fit=crop`}
                  alt={`Gallery image ${i + 1}`}
                  loading="lazy"
                />
              </Slide>
            ))}
          </Track>

          {total > 1 && (
            <>
              <ArrowBtn $side="left" onClick={prev} aria-label="Previous image">
                ‹
              </ArrowBtn>
              <ArrowBtn $side="right" onClick={next} aria-label="Next image">
                ›
              </ArrowBtn>
            </>
          )}
        </CarouselWrapper>

        {total > 1 && (
          <Dots>
            {images.map((_, i) => (
              <Dot key={i} $active={i === current} onClick={() => setCurrent(i)} />
            ))}
          </Dots>
        )}
      </Inner>
    </SectionElement>
  );
}

const SectionElement = styled.section`
  width: 100%;
  background-color: #f4f4f2;
  padding: 80px 64px;

  @media (max-width: 1024px) {
    padding: 56px 0;
  }
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  aspect-ratio: 16 / 9;

  @media (max-width: 1024px) {
    border-radius: 0;
  }
`;

const Track = styled.div`
  display: flex;
  height: 100%;
  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
`;

const Slide = styled.div`
  min-width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const ArrowBtn = styled.button<{ $side: "left" | "right" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $side }) => ($side === "left" ? "left: 16px;" : "right: 16px;")}
  background: rgba(255, 255, 255, 0.85);
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #0f5238;
  transition: background 0.2s;

  &:hover {
    background: #ffffff;
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
`;

const Dot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? "24px" : "8px")};
  height: 8px;
  border-radius: 9999px;
  background-color: ${({ $active }) => ($active ? "#0f5238" : "#c0c0c0")};
  border: none;
  padding: 0;
  cursor: pointer;
  transition:
    width 0.3s ease,
    background-color 0.3s ease;
`;
