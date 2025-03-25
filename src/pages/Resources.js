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

const ResourceList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const ResourceCard = styled.a`
  display: block;
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    text-decoration: none;
  }
`;

const ResourceTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.secondary};
`;

const ResourceDescription = styled.p`
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`;

const ResourceType = styled.span`
  display: inline-block;
  background-color: ${props => {
    switch(props.type) {
      case 'Documentation': return '#e3f2fd';
      case 'Tutorial': return '#e8f5e9';
      case 'Video': return '#fff3e0';
      case 'Blog': return '#f3e5f5';
      case 'Tool': return '#e0f7fa';
      default: return '#f5f5f5';
    }
  }};
  color: ${props => {
    switch(props.type) {
      case 'Documentation': return '#0d47a1';
      case 'Tutorial': return '#1b5e20';
      case 'Video': return '#e65100';
      case 'Blog': return '#4a148c';
      case 'Tool': return '#006064';
      default: return '#333333';
    }
  }};
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Resources = () => {
  const officialResources = [
    {
      title: 'Cypress Documentation',
      description: 'Official Cypress documentation with guides, API references, and examples.',
      url: 'https://docs.cypress.io/',
      type: 'Documentation'
    },
    {
      title: 'Cypress API',
      description: 'Complete reference for all Cypress commands and utilities.',
      url: 'https://docs.cypress.io/api/table-of-contents',
      type: 'Documentation'
    },
    {
      title: 'Cypress Examples',
      description: 'Official examples demonstrating Cypress features and capabilities.',
      url: 'https://github.com/cypress-io/cypress-example-recipes',
      type: 'Tutorial'
    },
    {
      title: 'Cypress Real World App',
      description: 'A real-world example application showcasing Cypress testing practices.',
      url: 'https://github.com/cypress-io/cypress-realworld-app',
      type: 'Tutorial'
    }
  ];
  
  const communityResources = [
    {
      title: 'Testing JavaScript with Kent C. Dodds',
      description: 'Comprehensive course on JavaScript testing, including Cypress.',
      url: 'https://testingjavascript.com/',
      type: 'Tutorial'
    },
    {
      title: 'Cypress Testing Tips & Tricks',
      description: 'Collection of useful tips and tricks for Cypress testing.',
      url: 'https://glebbahmutov.com/blog/cypress-tips-and-tricks/',
      type: 'Blog'
    },
    {
      title: 'Cypress.io YouTube Channel',
      description: 'Official Cypress YouTube channel with tutorials and webinars.',
      url: 'https://www.youtube.com/channel/UC-EOsTo2l2x39e4JmSaWNRQ',
      type: 'Video'
    },
    {
      title: 'Cypress Testing Library',
      description: 'Custom Cypress commands for Testing Library queries.',
      url: 'https://testing-library.com/docs/cypress-testing-library/intro/',
      type: 'Tool'
    }
  ];
  
  const books = [
    {
      title: 'Testing Web Applications with Cypress',
      description: 'Comprehensive guide to testing web applications with Cypress.',
      url: 'https://www.packtpub.com/product/testing-web-applications-with-cypress/9781839213854',
      type: 'Book'
    },
    {
      title: 'End-to-End Web Testing with Cypress',
      description: 'Learn how to write reliable end-to-end tests with Cypress.',
      url: 'https://www.amazon.com/End-End-Web-Testing-Cypress/dp/1839213841',
      type: 'Book'
    }
  ];
  
  return (
    <PageContainer>
      <PageTitle>Cypress Resources</PageTitle>
      
      <Section>
        <SectionTitle>Official Resources</SectionTitle>
        <ResourceList>
          {officialResources.map((resource, index) => (
            <ResourceCard key={index} href={resource.url} target="_blank" rel="noopener noreferrer">
              <ResourceTitle>{resource.title}</ResourceTitle>
              <ResourceDescription>{resource.description}</ResourceDescription>
              <ResourceType type={resource.type}>{resource.type}</ResourceType>
            </ResourceCard>
          ))}
        </ResourceList>
      </Section>
      
      <Section>
        <SectionTitle>Community Resources</SectionTitle>
        <ResourceList>
          {communityResources.map((resource, index) => (
            <ResourceCard key={index} href={resource.url} target="_blank" rel="noopener noreferrer">
              <ResourceTitle>{resource.title}</ResourceTitle>
              <ResourceDescription>{resource.description}</ResourceDescription>
              <ResourceType type={resource.type}>{resource.type}</ResourceType>
            </ResourceCard>
          ))}
        </ResourceList>
      </Section>
      
      <Section>
        <SectionTitle>Books</SectionTitle>
        <ResourceList>
          {books.map((resource, index) => (
            <ResourceCard key={index} href={resource.url} target="_blank" rel="noopener noreferrer">
              <ResourceTitle>{resource.title}</ResourceTitle>
              <ResourceDescription>{resource.description}</ResourceDescription>
              <ResourceType type="Book">Book</ResourceType>
            </ResourceCard>
          ))}
        </ResourceList>
      </Section>
    </PageContainer>
  );
};

export default Resources; 