import { createHTML_Element } from "../helperFunction/helper.js";



const newLetterContainer = createHTML_Element('section',{
    styles: {
        width: '100%',
        height: 'auto',
        padding: '16px',
        margin: '0px',
        display: "flex",
        flexDirection: 'column',
        gap: "1rem",
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
            <p style = "color: #3b3b3b; font-size: 24px;"><strong">Abonniere unseren Newsletter</strong></p>
        </div>
        <div>
            <p style = "font-size: 16px;">und sichere dir eine Auswahl an Gutscheinen - unter anderem einen 10€ Wilkommens-Gutschein</p>
        </div>
        <section style = "display: flex; flex-direction: column; gap: 0.5rem">
            <label for = "nameInput">Vorname</label>
            <input type = "text" id= "nameInput" style = "outline: none; padding: 8px; border: none;"></input>
        </section>
        <section style = "display: flex; flex-direction: column; gap: 0.5rem">
            <label for = "emailInput">E-Mail-Adresse</label>
            <input type = "email" id = "emailInput" style = "border: none; padding: 8px; outline: none;"></input>
        </section>
        <section style = "display: flex; flex-direction: column;">
            <button style = "background-color: #006FB9; color: #fff; padding: 6px 16px">Jetzt anmelden</button>
        </section>
    `
})




export {newLetterContainer};