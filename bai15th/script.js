let expression = "";


function addValue(value) {
    expression += value;

    document.getElementById("expression").innerText = expression;

    document.getElementById("result").innerText = "";
}

function addParentheses() {

    let open = (expression.match(/\(/g) || []).length;

    let close = (expression.match(/\)/g) || []).length;

    if (open > close) {
        expression += ")";

    } else {
        expression += "(";
    }

    document.getElementById("expression").innerText = expression;

    document.getElementById("result").innerText = "";
}

function clearCalculator() {
    expression = "";

    document.getElementById("expression").innerText = "";

    document.getElementById("result").innerText = "0";
}

function calculate() {
    if (expression === "") {
        return;
    }

    try {
        let mathExpression = expression
            .replaceAll("×", "*")
            .replaceAll("÷", "/")
            .replaceAll("−", "-")
            .replaceAll("%", "/100");

        let answer = eval(mathExpression);

        document.getElementById("result").innerText = answer;

    } catch (error) {
        document.getElementById("result").innerText = "Lỗi";
    }
}