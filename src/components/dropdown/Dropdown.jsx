import React from 'react';
import PropTypes from 'prop-types';
import './dropdown.scss';

/**
 * Primary UI component for user interaction
 */
const Dropdown = ({
  content,
  label,
  defaultItem,
}) => (
  <div className="storybook-dropdown">
    <label htmlFor="dropdown-list">
      {label}
    </label>
    <select id="dropdown-list" name="dropdown-list">
      <option value={defaultItem.value} selected disabled>{defaultItem.text}</option>
      {content.map(({ value, text }) => (
        <option value={value}>{text}</option>
      ))}
    </select>
  </div>
);

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  defaultItem: PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default Dropdown;
