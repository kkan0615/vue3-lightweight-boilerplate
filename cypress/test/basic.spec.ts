// eslint-disable-next-line no-undef
context('Basic', () => {
  // eslint-disable-next-line no-undef
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    cy.visit('/')
  })

  // eslint-disable-next-line no-undef
  it('basic nav', () => {
    // eslint-disable-next-line no-undef
    cy.url()
      .should('eq', 'http://localhost:5173/')

    // eslint-disable-next-line no-undef
    cy.contains('[img]')
      .should('exist')
  })
})
