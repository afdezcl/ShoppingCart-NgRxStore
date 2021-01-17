import { Product } from 'src/app/models/product.interface';
import { FilterCategoryPipe } from './filterCategory.pipe';

describe('Pipe: FilterCategory', () => {
  const pipe = new FilterCategoryPipe();
  const filteredCount = { count: 0 };
  const products: Product[] = [
    {
      category: 'women clothing',
      description: '95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.',
      id: 20,
      image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
      price: 12.99,
      title: 'DANVOUY Womens T Shirt Casual Cotton Short',
    },
    {
      category: 'jewelery',
      description: 'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
      id: 6,
      image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
      price: 168,
      title: 'Solid Gold Petite Micropave '
    }
  ];

  it('Create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Should return all products to NO categories selected', () => {
    const categoriesFilterSelected = [];
    expect(pipe.transform(products, categoriesFilterSelected, filteredCount)).toEqual(products);
  });

  it('Should return only the product with JEWELERY category', () => {
    const productsReturned: Product[] = products.filter(item => item.category === 'jewelery');
    const categoriesFilterSelected = ['jewelery'];
    expect(pipe.transform(products, categoriesFilterSelected, filteredCount)).toEqual(productsReturned);
  });


});
