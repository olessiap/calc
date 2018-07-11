let runningTotal = 0;
let buffer = "0";
let previousOperator = "null";
let screen = document.querySelector(".screen");

document.querySelector(".calc-buttons").addEventListener("click", function(event) {
    buttonClick(event.target.innerText);
});
    
function buttonClick(value) {
    if(isNaN(parseInt(event.target.innerText))) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }    
    rerender();
} 

function handleSymbol(value) {
    switch(value) {
        case 'C':   
            buffer = "0";
            runningTotal = 0;
            break; 
        case "=":
            if(previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            buffer = "" + runningTotal;
            runningTotal = 0;
            break;
        case "⬅":
            if(buffer.length === 1) {
                buffer = "0"
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
        default:
            handleMath(value);
            break;
    }
};

function handleNumber(value) {
    if(buffer === "0") {
        buffer = value;
    } else {
        buffer += value;
    }
};

function rerender() {
    screen.innerText = buffer;
}

function handleMath(value) {
    const intBuffer = parseInt(buffer);

    if(runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
   
    previousOperator = value;

    buffer = "0";
}

function flushOperation(intBuffer) {
    console.log("here now");
    if(previousOperator === '+') {
        runningTotal += intBuffer;
    } else if (previousOperator === '-') {
        runningTotal -= intBuffer;
    } else if (previousOperator === '/') {
        runningTotal /= intBuffer;
    } else if (previousOperator === 'X') {
        runningTotal *= intBuffer;
    }
}

// ////handler functions/////
// handleSymbol
// handleNumber
// handleMath to capture previusOperator, 
//     parse the screen number into a number, 
//     set up flushOperation if the running total isn't 0
//     set the screen number to 0
// flushOperation to add/subtract/divide/multiply

// ////variables to keep track of///// ////
// buffer - string number on the screen
// runningTotal
// previousOperator
// screen
// intBuffer -screen number for calcs
