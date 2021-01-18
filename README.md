# ShoppingCart

This is a simple project (to practice Redux) about a online shop, where you can add products to a shopping cart. Has been used @ngrx/store as Redux pattern to the shopping cart.

This project uses Store and Effects as Redux architecture. Also, a lazy loading of product images has been neccesary to improve performance of the application (If you access the platform from a mobile it's a good approach).

## Stack

* Angular 11
* Ant Design (NG-ZORRO)
* NgRx/Store & NgRx/Effects (as Redux pattern)
* Jest (to unit tests)
* Cypress (to acceptance tests)
* Husky (as pre-commit && pre-push hooks)
* TSLint

## API (BACK-END)

To get all products in this application has been used a free API [FakeStoreAPI](https://fakestoreapi.com/)

## CI/CD

To Continous Integration and Continous Delivery has been used `Github Action`. To see build deploy workflow go to `.github/workflows`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `npm run test` to execute the unit tests via Jest.

## Running acceptance tests

Run `npm run e2e` to execute the unit tests via Cypress

