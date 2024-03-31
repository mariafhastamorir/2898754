document.getElementById('ejercicios').addEventListener('change', function () {
    var opcionSeleccionada = this.value;
        /* el código oculta todas las secciones de ejercicios
        (ejerciciosOperadores, ejerciciosCondicionales y ejerciciosCiclos) 
        estableciendo su estilo display en 'none', lo que las hace invisibles.
        */
    document.getElementById('ejerciciosOperadores').style.display = 'none';
    document.getElementById('ejerciciosCondicionales').style.display = 'none';
    document.getElementById('ejerciciosCiclos').style.display = 'none';
    // el código muestra la sección de ejercicios correspondiente a la opción seleccionada ajustando su estilo display a 'block'. 
    document.getElementById('ejercicios' + opcionSeleccionada).style.display = 'block';
});

//OPCIONES OPERDORES
document.getElementById('operadores').addEventListener('change', function () {
    var opcionSeleccionada = this.value;

    // Oculta todos los formularios
    document.getElementById('operadores1Formulario').style.display = 'none';
    document.getElementById('operadores2Formulario').style.display = 'none';
    document.getElementById('operadores3Formulario').style.display = 'none';
    document.getElementById('operadores4Formulario').style.display = 'none';
    document.getElementById('operadores5Formulario').style.display = 'none';
    document.getElementById('operadores6Formulario').style.display = 'none';
    document.getElementById('operadores7Formulario').style.display = 'none';
    document.getElementById('operadores8Formulario').style.display = 'none';


    // Muestra el formulario correspondiente a la opción seleccionada
    document.getElementById(opcionSeleccionada + 'Formulario').style.display = 'block';
});

//OPCIONES CONDICIONALES
document.getElementById('condicionales').addEventListener('change', function () {
    var opcionSeleccionada = this.value;

    // Oculta todos los formularios
    document.getElementById('condicionales1Formulario').style.display = 'none';
    document.getElementById('condicionales2Formulario').style.display = 'none';
    document.getElementById('condicionales3Formulario').style.display = 'none';
    document.getElementById('condicionales4Formulario').style.display = 'none';
    document.getElementById('condicionales5Formulario').style.display = 'none';
    document.getElementById('condicionales6Formulario').style.display = 'none';
    document.getElementById('condicionales7Formulario').style.display = 'none';


    // Muestra el formulario correspondiente a la opción seleccionada
    document.getElementById(opcionSeleccionada + 'Formulario').style.display = 'block';
});

//OPCIONES CICLOS
document.getElementById('ciclos').addEventListener('change', function () {
    var opcionSeleccionada = this.value;

    // Oculta todos los formularios
    document.getElementById('ciclos1Formulario').style.display = 'none';
    document.getElementById('ciclos2Formulario').style.display = 'none';
    document.getElementById('ciclos3Formulario').style.display = 'none';
    document.getElementById('ciclos4Formulario').style.display = 'none';
    document.getElementById('ciclos5Formulario').style.display = 'none';
    document.getElementById('ciclos6Formulario').style.display = 'none';
    document.getElementById('ciclos7Formulario').style.display = 'none';


    // Muestra el formulario correspondiente a la opción seleccionada
    document.getElementById(opcionSeleccionada + 'Formulario').style.display = 'block';
});

//Operadores 1. Calcular el area de un triangulo:
let operadores1 = () => {
    let base = document.getElementById('base').value;
    let altura1 = document.getElementById('altura1').value;
    let resultado1=(base*altura1)/2;

    document.getElementById('resultado1').innerHTML = "El area del triangulo es de: " + resultado1;
}

//Operadores 2. Ingresar dos números por teclado y sumarlos:
let operadores2 = () => {
    let numUno = parseInt(document.getElementById('numUno').value);
    let numDos = parseInt(document.getElementById('numDos').value);
    let resultado2 = numUno + numDos ;
    document.getElementById('resultado2').innerHTML = "La suma de los dos numeros dijitados es de: " + resultado2;
}

//Operadores 3. Ingresar un número y visualizar el número elevado al cuadrado:
let operadores3 = () => {
    let numTres = parseInt(document.getElementById('numTres').value);
    let resultado3=Math.pow(numTres,2);
    document.getElementById('resultado3').innerHTML = "El elevado al cuadrado de " + numTres + " es de: " + resultado3;
}

//Operadores 4. Escribir un algoritmo que convierta de euros a dólares:
let operadores4 = () => {
    let euros = document.getElementById('euros').value;
    let resultado4 = (euros*1.083);
    document.getElementById('resultado4').innerHTML = "El valor de "+ euros+ " euros convertida en dolares da un numero de: "+ resultado4;
}

