import PropTypes from 'prop-types';

import './Card.scss';

export const Card = (props) => {
  const { className, children } = props;

  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
};

Card.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};
