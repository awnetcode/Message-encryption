const textElement = document.querySelector("#text-encrypt");
const decryptElement = document.querySelector("#text-decrypt");
const textOutputs = document.querySelectorAll(".text-output");
const keyElement = document.querySelector("#code-key");

const date = new Date;
const hours = date.getHours();
const minutes = date.getMinutes();

let currentTime = hours+":"+minutes;
const codeKey = Math.ceil(minutes/hours);

console.log(currentTime);
console.log(codeKey);



const encryptText = () =>{
    const text = textElement.value;
    const textArray = [...text];

    const textEncryptedArray = [];

    textArray.forEach((char)=>{
        let charCode = char.charCodeAt(0);

        const charCodeEncrypted = charCode + codeKey;

        const charEncrypted = String.fromCharCode(charCodeEncrypted);

         textEncryptedArray.push(charEncrypted);
    })

    const textEncrypted = textEncryptedArray.join("");

    textOutputs[0].textContent = textEncrypted;
    textOutputs[0].classList.remove("hidden");
}

const decryptText = () =>{
    const textEncrypted = decryptElement.value;
    const textEncryptedArray = [...textEncrypted];
    const key = keyElement.value;

    const textDecryptedArray = [];

    textEncryptedArray.forEach((char)=>{
        let charCode = char.charCodeAt(0);
        const charCodeDecrypted = charCode - key;
        const charDecrypted = String.fromCharCode(charCodeDecrypted);
        textDecryptedArray.push(charDecrypted);
    })

    const textDecrypted = textDecryptedArray.join("");
    textOutputs[1].textContent = textDecrypted;
    textOutputs[1].classList.remove("hidden");
}

