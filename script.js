function calculate() {
    const firstNumber = parseFloat(document.getElementById("firstNumber").value)
    const SecondNumber = parseFloat(document.getElementById("SecondNumber").value)
    const operator = document.getElementById("operator").value

    let result;
    if(operator === "Addition") {
        result = firstNumber + SecondNumber
    } else if (operator === "Subtraction"){
        result = firstNumber - SecondNumber
    } else if (operator === "Multiplication"){
        result = firstNumber * SecondNumber
    }  else if (operator === "Division"){
        result = firstNumber /  SecondNumber
    }else {
        result = "please select a valid operator"
    }

    document.getElementById("result").innerText = "Result: " + result
}

