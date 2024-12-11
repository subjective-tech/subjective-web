import styled from '@emotion/styled';
import { useState } from 'react';

// Theme colors
const colors = {
  primary: '#6366F1', // Indigo
  secondary: '#4F46E5', // Darker indigo
  accent: '#818CF8', // Light indigo
  text: {
    primary: '#1F2937', // Dark gray
    secondary: '#4B5563', // Medium gray
    light: '#9CA3AF', // Light gray
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#F9FAFB',
    accent: '#EEF2FF', // Light indigo background
  }
};

const HomeContainer = styled.div`
  width: 100%;
`;

const Hero = styled.section`
  text-align: center;
  padding: 8rem 0;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(180deg, ${colors.background.accent} 0%, ${colors.background.primary} 100%);
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
  background: ${colors.primary};
  color: white;
  padding: 1rem 2rem;
  border-radius: 100px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.secondary};
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled.a`
  background: transparent;
  color: ${colors.primary};
  padding: 1rem 2rem;
  border-radius: 100px;
  text-decoration: none;
  font-weight: 500;
  border: 1px solid ${colors.primary};
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.background.accent};
    transform: translateY(-2px);
  }
`;

// Testimonials Components
const TestimonialsSection = styled.section`
  background: ${colors.background.secondary};
  padding: 6rem 2rem;
`;

const TestimonialsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const TestimonialCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TestimonialText = styled.p`
  color: ${colors.text.secondary};
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.span`
  color: ${colors.text.primary};
  font-weight: 600;
`;

const AuthorTitle = styled.span`
  color: ${colors.text.light};
  font-size: 0.9rem;
`;

// FAQ Components
const FAQSection = styled.section`
  background: ${colors.background.primary};
  padding: 6rem 2rem;
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  border-bottom: 1px solid ${colors.text.light}20;
  margin-bottom: 1rem;
`;

const FAQQuestion = styled.button`
  width: 100%;
  text-align: left;
  padding: 1rem 0;
  background: none;
  border: none;
  font-size: 1.1rem;
  font-weight: 500;
  color: ${colors.text.primary};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: ${colors.primary};
  }
`;

const FAQAnswer = styled.div`
  padding: ${props => props.isOpen ? "1rem 0 2rem" : "0"};
  height: ${props => props.isOpen ? "auto" : "0"};
  overflow: hidden;
  transition: all 0.3s ease;
  color: ${colors.text.secondary};
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

const MetricsSection = styled.section`
  background: ${colors.background.primary};
  padding: 4rem 2rem;
  border-bottom: 1px solid ${colors.text.light}20;
`;

const MetricsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
  text-align: center;
`;

const MetricItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MetricNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: 0.5rem;
`;

const MetricLabel = styled.div`
  color: ${colors.text.secondary};
  font-size: 1.1rem;
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
  const [openFAQ, setOpenFAQ] = useState(null);
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

      <MetricsSection>
        <MetricsGrid>
          <MetricItem>
            <MetricNumber>500+</MetricNumber>
            <MetricLabel>Clients Served</MetricLabel>
          </MetricItem>
          <MetricItem>
            <MetricNumber>95%</MetricNumber>
            <MetricLabel>Client Satisfaction</MetricLabel>
          </MetricItem>
          <MetricItem>
            <MetricNumber>1000+</MetricNumber>
            <MetricLabel>Projects Completed</MetricLabel>
          </MetricItem>
          <MetricItem>
            <MetricNumber>24/7</MetricNumber>
            <MetricLabel>Support Available</MetricLabel>
          </MetricItem>
        </MetricsGrid>
      </MetricsSection>

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
      <TestimonialsSection>
        <SectionTitle style={{ textAlign: 'center', marginBottom: '3rem' }}>
          What Our Clients Say
        </SectionTitle>
        <TestimonialsGrid>
          <TestimonialCard>
            <TestimonialText>
              "The team's expertise and dedication to our project was exceptional. They delivered beyond our expectations."
            </TestimonialText>
            <TestimonialAuthor>
              <AuthorImage src="https://i.pravatar.cc/150?img=1" alt="Sarah Johnson" />
              <AuthorInfo>
                <AuthorName>Sarah Johnson</AuthorName>
                <AuthorTitle>CEO, TechCorp</AuthorTitle>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>

          <TestimonialCard>
            <TestimonialText>
              "Their innovative solutions helped us streamline our operations and increase efficiency by 200%."
            </TestimonialText>
            <TestimonialAuthor>
              <AuthorImage src="https://i.pravatar.cc/150?img=2" alt="Mark Thompson" />
              <AuthorInfo>
                <AuthorName>Mark Thompson</AuthorName>
                <AuthorTitle>CTO, InnovateX</AuthorTitle>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>

          <TestimonialCard>
            <TestimonialText>
              "Working with this team has transformed our business. Their support is unmatched in the industry."
            </TestimonialText>
            <TestimonialAuthor>
              <AuthorImage src="https://i.pravatar.cc/150?img=3" alt="Emily Chen" />
              <AuthorInfo>
                <AuthorName>Emily Chen</AuthorName>
                <AuthorTitle>COO, GrowthLabs</AuthorTitle>
              </AuthorInfo>
            </TestimonialAuthor>
          </TestimonialCard>
        </TestimonialsGrid>
      </TestimonialsSection>

      <FAQSection>
        <SectionTitle style={{ textAlign: 'center', marginBottom: '3rem' }}>
          Frequently Asked Questions
        </SectionTitle>
        <FAQContainer>
          {[
            {
              question: "What services do you offer?",
              answer: "We provide a comprehensive suite of digital solutions including web development, mobile applications, cloud services, and digital transformation consulting."
            },
            {
              question: "How long does a typical project take?",
              answer: "Project timelines vary based on scope and complexity. A typical web development project takes 8-12 weeks, while larger enterprise solutions may take 3-6 months."
            },
            {
              question: "What is your pricing model?",
              answer: "We offer flexible pricing models including project-based, time and materials, and retainer arrangements. Each solution is customized to meet your specific needs and budget."
            },
            {
              question: "Do you provide ongoing support?",
              answer: "Yes, we offer comprehensive support and maintenance packages to ensure your solution continues to perform optimally after launch."
            }
          ].map((faq, index) => (
            <FAQItem key={index}>
              <FAQQuestion onClick={() => setOpenFAQ(openFAQ === index ? null : index)}>
                {faq.question}
                {openFAQ === index ? '−' : '+'}
              </FAQQuestion>
              <FAQAnswer isOpen={openFAQ === index}>
                {faq.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQContainer>
      </FAQSection>
    </HomeContainer>
  );
}

export default Home;
