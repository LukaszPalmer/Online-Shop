import { createHTML_Element } from "../helperFunction/helper.js";



const newLetterContainer = createHTML_Element('section',{
    styles: {
        border: '1px solid red',
        width: '100%',
        height: 'auto',
        padding: '16px',
        margin: '0px',
        background: 'lightgray'
    },
    placement: {
        target: 'main',
        method: 'append'
    },
    attributes: {
        id: 'newsLetter-container'
    },
    innerHTML : `
        <div>
            <p style = "border: 1px solid red;">Abonniere unseren Newsletter</p>
        </div>
        <div>
            <p style = "border: 1px solid red;">und sichere dir eine Auswahl an Gutscheinen - unter anderem einen 10€ Wilkommens-Gutschein</p>
        </div>
        <section>
            <label type = "name"></label>
            <input style = "outline: none; padding: 4px;"></input>
        </section>
    `
})




export {newLetterContainer};