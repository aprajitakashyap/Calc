
function addDisplay(value) { 
    document.getElementById("display").value += value; 
}

function handleKeyboardInput(event) { 
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '%', '.', 'Enter']; 
    if (validKeys.includes(event.key)) {
        document.getElementById("display").value += event.key; 
    }
}

var calculator = document.getElementById("calculator"); 
calculator.onkeyup = function (event) { 
    if (event.keyCode === 13) { 
        calculateResult(); 
    }
}
function calculateResult() { 
    let input = document.getElementById("display").value; 
    try {
        let result = math.evaluate(input); 
        document.getElementById("display").value = result; 
    } catch (error) {
        document.getElementById("display").value = "Error"; 
    }
}
function clearDisplay() { 
    document.getElementById("display").value = ""; 
}
