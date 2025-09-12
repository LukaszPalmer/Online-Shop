import { createHTML_Element } from "./helper.js";

const resetCSS = `
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        line-height: 1.5;
        font-family: sans-serif;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    button {
        background: none;
        border: none;
        font: inherit;
        cursor: pointer;
    }
    .hidden {
        display: none !important;
    }
`;


const resetStyles = createHTML_Element('style',{
    textContent: resetCSS,
    placement: {target: 'head', method: "append"}
});


export {resetStyles}