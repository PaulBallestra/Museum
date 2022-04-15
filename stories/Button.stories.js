import { createButton } from './Button';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Museum/Buttons',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'onClick' },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, ...args });
};

export const HeaderButton = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
HeaderButton.args = {
  primary: true,
  label: 'Expositions',
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  label: 'Billetterie',
};

export const DonButton = Template.bind({});
DonButton.args = {
  size: 'large',
  label: 'Faire un don',
};
