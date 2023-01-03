import React from 'react';
import PropTypes from 'prop-types';
import './breadcrumb.scss';

/**
 * Breadcrumb component.
 */
const Breadcrumb = ({
  items,
}) => (
  <nav aria-label="breadcrumb" className="storybook-breadcrumb">
    <h2 id="accordion-heading" className="screen-reader-text">Breadcrumb Navigation</h2>
    <ol aria-labelledby="accordion-heading">
      {items.map(({ title, url }, index) => (
        <li key={title}><a href={url} aria-current={items.length === index + 1 ? 'page' : null}>{title}</a></li>
      ))}
    </ol>
  </nav>
);

Breadcrumb.propTypes = {
  /**
   * Breadcrumb items in hierarchical order with current/active page
   * appearing last.
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Title of breadcrumb link.
     */
    title: PropTypes.string.isRequired,
    /**
     * URL of breadcrumb link.
     */
    url: PropTypes.string.isRequired,
  })),
};

Breadcrumb.defaultProps = {
  items: [],
};

export default Breadcrumb;
