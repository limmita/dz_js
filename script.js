var operacia = prompt("Введите действие");
var operantOne =  Number(prompt("Введите число 1"));
var operantTwo = Number(prompt("Введите число 2"));
var otvet;


if (operacia == '+') otvet = operantOne + operantTwo;
else if (operacia == '-') otvet = operantOne - operantTwo;
else if (operacia == '*') otvet = operantOne * operantTwo;
else if (operacia == '/') otvet = operantOne / operantTwo;
else confirm('Вы ввели не правильное действие!');

alert(otvet);