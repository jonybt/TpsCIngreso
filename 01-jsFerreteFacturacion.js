/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let vPreUno;
    let vPreDos;
    let vPreTres;
    let vResultado;

    vPreUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    vPreDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    vPreTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    vResultado = (vPreUno + vPreDos + vPreTres);

    alert(vResultado);



}
function Promedio () 
{
    let vPreUno;
    let vPreDos;
    let vPreTres;
    let vResultado;

    vPreUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    vPreDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    vPreTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    vResultado = (vPreUno + vPreDos + vPreTres)/3;	

    alert(vResultado);
}
function PrecioFinal () 
{
	let vPreUno;
    let vPreDos;
    let vPreTres;
    let vResultado;

    vPreUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    vPreDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    vPreTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    vResultado = (vPreUno + vPreDos + vPreTres);
    vResultado = parseFloat((vResultado+(vResultado*21/100)));

    alert(vResultado);
}