//Operadores 5. Escribir un algoritmo que pida el lado de un cuadrado y muestre el valor del área y del perimetro
let operadores5 = () => {
    let lado = document.getElementById('lado').value;
    let area1=(lado*lado);
    let perimetro=(4*lado);
    document.getElementById('resultado5').innerHTML = "El perimetro es de: "+ perimetro + " y el area es: "+ area1;
}

//Operadores 6. Escribir un algoritmo que determine el área y el volúmen de un cilindro:
let operadores6 = () => {
    let r = document.getElementById('radio').value;
    let h = document.getElementById('altura').value;

    const PI = 3.14;
    let area = (2 * PI * r * h + (2 * PI * Math.pow(r, 2)));
    let vol = (PI * Math.pow(r, 2) * h);

    document.getElementById('resultados6').innerHTML = "El área es: " + area + " y el volumen es de: " + vol;
}

//Operadores 7. Realizar un algoritmo que lea el radio de una circunferencia y escriba la longitud de la misma y el área (pi*r)^2 del círculo inscrito
let operadores7 = () => {
    const PI=3.14;
    let r2 = document.getElementById('radio1').value;
    let long=(2*PI*r2);
    let area2=(PI*Math.pow(r2,2));
    document.getElementById('resultado7').innerHTML = "El área es: "+ area2 + " y la longitud es de: "+ long;
}

//Operadores 8. Calcular el promedio de tres (3) números ingresados por teclado:
let operadores8 = () => {
    let numCuatro = parseInt(document.getElementById('numCuatro').value);
    let numCinco = parseInt(document.getElementById('numCinco').value);
    let numSeis = parseInt(document.getElementById('numSeis').value);
    let resultado8=(numCuatro+numCinco+numSeis)/3;
    document.getElementById('resultado8').innerHTML = "El promedio de los tres números ingresados es de: "+ resultado8;
}

//Condicionales 1. Escribir un algoritmo para saber si el número ingresado por teclado es positivo o negativo.
let condicionales1 = () => {
    let numSiete = parseInt(document.getElementById('numSiete').value);
    if (numSiete > 0){
        document.getElementById('resultado9').innerHTML = "El número ingresado es positivo";
    }else if (numSiete < 0){
        document.getElementById('resultado9').innerHTML = "El número ingresado es negativo";
    }else{
        document.getElementById('resultado9').innerHTML = "El numero ingresado es 0 (por lo tanto es neutro)";
    }
}

//Condicionales 2. Escribir un algoritmo que reciba dos números por teclado y diga cuál es el mayor y cuál el menor:
let condicional2 = () => {
    let numOcho = parseInt(document.getElementById('numOcho').value);
    let numNueve = parseInt(document.getElementById('numNueve').value);
    if (numOcho > numNueve){
        document.getElementById('resultado10').innerHTML = "El número mayor es: "+ numOcho + " y el menor es: " + numNueve;
    } else if(numOcho < numNueve){
        document.getElementById('resultado10').innerHTML = "El número mayor es: "+ numNueve + " y el menor es: "+ numOcho;
    } else {
        document.getElementById('resultado10').innerHTML = "Los números ingresados son iguales";
    }
}

//Condicionales 3. Escriba un programa que lea tres números enteros positivos y que calcule e imprima en pantalla el menor y el mayor de ellos:
let condicional3  = () => {
    let numDie = parseInt(document.getElementById('numDie').value);
    let numOnce = parseInt(document.getElementById('numOnce').value);
    let numDoce = parseInt(document.getElementById('numDoce').value);

    function encontrarMinMax(numDie, numOnce, numDoce){
        let min=Math.min(numDie,numOnce,numDoce);
        let max=Math.max(numDie,numOnce,numDoce);
        return{min, max};
    }
    
    
    if(numDie === numOnce && numOnce === numDoce){
        document.getElementById('resultado11').innerHTML = "todos los numeros son iguales";
    }else if(numDie>=0 && numOnce>=0 && numDoce>=0){
        const {min, max}=encontrarMinMax(numDie,numOnce,numDoce);
        document.getElementById('resultado11').innerHTML = "El número menor es: "+ min + " El número mayor es: "+ max;
    }else{
        document.getElementById('resultado11').innerHTML = "Asegurese de que digito números positivos y no negativos";
    }
}

//Condicionales 4. Dados dos números A y B, sumarlos si A es menor que B o sino restarlos.
let condicional4 = () =>{
    let numA = parseInt(document.getElementById('numA').value);
    let numB = parseInt(document.getElementById('numB').value);
    if (numA < numB) {
        let suma = numA + numB;
        document.getElementById('resultado12').innerHTML = "Ya que a es menor que b, entonces se suma, y el resultado es:" + suma;
    } else if(numA > numB){
        let resta = numA - numB;
        document.getElementById('resultado12').innerHTML = "Ya que a es mayor que b, entonces se resta, y el resultado es:" + resta;
    }else{
        document.getElementById('resultado12').innerHTML = "ya que los numeros son iguales, entonces no se hace ninguna operación";
    }
}

