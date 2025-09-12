
const createHTML_Element = (tagName, options = {}) => {

    const htmlElement = document.createElement(tagName);

    if(options.attributes){
        Object.entries(options.attributes).forEach(([attributeName, attributeValue]) => {
            htmlElement.setAttribute(attributeName, attributeValue);
        });
    }

    if(options.styles){
        Object.assign(htmlElement.style, options.styles);
    }
    

    if(options.classes){
        if(typeof options.classes === "string"){
            htmlElement.classList.add(...options.classes.split(" "));
        }
        if(Array.isArray(options.classes)){
            htmlElement.classList.add(...options.classes);
        }
    }
    
    if(options.placement?.target){
        const target = document.querySelector(options.placement.target);
        if(target){
            switch(options.placement.method){
                case "append":
                target.appendChild(htmlElement);
                break;

                case "prepend":
                target.prepend(htmlElement);
                break;

                case "before":
                target.before(htmlElement);
                break;

                case "after":
                target.after(htmlElement);
                break;

                default:
                    target.appendChild(htmlElement);
            }
        }
    }

    if(options.text){
        htmlElement.textContent = options.text;
    }

    if(options.events){
        Object.entries(options.events).forEach(([event, handler]) => {
            htmlElement.addEventListener(event, handler);
        });
    }

    if(options.textContent){
        htmlElement.textContent = options.textContent;
    }

    if(options.innerHTML){
        htmlElement.innerHTML = options.innerHTML;
    }

    return htmlElement;
}

export {createHTML_Element};


