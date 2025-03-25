describe('Edge Case Tests', () => {
  it('should handle very long search queries', () => {
    cy.visit('/')
    
    // Type a very long search query
    const longQuery = 'a'.repeat(100)
    cy.get('input[aria-label="Search"]').type(longQuery)
    
    // Input should handle the long text
    cy.get('input[aria-label="Search"]').should('have.value', longQuery)
  })

  it('should handle rapid navigation', () => {
    cy.visit('/')
    
    // Rapidly click through all navigation links
    const pages = ['getting-started', 'commands', 'best-practices', 'examples', 'resources']
    
    pages.forEach(page => {
      cy.contains('a', page, { matchCase: false }).click({ force: true })
      cy.url().should('include', `/${page}`)
    })
    
    // Should end up on the last page
    cy.url().should('include', '/resources')
  })

  it('should handle window resize', () => {
    cy.visit('/')
    
    // Test different viewport sizes
    const viewports = ['macbook-15', 'ipad-2', 'iphone-x']
    
    viewports.forEach(viewport => {
      cy.viewport(viewport)
      
      // Wait for any resize handlers to complete
      cy.wait(500)
      
      // Content should be visible
      cy.contains('h1', 'Master Cypress Testing').should('be.visible')
    })
  })

  it('should handle page refresh', () => {
    // Navigate to a page
    cy.visit('/commands')
    
    // Refresh the page
    cy.reload()
    
    // Content should still be visible
    cy.get('h1').should('contain', 'Commands')
  })
}) 