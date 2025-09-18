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
    },
});

//wrapper
const swipperWrapper = createHTML_Element("div", {
    classes: "swiper-wrapper",
    placement: { target: ".swiper", method: "append" },
    styles: { width: "50%", height: '300px'},
});

//Beispielprodukte müssen später durch echte Produktbilder ergänzt werden
const products = [
    {
        brand: "maximo",
        name: "Winter-Strickmütze",
        price: "24,99 €",
        img: "./media/babymützen/babycap1.webp",
    },
    {
        brand: "maximo",
        name: "Winter-Strickmütze",
        price: "24,99 €",
        img: "./media/babymützen/babycap1.webp",
    },
    {
        brand: "maximo",
        name: "Winter-Strickmütze",
        price: "24,99 €",
        img: "./media/babymützen/babycap1.webp",
    },
    {
        brand: "maximo",
        name: "Winter-Strickmütze",
        price: "24,99 €",
        img: "./media/babymützen/babycap1.webp",
    },{
        brand: "maximo",
        name: "Winter-Strickmütze",
        price: "24,99 €",
        img: "./media/babymützen/babycap1.webp",
    },
    {
        brand: "maximo",
        name: "Winter-Strickmütze",
        price: "24,99 €",
        img: "./media/babymützen/babycap1.webp",
    },
    {
        brand: "maximo",
        name: "Winter-Strickmütze",
        price: "24,99 €",
        img: "./media/babymützen/babycap1.webp",
    },
    {
        brand: "maximo",
        name: "Winter-Strickmütze",
        price: "24,99 €",
        img: "./media/babymützen/babycap1.webp",
    },

];

products.forEach((product) => {
    createHTML_Element("div", {
        classes: "swiper-slide",
        placement: { target: ".swiper-wrapper", method: "append" },
        innerHTML: `
            <div style="border:1px solid #e0e0e0; padding:12px; display:flex; flex-direction:column; align-items:start; gap:3px; background:#fff; padding-top: 10px; height: 100%; justify-content: space-evenly">
                <img src="${product.img}" alt="${
            product.name
        }" style="width:100%; object-fit:cover;">
                <p style="font-size:14px; color:#666; margin:0;">maximo</p>
                <p style="font-size:16px; font-weight:bold; color:#333; margin:0;">${
                    product.name
                }</p>
                <p style="font-size:14px; color:#333; margin:0;">${
                    product.price ?? "24,99 €"
                }</p>
            </div>
        `,
    });
});

// 5️⃣ Pagination & Navigation
createHTML_Element("div", {
    classes: "swiper-scrollbar",
    placement: { target: ".swiper", method: "append" },
});
/*createHTML_Element('div', { classes: 'swiper-button-next', placement: { target: '.swiper', method: 'append' } });
createHTML_Element('div', { classes: 'swiper-button-prev', placement: { target: '.swiper', method: 'append' } });
*/

const swiperInstance = new Swiper(".swiper", {
    slidesPerView: 2.5,
    spaceBetween: 7,
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
    },
    loop: false,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 16 },
        1024: { slidesPerView: 4, spaceBetween: 20 },
    },
});

export { firstBabyClothesArticle };
