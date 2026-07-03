// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('visitSite', (titulo) => {
    cy.contains('h3', titulo)
        .parent()
        .contains('a', 'Visitar site')
        .invoke('removeAttr', 'target')
        .click()
})

Cypress.Commands.add('visitHome', ()=>{
    cy.visit('/')
    cy.url().should('contain', 'casar.com')
})

Cypress.Commands.add('searchWedding', (couple_name, wedding_date)=>{
    cy.get('[name="coupleName"]').type(couple_name)
    if(wedding_date){
        cy.get('.react-datepicker__input-container > .text-neutral')
            .click().type(wedding_date)
    }
    cy.contains('Buscar').click()
    cy.get('.mb-4')
        .should('contain', `resultados para: ${couple_name}`)
})