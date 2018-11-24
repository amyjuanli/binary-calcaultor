// Create elements to DOM
const RESULT = document.createElement("div");
RESULT.id = "res";
const BUTTONS = document.createElement("div");
BUTTONS.id = "btns";
const BUTTON0 = document.createElement("button");
BUTTON0.id = "btn0";
BUTTON0.innerHTML = 0;
const BUTTON1 = document.createElement("button");
BUTTON1.id = "btn1";
BUTTON1.innerHTML = 1;
const BUTTONCLR = document.createElement("button");
BUTTONCLR.id = "btnClr";
BUTTONCLR.innerHTML = "C";
const BUTTONEQL = document.createElement("button");
BUTTONEQL.id = "btnEql";
BUTTONEQL.innerHTML = "=";
const BUTTONSUM = document.createElement("button");
BUTTONSUM.id = "btnSum";
BUTTONSUM.innerHTML = "+";
const BUTTONSUB = document.createElement("button");
BUTTONSUB.id = "btnSub";
BUTTONSUB.innerHTML = "-";
const BUTTONMUL = document.createElement("button");
BUTTONMUL.id = "btnMul";
BUTTONMUL.innerHTML = "*";
const BUTTONDIV = document.createElement("button");
BUTTONDIV.id = "btnDiv";
BUTTONDIV.innerHTML = "/";

// Add elements to DOM
document.body.appendChild(RESULT);
document.body.appendChild(BUTTONS)
var fraqment = document.createDocumentFragment();
fraqment.appendChild(BUTTON0);
fraqment.appendChild(BUTTON1);
fraqment.appendChild(BUTTONCLR);
fraqment.appendChild(BUTTONEQL);
fraqment.appendChild(BUTTONSUM);
fraqment.appendChild(BUTTONSUB);
fraqment.appendChild(BUTTONMUL);
fraqment.appendChild(BUTTONDIV);
BUTTONS.appendChild(fraqment); // add all buttons to the button container 

// Function
var specials = /[\+\-\*\/]/;
var firstNum, secondNum;
RESULT.innerHTML = '';
function clickedHander(e) {
    e.preventDefault();
    if (e.target.innerHTML === 'C') {
        RESULT.innerHTML = '';
    } else if (e.target.innerHTML !== "=") {
        RESULT.innerHTML += e.target.innerHTML;
    } else if (e.target.innerHTML === "=") {
        let idx = RESULT.innerHTML.search(specials);
        firstNum = parseInt(RESULT.innerHTML.slice(0, idx), 2); // binary => decimal
        secondNum = parseInt(RESULT.innerHTML.slice(idx + 1, RESULT.innerHTML.length), 2); // binary => decimal
        RESULT.innerHTML = eval(firstNum + RESULT.innerHTML[idx] + secondNum).toString(2); // decimal => binary
    }
}

// Event handler 
BUTTONS.addEventListener('click', clickedHander);
