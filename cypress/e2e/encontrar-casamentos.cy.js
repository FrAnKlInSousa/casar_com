describe('Buscar de casamentos', () => {
    it('Informando nome de casal e data', () =>{
        cy.visitHome()

        cy.contains('Encontre um casamento').click()
        cy.url().should('contain', 'encontre-um-casamento')

        cy.searchWedding('ana', '01/08/2026')
    })


    it('Informando apenas nome do casal e acessando o site do casal', ()=>{
        cy.visitHome()

        cy.contains('Encontre um casamento').click()
        cy.url().should('contain', 'encontre-um-casamento')

        cy.searchWedding('teste')

        cy.visitSite('tes tes teste e teste teste')
        cy.url().should('contain', 'noivos.casar.com')

    })

    it('Sem informar nome do casal', ()=>{
        cy.visitHome()

        cy.contains('Encontre um casamento').click()
        cy.url().should('contain', 'encontre-um-casamento')
        cy.contains('Buscar').click()
        cy.contains('O nome do casal não pode ficar em branco.').should('exist')
    })
})
