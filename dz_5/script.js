var n = prompt("Введите число N:");
var progress = confirm("Aрифметическая прогрессия?");
var a = prompt("Введите первого члена прогресси:");
var summa;
if (progress) {
	var d = prompt("Введите разность прогресси:");
	alert(arithmetic(d));
}
else{
	var q = prompt("Введите знаменатель прогрессии:");
	alert(geometry(q));
}

function arithmetic(b) {
	summa = (2*a + b*(n-1))/2*n;
	return summa;
}


function geometry(q) {
	summa = (a*(1-Math.pow(q,n)))/(1-q);
	return summa;
}


