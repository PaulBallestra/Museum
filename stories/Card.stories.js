import { createCard } from './Card';
import { Button } from './Button';

export default {
    title: 'Museum/Card',
    argTypes: {
        label: { control: 'text' },
        price: { control: 'text' },
    },
    component: Button,
};

const Template = ({ label, price }) => {
    return `<div class="card-otherabonnement">
                
                <h1 class="card-title"> ${label} </h1>
                
                <p class="card-corp"> \t&#10003; Accès aux expositions </p>
                
                <p class="card-corp"> \t&#10003; Accès aux événements </p>
                
                <p class="card-corp"> \t&#10003; Accès aux ateliers </p>
                
                <p class="card-corp"> \t&#10003; Coupe-fil </p>
                
                <p class="card-corp"> \t&#10003; Accès aux collections privées </p>
                
                <div class="card-priceperyear">
                    <h1 class="card-price"> ${price} </h1>
                    <p class="card-corp" style="margin: auto 0;">/An</p>
                </div>
                
                <button>Button</button>
               
            </div>`;
};

//BasicAbonnement Card
export const BasicAbonnement = Template.bind({});
BasicAbonnement.args = {
    label: 'Basic',
    price: '233€',
};

//StandardAbonnement Card
export const StandardAbonnement = Template.bind({});
StandardAbonnement.args = {
    label: 'Standard',
    price: '333€',
};

