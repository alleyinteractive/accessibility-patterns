import Dropdown from './Dropdown';

export default {
  component: Dropdown,
  title: 'Components/Dropdown',
};

export const Default = {
  args: {
    label: 'Number selector',
    defaultItem: { value: '', text: 'Select an option' },
    content: [
      { value: '1', text: 'One' },
      { value: '2', text: 'Two' },
      { value: '3', text: 'Three' },
    ],
  },
};
