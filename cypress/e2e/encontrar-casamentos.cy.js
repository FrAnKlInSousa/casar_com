describe('Buscar de casamentos', () => {
    it('Informando nome de casal e data', () =>{
        cy.visit('/')
        cy.url().should('contain', 'casar.com')

        cy.contains('Encontre um casamento').click()
        cy.url().should('contain', 'encontre-um-casamento')

        cy.get('[name="coupleName"]').click().type('ana')
        cy.get('.react-datepicker__input-container > .text-neutral')
            .click().type('01/08/2026')
        cy.contains('Buscar').click()

        cy.get('.mb-4')
            .should('contain', 'resultados para: ana')

    })

    it('Informando apenas nome de casal e acessar o site', ()=>{
        cy.visit('/')
        cy.url().should('contain', 'casar.com')
        cy.contains('Encontre um casamento').click()
        cy.url().should('contain', 'encontre-um-casamento')

        cy.get('[name="coupleName"]').type('teste')
        cy.contains('Buscar').click()

        cy.get('.mb-4').should('contain', 'resultados para: teste')

        cy.visitSite('tes tes teste e teste teste')
        cy.url().should('contain', 'noivos.casar.com')

    })

})
