import { createHTML_Element } from "../helperFunction/helper.js";



const firstBabyClothesArticle = createHTML_Element('main',{
    attributes: {id: 'firstBabyArticle'},
    placement: {target: 'body', method: 'append'},
    styles: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '16px 16px',
        gap: '20px'
    },
})


const firstSection = createHTML_Element('section',{
    placement: {target: '#firstBabyArticle', method: 'append'},
    classes: 'sectionHeading',
    styles: {
        paddingTop: '24px'
    }
})

const Heading = createHTML_Element('p',{
    text: 'babykleidung'.toLocaleUpperCase(),
    placement: {target: '.sectionHeading', method: 'append'},
    styles: {
        width: 'max-content',
        fontSize: '14px',
        color: '#006FB9',
    }
})

const secondSection = createHTML_Element('section',{
    placement: {target: '#firstBabyArticle', method: 'append'},
    classes: 'productHeading',
    styles: {
        width: 'max-content'
    }
})

const productHeading = createHTML_Element('h2',{
    placement: {target: '.productHeading', method: 'append'},
    styles: {
        fontSize: '24px',
    },
    text: 'Babymützen'
})


const productDescription = createHTML_Element('section',{
    placement: {target: '#firstBabyArticle', mathod: 'append'},
    styles:{
        width: '100%',
        display: 'flex'
    },
    classes: 'descriptionContainer'
})



const paragraph = createHTML_Element('p',{
    text: 'Baby-Mützen sind wichtige Begleiter, vor allem bei kühlem Wetter. Sie halten den Kopf warm und schützen vor Wind.',
    styles: {
        fontSize: '14px',
    },
    placement: {target: '.descriptionContainer', mathod: 'append'}
})



const buttonContainer = createHTML_Element('section',{
    placement: {target: '#firstBabyArticle', method: 'append'},
    styles: {
        width: 'max-content'
    },
    classes: 'CTA-button'
})

const ctaButton = createHTML_Element('button', {
    text: 'jetzt entdecken',
    placement: {target: '.CTA-button', method: 'append'},
    styles:{
        padding: '8px 16px',
        border: '1px solid black',
        fontSize: '14px',
        color: '#71797E'
    }

})



export {firstBabyClothesArticle};

