import Breadcrumb from './Breadcrumb';

export default {
  component: Breadcrumb,
  title: 'Components/Breadcrumb',
};

export const Default = {
  args: {
    items: [
      {
        title: 'Home',
        url: '#',
      },
      {
        title: 'Category',
        url: '#',
      },
      {
        title: 'Current Page',
        url: '#',
      },
    ],
  },
};
