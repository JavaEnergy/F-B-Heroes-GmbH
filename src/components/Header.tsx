"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";

const Header = (props: { dict: any; lang: string }) => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const redirectedPathname = (targetLang: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = targetLang;
    return segments.join("/");
  };

  const isActive = (path: string) =>
    pathname === path || pathname === `/${props.lang}${path}`;

  return (
    <HeaderElement>
      <LogoContainer href={`/${props.lang}`}>
        <Image
          src="/FB Heroes logo.png"
          alt="FB Heroes Logo"
          width={129}
          height={32}
          priority
        />
      </LogoContainer>

      <MobileMenuButton
        type="button"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </MobileMenuButton>

      <Nav $open={menuOpen}>
        <LinkElement
          href={`/${props.lang}/services`}
          $active={isActive("/services")}
          onClick={() => setMenuOpen(false)}
        >
          {props.dict.services}
        </LinkElement>
        <LinkElement
          href={`/${props.lang}/robotic-gastronomy`}
          $active={isActive("/robotic-gastronomy")}
          onClick={() => setMenuOpen(false)}
        >
          {props.dict.robotic_gastronomy}
        </LinkElement>
        <LinkElement
          href={`/${props.lang}/network`}
          $active={isActive("/network")}
          onClick={() => setMenuOpen(false)}
        >
          {props.dict.network}
        </LinkElement>
        <LinkElement
          href={`/${props.lang}/about`}
          $active={isActive("/about")}
          onClick={() => setMenuOpen(false)}
        >
          {props.dict.about}
        </LinkElement>
        <LinkElement
          href={`/${props.lang}/contact`}
          $active={isActive("/contact")}
          onClick={() => setMenuOpen(false)}
        >
          {props.dict.contact}
        </LinkElement>
        <LangSwitcherMobile>
          <LangLink href={redirectedPathname("en")} $active={props.lang === "en"}>
            ENG
          </LangLink>
          <span>|</span>
          <LangLink href={redirectedPathname("de")} $active={props.lang === "de"}>
            DEU
          </LangLink>
        </LangSwitcherMobile>
      </Nav>

      <LangSwitcher>
        <LangLink href={redirectedPathname("en")} $active={props.lang === "en"}>
          ENG
        </LangLink>
        <span>|</span>
        <LangLink href={redirectedPathname("de")} $active={props.lang === "de"}>
          DEU
        </LangLink>
      </LangSwitcher>
    </HeaderElement>
  );
};

export default Header;

const HeaderElement = styled.header`
  width: 100%;
  padding: 28px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background-color: #fff;
  top: 0;
  z-index: 1000;
  gap: 16px;

  @media (max-width: 1024px) {
    padding: 20px 24px;
  }
`;

const LogoContainer = styled(Link)`
  display: flex;
  flex: 1;
`;

const Nav = styled.nav<{ $open: boolean }>`
  display: flex;
  gap: 32px;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 1024px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    display: ${(props) => (props.$open ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 20px 24px 24px;
    background-color: #fff;
    border-top: 1px solid #ececec;
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.05);
  }
`;

const LinkElement = styled(Link)<{ $active: boolean }>`
  font-size: 16px;
  font-weight: 500;
  padding: 4px;
  color: ${(props) => (props.$active ? "#0f5238" : "#222")};
  border-bottom: ${(props) =>
    props.$active ? "2px solid #0f5238" : "2px solid transparent"};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #0f5238;
  }
`;

const LangSwitcher = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  font-size: 14px;
  font-weight: 600;

  span {
    color: #ccc;
    font-weight: 300;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const LangLink = styled(Link)<{ $active: boolean }>`
  text-decoration: none;
  color: ${(props) => (props.$active ? "#0f5238" : "#999")};
  transition: color 0.2s;

  &:hover {
    color: #0f5238;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: 0;
  padding: 4px;
  cursor: pointer;
  flex-direction: column;
  gap: 4px;

  span {
    width: 22px;
    height: 2px;
    background-color: #0f5238;
    border-radius: 1px;
  }

  @media (max-width: 1024px) {
    display: flex;
  }
`;

const LangSwitcherMobile = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    gap: 8px;
    align-items: center;

    span {
      color: #ccc;
      font-weight: 300;
    }
  }
`;
