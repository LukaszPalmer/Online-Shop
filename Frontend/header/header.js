import {createHTML_Element} from '../helperFunction/helper.js';


const header = createHTML_Element('header',{
    placement: {target: "body", method: "append"},
    styles:{width: "100%", backgroundColor: "#fff", display: "flex", alignItems: "center", justifyContent: 'space-between', padding: "16px 10px", position: 'relative', zIndex: '2', position: 'sticky', top: '0'}
});


const hamburgerMenu_SearchIcon_Container = createHTML_Element('section',{
    placement : {target: 'header', mathod: 'append'},
    classes: 'menuSearchIcon',
    styles: {
        width: '60px',
        display: 'flex',
        justifyContent: '',
        gap: '15px'
    }
})

const hamburger = createHTML_Element('button',{
    attributes: {id: 'hamburger-menu'},
    styles:{
        border: 'none',
        outline: 'none',
        backgroundColor: 'transparent',
        width: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'space-between',
        gap: '0.3rem',
        cursor: 'pointer',
        order: '1',
        padding: '0.3rem',
        flex: '0 0 auto',
        position: 'relative',
    },
    placement: {target: '.menuSearchIcon', method: 'append'}
})


const firstHamburgerLine = createHTML_Element('span',{
    styles: {display: 'block', width: '15px', cursor: 'pointer', height: '1px', backgroundColor: 'black'},
    classes: 'firstHamburgerLine',
    placement: {target: '#hamburger-menu', method: 'append'}
})

const secondHamburgerLine = createHTML_Element('span',{
    styles: {display: 'block', width: '20px', cursor: 'pointer', height: '1px', backgroundColor: 'black'},
    classes: 'secondHamburgerLine',
    placement: {target: '#hamburger-menu', method: 'append'}
})

const thirdHamburgerLine = createHTML_Element('span',{
    styles: {display: 'block', width: '15px', cursor: 'pointer', height: '1px', backgroundColor: 'black'},
    classes: 'thirdHamburgerLine',
    placement: {target: '#hamburger-menu', method: 'append'}
})















// mobile hamburger

const links = ["Home", "Buggies", "Contant", "About", "FAQ"];

const nav = createHTML_Element('nav',{
    attributes: {id: 'mobileNav'},
    placement: {target: 'header', method: 'append'},
    styles: {
        display: 'none',
        position: 'absolute',
        top: '100%',
        height: '100vh',
        left: '0%',
        right: '0%',
        width: '100vw',
        backgroundColor: '#fff',
        flexDirection: 'column',
        gap: '1rem',
        padding: '1rem',
    }
});
const navList = createHTML_Element('ul',{
    placement: {target: '#mobileNav', method: 'append'},
    styles: {
        listStyle: 'none',
        margin: '0',
        paddingTop: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    }
});
links.forEach((link) => {
    const li = createHTML_Element('li',{
        placement : {target: '#mobileNav ul', method : 'append'},        
    });
    createHTML_Element('a',{
        text: link,
        attributes: {href: `/${link.toLowerCase()}`},
        placement: {target: 'li' , method: 'append'},
        styles: {
            textDecoration: 'none',
            color: 'black',
            fontSize: '1rem',
            display: 'flex',
            gap: '1rem',
        }
    });
});
hamburger.addEventListener("click", () =>  {
    nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
});





















































const iconsContainer = createHTML_Element('section',{
    attributes: {id: 'iconsContainer'},
    placement: {target: 'header', method: 'append'},
    styles: {
        gap: '0 0.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100px',
        order: '3',
        flex: '0 0 auto',
        marginLeft: '',
    }
})


const IconSVGFavorite = createHTML_Element('img', {
    attributes: {src: './media/favorite-outline-rounded.svg', alt: 'hinzufügen'},
    placement: {target: '#iconsContainer', method: 'append'},
    styles: {
        fontSize: '24px'
    }
})


const IconSearchSVG = createHTML_Element('img',{
    attributes: {src: './media/iconSearch.svg', alt: 'Suche'},
    placement: {target: '.menuSearchIcon', method: 'append'},
    styles: {
        curson: 'pointer',
        order: '2'
    }
})


const IconSVG_Cart = createHTML_Element('img',{
    attributes: {src: './media/roundedShoppingCart.svg', alt: 'Warenkorb'},
    placement: {target: '#iconsContainer', method: 'append'},
    styles:{
        cursor: 'pointer',
    }
})

const IconUserSVG = createHTML_Element('img',{
    attributes: {src: './media/userCircle.svg', alt: 'Anmelden'},
    placement: {target: '#iconsContainer', method: "append"},
    styles:{
        cursor: 'pointer',
    }
})

const logoContainer = createHTML_Element('section',{
    attributes: {id: 'logoContainer'},
    placement: {target: 'header', method: 'append'},
    styles:{
        width: '110px',
        order: '2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const logo = createHTML_Element('img',{
    attributes: {src: './media/removedBG.png', alt: 'Snoo Logo'},
    placement: {target: '#logoContainer', method: 'append'},
    styles: {
        width: '100%',
        objectFit: 'cover',
    }
})





export {header};





