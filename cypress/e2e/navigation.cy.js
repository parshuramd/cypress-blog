describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should navigate to all main pages', () => {
    // Test Home page
    cy.contains('h1', 'Master Cypress Testing').should('be.visible')
    
    // Test Getting Started page
    cy.contains('a', 'Getting Started').click()
    cy.url().should('include', '/getting-started')
    cy.get('h1').should('contain', 'Getting Started')
    
    // Test Commands page
    cy.contains('a', 'Commands').click()
    cy.url().should('include', '/commands')
    cy.get('h1').should('contain', 'Commands')
    
    // Test Best Practices page
    cy.contains('a', 'Best Practices').click()
    cy.url().should('include', '/best-practices')
    cy.get('h1').should('contain', 'Best Practices')
    
    // Test Examples page
    cy.contains('a', 'Examples').click()
    cy.url().should('include', '/examples')
    cy.get('h1').should('contain', 'Examples')
    
    // Test Resources page
    cy.contains('a', 'Resources').click()
    cy.url().should('include', '/resources')
    cy.get('h1').should('contain', 'Resources')
  })

  it('should navigate back to home when clicking the logo', () => {
    // First navigate to another page
    cy.contains('a', 'Commands').click()
    cy.url().should('include', '/commands')
    
    // Click the logo to go back to home
    cy.get('a').contains('Cypress Guide').click()
    cy.url().should('not.include', '/commands')
    cy.contains('h1', 'Master Cypress Testing').should('be.visible')
  })

  it('should show mobile menu when clicking hamburger on small screens', () => {
    // Set viewport to mobile size
    cy.viewport('iphone-x')
    
    // Menu should be hidden initially
    cy.contains('a', 'Commands').should('not.be.visible')
    
    // Click hamburger menu
    cy.get('button').click()
    
    // Menu should now be visible
    cy.contains('a', 'Commands').should('be.visible')
    
    // Click a link to navigate
    cy.contains('a', 'Commands').click()
    cy.url().should('include', '/commands')
  })
}) 