import PropTypes from 'prop-types';
import './Button.scss';

export const Button = (props) => {
  const { label, className, disabled, handleClick } = props;

  return (
    <div className="button-container">
      <button className={`button-input ${className}`} onClick={handleClick} disabled={disabled}>
        {label}
      </button>
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.any.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  disabled: PropTypes.bool
};
