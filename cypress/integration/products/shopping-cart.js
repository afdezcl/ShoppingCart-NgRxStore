context('Shopping cart', () => {
    describe("Visit home page and play with the products", () => {

        beforeEach(() => {
            cy.visit("/");
        });
    
        it("Should increment quantity of a product and update total price", () => {
            const email = chance().email();
            const password = chance().string();
            cy.get('[data-cy=emailInput]')
                .type(email)
                .should('have.value', email);
            cy.get('[data-cy=passwordInput]')
                .type(password)
                .should('have.value', password);
            cy.get('[data-cy=logInButton]').click();
            cy.contains('Correo o contraseña incorrecta');
        });
    
        it("Should reduce quantity of a product and update total price", () => {

        });

        it("Should reduce quantity of a product until remove (quantity zero)", () => {

        });

        it("Should remove a product", () => {

        });
        
    });
});
