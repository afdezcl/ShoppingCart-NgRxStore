import { Product } from 'src/app/models/product.interface';
import { ProductService } from './product.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Product', () => {
    let productService: ProductService;
    const http = { get: jest.fn() };

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                ProductService
            ]
        });
        productService = TestBed.inject(ProductService);
    });

    describe('Test: getProducts', () => {
        it('Should get all products', () => {
            productService.getProducts().subscribe((products: Product[]) => {
                expect(http.get).toBeDefined();
                expect(http.get).toHaveBeenCalledWith('https://fakestoreapi.com/products');
                expect(products.length).toBe(2);
            });
        });
    });

});
