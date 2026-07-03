describe('Buscar de casamentos', () => {
    it('Informando nome de casal e data', () =>{
        cy.visitHome()

        cy.contains('Encontre um casamento').click()
        cy.url().should('contain', 'encontre-um-casamento')

        cy.searchWedding('ana', '01/08/2026')
    })


    it('Informando apenas nome de casal e acessar o site', ()=>{
        cy.visitHome()

        cy.contains('Encontre um casamento').click()
        cy.url().should('contain', 'encontre-um-casamento')

        cy.searchWedding('teste')

        cy.visitSite('tes tes teste e teste teste')
        cy.url().should('contain', 'noivos.casar.com')

    })

})
