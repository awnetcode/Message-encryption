import { encryptText } from "./script.js";
import { decryptText } from "./script.js";

const codeAreaElement = document.querySelector(".code-area");
const switchElement = document.querySelector("#switch");

const createEncodeElement = () =>{
    codeAreaElement.innerHTML = '';
    codeAreaElement.appendChild(createTextElement("Wpisz coś..."));
    codeAreaElement.appendChild(createResultElement());

    const textElement = document.querySelector("#text-area");
    textElement.addEventListener("change", encryptText);
}

const createDecodeElement = () =>{
    codeAreaElement.innerHTML = '';
    codeAreaElement.appendChild(createKeyElement());
    codeAreaElement.appendChild(createTextElement("Wsyp swoje robaczki..."));
    codeAreaElement.appendChild(createResultElement());

    const textElement = document.querySelector("#text-area");
    textElement.addEventListener("change", decryptText);
}

const createKeyElement = () =>{
    const keyElement = document.createElement("div");
    const labelElement = document.createElement("label");
    const inputElement = document.createElement("input");

    keyElement.classList.add("key-area");

    labelElement.for = "code-key";
    labelElement.textContent = 'Podaj klucz: ';

    inputElement.type = "text";
    inputElement.id = "code-key";
    inputElement.name = "code-key";

    keyElement.appendChild(labelElement);
    keyElement.appendChild(inputElement);

    return keyElement;
}

const createTextElement = (title) =>{

    const textContainerElement = document.createElement("div");
    textContainerElement.classList.add("text-container");

    const TextHeaderElement = document.createElement("div");
    TextHeaderElement.classList.add("text-header");
    TextHeaderElement.innerText = title;

    const textAreaElement = document.createElement("textarea");
    textAreaElement.name = "text";
    textAreaElement.id = "text-area";
    textAreaElement.rows = 10;
    textAreaElement.cols = 50;
    textAreaElement.classList.add("text-field");

    textContainerElement.appendChild(TextHeaderElement);
    textContainerElement.appendChild(textAreaElement);

    return textContainerElement;
}

const createResultElement = () =>{
    const paragraphElement = document.createElement("p");

    paragraphElement.classList.add("text-output");
    paragraphElement.classList.add("hidden");

    return paragraphElement;
}
//createEncodeElement();
 const renderMainContent = () =>{
    switchElement.addEventListener("change", (event)=>{
        if(event.target.checked){
            createDecodeElement();
        }else{
            createEncodeElement();
        }
    });
    
    document.addEventListener("DOMContentLoaded", ()=>{
        switchElement.checked = false;
        createEncodeElement();
    })
}  

renderMainContent();


