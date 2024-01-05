let result = null;
let numberX = "";
let numberY = "";
let operation;

function clearAll(){
    setResultScreen("");
    result = null;
    numberX = "";
    numberY = "";
    operation = "";
}

function handleNumberPress(num) {
    numberX += num;
    setResultScreen(numberX);
}

function handleBackspace() {
    numberX = numberX.slice(0, -1);
    setResultScreen(numberX);
}

function handleOperationPress(opr) {
    if (result === null) {
        operation = opr;
        numberY = numberX;
        numberX = ""; 
        setResultScreen(operation);
    } else {
        numberY = result;
        numberX = "";
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
    switch (operation) {
        case "+":   
            result = Math.round((parseFloat(numberY) + parseFloat(numberX)) * 100) / 100;
            setResultScreen(result); 
            break;
        case "-":
            result = Math.round((parseFloat(numberY) - parseFloat(numberX)) * 100) / 100;
            setResultScreen(result); 
            break;
        case "x": 
            result = Math.round((parseFloat(numberY) * parseFloat(numberX)) * 100) / 100;
            setResultScreen(result);
            break;
        case "/":
            result = Math.round((parseFloat(numberY) / parseFloat(numberX)) * 100) / 100;
            setResultScreen(result);
            break;
        case "+/-":
            result = Math.round((parseFloat(numberY) * -1) * 100) / 100;
            setResultScreen(result);
            break;   
        case "%":
            result = Math.round((parseFloat(numberY) / 100) * 100) / 100;
            setResultScreen(result); 
            break;   
        default: 
            clearAll();
            break;        
    }
}
