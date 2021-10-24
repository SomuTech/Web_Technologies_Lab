function show() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var op = document.getElementById("op").value;
    var sol = eval(num1 + op + num2);

    document.getElementById("sol").innerHTML = sol;
}

function results() {
    var sol_exp = eval(document.getElementById("exp").value);
    document.getElementById("sol-exp").innerHTML = sol_exp;
}
