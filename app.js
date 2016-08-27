var opcion = parseInt(prompt("Escoge una opción:\n" +
	"1- Suma \n" +
	"2- Resta \n" +
	"3- Multiplicación \n" +
	"4- División \n" +
	"5- Resto/módulo \n" +
	"6- Menor o igual que \n" +
	"7- Mayor o igual que \n" +
	"8- Iguales \n" +
	"9- No iguales \n"))
	var num1=parseInt(prompt("Agrega el 1er número"))
	var num2=parseInt(prompt("Agrega el 2do número"))
switch(opcion) {
	case 1: 
		var suma=num1 + num2;
		alert("La suma de ambos números es: " + suma);
		break;
	case 2:
		var resta=num1 - num2;
		alert("La resta de ambos números es: " + resta);
		break;
	case 3:
		var multiplicacion=num1 * num2;
		alert("La multiplicación de ambos números es: " + multiplicacion);
		break;
	case 4: 
		var division=num1/num2;
		alert("La división de ambos números es: " + division);
		break;
	case 5:
		var modulo=num1 % num2;
		alert("El resto o módulo (residuo) de ambos números es: " + modulo);
		break;
	case 6:
		if (num1 <= num2) {
			alert("El menor de ambos números es: " + num1);
		} else {
			alert("El menor de ambos números es: " + num2);
		}
		break;
	case 7:
		if (num1 >= num2) {
			alert("El mayor de ambos números es: " + num1);
		} else {
			alert("El mayor de ambos números es: " + num2);
		}
		break;
	case 8:
		if (num1 == num2) {
			alert("Los números " + num1 + " y " + num2 +" cumplen la sentencia de igualdad (==)");
		} else {
			alert("Ambos números no cumplen con la sentencia");
		}
		break;
	case 9:
		if (num1 != num2) {
			alert("Los números " + num1 + " y " + num2 +" no son iguales (!=)");
		} else {
			alert("Ambos números no cumplen con la sentencia");
		}
		break;
}