let result = null; // result of the math operations
let numberX = ""; // one of the numbers to do operations on
let numberY = ""; // the other number to do operations on
let operation = ""; // math operation

// shows the user input and/or the result on screen
function setResultScreen(text) {
    let textField = document.getElementById("result");
    textField.innerHTML = text; 
}

// is called when the button "AC" is pressed
// clears everything, including the result and any user input
function clearAll(){
    setResultScreen("");
    result = null;
    numberX = "";
    numberY = "";
    operation = "";
}

// is called when a number button is pressed
// adds the latest input at the end of the number. 
// if user presses 1, then 2, then 3, numberX will be = 123
function handleNumberPress(num) {
    numberX += num; 
    setResultScreen(numberX);
}

// is called when the button "C" is pressed
// removes the last digit of the number the user is currently inputting 
function handleBackspace() {
    numberX = numberX.slice(0, -1);
    setResultScreen(numberX);
}

// is called when an operation button is pressed 
function handleOperationPress(opr) {

    //if the user inputs a number and wants to do an operation on it
    if (result === null) { 
        operation = opr;
        numberY = numberX;
        numberX = ""; 
        setResultScreen(operation);
    } else { // if an operation was done previously and the user wants to continue operating on the result
        numberY = result;
        numberX = "";
        operation = opr;
        result = null;
        setResultScreen(operation); 
    }
}


// is called when user presses the "=" button. 
// it does the necessary calculations and show the result on screen, rounded to 2 decimals
function getResult() {
    switch (operation) {
        case "+":  // adds the numbers
            result = Math.round((parseFloat(numberY) + parseFloat(numberX)) * 100) / 100;
            setResultScreen(result); 
            break;
        case "-": // subtracts the numbers
            result = Math.round((parseFloat(numberY) - parseFloat(numberX)) * 100) / 100;
            setResultScreen(result); 
            break;
        case "x":  // multiplies the numbers
            result = Math.round((parseFloat(numberY) * parseFloat(numberX)) * 100) / 100;
            setResultScreen(result);
            break;
        case "/": // divides the numbers
            result = Math.round((parseFloat(numberY) / parseFloat(numberX)) * 100) / 100;
            setResultScreen(result);
            break;
        case "+/-": // makes a positive number negative, a negative number positive 
            result = Math.round((parseFloat(numberY) * -1) * 100) / 100;
            setResultScreen(result);
            break;   
        case "%": // divides the number by 100
            result = Math.round((parseFloat(numberY) / 100) * 100) / 100;
            setResultScreen(result); 
            break;   
        default:
            clearAll();
            break;        
    }
}
