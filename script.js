alert("Vamos fazer as operações matemáticas, você terá que inserir dois números");
 
let numberOne = Number(prompt("Insira o primeiro número"));
let numberTwo = Number(prompt("Insira o segundo número"));

let sum = numberOne + numberTwo;
let sub = numberOne - numberTwo;
let mult = numberOne * numberTwo;
let div = (numberOne / numberTwo).toFixed(1);
let restDiv = numberOne % numberTwo;

alert (`A soma dos dois números é ${sum}`);
alert (`A subtração dos dois números é ${sub}`);
alert (`A multiplicação dos dois números é ${mult}`);
alert (`A divisão dos dois números é ${div}`);
alert (`O resto da divisão dos dois números é ${restDiv}`);
if( (sum%2) == 0 ) {
  alert("A soma dos dois números é par")
}else {
  alert("A soma dos dois números é ímpar")
}
if( numberOne == numberTwo) {
  alert("Os dois números inseridos são iguais")
} else {
  alert("Os dois números inseridos são diferentes")
}
