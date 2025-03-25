import { useEffect, useState, useDeferredValue } from 'react';
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

const CommandCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CommandTitle = styled.h3`
  font-size: 1.4rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1rem;
`;

const CommandDescription = styled.p`
  margin-bottom: 1rem;
`;

const CodeBlock = styled.pre`
  background-color: #2d2d2d;
  border-radius: 5px;
  padding: 1rem;
  overflow-x: auto;
  margin: 1rem 0;
`;

const SearchContainer = styled.div`
  margin-bottom: 2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => props.active ? props.theme.colors.secondary : '#f0f0f0'};
  color: ${props => props.active ? 'white' : '#333'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? props.theme.colors.secondary : '#e0e0e0'};
  }
`;

const CommandsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearchTerm = useDeferredValue(searchTerm);
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Command categories
  const categories = [
    { id: 'all', name: 'All Commands' },
    { id: 'navigation', name: 'Navigation' },
    { id: 'queries', name: 'Queries' },
    { id: 'actions', name: 'Actions' },
    { id: 'assertions', name: 'Assertions' },
    { id: 'utilities', name: 'Utilities' }
  ];
  
  // Sample commands data
  const allCommands = [
    {
      title: 'cy.visit()',
      category: 'navigation',
      description: 'Visit a URL in the current browser window.',
      code: `// Visit the base URL (defined in cypress.config.js)
cy.visit('/')

// Visit a specific URL
cy.visit('https://example.com')

// Visit with options
cy.visit('/about', {
  timeout: 30000,
  onBeforeLoad: (contentWindow) => {
    // do something before the page loads
  },
  onLoad: (contentWindow) => {
    // do something after the page loads
  }
})`
    },
    {
      title: 'cy.get()',
      category: 'queries',
      description: 'Get one or more DOM elements by selector or alias.',
      code: `// Get by CSS selector
cy.get('button')
cy.get('.btn.btn-primary')
cy.get('#main-content')

// Get by data attribute
cy.get('[data-test="submit-button"]')

// Get with timeout
cy.get('.list-item', { timeout: 10000 })`
    },
    {
      title: 'cy.click()',
      category: 'actions',
      description: 'Click on a DOM element.',
      code: `// Simple click
cy.get('button').click()

// Click with options
cy.get('button').click({ force: true })
cy.get('.menu-item').click({ multiple: true })`
    }
  ];
  
  useEffect(() => {
    Prism.highlightAll();
  }, [deferredSearchTerm, activeFilter]);
  
  // Filter commands based on search term and category
  const filteredCommands = allCommands.filter(command => {
    const matchesSearch = command.title.toLowerCase().includes(deferredSearchTerm.toLowerCase()) ||
                         command.description.toLowerCase().includes(deferredSearchTerm.toLowerCase());
    const matchesCategory = activeFilter === 'all' || command.category === activeFilter;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <PageContainer>
      <PageTitle>Cypress Commands</PageTitle>
      
      <SearchContainer>
        <SearchInput 
          type="text" 
          placeholder="Search commands..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <FilterContainer>
          {categories.map(category => (
            <FilterButton 
              key={category.id}
              active={activeFilter === category.id}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </FilterButton>
          ))}
        </FilterContainer>
      </SearchContainer>
      
      {filteredCommands.length === 0 ? (
        <p>No commands found matching your criteria.</p>
      ) : (
        filteredCommands.map((command, index) => (
          <CommandCard key={index}>
            <CommandTitle>{command.title}</CommandTitle>
            <CommandDescription>{command.description}</CommandDescription>
            <CodeBlock>
              <code className="language-javascript">
                {command.code}
              </code>
            </CodeBlock>
          </CommandCard>
        ))
      )}
    </PageContainer>
  );
};

export default CommandsPage; 