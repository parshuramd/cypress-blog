describe('Responsive Design Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display correctly on desktop', () => {
    cy.viewport(1280, 720)
    
    // Navigation should be horizontal
    cy.get('nav').find('a').should('be.visible')
    
    // Content should be properly centered
    cy.get('main').invoke('width').should('be.lessThan', 1280)
    
    // Hero section should be visible
    cy.contains('h1', 'Master Cypress Testing').should('be.visible')
  })

  it('should display correctly on tablet', () => {
    cy.viewport('ipad-2')
    
    // Hamburger menu should be visible
    cy.get('button').should('be.visible')
    
    // Navigation should be hidden initially
    cy.contains('a', 'Commands').should('not.be.visible')
    
    // Click hamburger to show menu
    cy.get('button').click()
    cy.contains('a', 'Commands').should('be.visible')
    
    // Content should reflow
    cy.get('main').invoke('width').should('be.lessThan', 768)
  })

  it('should display correctly on mobile', () => {
    cy.viewport('iphone-x')
    
    // Hamburger menu should be visible
    cy.get('button').should('be.visible')
    
    // Navigation should be hidden initially
    cy.contains('a', 'Commands').should('not.be.visible')
    
    // Content should be readable without horizontal scroll
    cy.get('body').then($body => {
      const bodyWidth = $body[0].scrollWidth
      const viewportWidth = Cypress.config('viewportWidth')
      expect(bodyWidth).to.be.at.most(viewportWidth)
    })
    
    // Search should be full width when focused
    cy.get('input[aria-label="Search"]').focus()
    cy.get('input[aria-label="Search"]').invoke('width').should('be.greaterThan', 200)
  })
}) 