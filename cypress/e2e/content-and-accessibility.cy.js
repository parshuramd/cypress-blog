describe('Content and Accessibility Tests', () => {
  it('should have proper heading hierarchy', () => {
    cy.visit('/')
    
    // Check that h1 exists and is unique
    cy.get('h1').should('have.length', 1)
    
    // Check that headings are in order
    cy.get('h1, h2, h3, h4, h5, h6').each(($el, index, $list) => {
      const currentLevel = parseInt($el.prop('tagName').replace('H', ''))
      
      if (index > 0) {
        const prevLevel = parseInt($list.eq(index - 1).prop('tagName').replace('H', ''))
        // Heading levels should not skip (e.g., h1 to h3)
        expect(currentLevel - prevLevel).to.be.lessThan(2)
      }
    })
  })

  it('should have alt text for all images', () => {
    cy.visit('/')
    
    // Check all pages for images with alt text
    const pages = ['/', '/getting-started', '/commands', '/best-practices', '/examples', '/resources']
    
    pages.forEach(page => {
      cy.visit(page)
      cy.get('img').each($img => {
        expect($img).to.have.attr('alt')
        expect($img.attr('alt').length).to.be.greaterThan(0)
      })
    })
  })

  it('should be navigable with keyboard', () => {
    cy.visit('/')
    
    // Focus on first interactive element
    cy.focused().should('exist')
    
    // Tab through all interactive elements
    let tabCount = 0
    const maxTabs = 20 // Prevent infinite loop
    
    while (tabCount < maxTabs) {
      cy.focused().then($el => {
        // Press tab to move to next element
        cy.focused().tab()
        tabCount++
        
        // Check if we've tabbed through all elements
        cy.focused().then($nextEl => {
          if ($nextEl.is($el)) {
            // We've cycled back to the first element
            return false
          }
        })
      })
    }
    
    // Should be able to activate a link with Enter
    cy.contains('a', 'Commands').focus()
    cy.focused().type('{enter}')
    cy.url().should('include', '/commands')
  })

  it('should have sufficient color contrast', () => {
    // This is a basic check - ideally use axe or similar
    cy.visit('/')
    
    // Check text against background
    cy.get('p').each($p => {
      // Get computed styles
      const color = window.getComputedStyle($p[0]).color
      const bgColor = window.getComputedStyle($p[0]).backgroundColor
      
      // This is a simplified check - in a real test you'd use a contrast calculation
      expect(color).to.not.equal(bgColor)
    })
  })
}) 