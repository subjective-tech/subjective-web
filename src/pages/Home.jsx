import styled from '@emotion/styled';

const HomeContainer = styled.div`
  width: 100%;
`;

const Hero = styled.section`
  text-align: center;
  padding: 8rem 0;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(180deg, #f8f9ff 0%, #ffffff 100%);
`;

const UpdateBadge = styled.div`
  background: rgba(0, 0, 0, 0.05);
  border-radius: 100px;
  padding: 8px 16px;
  display: inline-flex;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #333;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 4rem;
`;

const PrimaryButton = styled.a`
  background: #2d6ae0;
  color: white;
  padding: 1rem 2rem;
  border-radius: 100px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: #1d5ad0;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled.a`
  background: transparent;
  color: #2d6ae0;
  padding: 1rem 2rem;
  border-radius: 100px;
  text-decoration: none;
  font-weight: 500;
  border: 1px solid #2d6ae0;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(45, 106, 224, 0.1);
    transform: translateY(-2px);
  }
`;

const Stats = styled.div`
  font-size: 1.1rem;
  color: #666;
`;

const LogoBar = styled.section`
  background-color: #2f3640;
  padding: 2rem 0;
  margin: 0 auto;
`;

const LogoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const LogoTitle = styled.h3`
  text-align: center;
  color: #ffffff;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const LogoGrid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  height: 40px;
  object-fit: contain;
  opacity: 0.8;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
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

      <LogoBar>
        <LogoContainer>
          <LogoTitle>Trusted by Industry Leaders</LogoTitle>
          <LogoGrid>
            <Logo src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" />
            <Logo src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
            <Logo src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" />
            <Logo src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" />
            <Logo src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Apple_logo_grey.svg" alt="Apple" />
          </LogoGrid>
        </LogoContainer>
      </LogoBar>

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
