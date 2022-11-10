import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './accordion.scss';

/**
 * Primary UI component for user interaction
 */
const Accordion = ({
  content,
  heading,
  headingLevel,
}) => {
  const [isOpen, setIsOpen] = useState();
  const accordionButton = useRef();

  const containerClass = isOpen ? 'is-open' : '';

  const Heading = `h${headingLevel}`;

  const handleToggle = () => {
    if (accordionButton.current.getAttribute('aria-expanded') === 'false') {
      setIsOpen(true);
      accordionButton.current.setAttribute('aria-expanded', 'true');
    } else {
      setIsOpen(false);
      accordionButton.current.setAttribute('aria-expanded', 'false');
    }
  };

  return (
    <div className={['storybook-accordion', containerClass].join(' ')}>
      <div className="accordion-heading">
        <Heading>
          <button
            aria-controls="accordion-content-1"
            aria-expanded="false"
            id="accordion-button-1"
            onClick={handleToggle}
            ref={accordionButton}
            type="button"
          >
            {heading}
          </button>
        </Heading>
      </div>

      <div
        aria-labelledby="accordion-button-1"
        className="accordion-content"
        dangerouslySetInnerHTML={{ __html: content }}
        id="accordion-content-1"
        role="region"
      />
    </div>
  );
}

Accordion.propTypes = {
  /**
   * Button contents
   */
  content: PropTypes.string,
  /**
   * What background color to use
   */
  heading: PropTypes.string,
  /**
   * What background color to use
   */
  headingLevel: PropTypes.oneOf(2, 3, 4, 5, 6),
};

Accordion.defaultProps = {
  content: '',
  heading: '',
  headingLevel: 2,
};

export default Accordion;
