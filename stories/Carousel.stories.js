import {createCarousel} from './Carousel';

export default {
    title: 'Museum/Carousels',
};

const Template = () => {

    return `<div class="carousel-slider">
                  <div class="gallery-cell"></div>
                  <div class="gallery-cell"></div>
                  <div class="gallery-cell"></div>
                  <div class="gallery-cell"></div>
                  <div class="gallery-cell"></div>
             </div>`;
};

//Carousel Hero
export const CarouselHero = Template.bind({});
CarouselHero.args = {};

//Carousel Events
export const CarouselEvent = Template.bind({});
CarouselEvent.args = {};

