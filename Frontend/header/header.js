import {createHTML_Element} from '../helperFunction/helper.js';


const header = createHTML_Element('header',{
    placement: {target: "body", method: "append"},
    styles:{width: "100vw", height: "80px", backgroundColor: "#89CFF0", display: "flex", alignItems: "center", justifyContent: 'space-between', padding: ""}
});




const hamburger = createHTML_Element('button',{
    styles:{
        
    }
})










const logoContainer = createHTML_Element('section',{
    attributes: {id: 'logoContainer'},
    placement: {target: 'header', method: 'append'},
    styles:{
        width: '25%',
        border: '1px solid red',
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


const iconsContainer = createHTML_Element('section',{
    attributes: {id: 'iconsContainer'},
    placement: {target: 'header', method: 'append'},
    styles: {
        gap: '0 0.5rem',
        display: 'flex',
        width: '15%',
        border: '1px solid red'
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
    attributes: {src: './media/user.svg', alt: 'Anmelden'},
    placement: {target: '#iconsContainer', method: "append"},
    styles:{
        cursor: 'pointer',
    }
})


export {header};
