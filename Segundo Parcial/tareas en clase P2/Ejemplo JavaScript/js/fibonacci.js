var datoIn= window.prompt("Ingrese un número positivo:");
var dato = parseFloat(datoIn);
var aux, numero,anterior;
if(dato <= 0){

    /* alert("El numero es negativo o igual a cero" ); */
    document.writeln("El numero es negativo o igual a cero");
}
else{
    /* alert("El numero es positivo") */
    document.write("La serie de Fibonacci es: ");
    anterior=0;
    nuevo=1;
    for(i=1;i<=dato;i++)
    {
        aux=nuevo;
        nuevo += anterior;
        document.write(nuevo + " ");
        anterior=aux;
    }
}
var estudiantes= new Array();
estudiantes[0] = "Miguel";
estudiantes[1] = "Juan"
estudiantes[2] = "Luis"

for(j=1;j<estudiantes.length;j++){
    document.write(estudiantes[j]);
}