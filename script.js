let result = null;
let firstNumber = "";
let secondNumber = "";
let operation;

function clearAll(){
    setResultScreen("");
    result = null;
    firstNumber = "";
    secondNumber = "";
    operation = "";
}

function handleNumberPress(num) {
    firstNumber += num;
    setResultScreen(firstNumber);
}

function handleBackspace() {
    firstNumber = firstNumber.slice(0, -1);
    setResultScreen(firstNumber);
}

function handleOperationPress(opr) {
    if (result === null) {
        operation = opr;
        secondNumber = firstNumber;
        firstNumber = ""; 
        setResultScreen(operation);
    } else {
        secondNumber = result;
        firstNumber = "";
        operation = opr;
        result = null;
        setResultScreen(operation); 
    }
}

function setResultScreen(text) {
    let textField = document.getElementById("result");
    textField.innerHTML = text; 
}

function getResult() {
    let textField;
    switch (operation) {
        case "+":   
            result = Math.round((parseFloat(secondNumber) + parseFloat(firstNumber)) * 100) / 100;
            setResultScreen(result); 
            break;
        case "-":
            result = Math.round((parseFloat(secondNumber) - parseFloat(firstNumber)) * 100) / 100;
            setResultScreen(result); 
            break;
        case "x": 
            result = Math.round((parseFloat(secondNumber) * parseFloat(firstNumber)) * 100) / 100;
            setResultScreen(result);
            break;
        case "/":
            result = Math.round((parseFloat(secondNumber) / parseFloat(firstNumber)) * 100) / 100;
            setResultScreen(result);
            break;
        case "+/-":
            result = Math.round((parseFloat(secondNumber) * -1) * 100) / 100;
            setResultScreen(result);
            break;   
        case "%":
            result = Math.round((parseFloat(secondNumber) / 100) * 100) / 100;
            setResultScreen(result); 
            break;   
        default: 
            clearAll();
            break;        
    }

    
}


//to do
// improve ui in general + fix the button sizes, currently some are larger
// add function to use operations on the result