import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

const PageContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
  border-bottom: 2px solid ${props => props.theme.colors.accent};
  padding-bottom: 0.5rem;
`;

const SubsectionTitle = styled.h3`
  font-size: 1.4rem;
  margin: 1.5rem 0 1rem;
  color: ${props => props.theme.colors.secondary};
`;

const CodeBlock = styled.pre`
  background-color: #2d2d2d;
  border-radius: 5px;
  padding: 1rem;
  overflow-x: auto;
  margin: 1.5rem 0;
`;

// Progress tracker
const ProgressContainer = styled.div`
  position: fixed;
  top: 80px;
  right: 20px;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 200px;
  display: none;
  
  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: block;
  }
`;

const ProgressTitle = styled.h4`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const ProgressBar = styled.div`
  height: 8px;
  background-color: #eee;
  border-radius: 4px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: ${props => props.theme.colors.accent};
  width: ${props => props.progress}%;
  transition: width 0.3s ease;
`;

const GettingStarted = () => {
  const pageRef = useRef(null);
  
  useEffect(() => {
    Prism.highlightAll();
    
    // Set up scroll tracking for progress bar
    const handleScroll = () => {
      if (pageRef.current) {
        const totalHeight = pageRef.current.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;
        const progress = Math.min(100, Math.round((scrollPosition / totalHeight) * 100));
        
        const progressFill = document.getElementById('progress-fill');
        if (progressFill) {
          progressFill.style.width = `${progress}%`;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageContainer ref={pageRef}>
      <PageTitle>Getting Started with Cypress</PageTitle>
      
      <ProgressContainer>
        <ProgressTitle>Reading Progress</ProgressTitle>
        <ProgressBar>
          <ProgressFill id="progress-fill" progress={0} />
        </ProgressBar>
      </ProgressContainer>
      
      <Section>
        <SectionTitle>What is Cypress?</SectionTitle>
        <p>
          Cypress is a next-generation front-end testing tool built for the modern web. It addresses the key pain points developers and QA engineers face when testing modern applications.
        </p>
        <p>
          Unlike Selenium, Cypress is fundamentally different. It's not just a different tool that does the same old things. It's a new way of approaching test automation that addresses the core challenges of testing modern web applications.
        </p>
      </Section>
      
      <Section>
        <SectionTitle>Installation</SectionTitle>
        <p>
          Cypress is a desktop application that is installed on your computer. The desktop application supports Mac, Linux, and Windows.
        </p>
        
        <SubsectionTitle>Installing Cypress via npm</SubsectionTitle>
        <p>
          The recommended way to install Cypress is as a dev dependency in your project:
        </p>
        <CodeBlock>
          <code className="language-bash">
{`# Install Cypress via npm
npm install cypress --save-dev

# Or using Yarn
yarn add cypress --dev`}
          </code>
        </CodeBlock>
        
        <SubsectionTitle>Direct Download</SubsectionTitle>
        <p>
          If you're not using Node.js or npm in your project, you can download Cypress directly from the <a href="https://download.cypress.io/desktop" target="_blank" rel="noopener noreferrer">Cypress download page</a>.
        </p>
      </Section>
      
      <Section>
        <SectionTitle>Opening Cypress</SectionTitle>
        <p>
          Once Cypress is installed, you can open it by running:
        </p>
        <CodeBlock>
          <code className="language-bash">
{`# Using npx
npx cypress open

# Or with yarn
yarn cypress open

# Or if you've added a script to package.json
npm run cypress:open`}
          </code>
        </CodeBlock>
        <p>
          This will launch the Cypress Test Runner, which allows you to:
        </p>
        <ul>
          <li>Set up new projects</li>
          <li>Configure Cypress</li>
          <li>Run tests in an interactive mode</li>
          <li>Debug failing tests</li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>Project Structure</SectionTitle>
        <p>
          When you open Cypress for the first time, it will create a cypress directory with the following structure:
        </p>
        <CodeBlock>
          <code className="language-text">
{`cypress/
  ├── fixtures/       # Test data, mocked responses
  │   └── example.json
  ├── e2e/            # Test files
  │   └── spec.cy.js
  ├── support/        # Support files, custom commands
  │   ├── commands.js
  │   └── e2e.js
  └── cypress.config.js  # Configuration file`}
          </code>
        </CodeBlock>
      </Section>
      
      <Section>
        <SectionTitle>Writing Your First Test</SectionTitle>
        <p>
          Let's create a simple test to verify that our application loads correctly:
        </p>
        <CodeBlock>
          <code className="language-javascript">
{`// cypress/e2e/home.cy.js
describe('Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    
    // Check that the title is correct
    cy.title().should('include', 'Cypress Guide')
    
    // Check that the navigation exists
    cy.get('nav').should('be.visible')
    
    // Check that the hero section exists
    cy.contains('h1', 'Master Cypress Testing').should('be.visible')
  })
})`}
          </code>
        </CodeBlock>
        
        <SubsectionTitle>Running the Test</SubsectionTitle>
        <p>
          You can run this test in the Cypress Test Runner by clicking on it, or you can run it from the command line:
        </p>
        <CodeBlock>
          <code className="language-bash">
{`# Run in headless mode
npx cypress run

# Run a specific test file
npx cypress run --spec "cypress/e2e/home.cy.js"`}
          </code>
        </CodeBlock>
      </Section>
      
      <Section>
        <SectionTitle>Configuration</SectionTitle>
        <p>
          Cypress can be configured through the cypress.config.js file. Here's a basic configuration:
        </p>
        <CodeBlock>
          <code className="language-javascript">
{`// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})`}
          </code>
        </CodeBlock>
      </Section>
      
      <Section>
        <SectionTitle>Next Steps</SectionTitle>
        <p>
          Now that you have Cypress installed and your first test running, you can explore more advanced features:
        </p>
        <ul>
          <li>Learn about <a href="/commands">Cypress Commands</a></li>
          <li>Explore <a href="/best-practices">Best Practices</a></li>
          <li>See real-world <a href="/examples">Examples</a></li>
          <li>Check out additional <a href="/resources">Resources</a></li>
        </ul>
      </Section>
    </PageContainer>
  );
};

export default GettingStarted; 