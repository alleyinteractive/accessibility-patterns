import Card from './Card';

export default {
  component: Card,
  title: 'Components/Card',
};

export const Default = {
  args: {
    heading: 'Card Heading',
    headingLevel: 2,
    category: 'Card Category',
    content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis vestibulum ex, ut hendrerit massa pharetra ut. Nunc et lacinia nulla, sollicitudin laoreet quam. Sed sodales ex ligula. Mauris in sagittis mauris. Morbi ac dapibus leo, non suscipit tellus. Nam ornare fermentum odio, vel lacinia arcu.</p>',
    linkType: 'default',
  },
};
