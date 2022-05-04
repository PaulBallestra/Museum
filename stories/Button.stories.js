import { createButton } from './Button';

export default {
  title: 'Museum/Buttons',
  argTypes: {
    label: { control: 'text' },
  },
};

const Template = ({ label, ...args }) => {
  return createButton({ label, ...args });
};

//Default CTA Button
export const CTAButton = Template.bind({});
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
