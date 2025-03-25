describe('Performance Tests', () => {
  it('should load the home page quickly', () => {
    // Start performance measurement
    const startTime = performance.now()
    
    cy.visit('/')
    
    // Wait for content to be fully loaded
    cy.contains('h1', 'Master Cypress Testing').should('be.visible')
    
    // End performance measurement
    cy.window().then((win) => {
      const endTime = performance.now()
      const loadTime = endTime - startTime
      
      // Page should load in less than 3 seconds
      expect(loadTime).to.be.lessThan(3000)
      
      cy.log(`Page loaded in ${loadTime.toFixed(2)}ms`)
    })
  })

  it('should navigate between pages quickly', () => {
    cy.visit('/')
    
    // Measure navigation time
    const pages = ['getting-started', 'commands', 'best-practices', 'examples', 'resources']
    
    pages.forEach(page => {
      // Start timing
      const startTime = performance.now()
      
      // Navigate to page
      cy.contains('a', page, { matchCase: false }).click()
      
      // Wait for page to load
      cy.url().should('include', `/${page}`)
      
      // End timing
      cy.window().then((win) => {
        const endTime = performance.now()
        const navTime = endTime - startTime
        
        // Navigation should be quick
        expect(navTime).to.be.lessThan(1000)
        
        cy.log(`Navigation to ${page} took ${navTime.toFixed(2)}ms`)
      })
    })
  })

  it('should have responsive search', () => {
    cy.visit('/')
    
    // Measure search response time
    const startTime = performance.now()
    
    // Type search query
    cy.get('input[aria-label="Search"]').type('test')
    
    // Wait for results
    cy.get('div[show="true"]').should('be.visible')
    
    // End timing
    cy.window().then((win) => {
      const endTime = performance.now()
      const searchTime = endTime - startTime
      
      // Search should be responsive
      expect(searchTime).to.be.lessThan(500)
      
      cy.log(`Search results appeared in ${searchTime.toFixed(2)}ms`)
    })
  })
}) 