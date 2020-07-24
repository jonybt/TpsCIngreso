/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let vGf;
    let vResultado;
    
    vGf = parseFloat(document.getElementById("txtIdTemperatura").value);

    vResultado =  parseFloat((vGf - 32) * 5/9);

    alert(vGf +" Farenheit son "+ vResultado.toFixed(1)+" Centigrados " )
}

function CentigradosFahrenheit () 
{
    let vGc;
    let vResultado;

    vGc = parseFloat(document.getElementById("txtIdTemperatura").value);

    vResultado = parseFloat((vGc * 9/5) + 32 );

    alert(vGc+" Centigrados son "+vResultado.toFixed(1)+" Farenheit ");
}
