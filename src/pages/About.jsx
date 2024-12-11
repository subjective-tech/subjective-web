import styled from '@emotion/styled';

const AboutContainer = styled.div`
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

function About() {
  return (
    <AboutContainer>
      <Title>About Us</Title>
      <Content>
        <p>
          We are a dedicated team of professionals committed to delivering
          exceptional solutions to our clients. With years of experience in the
          industry, we understand what it takes to help businesses succeed.
        </p>
        <p>
          Our mission is to provide innovative and sustainable solutions that
          drive growth and create lasting value for our clients.
        </p>
      </Content>
    </AboutContainer>
  );
}

export default About;
