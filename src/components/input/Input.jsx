const Input = forwardRef((props, ref) => (
  <div className="form-row">
    {props.labelText && (
      <label htmlFor={props.name} className="form-label">
        {props.labelText}
      </label>
    )}
    <input
      ref={ref}
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
));
