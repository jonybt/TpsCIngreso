/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
  let vLargo;
  let vAncho;
  let vArea;

  vLargo = parseFloat(document.getElementById("txtIdLargo").value);
  vAncho = parseFloat(document.getElementById("txtIdAncho").value);

  vArea = (vLargo*vAncho)*3;

  alert("se deben comprar "+vArea+" mts de alambre");
}
function Circulo () 
{
  let vRadio;
  let vPi = parseFloat(3.1416);
  let vArea;
  
  vRadio = parseFloat(document.getElementById("txtIdRadio").value);

  vArea = ((vPi*(vRadio*vRadio))*3);

  alert("son necesarios "+vArea.toFixed(3)+" de alambre.");
}
function Materiales () 
{
  let vLargo;
  let vAncho;
  let vArea;
  let vCemento;
  let vCal;

  vLargo = parseFloat(document.getElementById("txtIdLargo").value);
  vAncho = parseFloat(document.getElementById("txtIdAncho").value);	

  vArea = (vLargo*vAncho);
  
  vCemento = (vArea*2);
  vCal = (vArea*3);

  alert("se necesitan "+vCemento+" bolsas de cemento y "+vCal+" bolsas de cal");
}