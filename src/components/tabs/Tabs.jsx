import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './tabs.scss';

const Tabs = ({ activationType, orientation, tabContent }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tablistRef = useRef(null);

  /**
   * Handles the keydown event for the tablist.
   *
   * @param {object} event  The keydown event data.
   */
  const handleKeyDown = (event) => {
    const { key } = event;
    const tabs = Array.from(tablistRef.current.children);
    const currentTabIndex = tabs.findIndex((tab) => tab === event.target);
    let nextTabIndex = 0;

    if (
      (orientation === 'horizontal' && key === 'ArrowRight')
      || (orientation === 'vertical' && key === 'ArrowDown')
    ) {
      // If the right or down arrow key is pressed,
      // set the next tab index to the current tab index plus one.
      event.preventDefault();
      nextTabIndex = currentTabIndex + 1;
    } else if (
      (orientation === 'horizontal' && key === 'ArrowLeft')
      || (orientation === 'vertical' && key === 'ArrowUp')
    ) {
      // If the left or up arrow key is pressed,
      // set the next tab index to the current tab index minus one.
      event.preventDefault();
      nextTabIndex = currentTabIndex - 1;
    } else if (key === 'Home') {
      // If the home key is pressed, set the next tab index to the first tab.
      nextTabIndex = 0;
    } else if (key === 'End') {
      // If the end key is pressed, set the next tab index to the last tab.
      nextTabIndex = tabs.length - 1;
    } else {
      return;
    }

    if (nextTabIndex < 0) {
      // If the next tab index is less than one, set it to the last tab.
      nextTabIndex = tabs.length - 1;
    } else if (nextTabIndex >= tabs.length) {
      // If the next tab index is greater than the last tab, set it to the first tab.
      nextTabIndex = 0;
    }

    // Focus the next tab.
    tabs[nextTabIndex].focus();
  };

  /**
   * Handles the selection of a tab.
   *
   * @param {object} event  The click or focus event data.
   */
  const handleSelect = (event) => {
    setActiveTab(Number(event.target.id.split('-')[1]));
  };

  /**
   * Sets the tab index base on the activiation type and active tab.
   *
   * @param {number} index  The index of the tab.
   *
   * @returns {number}
   */
  const handleTabIndex = (index) => {
    if (activationType === 'automatic') {
      // If the activation type is automatic, set the tab index based on if this is the acitve tab.
      return activeTab === index ? 0 : -1;
    }
    // Otherwise, set the tab index to 0.
    return 0;
  };

  useEffect(() => {
    const tablist = tablistRef.current;
    tablist.addEventListener('keydown', handleKeyDown);

    return () => {
      tablist.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div className="storybook-tabs">
      <h1 id="tablist" className="tablist-label">Tabs Heading</h1>
      <div
        role="tablist"
        aria-labelledby="tablist"
        ref={tablistRef}
        aria-orientation={orientation}
      >
        {tabContent.map(({ heading }, index) => (
          <button
            aria-controls={`tab-panel-${index}`}
            aria-selected={activeTab === index}
            className="tab-button"
            id={`tab-${index}`}
            role="tab"
            type="button"
            tabIndex={handleTabIndex(index)}
            onClick={handleSelect}
            onFocus={activationType === 'automatic' ? handleSelect : null} // If the activation type is automatic, select the panel on focus.
            key={heading}
          >
            {heading}
          </button>
        ))}
      </div>
      {tabContent.map(({ heading, content }, index) => (
        <div
          aria-labelledby={`tab-${index}`}
          className={`tab-panel ${activeTab === index ? 'is-active' : ''}`}
          id={`tab-panel-${index}`}
          role="tabpanel"
          tabIndex="0"
          key={heading}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ))}
    </div>
  );
};

Tabs.propTypes = {
  /**
   * The type of tabs to display.
   */
  activationType: PropTypes.oneOf(['automatic', 'manual']).isRequired,
  /**
   * The orientation of the tabs.
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
  /**
   * The content of the tabs.
   */
  tabContent: PropTypes.arrayOf(PropTypes.shape({
    heading: PropTypes.string,
    content: PropTypes.string,
  })),
};

Tabs.defaultProps = {
  tabContent: [],
};

export default Tabs;
