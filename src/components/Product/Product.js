import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = ({ name, title, colors, sizes, basePrice }) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = () => {
    const additionalPrice = sizes.find(element => element.name === currentSize).additionalPrice;

    return basePrice + additionalPrice;
  };

  const addToCart = e => {
    e.preventDefault();

    const cartSummary = `
      Summary
      =============
      Name: ${ title }
      Price: ${ getPrice() }
      Size: ${ currentSize }
      Color: ${ currentColor }
    `;

    console.log(cartSummary);
  };

  return (
    <article className={styles.product}>
      <ProductImage title={ title } name={ name } currentColor={ currentColor } />
      <div>
        <header>
          <h2 className={styles.name}>{ title }</h2>
          <span className={styles.price}>Price: { getPrice() }$</span>
        </header>
        <ProductForm  setCurrentSize={setCurrentSize}
                      setCurrentColor={setCurrentColor}
                      addToCart={addToCart}
                      basePrice={basePrice} 
                      title={title} 
                      sizes={sizes} 
                      colors={colors} 
                      currentSize={currentSize} 
                      currentColor={currentColor} />
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired
};

export default Product;