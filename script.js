let runningTotal = 0;
let buffer = "0";
let previousOperator = "null";
let screen = document.querySelector(".screen");

document.querySelector(".calc-buttons").addEventListener("click", function(event) {
    buttonClick(event.target.innerText);
});
    
function buttonClick(value) {
    if(isNaN(parseInt(event.target.innerText))) {
        handleOperator(event);
    } else {
        handleNumber(value);
    }    
} 
function handleOperator(value) {
    //console.log(value);
};

function handleNumber(value) {
    if(buffer === "0") {
        buffer = value;
        console.log(buffer);
    } else {
        buffer += value;
    }
    render();
};

function render() {
    screen.innerText = buffer;
}
