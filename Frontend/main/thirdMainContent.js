import { createHTML_Element } from "../helperFunction/helper.js";



const thirdMainContainer = createHTML_Element('article',{
    classes: 'third-main-container',
    styles: {
        width: '100%',
        border: '1px solid red',
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
        <div style = "width: 100%; border: 1px solid red"; display: flex; justify-content: start;>
            <button style = "border: 1px solid red; padding: 8px 16px; display: block; cursor: pointer">
                Jetzt entdecken
            </button>
        </div>
    <section>
    `,
    placement: {target: '.third-main-container', method: 'append'}
})



const maxiCosiSliderContainer = createHTML_Element('section',{
    
})



export {thirdMainContainer};