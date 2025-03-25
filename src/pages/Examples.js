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

const ExampleCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ExampleTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const ExampleDescription = styled.p`
  margin-bottom: 1.5rem;
`;

const CodeBlock = styled.pre`
  background-color: #2d2d2d;
  border-radius: 5px;
  padding: 1rem;
  overflow-x: auto;
  margin: 1.5rem 0;
  color: #f8f8f2;
  font-family: 'Source Code Pro', monospace;
`;

const Examples = () => {
  return (
    <PageContainer>
      <PageTitle>Cypress Examples</PageTitle>
      
      <ExampleCard>
        <ExampleTitle>Basic Login Test</ExampleTitle>
        <ExampleDescription>
          This example demonstrates how to test a login form, including validation and successful login.
        </ExampleDescription>
        <CodeBlock>
{`describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('displays validation errors with invalid credentials', () => {
    // Try to login with empty fields
    cy.get('[data-cy="login-button"]').click()
    cy.get('[data-cy="email-error"]').should('be.visible')
    cy.get('[data-cy="password-error"]').should('be.visible')
    
    // Try with invalid email format
    cy.get('[data-cy="email-input"]').type('invalid-email')
    cy.get('[data-cy="password-input"]').type('password123')
    cy.get('[data-cy="login-button"]').click()
    cy.get('[data-cy="email-error"]').should('be.visible')
    
    // Try with correct format but wrong credentials
    cy.get('[data-cy="email-input"]').clear().type('user@example.com')
    cy.get('[data-cy="login-button"]').click()
    cy.get('[data-cy="login-error"]').should('be.visible')
      .and('contain', 'Invalid credentials')
  })

  it('successfully logs in with valid credentials', () => {
    cy.get('[data-cy="email-input"]').type('test@example.com')
    cy.get('[data-cy="password-input"]').type('password123')
    cy.get('[data-cy="login-button"]').click()
    
    // Verify redirect to dashboard after login
    cy.url().should('include', '/dashboard')
    cy.get('[data-cy="welcome-message"]').should('contain', 'Welcome')
  })
})`}
        </CodeBlock>
      </ExampleCard>
      
      <ExampleCard>
        <ExampleTitle>API Testing</ExampleTitle>
        <ExampleDescription>
          This example shows how to test API endpoints directly using Cypress.
        </ExampleDescription>
        <CodeBlock>
{`describe('API Tests', () => {
  it('fetches todos successfully', () => {
    cy.request('GET', '/api/todos')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length.greaterThan(0)
        expect(response.body[0]).to.have.property('title')
        expect(response.body[0]).to.have.property('completed')
      })
  })

  it('creates a new todo', () => {
    const newTodo = {
      title: 'Learn Cypress API testing',
      completed: false
    }
    
    cy.request('POST', '/api/todos', newTodo)
      .then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('id')
        expect(response.body.title).to.eq(newTodo.title)
      })
  })

  it('updates a todo', () => {
    // First create a todo
    cy.request('POST', '/api/todos', { title: 'Update me', completed: false })
      .then((response) => {
        const todoId = response.body.id
        
        // Then update it
        return cy.request('PATCH', \`/api/todos/\${todoId}\`, { completed: true })
      })
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.completed).to.be.true
      })
  })
})`}
        </CodeBlock>
      </ExampleCard>
      
      <ExampleCard>
        <ExampleTitle>Testing File Upload</ExampleTitle>
        <ExampleDescription>
          This example demonstrates how to test file upload functionality.
        </ExampleDescription>
        <CodeBlock>
{`describe('File Upload', () => {
  it('uploads a file successfully', () => {
    cy.visit('/upload')
    
    // Prepare a file to upload
    cy.fixture('example.json', 'base64').then(fileContent => {
      cy.get('[data-cy="file-input"]').attachFile({
        fileContent,
        fileName: 'example.json',
        mimeType: 'application/json'
      })
    })
    
    // Check that the file name appears in the UI
    cy.get('[data-cy="file-name"]').should('contain', 'example.json')
    
    // Submit the upload form
    cy.get('[data-cy="upload-button"]').click()
    
    // Verify success message
    cy.get('[data-cy="success-message"]')
      .should('be.visible')
      .and('contain', 'File uploaded successfully')
  })
})`}
        </CodeBlock>
      </ExampleCard>
    </PageContainer>
  );
};

export default Examples; 