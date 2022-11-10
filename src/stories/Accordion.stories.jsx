import React from 'react';

import Accordion from './Accordion';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Accordion',
  component: Accordion,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    headingLevel: {
      options: [2, 3, 4, 5, 6],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  heading: 'Accordion Heading',
  headingLevel: 2,
  content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis vestibulum ex, ut hendrerit massa pharetra ut. Nunc et lacinia nulla, sollicitudin laoreet quam. Sed sodales ex ligula. Mauris in sagittis mauris. Morbi ac dapibus leo, non suscipit tellus. Nam ornare fermentum odio, vel lacinia arcu. Sed auctor lobortis felis, vel molestie risus interdum maximus. Aliquam gravida cursus mollis. Sed tempor urna ac justo efficitur, eget tempor turpis facilisis. Ut euismod elit quis lectus lobortis, ut semper metus finibus. Vivamus ut sapien ornare sem placerat tincidunt eget ut mauris. Phasellus tincidunt ipsum ac fringilla malesuada. Aliquam dictum lectus nec ex aliquet auctor.</p>',
};
