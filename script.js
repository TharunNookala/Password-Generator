const PwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");
const numberEl = document.getElementById("number");

const upperLetters = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbol = "~!@#$%^&*()_+=|";

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
    }
function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
    }
function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
    }
function getSymbol() {
    return symbol[Math.floor(Math.random() * symbol.length)];
    }

function generatePassword() {
let password = "";
const len = lenEl.value;
for(i=0; i<len; i++){
    const x = generateX();
    password += x;
}
PwEl.innerText = password;
copyEl.classList.replace('before','after');
}

function generateX(){
    const arr =[];
    if (upperEl.checked) {
        arr.push(getUppercase());
        }
    if (lowerEl.checked) {
        arr.push(getLowercase());
        }
    if (numberEl.checked) {
        arr.push(getNumber());
        }
    if (symbolEl.checked) {
        arr.push(getSymbol());
        }
    if (arr.length === 0) return "";
        return arr[Math.floor(Math.random() * arr.length)];
}  

generateEl.addEventListener("click", generatePassword);
copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    textarea.style.backgroundColor = "black"
    const password = PwEl.textContent;
    if (!password) {
    return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();

    document.execCommand("copy");
    textarea.remove();
    alert("password copied to clipboard");
});