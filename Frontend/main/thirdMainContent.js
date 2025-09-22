import { createHTML_Element } from "../helperFunction/helper.js";



const thirdMainContainer = createHTML_Element('article',{
    classes: 'third-main-container',
    styles: {
        width: '100%',
        padding: '16px',
    },
    placement: {target: 'main', method: 'append'}
})



const maxiCosiArticle = createHTML_Element('article',{
    styles: {
        width: 'auto',
        paddingTop: '34px'
    },
    innerHTML: `
    <section style = "display: flex; flex-direction: column; gap: 1rem;">
        <div>
                <p style = "font-size: 14px; color: #006FB9">${"kinderwagen".toUpperCase()}</p>
            </div>
            <div>
                <h2 style = "color: #3b3b3b">PRIAM Kinderwagen</h2>
            </div>
            <div>
                <p style = "color: #3b3b3b;">Die Ikone unter den Kinderwagen vereint ein einzigartiges Design mit innovativen Funktionen für Geschmeidigkeit und Konfort.</p>
            </div>
            <div style="width: 100%; display: flex; justify-content: flex-start;">
                <button style="padding: 8px 16px; display: block; cursor: pointer; background: #fff; color: #3b3b3b; border: 1px solid #3b3b3b;">
                Jetzt entdecken
            </button>
        </div>
    <section>
    `,
    placement: {target: '.third-main-container', method: 'append'},
    classes: 'maxi-cosi-article'
})





const maxiCosiSlider = createHTML_Element('section', {
    classes: 'swiper maxicosi-swiper',
    styles: {
        width: '100%',
        padding: '16px 0px',
    },
    placement: { target: '.maxi-cosi-article', method: 'append' },
});

const maxiCosiSwiperWrapper = createHTML_Element('div', {
    classes: 'swiper-wrapper maxi-cosi-wrapper',
    styles: { height: '50%', height: '300px' },
    placement: { target: '.maxicosi-swiper', method: 'append' },
});

const maxiCosiProducts = [
    { img: "./media/maxiCosi/maxicosi.jpeg", alt: "maxicosi" },
    { img: "./media/maxiCosi/maxicosi.jpeg", alt: "maxicosi" },
    { img: "./media/maxiCosi/maxicosi.jpeg", alt: "maxicosi" },
    { img: "./media/maxiCosi/maxicosi.jpeg", alt: "maxicosi" },
    { img: "./media/maxiCosi/maxicosi.jpeg", alt: "maxicosi" },
    { img: "./media/maxiCosi/maxicosi.jpeg", alt: "maxicosi" },
    { img: "./media/maxiCosi/maxicosi.jpeg", alt: "maxicosi" },
    { img: "./media/maxiCosi/maxicosi.jpeg", alt: "maxicosi" },
];

maxiCosiProducts.forEach(brand => {
    createHTML_Element('div', {
        classes: 'swiper-slide',
        placement: { target: '.maxi-cosi-wrapper', method: 'append' },
        styles: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#fff',
        },
        innerHTML: `
            <div style="border:1px solid #e0e0e0; padding:12px; display:flex; flex-direction:column; align-items:start; gap:3px; background:#fff; padding-top: 10px; height: 100%; justify-content: space-evenly">
                <img src="${brand.img}" alt="${
            brand.name
        }" style="width:100%; object-fit:cover;">
                <p style="font-size:14px; color:#666; margin:0;">maximo</p>
                <p style="font-size:16px; font-weight:bold; color:#333; margin:0;">${
                    brand.name
                }</p>
                <p style="font-size:14px; color:#333; margin:0;">${
                    brand.price ?? "799.99 €"
                }</p>
            </div>
        `,
    });
});

createHTML_Element('div', {
    classes: 'swiper-scrollbar',
    placement: { target: '.maxicosi-swiper', method: 'append' },
});

const maxiCosiSwiperInstance = new Swiper(".maxicosi-swiper", {
    slidesPerView: 2.5,
    spaceBetween: 7,
    loop: false,
    scrollbar: {
        el: ".maxicosi-swiper .swiper-scrollbar",
        draggable: true,
    },
    breakpoints: {
        640: { slidesPerView: 3, spaceBetween: 16 },
        1024: { slidesPerView: 5, spaceBetween: 20 },
    },
});




export {thirdMainContainer};