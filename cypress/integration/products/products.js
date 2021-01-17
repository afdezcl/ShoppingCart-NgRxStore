context('Products and Filters', () => {
    describe("Visit home page and play with the products", () => {

        beforeEach(() => {
            cy.visit("/");
        });
    
        it("Should add item", () => {
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
    
        it("Should add several items", () => {

        });

        it("Should add a item twice (so it's must increment the quantity)", () => {

        });

        it("Should filter by category", () => {

        });


        it("Should order by price Lowest to Highest", () => {

        });

        it("Should order by price Highest to Lowest", () => {

        });
    });
});
