import PropTypes from 'prop-types';

const Button = (props) => {
  const { className, children } = props;

  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default Button;
