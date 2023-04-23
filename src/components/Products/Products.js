import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
      { products.map((product, index) => <Product key={ product.id } { ...products[index] } />) }
    </section>
  );
};

export default Products;