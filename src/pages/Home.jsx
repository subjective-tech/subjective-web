import styled from '@emotion/styled';

const HomeContainer = styled.div`
  width: 100%;
`;

const Hero = styled.section`
  text-align: center;
  padding: 4rem 0;
  max-width: 1200px;
  margin: 0 auto;
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

const Section = styled.section`
  display: flex;
  align-items: center;
  padding: 4rem 2rem;
  background-color: ${props => props.bgColor};
`;

const SectionContent = styled.div`
  flex: 1;
  padding: 2rem;
  max-width: 600px;
  margin: ${props => props.reverse ? '0 auto 0 0' : '0 0 0 auto'};
`;

const SectionImage = styled.img`
  flex: 1;
  max-width: 500px;
  height: 300px;
  object-fit: cover;
  margin: ${props => props.reverse ? '0 auto 0 0' : '0 0 0 auto'};
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const SectionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #444;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
`;

function Home() {
  return (
    <HomeContainer>
      <Hero>
        <Title>Welcome to Our Company</Title>
        <Subtitle>We deliver innovative solutions for your business needs</Subtitle>
      </Hero>

      <Section bgColor="#f5f8ff">
        <ContentWrapper>
          <SectionContent>
            <SectionTitle>Innovation at Its Core</SectionTitle>
            <SectionText>
              Our cutting-edge solutions transform the way businesses operate. 
              We leverage the latest technologies to drive efficiency and growth 
              for our clients.
            </SectionText>
          </SectionContent>
          <SectionImage 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500"
            alt="Innovation visualization"
          />
        </ContentWrapper>
      </Section>

      <Section bgColor="#fff">
        <ContentWrapper reverse>
          <SectionContent reverse>
            <SectionTitle>Expert Team</SectionTitle>
            <SectionText>
              Our team of seasoned professionals brings years of industry expertise
              to every project. We're committed to delivering excellence and 
              exceeding expectations.
            </SectionText>
          </SectionContent>
          <SectionImage 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500"
            alt="Team collaboration"
            reverse
          />
        </ContentWrapper>
      </Section>

      <Section bgColor="#f0f7f4">
        <ContentWrapper>
          <SectionContent>
            <SectionTitle>Sustainable Solutions</SectionTitle>
            <SectionText>
              We believe in creating lasting impact through sustainable practices.
              Our solutions are designed to provide long-term value while being
              environmentally conscious.
            </SectionText>
          </SectionContent>
          <SectionImage 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=500"
            alt="Sustainable technology"
          />
        </ContentWrapper>
      </Section>
    </HomeContainer>
  );
}

export default Home;
