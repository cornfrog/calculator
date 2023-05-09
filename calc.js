var firstValue;
var secondValue;
var finalValue;
var operationChoice;
var floatFlag;


function inputNum(btnValue){
    var calcScreen = document.getElementById("screen-disp");
    if(calcScreen.innerHTML === "0"){
        calcScreen.innerHTML = btnValue;
    }
    else{
        calcScreen.innerHTML += btnValue;
    }
    return false;
}

function allClear(){
    var calcScreen = document.getElementById("screen-disp");
    calcScreen.innerHTML = "0";
    document.getElementById("operation-flag").style.backgroundColor = "transparent";
    operationChoice = "";
    return false;
}

function clearScreen(){
    var calcScreen = document.getElementById("screen-disp");
    calcScreen.innerHTML = "0";
    return false;
}

function plusMinus(){
    var calcScreen = document.getElementById("screen-disp");
    var newValue = parseInt(calcScreen.innerHTML) * -1;
    calcScreen.innerHTML  = newValue;
    return false;
}


function addDecimal(){
    var calcScreen = document.getElementById("screen-disp");
    calcScreen.innerHTML += '.';
    floatFlag = "set";
    return false;
}

function add(){
    var calcScreen = document.getElementById("screen-disp");
    firstValue = calcScreen.innerHTML;
    operationChoice = "add";
    document.getElementById("operation-flag").style.backgroundColor = "skyblue";
    calcScreen.innerHTML = "0";
}

function sub(){
    var calcScreen = document.getElementById("screen-disp");
    firstValue = calcScreen.innerHTML;
    operationChoice = "sub";
    document.getElementById("operation-flag").style.backgroundColor = "skyblue";
    calcScreen.innerHTML = "0";
}

function mul(){
    var calcScreen = document.getElementById("screen-disp");
    firstValue = calcScreen.innerHTML;
    operationChoice = "mul";
    document.getElementById("operation-flag").style.backgroundColor = "skyblue";
    calcScreen.innerHTML = "0";
}

function div(){
    var calcScreen = document.getElementById("screen-disp");
    firstValue = calcScreen.innerHTML;
    operationChoice = "div";
    document.getElementById("operation-flag").style.backgroundColor = "skyblue";
    calcScreen.innerHTML = "0";
}

function calculate(){
    var calcScreen = document.getElementById("screen-disp");
    switch(operationChoice){
        case "add":
            secondValue = calcScreen.innerHTML;
            if(floatFlag === "set"){
                finalValue = parseFloat(firstValue) + parseFloat(secondValue);
                finalValue = parseFloat(finalValue).toFixed(2);
            }
            else{
                finalValue = parseInt(firstValue) + parseInt(secondValue);
            }
            calcScreen.innerHTML = finalValue;
            operationChoice = "";
            break;
        case "sub":
            secondValue = calcScreen.innerHTML;
            if(floatFlag === "set"){
                finalValue = parseFloat(firstValue) - parseFloat(secondValue);
                finalValue = parseFloat(finalValue).toFixed(2);
            }
            else{
                finalValue = parseInt(firstValue) - parseInt(secondValue);
            }
            calcScreen.innerHTML = finalValue;
            operationChoice = "";
            break;
        case "mul":
            secondValue = calcScreen.innerHTML;
            if(floatFlag === "set"){
                finalValue = parseFloat(firstValue) * parseFloat(secondValue);
                finalValue = parseFloat(finalValue).toFixed(2);
            }
            else{
                finalValue = parseInt(firstValue) * parseInt(secondValue);
            }           
            calcScreen.innerHTML = finalValue;
            operationChoice = "";
            break;
        case "div":
            secondValue = calcScreen.innerHTML;
            if(parseInt(secondValue) == 0){
                calcScreen.innerHTML = "Error"
                break;
            }
            else{
                if(floatFlag === "set"){
                    finalValue = parseFloat(firstValue) /  parseFloat(secondValue);
                    finalValue = parseFloat(finalValue).toFixed(2);
                }
                else{
                    finalValue = parseInt(firstValue) / parseInt(secondValue);
                }
            }
            calcScreen.innerHTML = finalValue;
            operationChoice = "";
            break;
        default:
            break;
    }
    return false;
}