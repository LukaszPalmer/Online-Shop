import { createHTML_Element } from "../helperFunction/helper.js";


const secondBabyArticle  = createHTML_Element('article',{
    classes: 'second-baby-article',
    styles: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
    },
    placement: {target: 'main', method: 'append'}
});

const topBrandsContainer = createHTML_Element('section', {
    innerHTML: `
        <section style="width: 100%; display: flex; justify-content: center; padding: 16px;">
            <p style="color: #3b3b3b; font-size: 24px; font-weight: 200;">Unsere Top Marken</p>
        </section>
    `,
    placement: { target: '.second-baby-article', method: 'append' }
});

const swiperSlider = createHTML_Element('section',{
    styles : {
        width: '100%',
        padding: '16px',
    },
    placement: {target: '.second-baby-article', method: 'append'},
    classes: 'swiper top-brands-swiper',
});

const swiperWrapper = createHTML_Element('div',{
    classes: 'swiper-wrapper top-brands-wrapper',
    styles: {
        height: '100%',
    },
    placement: {target: '.top-brands-swiper', method: 'append'}
});

const topBrands = [
    { img: "./media/topBrands/steif.jpg", alt: "Steiff" },
    { img: "./media/topBrands/steif.jpg", alt: "Steiff" },
    { img: "./media/topBrands/steif.jpg", alt: "Steiff" },
    { img: "./media/topBrands/steif.jpg", alt: "Steiff" },
];

topBrands.forEach((brand) => {
    createHTML_Element("div", {
        classes: "swiper-slide",
        placement: { target: ".top-brands-wrapper", method: "append" },
        styles: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            background: '#fff',
        },
        innerHTML: `
            <img src="${brand.img}" alt="${brand.alt}" style="max-width:100px; height:auto; object-fit:contain;">
        `,
    });
});



const topBrandsSwiper = new Swiper(".top-brands-swiper", {
    slidesPerView: 2.5,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    scrollbar: {
        el: ".top-brands-swiper .top-brands-scrollbar",
        draggable: true,
    },
    breakpoints: {
        640: { slidesPerView: 3, spaceBetween: 16 },
        1024: { slidesPerView: 5, spaceBetween: 20 },
    },
});




export {secondBabyArticle};