const result = document.getElementById('result');
const button_Lbrack = document.getElementById('button_Lbrack');
const button_Rbrack = document.getElementById('button_Rbrack');
const button_percentage = document.getElementById('button_percentage');
const button_clear = document.getElementById('button_clear');
const button_7 = document.getElementById('button_7');
const button_8 = document.getElementById('button_8');
const button_9 = document.getElementById('button_9');
const button_divide = document.getElementById('button_divide');
const button_4 = document.getElementById('button_4');
const button_5 = document.getElementById('button_5');
const button_6 = document.getElementById('button_6');
const button_multiply = document.getElementById('button_multiply');
const button_1 = document.getElementById('button_1');
const button_2 = document.getElementById('button_2');
const button_3 = document.getElementById('button_3');
const button_subtract = document.getElementById('button_subtract');
const button_0 = document.getElementById('button_0');
const button_dot = document.getElementById('button_dot');
const button_equals = document.getElementById('button_equals');
const button_addition = document.getElementById('button_addition');

let last_action_operator = false;


button_Lbrack.onclick = function() {
  button_clear.textContent = "CE";
  if (last_action_operator == false){
    result.textContent += "(";
    last_action_operator = true
  }
}



button_Rbrack.onclick = function() {
  button_clear.textContent = "CE";
  if (result.textContent != "" && last_action_operator == false){
    result.textContent += ")";
  }
}

button_percentage.onclick = function() {
  equation = result.textContent
  if (equation != "" && !(
    equation.includes("+") ||
    equation.includes("-") ||
    equation.includes("x") ||
    equation.includes("÷")
  )){
    result.textContent += "%";
    let equation = result.textContent.replace("x", "*").replace("÷", "/").replace("%", "/100")
    result.textContent = eval(equation)
    button_clear.textContent = "AC";
  }
}

button_clear.onclick = function() {
  if (button_clear.textContent == "CE"){
    last_action_operator = false;
    result.textContent = result.textContent.slice(0, -1);
  }
  else{
    last_action_operator = false;
    result.textContent = "";
  }
}

button_7.onclick = function() {
  button_clear.textContent = "CE";
  last_action_operator = false;
  result.textContent += "7";
};

button_8.onclick = function() {
  button_clear.textContent = "CE";
  last_action_operator = false;
  result.textContent += "8";
};

button_9.onclick = function() {
  button_clear.textContent = "CE";
  last_action_operator = false;
  result.textContent += "9";
};

button_divide.onclick = function() {
  button_clear.textContent = "CE";
  if (result.textContent != "" && last_action_operator == false){
    result.textContent += "÷";
  }
  last_action_operator = true;
};

button_4.onclick = function() {
  button_clear.textContent = "CE";
  last_action_operator = false;
  result.textContent += "4";
};

button_5.onclick = function() {
  button_clear.textContent = "CE";
  last_action_operator = false;
  result.textContent += "5";
};

button_6.onclick = function() {
  button_clear.textContent = "CE";
  last_action_operator = false;
  result.textContent += "6";
};

button_multiply.onclick = function() {
  button_clear.textContent = "CE";
  if (result.textContent != "" && last_action_operator == false){
    result.textContent += "x";
  }
  last_action_operator = true;
};

button_1.onclick = function() {
  button_clear.textContent = "CE";
  last_action_operator = false;
  result.textContent += "1";
};

button_2.onclick = function() {
  button_clear.textContent = "CE";
  last_action_operator = false;
  result.textContent += "2";
};

button_3.onclick = function() {
  button_clear.textContent = "CE";
  last_action_operator = false;
  result.textContent += "3";
};

button_subtract.onclick = function() {
  button_clear.textContent = "CE";
  if (result.textContent != "" && last_action_operator == false){
    result.textContent += "-";
  }
  last_action_operator = true;
};

button_0.onclick = function() {
  button_clear.textContent = "CE";
  last_action_operator = false;
  result.textContent += "0";
};

button_dot.onclick = function() {
  button_clear.textContent = "CE";
  if (result.textContent != "" && last_action_operator == false){
    result.textContent += ".";
  }
  last_action_operator = true;
};

button_equals.onclick = function() {
  let equation = result.textContent.replace("x", "*").replace("÷", "/").replace("%", "/100")
  result.textContent = eval(equation)
  button_clear.textContent = "AC";
};

button_addition.onclick = function() {
  button_clear.textContent = "CE";
  if (result.textContent != "" && last_action_operator == false){
    result.textContent += "+";
  }
  last_action_operator = true;
};

