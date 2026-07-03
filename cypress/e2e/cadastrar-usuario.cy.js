describe('Cadastrar usuário', ()=>{
    it('Exigindo declaração de leitura dos termos de uso e serviço', ()=>{
        cy.visit('/crie-sua-conta/')
        cy.url().should('contain', '/crie-sua-conta')

        cy.get('.input-button-wrapper > input').type('ana@gmail.com')
        cy.contains('Começar').click()

        cy.get('.termsofuse__helper')
            .should('contain.text', 'Para prosseguir com a criação da sua conta é necessário aceitar os termos de uso e serviços do Casar.com')
    })

    it('Sem informar email', ()=>{
        cy.visit('/crie-sua-conta/')
        cy.url().should('contain', 'crie-sua-conta')

        cy.get('#termsofuse').check()
        cy.contains('Começar').click()
        cy.contains('Começar').should('have.attr', 'disabled')
    })

    it('Informando email com formato inválido', ()=>{
        cy.visit('/crie-sua-conta/')
        cy.url().should('contain', 'crie-sua-conta')

        cy.get('#termsofuse').check()
        cy.get('.input-button-wrapper > input').type('ana@gmail')

        cy.get('#termsofuse').check()
        cy.contains('Começar').click()
        cy.contains('Começar').should('have.attr', 'disabled')
        cy.contains('E-mail inválido').should('exist')

    })
})