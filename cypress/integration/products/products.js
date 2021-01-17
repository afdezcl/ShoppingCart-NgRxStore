context('Products and Filters', () => {
    describe("Visit home page and play with the products", () => {

        beforeEach(() => {
            cy.visit("/");
        });

        it("Should add item", () => {
            cy.get('[data-cy=addProductButton]')
                .eq(0)
                .click();
            cy.contains('Product added succesfully');
            cy.get('[data-cy=cartToggle]')
                .click();
            cy.get('.item-container');
        });

        it("Should add several items", () => {
            cy.get('[data-cy=addProductButton]')
                .eq(0)
                .click();
            cy.contains('Product added succesfully');
            cy.get('[data-cy=addProductButton]')
                .eq(1)
                .click();
            cy.contains('Product added succesfully');
            cy.get('[data-cy=cartToggle]')
                .click();
            cy.get('.ant-menu > :nth-child(1) > :nth-child(1)');
            cy.get('.ant-menu > :nth-child(1) > :nth-child(2)');
        });

        it("Should add a item twice (so it's must increment the quantity)", () => {
            cy.get('[data-cy=addProductButton]')
                .eq(0)
                .click();
            cy.contains('Product added succesfully');
            cy.get('[data-cy=addProductButton]')
                .eq(0)
                .click();
            cy.contains('Product added succesfully');
            cy.get('[data-cy=cartToggle]')
                .click();
            cy.get('.item-container')
                .contains('Quantity: 2');
        });

        it("Should filter by category", () => {
            cy.get('[data-cy=menCategory] > .ant-checkbox > .ant-checkbox-input')
                .check();
            cy.contains('4 Product(s) found');
            cy.get('[data-cy=womenCategory] > .ant-checkbox > .ant-checkbox-input')
                .check();
            cy.contains('10 Product(s) found');
            cy.get('[data-cy=jeweleryCategory] > .ant-checkbox > .ant-checkbox-input')
                .check();
            cy.contains('14 Product(s) found');
            cy.get('[data-cy=electronicsCategory] > .ant-checkbox > .ant-checkbox-input')
                .check();
            cy.contains('20 Product(s) found');
        });


        it("Should order by price Lowest to Highest", () => {
            cy.get('.ant-select-arrow > .anticon > svg').click();
            cy.get('[ng-reflect-label="Lowest to Highest"] > .ant-select-item-option-content').click();
            cy.get('[data-cy=titleProduct]')
                .eq(0)
                .contains(`Opna Women's Short Sleeve`);
        });

        it("Should order by price Highest to Lowest", () => {
            cy.get('.ant-select-arrow > .anticon > svg').click();
            cy.get('[ng-reflect-label="Highest to Lowest"] > .ant-select-item-option-content').click();
            cy.get('[data-cy=titleProduct]')
                .eq(0)
                .contains(`Samsung`);
        });
    });
});
