function ejercicio1() {

    var numero = document.form1.valor.value;
    var nombres = [], nombre, cadena;

    for (let index = 0; index < numero; index++) {

        do {
            nombre = prompt('Ingrese el ' + (index + 1) + 'º nombre: ');
        } while (nombre == null || nombre.length == 0)

        nombres.push(nombre);
        cadena = cadena + nombre + '; '

    }
    // window.stop()
    // location.reload();
    // document.getElementById("cajaResultado1").focus();
    document.getElementById("cajaResultado1").innerHTML = ("Los nombres ingresados son: " + cadena);
    alert("Los nombres ingresados son: " + cadena);


    // var text = document.createTextNode("Los nombres ingresados son: " + nombres+"<br>")
    // document.getElementById("cajaResultado1").appendChild(text);   

    window.stop()

}

function ejercicio2() {
    var opcion = document.form2.opcion.value;
    var numerosPar = [], numerosImpar = [], par = true, cadena;

    for (let index = 1; index <= 100; index++) {
        if (index % 5 == 0) {
            if (index % 2 == 0) {
                numerosPar.push(index);
            } else {
                numerosImpar.push(index);
            }
        }

    }

    if (opcion == "true") {
        document.getElementById("cajaResultado2").innerHTML = ("Los números pares y múltiplos de 5, encontrados son: " + numerosPar);
        alert("Los números pares y múltiplos de 5, encontrados son: " + numerosPar);
    } else {
        document.getElementById("cajaResultado2").innerHTML = ("Los números pares y múltiplos de 5, encontrados son: " + numerosImpar);
        alert("Los números impares y múltiplos de 5, encontrados son: " + numerosImpar);
    }

}

function ejercicio3() {

    // Armar un array con todos los elementos de la lista.
    var lista = document.getElementById("opciones");

    // Obtener el valor de la opción seleccionada
    var valorSeleccionado = lista.options[lista.selectedIndex].value;

    //Tomamos los números ingresados
    var num1 = parseInt(document.form3.num1.value, 10);
    var num2 = parseInt(document.form3.num2.value, 10);

    //Resultado de la operación
    var result;

    if (valorSeleccionado == 1) result = num1 + num2;
    if (valorSeleccionado == 2) result = num1 - num2;
    if (valorSeleccionado == 3) result = num1 * num2;

    document.getElementById("cajaResultado3").innerHTML = ("El resultado de la operación seleccionada es: " + result);
    alert("El resultado de la operación seleccionada es: " + result);

}