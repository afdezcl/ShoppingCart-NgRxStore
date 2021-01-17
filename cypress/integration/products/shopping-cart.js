context('Shopping cart', () => {
    describe("Visit home page and play with the products", () => {

        beforeEach(() => {
            cy.visit("/");
        });

        it("Should increment and reduce quantity of a product and update total price", () => {
            cy.get('[data-cy=addProductButton]')
                .eq(0)
                .click();
            cy.contains('Product added succesfully');
            cy.get('[data-cy=cartToggle]')
                .click();
            cy.get('[data-cy=plusButtonQuantity]')
                .click();
            cy.contains('Quantity: 2');
            cy.contains('219.9 €');
            cy.get('[data-cy=reduceButtonQuantity]')
                .click();
            cy.contains('Quantity: 1');
        });

        it("Should reduce quantity of a product until remove (quantity zero)", () => {
            cy.get('[data-cy=addProductButton]')
                .eq(0)
                .click();
            cy.contains('Product added succesfully');
            cy.get('[data-cy=cartToggle]')
                .click();
            cy.get('[data-cy=reduceButtonQuantity]')
                .click();
            cy.contains('No items added :(');
        });

        it("Should remove a product", () => {
            cy.get('[data-cy=addProductButton]')
                .eq(0)
                .click();
            cy.contains('Product added succesfully');
            cy.get('[data-cy=cartToggle]')
                .click();
            cy.get('[data-cy=removeProductButton]')
                .click();
            cy.get('.ant-popover-buttons > .ant-btn-primary > .ng-star-inserted')
                .click();    
            cy.contains('No items added :(');
            cy.contains('Product removed succesfully');
            
        });

    });
});
