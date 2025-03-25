describe('Search Functionality', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should show search results when typing', () => {
    cy.get('input[aria-label="Search"]').type('test')
    cy.get('div[show="true"]').should('be.visible')
    cy.get('div[show="true"]').find('a').should('have.length.at.least', 1)
  })

  it('should navigate to the correct page when clicking a search result', () => {
    cy.get('input[aria-label="Search"]').type('login')
    cy.get('div[show="true"]').contains('Login Form Testing').click()
    cy.url().should('include', '/examples#login-form')
  })

  it('should show "No results" message for non-existent terms', () => {
    cy.get('input[aria-label="Search"]').type('nonexistentterm')
    cy.get('div[show="true"]').contains('No results found').should('be.visible')
  })

  it('should highlight matching text in search results', () => {
    cy.get('input[aria-label="Search"]').type('login')
    cy.get('div[show="true"]').find('span.highlight').should('contain', 'login')
  })

  it('should close search results when clicking outside', () => {
    // Open search results
    cy.get('input[aria-label="Search"]').type('test')
    cy.get('div[show="true"]').should('be.visible')
    
    // Click outside
    cy.get('body').click(0, 0)
    
    // Results should be hidden
    cy.get('div[show="true"]').should('not.exist')
  })

  it('should clear search when navigating to a new page', () => {
    // Type in search
    cy.get('input[aria-label="Search"]').type('test')
    cy.get('div[show="true"]').should('be.visible')
    
    // Navigate to another page
    cy.contains('a', 'Commands').click()
    
    // Search input should be empty and results hidden
    cy.get('input[aria-label="Search"]').should('have.value', '')
    cy.get('div[show="true"]').should('not.exist')
  })
}) 