import { createHTML_Element } from "../helperFunction/helper.js";

// Wrapper für Banner (mit Bild + Overlay-Inhalt)
const bannerWrapper = createHTML_Element('section', {
    attributes: { id: 'bannerWrapper' },
    placement: { target: 'header', method: 'after' },
    styles: {
        width: '100%',
        height: '400px',
        position: 'relative', // damit das Overlay sich daran orientiert
        overflow: 'hidden'
    }
});

// Banner-Bild
const babyBanner = createHTML_Element('img', {
    attributes: {
        src: './media/babyBanner.jpg',
        alt: 'Baby Banner',
    },
    placement: { target: '#bannerWrapper', method: 'append' },
    styles: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
    }
});






// Overlay-Container für Text + Button
const bannerContent = createHTML_Element('section', {
    classes: 'bannerContent',
    placement: { target: '#bannerWrapper', method: 'append' },
    styles: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', // zentriert in der Mitte
        color: 'white',
        textAlign: 'center',
    },
    innerHTML: `
        <h2>Willkommen bei unserem Shop</h2>
        <button style="padding: 0.5rem 1rem; background: #fff; border: none; cursor: pointer;">
            Mehr ansehen
        </button>
    `
});

export {babyBanner}



