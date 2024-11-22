const dateArea = document.querySelector(".date-area");
const days = ["poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota", "niedziela"];

const date = new Date;
const hours = date.getHours();
const minutes = date.getMinutes();
const dayOfWeek = date.getDay();
const dayOfMonth = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

let currentTime = hours+":"+minutes;
const codeKey = hours > 0 ? Math.ceil(minutes / hours) : 1;

dateArea.textContent = `${days[dayOfWeek-1]}    ${hours} : ${minutes}`;

console.log(currentTime);
console.log(codeKey);



export const encryptText = (event) =>{
    const outputContainer = document.querySelector(".output-container");
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
    outputContainer.classList.remove("hidden");
}

export const decryptText = (event) =>{
    const outputContainer = document.querySelector(".output-container");
    const textOutput = document.querySelector(".text-output");
    const keyElement = document.querySelector("#code-key");

    const textEncrypted = event.target.value;
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
    outputContainer.classList.remove("hidden");
};


 export const copyCode = () =>{
     const button = document.querySelector(".copy-button")
     const textOutputElement = document.querySelector(".text-output");
     const text = textOutputElement.innerText

     navigator.clipboard.writeText(text).then(() => {
         button.innerText = "Skopiowano!";
         setTimeout(() => {
             button.innerText = "skopiuj";
         }, 1000);
     }).catch(err => {
         button.innerText = "Błąd"+err;
     });
 }
