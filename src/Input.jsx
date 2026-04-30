import React from 'react';

const Input = React.forwardRef(function Input(props, ref) {
  // Todo: Accept forwarded ref and "connect" it to the <input> element
  const { label, ...inputProps } = props;
  return (
    <p className="control">
      <label>{label}</label>
      {/* Todo: "Forward" remaining props to <input> element */}
      <input ref={ref} {...inputProps} />
    </p>
  );
});

export default Input;
