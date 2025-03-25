import { useId } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components with enhanced design
const HeroSection = styled.section`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: white;
  padding: 8rem 0 6rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/hero-pattern.svg');
    background-size: cover;
    opacity: 0.1;
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.space[4]};
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: white;
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.1;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 1.25rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.9rem 2rem;
  background-color: ${props => props.primary ? props.theme.colors.accent : 'transparent'};
  color: white;
  border: ${props => props.primary ? 'none' : '2px solid white'};
  border-radius: ${props => props.theme.radii.md};
  font-weight: ${props => props.theme.fontWeights.semibold};
  text-decoration: none;
  transition: ${props => props.theme.transitions.default};
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.md};
    text-decoration: none;
  }
`;

const FeaturesSection = styled.section`
  padding: 6rem 0;
  background-color: ${props => props.theme.colors.background};
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: ${props => props.theme.colors.accent};
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.radii.lg};
  padding: 2.5rem 2rem;
  box-shadow: ${props => props.theme.shadows.md};
  transition: ${props => props.theme.transitions.default};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.lg};
  }
  
  h3 {
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.primary};
  }
  
  p {
    color: ${props => props.theme.colors.lightText};
    line-height: 1.6;
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
`;

const TestimonialsSection = styled.section`
  padding: 6rem 0;
  background-color: ${props => props.theme.colors.darkBackground};
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.radii.lg};
  padding: 2rem;
  box-shadow: ${props => props.theme.shadows.md};
  
  p {
    font-style: italic;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 1rem;
  }
  
  .author-info {
    h4 {
      margin-bottom: 0.25rem;
      color: ${props => props.theme.colors.primary};
    }
    
    p {
      margin-bottom: 0;
      font-size: 0.9rem;
      color: ${props => props.theme.colors.lightText};
    }
  }
`;

const NewsletterSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(135deg, ${props => props.theme.colors.secondary} 0%, ${props => props.theme.colors.primary} 100%);
  color: white;
  text-align: center;
  
  p {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: ${props => props.theme.radii.md} 0 0 ${props => props.theme.radii.md};
  font-size: 1rem;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.3);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    border-radius: ${props => props.theme.radii.md};
    margin-bottom: 1rem;
  }
`;

const SubmitButton = styled.button`
  background-color: ${props => props.theme.colors.accent};
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-weight: ${props => props.theme.fontWeights.semibold};
  border-radius: 0 ${props => props.theme.radii.md} ${props => props.theme.radii.md} 0;
  cursor: pointer;
  transition: ${props => props.theme.transitions.default};
  
  &:hover {
    background-color: ${props => props.theme.colors.success};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    border-radius: ${props => props.theme.radii.md};
  }
`;

const Home = () => {
  const emailInputId = useId();
  
  // Feature data
  const features = [
    {
      title: "Fast, Easy and Reliable",
      description: "Cypress is built on a new architecture and runs directly in the browser. This means faster, more reliable and more accurate tests than ever before.",
      icon: "⚡"
    },
    {
      title: "Real-Time Reloads",
      description: "Cypress automatically reloads when you make changes to your tests. See commands execute in real-time as your application is interacted with.",
      icon: "🔄"
    },
    {
      title: "Debuggability",
      description: "Debug directly from familiar tools like Chrome DevTools. See what happened before, during, and after each command.",
      icon: "🔍"
    },
    {
      title: "Automatic Waiting",
      description: "Cypress automatically waits for commands and assertions before moving on. No more async hell. No more 'sleep' or 'wait' statements.",
      icon: "⏱️"
    },
    {
      title: "Screenshots and Videos",
      description: "View screenshots taken automatically on failure, or videos of your entire test suite when run from the CLI.",
      icon: "📸"
    },
    {
      title: "Cross Browser Testing",
      description: "Run tests in Firefox and Chrome-family browsers (including Edge and Electron) locally and optimally in a continuous integration pipeline.",
      icon: "🌐"
    }
  ];
  
  // Testimonial data
  const testimonials = [
    {
      quote: "Cypress has completely transformed how we approach testing. Our test suite is now more reliable and our developers actually enjoy writing tests!",
      name: "Sarah Johnson",
      title: "Lead QA Engineer",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "The developer experience with Cypress is unmatched. Being able to see tests run in real-time and debug easily has saved us countless hours.",
      name: "Michael Chen",
      title: "Frontend Developer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "We've reduced our test flakiness by 90% since switching to Cypress. The automatic waiting and real browser testing make all the difference.",
      name: "Emily Rodriguez",
      title: "CTO, TechStart",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    alert("Thanks for subscribing to our newsletter!");
  };

  return (
    <main>
      <HeroSection>
        <HeroContent>
          <HeroTitle>
            Master Cypress Testing
          </HeroTitle>
          <HeroSubtitle>
            Learn everything about Cypress - the next generation front-end testing tool that makes testing fast, easy and reliable
          </HeroSubtitle>
          <ButtonGroup>
            <Button to="/getting-started" primary>Get Started</Button>
            <Button to="/examples">View Examples</Button>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>
      
      <FeaturesSection>
        <SectionTitle>Why Cypress?</SectionTitle>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesSection>
      
      <TestimonialsSection>
        <SectionTitle>What Developers Say</SectionTitle>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <p>"{testimonial.quote}"</p>
              <TestimonialAuthor>
                <img src={testimonial.avatar} alt={testimonial.name} />
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.title}</p>
                </div>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsSection>
      
      <NewsletterSection>
        <SectionTitle style={{ color: 'white' }}>Stay Updated</SectionTitle>
        <p>Subscribe to our newsletter for the latest Cypress tips, tricks, and updates</p>
        <NewsletterForm onSubmit={handleSubmit}>
          <NewsletterInput 
            type="email" 
            placeholder="Your email address" 
            id={emailInputId} 
            required 
          />
          <SubmitButton type="submit">Subscribe</SubmitButton>
        </NewsletterForm>
      </NewsletterSection>
    </main>
  );
};

export default Home; 