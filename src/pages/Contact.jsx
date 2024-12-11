import styled from '@emotion/styled';

const ContactContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 1.5rem;
`;

const Content = styled.div`
  line-height: 1.6;
  color: #444;
`;

function Contact() {
  return (
    <ContactContainer>
      <Title>Contact Us</Title>
      <Content>
        <p>
          Get in touch with us. Contact information coming soon.
        </p>
      </Content>
    </ContactContainer>
  );
}

export default Contact;
