let result = "";
let firstNumber = "";
let secondNumber = "";
let operation;

function clearAll(){
    let text = document.getElementById("result");
    text.innerHTML="";
    result = "";
    firstNumber = "";
    secondNumber = "";
    operation = "";
}

function handleNumberPress(num) {
    firstNumber += num;
    console.log(firstNumber)
}

function handleOperationPress(opr) {
    operation = opr;
    secondNumber = firstNumber;
    firstNumber = "";   
}

function getResult() {
    switch (operation) {
        case "+":   
            result = Math.round((parseFloat(secondNumber) + parseFloat(firstNumber)) * 100) / 100;
            console.log(result);
            break;
        case "-":
            result = Math.round((parseFloat(secondNumber) - parseFloat(firstNumber)) * 100) / 100;
            console.log(result);
            break;
        case "x": 
            result = Math.round((parseFloat(secondNumber) * parseFloat(firstNumber)) * 100) / 100;
            console.log(result);
            break;
        case "/":
            result = Math.round((parseFloat(secondNumber) / parseFloat(firstNumber)) * 100) / 100;
            console.log(result);
            break;
        case "+/-":
            result = Math.round((parseFloat(secondNumber) * -1) * 100) / 100;
            console.log(result);
            break;   
        case "%":
            result = Math.round((parseFloat(secondNumber) / 100) * 100) / 100;
            console.log(result);
            break;   
        default: 
            clearAll();
            result == null;
            break;        
    }

    
}


//to do
// improve ui in general + fix the button sizes, currently some are larger
// add function to use operations on the result