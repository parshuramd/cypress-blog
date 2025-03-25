describe('Newsletter Form Tests', () => {
  beforeEach(() => {
    cy.visit('/')
    // Scroll to newsletter section
    cy.contains('Stay Updated').scrollIntoView()
  })

  it('should submit with valid email', () => {
    // Intercept form submission
    cy.intercept('POST', '*', {
      statusCode: 200,
      body: { success: true }
    }).as('formSubmit')
    
    // Fill and submit form
    cy.get('input[type="email"]').type('test@example.com')
    cy.get('button[type="submit"]').click()
    
    // Check for success message (this depends on your implementation)
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Thanks for subscribing to our newsletter!')
    })
  })

  it('should show validation error for invalid email', () => {
    // Try to submit with invalid email
    cy.get('input[type="email"]').type('invalid-email')
    cy.get('button[type="submit"]').click()
    
    // Browser validation should prevent submission
    // Check that form was not submitted
    cy.url().should('not.include', 'submitted')
  })

  it('should require email field', () => {
    // Try to submit without email
    cy.get('button[type="submit"]').click()
    
    // Form should not submit
    cy.url().should('not.include', 'submitted')
  })
}) 