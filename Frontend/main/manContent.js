import { createHTML_Element } from "../helperFunction/helper.js";

const firstBabyClothesArticle = createHTML_Element("main", {
    attributes: { id: "firstBabyArticle" },
    placement: { target: "body", method: "append" },
    styles: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "16px 16px",
        gap: "20px",
    },
});

const firstSection = createHTML_Element("section", {
    placement: { target: "#firstBabyArticle", method: "append" },
    classes: "sectionHeading",
    styles: {
        paddingTop: "24px",
    },
});

const Heading = createHTML_Element("p", {
    text: "babykleidung".toLocaleUpperCase(),
    placement: { target: ".sectionHeading", method: "append" },
    styles: {
        width: "max-content",
        fontSize: "14px",
        color: "#006FB9",
    },
});

const secondSection = createHTML_Element("section", {
    placement: { target: "#firstBabyArticle", method: "append" },
    classes: "productHeading",
    styles: {
        width: "max-content",
    },
});

const productHeading = createHTML_Element("h2", {
    placement: { target: ".productHeading", method: "append" },
    styles: {
        fontSize: "24px",
        color: "#3b3b3b",
    },
    text: "Babymützen",
});

const productDescription = createHTML_Element("section", {
    placement: { target: "#firstBabyArticle", mathod: "append" },
    styles: {
        width: "100%",
        display: "flex",
    },
    classes: "descriptionContainer",
});

const paragraph = createHTML_Element("p", {
    text: "Baby-Mützen sind wichtige Begleiter, vor allem bei kühlem Wetter. Sie halten den Kopf warm und schützen vor Wind.",
    styles: {
        fontSize: "14px",
        color: "#696969",
    },
    placement: { target: ".descriptionContainer", mathod: "append" },
});

const buttonContainer = createHTML_Element("section", {
    placement: { target: "#firstBabyArticle", method: "append" },
    styles: {
        width: "max-content",
    },
    classes: "CTA-button",
});

const ctaButton = createHTML_Element("button", {
    text: "jetzt entdecken",
    placement: { target: ".CTA-button", method: "append" },
    styles: {
        padding: "8px 16px",
        border: "1px solid black",
        fontSize: "14px",
        color: "#3b3b3b",
    },
});

// Slider section
const productSlider = createHTML_Element("section", {
    classes: "swiper",
    placement: { target: "#firstBabyArticle", method: "append" },
    styles: {
        width: "100%",
        padding: "16px 0px",
        border: "1px solid red",
    },
});

//wrapper
const swipperWrapper = createHTML_Element("div", {
    classes: "swiper-wrapper",
    placement: { target: ".swiper", method: "append" },
    styles: {width: '50%'}
});

//Beispielprodukte müssen später durch echte Produktbilder ergänzt werden
const products = [
    { name: "Baby Mütze 1", img: "./media/babymützen/babycap1.webp" },
    { name: "Baby Mütze 2", img: "https://via.placeholder.com/300x300?text=Baby+Mütze+2" },
    { name: "Baby Mütze 3", img: "https://via.placeholder.com/300x300?text=Baby+Mütze+3" },
    { name: "Baby Mütze 4", img: "https://via.placeholder.com/300x300?text=Baby+Mütze+4" },
    { name: "Baby Mütze 5", img: "https://via.placeholder.com/300x300?text=Baby+Mütze+5" },
    { name: "Baby Mütze 6", img: "https://via.placeholder.com/300x300?text=Baby+Mütze+6" },
    { name: "Baby Mütze 7", img: "https://via.placeholder.com/300x300?text=Baby+Mütze+7" },
];


// slider erstellen
products.forEach((product) => {
    createHTML_Element("div", {
        classes: "swiper-slide",
        placement: { target: ".swiper-wrapper", method: "append" },
        innerHTML: `
        <img src="${product.img}" alt="${product.name}" style="width: 100%; border-radius: 8px;">
        <p style="text-align:center; margin-top: 8px;">${product.name}</p>`,
    });
});




// 5️⃣ Pagination & Navigation
createHTML_Element('div', { classes: 'swiper-pagination', placement: { target: '.swiper', method: 'append' } });
createHTML_Element('div', { classes: 'swiper-button-next', placement: { target: '.swiper', method: 'append' } });
createHTML_Element('div', { classes: 'swiper-button-prev', placement: { target: '.swiper', method: 'append' } });




// 6️⃣ Swiper initialisieren
const swiperInstance = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: {
      640: { slidesPerView: 2, spaceBetween: 16 },
      1024: { slidesPerView: 3, spaceBetween: 20 },
    },
});



export { firstBabyClothesArticle };
