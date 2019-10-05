import React, { useState } from "react";
import PropTypes from "prop-types";

const Input = ({ value, placeholder, ...rest }) => {
  const [val, setVal] = useState(value);
  const updateInput = e => {
    setVal(e.target.value);
  };

  return (
    <input
      placeholder={placeholder}
      value={val}
      onChange={updateInput}
      {...rest}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string
};

Input.defaultProps = {
  value: "",
  placeholder: ""
};

export default Input;
