import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Hamburger menu component.
 */
const HamburgerMenu = ({
  menuItems,
}) => {
  const [isExpanded, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isExpanded);
  };

  return (
    <nav
      role="navigation"
      aria-label="Hamburger Menu"
      className="hamburger-menu-container"
    >
      <button
        type="button"
        id="hamburger-menu-button"
        aria-haspopup="true"
        aria-controls="hamburger-menu"
        aria-expanded={isExpanded}
        onClick={handleToggle}
      >
        Menu
      </button>
      <ul
        id="hamburger-menu"
        aria-labelledby="hamburger-menu-button"
        role="menu"
      >
        {menuItems.map(({ title, url }) => (
          <li
            role="none"
            key={title}
          >
            <a
              role="menuitem"
              href={url}
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

HamburgerMenu.propTypes = {
  /**
   * Menu items.
   */
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Title of menu item.
     */
    title: PropTypes.string.isRequired,
    /**
     * URL of menu item.
     */
    url: PropTypes.string.isRequired,
  })),
};

HamburgerMenu.defaultProps = {
  menuItems: [],
};

export default HamburgerMenu;
