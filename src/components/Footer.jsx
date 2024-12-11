import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 4rem 2rem 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  height: 40px;
  margin-bottom: 1rem;
`;

const FooterText = styled.p`
  margin: 1rem 0;
  font-size: 0.9rem;
  color: #ccc;
`;

const FooterTitle = styled.h4`
  color: #fff;
  margin-bottom: 1rem;
  font-size: 1.1rem;
`;

const FooterLink = styled(Link)`
  color: #ccc;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  
  &:hover {
    color: #fff;
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid #555;
  text-align: center;
  font-size: 0.9rem;
  color: #ccc;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <Logo src="/logo-white.svg" alt="Company Logo" />
          <FooterText>
            Delivering innovative solutions for your business needs. We're committed to 
            excellence and customer satisfaction.
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Company</FooterTitle>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/services">Services</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Resources</FooterTitle>
          <FooterLink to="/blog">Blog</FooterLink>
          <FooterLink to="/documentation">Documentation</FooterLink>
          <FooterLink to="/support">Support</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Legal</FooterTitle>
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
          <FooterLink to="/terms">Terms of Service</FooterLink>
          <FooterLink to="/cookies">Cookie Policy</FooterLink>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;
