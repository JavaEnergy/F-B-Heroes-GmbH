import Link from "next/link";
import styled from "styled-components";
import { FaLinkedin, FaPodcast, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer(props: { dict: any; lang: string }) {
  return (
    <FooterElement>
      <Group>
        <LinkItem href="/" style={{ fontSize: "20px", fontWeight: "700" }}>
          F&B Heroes Cosmos
        </LinkItem>
        <LinkItem href="/contact">
          F&B Heroes ({props.dict.navigation.contact})
        </LinkItem>
        <LinkItem href="/robotic-gastronomy">VEND Robotic</LinkItem>
        <LinkItem href="/about">TAMTAM</LinkItem>
        <Copyright style={{ marginTop: "32px" }}>
          © {new Date().getFullYear()} Tim Plasse – F&B Heroes.
        </Copyright>
        <Copyright>{props.dict.footer.rights_reserved}</Copyright>
      </Group>
      <Group>
        <GroupTitle style={{ color: "#0f5238" }}>
          {props.dict.footer.important_links}
        </GroupTitle>
        <LinkItem href="/imprint">{props.dict.footer.imprint}</LinkItem>
        <LinkItem href="/privacy">{props.dict.footer.privacy_policy}</LinkItem>
      </Group>
      <Group>
        <GroupTitle style={{ color: "#0f5238" }}>
          {props.dict.footer.digital_presence}
        </GroupTitle>
        <LinkItem href="#">
          <FaLinkedin style={{ color: "#0f5238" }} /> LinkedIn
        </LinkItem>
        <LinkItem href="#">
          <FaInstagram style={{ color: "#0f5238" }} /> Instagram
        </LinkItem>
        <LinkItem href="#">
          <FaYoutube style={{ color: "#0f5238" }} /> YouTube
        </LinkItem>
        <LinkItem href="#">
          <FaPodcast style={{ color: "#0f5238" }} /> Podigee
        </LinkItem>
      </Group>
    </FooterElement>
  );
}

const FooterElement = styled.footer`
  width: 100%;
  padding: 64px 48px;
  background-color: #f4f4f2;
  display: flex;
  gap: 225px;
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
`;

const Copyright = styled.div`
  font-size: 14px;
  color: "#404943";
  opacity: 0.6;
`;

const GroupTitle = styled.h3`
  color: "#0f5238";
  font-size: 12px;
  font-weight: 900;
`;
