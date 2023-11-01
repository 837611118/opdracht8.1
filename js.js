function multiply() {
	var num1 = parseFloat(document.getElementById('num1').value);
	var num2 = parseFloat(document.getElementById('num2').value);
	var result = num1 * num2;
	document.querySelector('h1').textContent = 'Antwoord: ' + result;
}

function divide() {
	var num1 = parseFloat(document.getElementById('num1').value);
	var num2 = parseFloat(document.getElementById('num2').value);
	if (num2 !== 0) {
		var result = num1 / num2;
		document.querySelector('h1').textContent = 'Antwoord: ' + result;
	} else {
		document.querySelector('h1').textContent = 'Kan niet delen door nul.';
	}
}

function add() {
	var num1 = parseFloat(document.getElementById('num1').value);
	var num2 = parseFloat(document.getElementById('num2').value);
	var result = num1 + num2;
	document.querySelector('h1').textContent = 'Antwoord: ' + result;
}

function subtract() {
	var num1 = parseFloat(document.getElementById('num1').value);
	var num2 = parseFloat(document.getElementById('num2').value);
	var result = num1 - num2;
	document.querySelector('h1').textContent = 'Antwoord: ' + result;
}