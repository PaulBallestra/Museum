import { createNewsletterForm } from './Newsletter';
import { Button } from './Button';

export default {
    title: 'Museum/Newsletter',
    argTypes: {
        placeholderInput: { control: 'text' },
        placeholderButton: { control: 'text' },
    },
    component: Button,
};

const Template = ({ placeholderInput, placeholderButton }) => {

        return `<div class="newsletter-div">
                
                <input class="input-newsletter" placeholder="${placeholderInput}"/>
                               
                <button class="btn-newsletter">${placeholderButton}</button>
               
            </div>`;
};

//Newsletter Form
export const NewsletterForm = Template.bind({});
NewsletterForm.args = {
    placeholderInput: 'adresse e-mail',
    placeholderButton: 'ok',
};
