class Triangulo {
	constructor(n1, n2, n3) {
		this.n1 = parseFloat(n1);
		this.n2 = parseFloat(n2);
		this.n3 = parseFloat(n3);
	}

	calcularA() {
		var s = (this.n1 + this.n2 + this.n3) / 2;
		var area = Math.sqrt(s * (s - this.n1) * (s - this.n2) * (s - this.n3));
		return area;
	}

	Perimetro() {
		var perim = this.n1 + this.n2 + this.n3;
		return perim;
	}

	Tipo() {
		if (this.n1 + this.n2 > this.n3 && this.n1 + this.n3 > this.n2 && this.n2 + this.n3 > this.n1) {
			if (this.n1 == this.n2 && this.n2 == this.n3) {
				return "equilátero";
			}
			else if (this.n1 == this.n2 || this.n1 == this.n3 || this.n2== this.n3) {
				return "isósceles";
			}
			else {
				return "escaleno";
			}
		}
		else {
			return "no es un triángulo";
		}
	}
}

function calcularA() {
	var n1 = document.getElementById("L1").value;
	var n2 = document.getElementById("L2").value;
	var n3 = document.getElementById("L3").value;
	var triangulo = new Triangulo(n1, n2, n3);
	
	if (triangulo.Tipo() == "no es un triángulo") {
		document.getElementById("resultado").innerHTML = "Las medidas que escribiste no son de un triangulo, cambielas";
	}
	else {
		var area = triangulo.calcularA();
		document.getElementById("resultado").innerHTML = "El área del triángulo es " + area + ".";
	}
}

function Perimetro() {
	var n1 = document.getElementById("L1").value;
	var n2 = document.getElementById("L2").value;
	var n3 = document.getElementById("L3").value;
	var triangulo = new Triangulo(n1, n2, n3);
	
	if (triangulo.Tipo() == "no es un triángulo") {
		document.getElementById("resultado").innerHTML = "Las medidas que escribiste no son de un triangulo, cambielas";
	}
	else {
		var perim = triangulo.Perimetro();
		document.getElementById("resultado").innerHTML = "El perímetro del triángulo es " + perim + ".";
	}
}

function Tipo() {
	var n1 = document.getElementById("L1").value;
	var n2 = document.getElementById("L2").value;
	var n3 = document.getElementById("L3").value;
	var triangulo = new Triangulo(n1, n2, n3);
	
	var tipo = triangulo.Tipo();
	if (tipo == "no es un triángulo") {
		document.getElementById("resultado").innerHTML = "Las medidas que escribiste no son de un triangulo, cambielas";
	}
	else {
		document.getElementById("resultado").innerHTML = "El triángulo es " + tipo + ".";
	}
}