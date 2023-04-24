import styles from '../ProductForm/ProductForm.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = ({ colors, currentColor, setCurrentColor }) => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        { colors.map((item, index) => 
            <li key={ index }>
                <button type="button" className={clsx(prepareColorClassName(item), item === currentColor && styles.active)} onClick={ () => setCurrentColor(item) }>
                </button>
            </li>) }
      </ul>
    </div>
  );
};

OptionColor.propTypes = {
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired
};

export default OptionColor;