//Codicionales 5.Dados dos números A y B encontrar el cociente entre A y B. Recordar que la división por cero no está definida, en ese caso debe aparecer una leyenda anunciando que la división no es posible
let condicional5 = () =>{
    let dividendo = parseInt(document.getElementById('dividendo').value);
    let divisor = parseInt(document.getElementById('divisor').value);
    if (divisor === 0) {
        document.getElementById('resultado13').innerHTML = "La division por cero no es posible";
    } else {
        let division = dividendo / divisor;
        document.getElementById('resultado13').innerHTML = "La solucion de la division es de:" + division ;
    }
}

//Condicionales 6.Dados dos números A y B, sumarlos si al menos uno de ellos es negativo, en caso contrario multiplicarlos.
let condicional6 = () =>{
    let numTrece = parseInt(document.getElementById('numTrece').value);
    let numCatorce = parseInt(document.getElementById('numCatorce').value);
    if(numTrece < 0 || numCatorce < 0){
        let suma = numTrece + numCatorce;
        document.getElementById('resultado14').innerHTML = "El resultado de la suma es: " + suma;
    } else{
        let multiplicacion = numTrece * numCatorce;
        document.getElementById('resultado14').innerHTML = "El resultado de la multiplicacion es: " +  multiplicacion;
    }
}

//Condicionales 7. Escribir un algoritmo que determine si un año es bisiesto o no.
let condicional7 = () => {
    let year = parseInt(document.getElementById('year').value);
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        document.getElementById('resultado15').innerHTML = "El año es bisiesto";
    }else{
        document.getElementById('resultado15').innerHTML = "El año no es bisiesto";
    }
}

//Ciclos 1.Imprimir todos los múltiplos de 3 que hay entre 1 y 100
let ciclos1 = () => {
    let resultado16 = '';
    for (let i = 3; i <= 100; i += 3) {
        resultado16 += i + '<br>';
    }
    document.getElementById('resultado16').innerHTML = resultado16;
}

//Ciclos 2. Imprimir los números impares entre 0 y 100
let ciclos2 = () => {
    let resultado17 = '';
    let a = 1;
    while(a < 101){
        resultado17 += a + '<br>';
        a += 2;
        document.getElementById('resultado17').innerHTML = resultado17;
    }
}

//Ciclos 3. Imprimir los números pares del 1 al 100 
let ciclos3 = () => {
    let resultado18 = '';
    for(let b = 2; b <= 100 ; b += 2) {
        resultado18 += b + '<br>';
    }
document.getElementById('resultado18').innerHTML = resultado18;
}

//Ciclos 4. Escribir un programa que imprima por pantalla los cuadrados de los números del 1 al 30
let ciclos4 = () => {
    let c = 1;
    let resultado19 = '';
    while(c < 31){
        resultado19 += "El cuadrado de " + c + " = " + Math.pow(c, 2) + '<br>';
        c++;
        document.getElementById('resultado19').innerHTML = resultado19;
    }
}

/*Ciclos 5.Escribir un programa que sume los cuadrados de los cien primeros números naturales, 
mostrando el resultado en pantalla.*/
let ciclos5 = () => {
    let total = 0;
    let suma1 = 0;
    let resultado20 = '';
    for (let d = 0; d <= 100; d++) {
        total = d * d;
        suma1 += total;
    }
    resultado20 += "La suma de los cuadrados de los primeros 100 numeros naturales es de:" + suma1;
    document.getElementById('resultado20').innerHTML = resultado20;
}

/*Ciclos 6.  Dados dos números naturales, el primero menor que el segundo, generar y mostrar todos los
números comprendidos entre ellos en secuencia ascendente.*/
let ciclos6 = () =>{
    let numQuince = parseInt(document.getElementById('numQuince').value);
    let numDieciseis= parseInt(document.getElementById('numDieciseis').value);
    let secuencia = numQuince + 1;
    let resultado21 = ''
    
    while(secuencia < numDieciseis){
    resultado21 += secuencia + '<br>';
    document.getElementById('resultado21').innerHTML = resultado21;
    secuencia++;
}
}

/*Ciclos 7. Sumar todos los números que se digitan por teclado mientras no sea cero. */
let ciclos7 = () => {
    let numDiecisiete;
    let suma2 = 0;
    do {
        numDiecisiete = parseInt(prompt("Ingrese un número (0 para terminar):"));
        suma2 += numDiecisiete;
    } while (numDiecisiete !== 0);
    document.getElementById('resultado22').innerHTML = "La suma de los números ingresados es: " + suma2;
}

