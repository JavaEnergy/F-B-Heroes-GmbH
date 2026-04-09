"use client";

import { Logo } from "@/svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const Header = (props: { dict: any; lang: string }) => {
  const pathname = usePathname();

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
        <Logo />
      </LogoContainer>

      <Nav>
        <LinkElement
          href={`/${props.lang}/services`}
          $active={isActive("/services")}
        >
          {props.dict.services}
        </LinkElement>
        <LinkElement
          href={`/${props.lang}/robotic-gastronomy`}
          $active={isActive("/robotic-gastronomy")}
        >
          {props.dict.robotic_gastronomy}
        </LinkElement>
        <LinkElement
          href={`/${props.lang}/network`}
          $active={isActive("/network")}
        >
          {props.dict.network}
        </LinkElement>
        <LinkElement href={`/${props.lang}/about`} $active={isActive("/about")}>
          {props.dict.about}
        </LinkElement>
        <LinkElement
          href={`/${props.lang}/contact`}
          $active={isActive("/contact")}
        >
          {props.dict.contact}
        </LinkElement>
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
`;

const LogoContainer = styled(Link)`
  display: flex;
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  gap: 32px;
  align-items: center;
  margin: 0 auto;
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
  flex: 1; /* Takes up space on the right to help center the Nav */
  font-size: 14px;
  font-weight: 600;

  span {
    color: #ccc;
    font-weight: 300;
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
