import {createHTML_Element} from '../helperFunction/helper.js';






const header = createHTML_Element('header',{
    placement: {target: "body", method: "append"},
    styles:{width: "100%", backgroundColor: "#89CFF0", display: "flex", alignItems: "center", justifyContent: 'space-between', padding: ""}
});

const hamburger = createHTML_Element('button',{
    attributes: {id: 'hamburger-menu'},
    styles:{
        border: 'none',
        outline: 'none',
        backgroundColor: '#89CFF0',
        width: '10%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        justifyContent: 'center',
        gap: '0.3rem',
        cursor: 'pointer',
        order: '3',
        padding: '0.3rem',
        flex: '0 0 auto'
    },
    placement: {target: 'header', method: 'append'}
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



const iconsContainer = createHTML_Element('section',{
    attributes: {id: 'iconsContainer'},
    placement: {target: 'header', method: 'append'},
    styles: {
        gap: '0 0.5rem',
        display: 'flex',
        justifyContent: 'flex-end',
        width: '15%',
        order: '2',
        flex: '0 0 auto',
        marginLeft: 'auto',
    }
})


const IconSVG_Cart = createHTML_Element('img',{
    attributes: {src: './media/shopping-cart.svg', alt: 'Warenkorb'},
    placement: {target: '#iconsContainer', method: 'append'},
    styles:{
        cursor: 'pointer',
    }
})

const IconUserSVG = createHTML_Element('img',{
    attributes: {src: './media/user_strokeWidth_1.svg', alt: 'Anmelden'},
    placement: {target: '#iconsContainer', method: "append"},
    styles:{
        cursor: 'pointer',
    }
})

const logoContainer = createHTML_Element('section',{
    attributes: {id: 'logoContainer'},
    placement: {target: 'header', method: 'append'},
    styles:{
        width: '25%',
        order: '1',
        flex: '0 0 auto'
    }
})

const logo = createHTML_Element('img',{
    attributes: {src: './media/SnooLogo.png', alt: 'Snoo Logo'},
    placement: {target: '#logoContainer', method: 'append'},
    styles: {
        width: '100%',
        objectFit: 'cover',
    }
})





export {header};
