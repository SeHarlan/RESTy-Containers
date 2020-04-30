import React from 'react';
import PropTypes from 'prop-types';

const RadioButton = ({ value, selectedOption, onOptionChange }) => (
  <label>
    <input checked={selectedOption === value} type="radio" name="method" value={value} onChange={onOptionChange} />
    {value}
  </label>
);
RadioButton.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onOptionChange: PropTypes.func.isRequired
};
export default RadioButton;
