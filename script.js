const date = new Date;
const hours = date.getHours();
const minutes = date.getMinutes();

let currentTime = hours+":"+minutes;
const codeKey = hours > 0 ? Math.ceil(minutes / hours) : 1;


console.log(currentTime);
console.log(codeKey);



export const encryptText = (event) =>{
    const textElement = document.querySelector("#text-area");
    const textOutput = document.querySelector(".text-output");

    const text = event.target.value;
    const textArray = [...text];

    const textEncryptedArray = [];

    textArray.forEach((char)=>{
        let charCode = char.charCodeAt(0);

        const charCodeEncrypted = charCode + codeKey;

        const charEncrypted = String.fromCharCode(charCodeEncrypted);

         textEncryptedArray.push(charEncrypted);
    })

    const textEncrypted = textEncryptedArray.join("");

    textOutput.textContent = textEncrypted;
    textOutput.classList.remove("hidden");
}

export const decryptText = () =>{
    const textElement = document.querySelector("#text-area");
    const textOutput = document.querySelector(".text-output");
    const keyElement = document.querySelector("#code-key");

    const textEncrypted = textElement.value;
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
    textOutput.textContent = textDecrypted;
    textOutput.classList.remove("hidden");
}


