import React from 'react';
import styled from 'styled-components';

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

const BestPractices = () => {
  return (
    <PageContainer>
      <PageTitle>Cypress Best Practices</PageTitle>
      
      <Section>
        <SectionTitle>Test Structure</SectionTitle>
        <p>
          Properly structuring your tests is essential for maintainability and readability. Here are some best practices for test structure:
        </p>
        <ul>
          <li>Use descriptive test names that explain what the test is verifying</li>
          <li>Keep tests independent - each test should be able to run on its own</li>
          <li>Follow the AAA pattern: Arrange, Act, Assert</li>
          <li>Group related tests together using describe blocks</li>
          <li>Keep tests focused on a single piece of functionality</li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>Selecting Elements</SectionTitle>
        <p>
          Cypress recommends using dedicated data attributes for testing to make your tests more resilient to UI changes:
        </p>
        <ul>
          <li>Use data-* attributes to provide context to your selectors</li>
          <li>Avoid using CSS classes or element IDs that may change with UI updates</li>
          <li>Prefer data-cy, data-test, or data-testid attributes</li>
          <li>Be specific with your selectors to avoid flaky tests</li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>Working with Network Requests</SectionTitle>
        <p>
          Cypress provides powerful tools for handling network requests:
        </p>
        <ul>
          <li>Use cy.intercept() to stub network requests</li>
          <li>Avoid unnecessary waiting by leveraging Cypress's automatic waiting</li>
          <li>Mock server responses for faster and more reliable tests</li>
          <li>Test edge cases like server errors and slow responses</li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>Custom Commands</SectionTitle>
        <p>
          Custom commands help reduce duplication and improve test readability:
        </p>
        <ul>
          <li>Create custom commands for common operations</li>
          <li>Keep custom commands focused and reusable</li>
          <li>Document custom commands with JSDoc comments</li>
          <li>Return the Cypress chain from custom commands for chainability</li>
        </ul>
      </Section>
      
      <Section>
        <SectionTitle>Test Performance</SectionTitle>
        <p>
          Optimize your tests for better performance:
        </p>
        <ul>
          <li>Use cy.session() to preserve login state between tests</li>
          <li>Avoid visiting pages unnecessarily</li>
          <li>Use API calls for test setup instead of UI interactions when possible</li>
          <li>Be mindful of test isolation vs. shared state tradeoffs</li>
        </ul>
      </Section>
    </PageContainer>
  );
};

export default BestPractices; 