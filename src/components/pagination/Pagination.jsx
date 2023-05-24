import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './pagination.scss';

/**
 * Pagination component.
 */
const Pagination = ({ urls }) => {
  const [activePage, setActivePage] = useState(1);
  const onFirstPage = activePage === 1;
  const onLastPage = activePage === urls.length;

  const handlePageChange = (e, page) => {
    e.preventDefault();
    setActivePage(page);
  };

  const handlePageForward = (e) => {
    e.preventDefault();
    if (activePage !== urls.length) {
      setActivePage(activePage + 1);
    }
  };

  const handlePageBack = (e) => {
    e.preventDefault();
    if (activePage !== 1) {
      setActivePage(activePage - 1);
    }
  };

  return (
    <nav role="navigation" aria-label="Pagination Navigation" className="storybook-pagination">
      <ol className="storybook-pagination__links">
        <li className={`storybook-pagination__link storybook-pagination__control${onFirstPage ? ' storybook-pagination__control--disabled' : ''}`}>
          <a
            href={onFirstPage ? urls[0].url : urls[activePage - 2].url}
            onClick={handlePageBack}
            type="button"
            aria-disabled={onFirstPage}
          >
            <span className="sr-only">Previous Page</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </a>
        </li>
        {urls.length ? urls.map((url) => {
          const isActive = activePage === url.pageNumber;
          const anchorProps = {
            onClick: (e) => handlePageChange(e, url.pageNumber),
            href: url.url,
            'aria-label': `Goto Page ${url.pageNumber}`,
          };

          // We only want to include this attribute if the current page is selected.
          if (isActive) {
            anchorProps['aria-current'] = 'page';
            anchorProps['aria-label'] = `page ${activePage}`;
          }
          return (
            <li className={`storybook-pagination__link${isActive ? ' storybook-pagination__link--active' : ''}`} key={url.pageNumber}>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <a {...anchorProps}>
                {url.pageNumber}
              </a>
            </li>
          );
        }) : null}
        <li className={`storybook-pagination__link storybook-pagination__control${onLastPage ? ' storybook-pagination__control--disabled' : ''}`}>
          <a
            href="/page1"
            onClick={handlePageForward}
            type="button"
            aria-disabled={onLastPage}
          >
            <span className="sr-only">Next Page</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </a>
        </li>
      </ol>
    </nav>
  );
};

Pagination.propTypes = {
  urls: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    pageNumber: PropTypes.number.isRequired,
  })),
};

Pagination.defaultProps = {
  urls: [],
};

export default Pagination;
