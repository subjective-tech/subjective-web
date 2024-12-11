import styled from '@emotion/styled';

const HomeContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Hero = styled.section`
  text-align: center;
  padding: 4rem 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
`;

function Home() {
  return (
    <HomeContainer>
      <Hero>
        <Title>Welcome to Our Company</Title>
        <Subtitle>We deliver innovative solutions for your business needs</Subtitle>
      </Hero>
    </HomeContainer>
  );
}

export default Home;
