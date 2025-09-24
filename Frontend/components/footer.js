import { createHTML_Element } from "../helperFunction/helper.js";



const footer = createHTML_Element('footer',{
    attributes: {id: 'footer-container'},
    styles: {
        width: '100%',
        height: 'auto',
        border: '1px solid red',
        padding: '1rem'
    },
    placement: {target: 'main', method: 'after'},
    innerHTML: `
        <section style = "padding: 24px; border: 1px solid red; ">
            <ul style = "list-style: none; display: flex; flex-direction: column; gap: 24px">
                <li style = "border: 1px solid red; padding: 1rem; display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-evenly"><a></a>
                    <div style = "border: 1px solid red; width: 50%">
                        
                    </div>
                    <div style = "border: 1px solid red; width: 35%;">

                    </div>
                </li>
                <li style = "border: 1px solid red; padding: 16px; display: flex; flex-direction: row; flex-wrap: wrap;"><a></a>
                
                </li>
                <li style = "border: 1px solid red; padding: 16px; display: flex; flex-direction: row; flex-wrap: wrap;"><a></a>
                
                </li>
                <li style = "border: 1px solid red; padding: 16px; display: flex; flex-direction: row; flex-wrap: wrap;"><a></a>
                
                </li>
                <li style = "border: 1px solid red; padding: 16px; display: flex; flex-direction: row; flex-wrap: wrap;"><a></a>
                
                </li>
            </ul>
        </ssection>
    `
})


export {footer};