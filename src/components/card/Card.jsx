import React from 'react';
import PropTypes from 'prop-types';
import cardImage from '../../assets/card-image.jpg';
import './card.scss';

/**
 * Primary UI component for user interaction
 */
const Card = ({
  category,
  content,
  heading,
  headingLevel,
  linkType,
}) => {
  const containerClass = linkType ? `is-link-type-${linkType}` : '';
  const Heading = `h${headingLevel}`;
  const ConditionalWrap = ({
    condition,
    wrap,
    children,
  }) => (condition ? wrap(children) : children);

  return (
    <div className={['storybook-card', containerClass].join(' ')}>
      <div className="card-content">
        <Heading className="card-heading">
          <a href="https://alley.com">
            {heading}
          </a>
        </Heading>

        {category ? (
          <p className="card-meta">{category}</p>
        ) : null}

        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      {cardImage ? (
        <figure className="card-image">
          <ConditionalWrap
            condition={linkType === 'image'}
            wrap={(children) => <a href="https://alley.com" aria-hidden="true" tabIndex="-1">{children}</a>}
          >
            <img src={cardImage} alt="" />
          </ConditionalWrap>
        </figure>
      ) : null}
    </div>
  );
};

Card.propTypes = {
  /**
   * Text of card category
   */
  category: PropTypes.string,
  /**
   * HTML content of card
   */
  content: PropTypes.string,
  /**
   * Text for card heading
   */
  heading: PropTypes.string,
  /**
   * Which heading level to use for card heading
   */
  headingLevel: PropTypes.oneOf([2, 3, 4, 5, 6]),
  /**
   * Text for card heading
   */
  linkType: PropTypes.oneOf(['default', 'card', 'image']),
};

Card.defaultProps = {
  category: '',
  content: '',
  heading: '',
  headingLevel: 2,
  linkType: 'default',
};

export default Card;
