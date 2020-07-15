let result = document.querySelector(".result");
let display = document.querySelector("#r1");
let mul = document.getElementById("mul");
let add = document.getElementById("plus");
let sub = document.getElementById("min");
let divide = document.getElementById("divide");
let test = document.getElementById("m");
let operators = [mul, sub, divide, add, test];
let clear = document.querySelector(".cl");
let zero = document.querySelector("#zero");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let equal = document.querySelector("#equal");
let num = [zero, one, two, three, four, five, six, seven, eight, nine];
let op1, op2, res, opr;
let number1 = '';
let number2 = '';
let full = false;
let displayString = '';
mul.value = "*";
add.value = "+";
sub.value = "-";
divide.value = "/";
test.value = "/";

for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", () => {
        full = true;
        opr = operators[i].value;
        displayString += opr;
        // display.textContent = displayString;
        console.log(opr);
    });
}

for (let i = 0; i < num.length; i++) {
    num[i].value = i;
    num[i].addEventListener("click", () => {
        console.log(num[i].value);
        if (!full) {
            number1 += String(num[i].value);
            console.log("Number1:" + number1);
            // display.textContent = displayString;
        }
        else {
            number2 += String(num[i].value);
            console.log("Number2:" + number2);
            // display.textContent = displayString;
        }
        // display.textContent = displayString;
    });
}
// display.textContent = displayString;

equal.addEventListener("click", () => {
    number1 = Number(number1);
    number2 = Number(number2);
    console.log(number1, number2, opr);
    // finalValue(number1, number2, opr);
    display.textContent = finalValue(number1, number2, opr);
});

function finalValue(a, b, ops) {

    switch (ops) {
        case "*":
            res = a*b;
            console.log(res);
            return res;
            break;
        case "+":
            res = a+b;
            console.log(res);
            return res;
            break;
        case "-":
            res = a-b;
            console.log(res);
            return res;
            break;
        case "/":
            res = a/b;
            console.log(res);
            return res;
            break;
    }
}

clear.addEventListener("click", () => {
    window.location.reload();
});