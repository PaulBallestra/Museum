import { createButton } from './Button';

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: 'Museum/Buttons',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    label: { control: 'text' },
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, ...args });
};

//Default CTA Button
export const CTAButton = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
CTAButton.args = {
  primary: true,
  label: 'Button',
};

export const NewsletterButton = Template.bind({});
NewsletterButton.args = {
  size: 'newsletter',
  label: 'button',
};

export const DonButton = Template.bind({});
DonButton.args = {
  size: 'don',
  label: 'Button',
};

export const CardPremiumButton = Template.bind({});
CardPremiumButton.args = {
  size: 'card-premium',
  label: 'Button',
};

export const CardOthersButton = Template.bind({});
CardOthersButton.args = {
  size: 'card-others',
  label: 'Button',
};
