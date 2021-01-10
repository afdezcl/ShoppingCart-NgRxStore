import { Product } from 'src/app/models/product.interface';

export interface AppState {
    readonly shopping: Array<Product>;
}
