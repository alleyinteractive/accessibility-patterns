import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './hamburgerMenu.scss';

/**
 * Hamburger menu component.
 */
const HamburgerMenu = ({
  menuItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const mainMenuRef = useRef();
  const hamburgerMenuButtonRef = useRef();
  const firstMenuItemRef = useRef();
  const lastMenuItemRef = useRef();
  const menuItemsRef = useRef();

  // Update refs when menu items change.
  useEffect(() => {
    menuItemsRef.current = mainMenuRef.current.querySelectorAll('li a');
    firstMenuItemRef.current = mainMenuRef.current.querySelector('li:first-child a');
    lastMenuItemRef.current = mainMenuRef.current.querySelector('li:last-child a');
  }, [mainMenuRef]);

  // Closes the menu and removes event listener.
  const closeMenu = () => {
    setIsOpen(false);
    hamburgerMenuButtonRef.current.focus();
    // eslint-disable-next-line no-use-before-define
    mainMenuRef.current.removeEventListener('keydown', handleMenuItemKeyDown);
  };

  // Opens the menu and adds menu event listener.
  const openMenu = (focus = 'first') => {
    setIsOpen(true);
    // eslint-disable-next-line no-use-before-define
    mainMenuRef.current.addEventListener('keydown', handleMenuItemKeyDown);
    if (focus === 'first') {
      firstMenuItemRef.current.focus();
    } else if (focus === 'last') {
      lastMenuItemRef.current.focus();
    }
  };

  // Toggles menu open/closed when user clicks menu button.
  const handleMenuToggle = () => {
    if (isOpen === true) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  // Handles key events on menu button.
  // Enter or Space: toggle menu open/closed.
  // Escape: close menu.
  // ArrowDown: open menu and focus on first menu item.
  // ArrowUp: open menu and focus on last menu item.
  const handleMenuButtonKeyDown = (event) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        handleMenuToggle();
        break;
      case 'Escape':
        closeMenu();
        break;
      case 'ArrowDown':
        event.preventDefault();
        openMenu();
        break;
      case 'ArrowUp':
        event.preventDefault();
        openMenu('last');
        break;
      default:
        break;
    }
  };

  // Handles key events on menu.
  // Escape or Tab: close menu.
  // ArrowDown: focus on next menu item.
  // ArrowUp: focus on previous menu item.
  // Home: focus on first menu item.
  // End: focus on last menu item.
  const handleMenuItemKeyDown = (event) => {
    const currentMenuItem = event.target;
    const currentIndex = Array.prototype.indexOf.call(menuItemsRef.current, currentMenuItem);
    let nextIndex = currentIndex;

    switch (event.key) {
      case 'Escape':
      case 'Tab':
        closeMenu();
        return;
      case 'ArrowDown':
        nextIndex += 1;
        break;
      case 'ArrowUp':
        nextIndex -= 1;
        break;
      case 'Home':
        event.preventDefault();
        firstMenuItemRef.current.focus();
        return;
      case 'End':
        event.preventDefault();
        lastMenuItemRef.current.focus();
        return;
      default:
        return;
    }

    event.preventDefault();

    // Loop to start or end if index is out of bounds.
    if (nextIndex < 0) {
      nextIndex = menuItemsRef.current.length - 1;
    } else if (nextIndex >= menuItemsRef.current.length) {
      nextIndex = 0;
    }

    menuItemsRef.current[nextIndex].focus();
  };

  // Adds event listener for menu button keydown.
  useEffect(() => {
    const hamburgerMenuButton = hamburgerMenuButtonRef.current;
    // Add event listener for menu button keydown.
    hamburgerMenuButton.addEventListener('keydown', handleMenuButtonKeyDown);
    return () => {
      // Remove event listener when this component is unmounted.
      hamburgerMenuButton.removeEventListener('keydown', handleMenuButtonKeyDown);
    };
  });

  return (
    <nav
      role="navigation"
      aria-label="Main Menu"
      className="hamburger-menu-container"
      ref={mainMenuRef}
    >
      <button
        type="button"
        id="hamburger-menu-button"
        className="hamburger-menu-button"
        aria-haspopup="menu"
        aria-controls="hamburger-menu"
        aria-expanded={isOpen}
        onClick={handleMenuToggle}
        ref={hamburgerMenuButtonRef}
      >
        <span className="hamburger-icon" />
        Menu
      </button>
      <ul
        id="hamburger-menu"
        className="hamburger-menu"
        aria-labelledby="hamburger-menu-button"
        role="menu"
      >
        {menuItems.map(({ title, url }, key) => (
          <li
            role="none"
            className={`item-${key + 1}`}
            key={title}
          >
            <a
              role="menuitem"
              tabIndex="-1"
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
