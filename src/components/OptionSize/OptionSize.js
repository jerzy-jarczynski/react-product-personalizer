import styles from '../ProductForm/ProductForm.module.scss';
import PropTypes from 'prop-types';

const OptionSize = ({ sizes, currentSize, setCurrentSize }) => {

  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        { sizes.map( (size, index) => 
            <li key={ index }>
                <button type="button" className={ currentSize === size.name && styles.active } onClick={ () => setCurrentSize(size.name) }>
                    { size.name }
                </button>
            </li>) }
      </ul>
    </div>    
  );
};

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired
};

export default OptionSize;