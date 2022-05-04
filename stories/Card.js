import './card.css';

export const createCard = ({
                               label,
                           }) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = label;
    btn.addEventListener('click', onClick);

    const mode = primary ? 'storybook-button--cta' : 'storybook-button--secondary';
    btn.className = ['storybook-button', `storybook-button--${size}`, mode].join(' ');

    return btn;
};
