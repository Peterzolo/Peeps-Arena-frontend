import PropTypes from 'prop-types';
// import { forwardRef } from 'react';
import '../../components/input/Input.scss';

export const Input = (props) => (
  <div className="input-container">
    <input
      // ref={ref}
      id={props.id}
      name={props.name}
      type={props.type}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
      onClick={props.onClick}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      className={`form-input ${props.className}`}
      style={props.style}
      autoComplete="false"
    />
  </div>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  labelText: PropTypes.string,
  value: PropTypes.any,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  style: PropTypes.object
};
