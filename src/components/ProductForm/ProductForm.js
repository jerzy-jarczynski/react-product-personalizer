import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';

const ProductForm = ({setCurrentSize,
                      setCurrentColor,
                      addToCart,
                      sizes,
                      colors,
                      currentSize,
                      currentColor }) => {

  return (
    <form onSubmit={ addToCart }>
      <OptionSize sizes={sizes} currentSize={currentSize} setCurrentSize={setCurrentSize} />
      <OptionColor colors={colors} currentColor={currentColor} setCurrentColor={setCurrentColor} />
      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired
};

export default ProductForm;