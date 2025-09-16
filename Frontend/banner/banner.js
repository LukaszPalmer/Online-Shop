import { createHTML_Element } from "../helperFunction/helper.js";

const bannerWrapper = createHTML_Element('section', {
    attributes: { id: 'bannerWrapper' },
    placement: { target: 'header', method: 'after' },
    styles: {
        width: '100%',
        height: '500px',
        position: 'relative', 
        overflow: 'hidden',
        display: 'column'
    }
});

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
        display: 'flex',
    }
});




const bannerContent = createHTML_Element('section', {
    classes: 'bannerContent',
    placement: { target: '#bannerWrapper', method: 'append' },
    styles: {
        position: 'absolute',
        bottom: '0',             // unten fixieren
        left: '0',
        width: '100%',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // vertikal zentriert innerhalb der 200px
        alignItems: 'center',
        gap: '1rem',
        color: 'white',
        fontSize: '16px',
        paddingBottom: '1rem'
    },
    innerHTML: `
        <p>Für dein baby das beste</p>
        <h2>Sanft. Sicher. Snoo</h2>
        <button style="padding: 8px 16px; background: #fff; border: none; cursor: pointer; color: #71797E">
            Entdecke Mehr
        </button>
    `
});


export {babyBanner}



