"use client";

import { Logo } from "@/svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const Header = (props: { dict: any; lang: string }) => {
  const pathname = usePathname().slice(3);
  const isActive = (path: string) => pathname === path;

  return (
    <HeaderElement>
      <Link href="/">
        <Logo />
      </Link>
      <Nav>
        <LinkElement href="/services" $active={isActive("/services")}>
          {props.dict.services}
        </LinkElement>
        <LinkElement
          href="/robotic-gastronomy"
          $active={isActive("/robotic-gastronomy")}
        >
          {props.dict.robotic_gastronomy}
        </LinkElement>
        <LinkElement href="/network" $active={isActive("/network")}>
          {props.dict.network}
        </LinkElement>
        <LinkElement href="/about" $active={isActive("/about")}>
          {props.dict.about}
        </LinkElement>
        <LinkElement href="/contact" $active={isActive("/contact")}>
          {props.dict.contact}
        </LinkElement>
      </Nav>
    </HeaderElement>
  );
};

export default Header;

const HeaderElement = styled.header`
  width: 100%;
  padding: 28px 32px;
  display: flex;
  align-items: center;
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
  transition: color 0.2s ease;
  color: ${(props) => (props.$active ? "#0f5238" : "#404943")};
  border-bottom: ${(props) =>
    props.$active ? "2px solid #0f5238" : "2px solid transparent"};

  &:hover {
    color: #0f5238;
  }
`;
