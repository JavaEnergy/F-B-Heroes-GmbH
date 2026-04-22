import Link from "next/link";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer(props: { dict: any; lang: string }) {
  const creatorLabel = props.lang === "de" ? "Erstellt von" : "Made by";

  return (
    <FooterElement>
      <TopGroups>
        <Group>
          <LinkItem href="/" style={{ fontSize: "20px", fontWeight: "700" }}>
            F&B Heroes Cosmos
          </LinkItem>
          <LinkItem href="/contact">
            F&B Heroes ({props.dict.navigation.contact})
          </LinkItem>
          <LinkItem href="/robotic-gastronomy">VEND Robotic</LinkItem>
          <LinkItem href="/about">TAMTAM</LinkItem>
        </Group>
        <Group>
          <GroupTitle style={{ color: "var(--primary-green)" }}>
            {props.dict.footer.important_links}
          </GroupTitle>
          <LinkItem href="/imprint">{props.dict.footer.imprint}</LinkItem>
          <LinkItem href="/privacy">{props.dict.footer.privacy_policy}</LinkItem>
        </Group>
        <Group>
          <GroupTitle style={{ color: "var(--primary-green)" }}>
            {props.dict.footer.digital_presence}
          </GroupTitle>
          <LinkItem href="https://www.linkedin.com/company/450725/" target="_blank">
            <FaLinkedin style={{ color: "var(--primary-green)" }} /> LinkedIn
          </LinkItem>
          <LinkItem
            href="https://www.instagram.com/fb_heroes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
          >
            <FaInstagram style={{ color: "var(--primary-green)" }} /> Instagram
          </LinkItem>
          <LinkItem href="https://www.facebook.com/foodandbeverageheroes" target="_blank">
            <FaFacebook style={{ color: "var(--primary-green)" }} /> Facebook
          </LinkItem>
          <LinkItem href="https://www.youtube.com/@FBHeroes" target="_blank">
            <FaYoutube style={{ color: "var(--primary-green)" }} /> YouTube
          </LinkItem>
        </Group>
      </TopGroups>
      <BottomMeta>
        <Copyright>© {new Date().getFullYear()} Tim Plasse – F&B Heroes.</Copyright>
        <Copyright>{props.dict.footer.rights_reserved}</Copyright>
        <Copyright>
          {creatorLabel}{" "}
          <CreatorLink href="https://cyborg-it.de" target="_blank" rel="noreferrer">
            cyborg-it.de
          </CreatorLink>
        </Copyright>
      </BottomMeta>
    </FooterElement>
  );
}

const FooterElement = styled.footer`
  width: 100%;
  padding: 64px 48px;
  background-color: var(--warm-white);
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 1024px) {
    padding: 48px 24px;
  }
`;

const TopGroups = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 225px;

  @media (max-width: 1024px) {
    gap: 48px;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
`;

const BottomMeta = styled.div`
  width: 100%;
  padding-top: 24px;
  border-top: 1px solid rgba(64, 73, 67, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-align: center;

  @media (max-width: 1024px) {
    padding-top: 20px;
  }
`;

const LinkItem = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 1024px) {
    min-width: 220px;
    align-items: center;
  }
`;

const Copyright = styled.div`
  font-size: 14px;
  color: "#404943";
  opacity: 0.6;
`;

const CreatorLink = styled.a`
  text-decoration: underline;
`;

const GroupTitle = styled.h3`
  color: "#0f5238";
  font-size: 12px;
  font-weight: 900;
`;
