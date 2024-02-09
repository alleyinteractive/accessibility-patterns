import Tabs from './Tabs';

export default {
  component: Tabs,
  title: 'Components/Tabs',
};

export const Default = {
  args: {
    activationType: 'automatic', // 'automatic' or 'manual'
    orientation: 'horizontal', // 'horizontal' or 'vertical'
    tabContent: [
      {
        heading: 'Tab 1',
        content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam semper arcu at neque pulvinar ullamcorper. Morbi ornare erat vel augue pellentesque iaculis. Sed ultricies mi mi, id condimentum magna condimentum ac. Vestibulum eget dui id orci aliquam tempor. Suspendisse purus odio, condimentum nec tincidunt nec, efficitur sed odio. Integer efficitur neque vitae commodo eleifend. Pellentesque consequat sem arcu, eu aliquet mauris varius interdum. Cras ut elementum quam, eu scelerisque turpis. Cras a turpis mattis, tempor nisl at, efficitur dolor.</p>',
      },
      {
        heading: 'Tab 2',
        content: '<p>Cras nec dui et metus tempus vulputate. Vivamus in sollicitudin sapien, sit amet euismod ligula. Praesent auctor, leo quis condimentum euismod, elit urna pharetra lacus, nec imperdiet dui nunc accumsan lectus. Donec ac dui tincidunt, imperdiet lorem ut, aliquam turpis. Mauris vel tincidunt lacus, lobortis aliquet purus. Curabitur sed tincidunt urna. Curabitur molestie mi nec luctus ornare. Phasellus neque neque, hendrerit in lectus sit amet, congue interdum sem. Morbi tempus, ex vitae luctus pulvinar, est tortor condimentum nisl, et pellentesque risus tellus in felis. Ut faucibus imperdiet ipsum, ac varius ex ultricies at. Morbi ornare purus eget mauris posuere, et dictum nulla tincidunt.</p>',
      },
      {
        heading: 'Tab 3',
        content: '<p>Etiam sit amet nulla eget neque posuere efficitur at vitae nibh. Nullam tempor elementum eros. Curabitur feugiat venenatis pretium. Morbi eu nibh ex. Vivamus sed cursus orci, et tempus elit. Proin dictum commodo augue sed iaculis. Aenean aliquam neque vitae venenatis condimentum.</p>',
      },
    ],
  },
};
