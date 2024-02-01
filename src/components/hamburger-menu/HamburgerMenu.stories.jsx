import HamburgerMenu from './HamburgerMenu';

export default {
  component: HamburgerMenu,
  title: 'Components/HamburgerMenu',
};

export const Default = {
  args: {
    menuItems: [
      {
        title: 'About',
        url: '#',
      },
      {
        title: 'Contact',
        url: '#',
      },
      {
        title: 'Blog',
        url: '#',
      },
    ],
  },
};
