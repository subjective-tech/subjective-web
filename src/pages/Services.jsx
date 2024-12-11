import styled from '@emotion/styled';

const ServicesContainer = styled.div`
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

function Services() {
  return (
    <ServicesContainer>
      <Title>Our Services</Title>
      <Content>
        <p>
          We offer a comprehensive range of services to meet your business needs.
          More details coming soon.
        </p>
      </Content>
    </ServicesContainer>
  );
}

export default Services;
