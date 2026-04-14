import styled from "styled-components";

const FooterWrapper = styled.footer`
  background: #0a0a0f;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 2rem 2.5rem;
  margin-top: 4rem;
`;

const FooterInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FooterLogoIcon = styled.div`
  width: 28px;
  height: 28px;
  background: #e5001a;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
`;

const FooterLogoText = styled.span`
  font-family: 'Bebas Neue', 'Impact', sans-serif;
  font-size: 1.2rem;
  color: #fff;
  letter-spacing: 1px;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const FooterLink = styled.a`
  color: #9ca3af;
  text-decoration: none;
  font-size: 0.82rem;
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

const FooterCopy = styled.p`
  color: #6b7280;
  font-size: 0.78rem;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInner>
        <FooterLogo>
          <FooterLogoIcon>🎬</FooterLogoIcon>
          <FooterLogoText>CineVault</FooterLogoText>
        </FooterLogo>

        <FooterLinks>
          <FooterLink>About</FooterLink>
          <FooterLink>Privacy</FooterLink>
          <FooterLink>Terms</FooterLink>
          <FooterLink>Contact</FooterLink>
        </FooterLinks>

        <FooterCopy>© 2025 CineVault. All rights reserved.</FooterCopy>
      </FooterInner>
    </FooterWrapper>
  );
};

export default Footer;
