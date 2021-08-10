// let num = prompt("n pares incluido el 0", "");
//para obtener el documento
const btnIngresar = document.querySelector('#ingresar');

const sumaPares = (e) => {
    //para evitar que el navegador se refresque
    e.preventDefault();
    
    //obtenemos el valor del input
    let num = document.getElementById('numero').value;
    num = parseInt(num);
    
    //verificados si corresponde a un numero
    //isNaN nos permite verificar si no corresponde a un numero
    if (isNaN(num)) {
        console.log('El valor ingresado no es un número válido');
    }else{
        console.log(`Para el número ${num} los pares son: `);
        const parte1 = () => {
            //creamos la variable cont para imprimir exactamente la cantidad ingresada en pares
            let cont = 0;
            for (let i = 0; num > cont; i++) {
                //verificamos que si el resto de la division entre el valor actual de i y 2 sea 0
                //si es asi entonces el numero es par
                if (i%2==0) {
                    console.log(i);
                    //le sumamos 1 a cont
                    cont++;
                }
        }};
        //ejecutamos la funcion
        parte1();
    }
}

//para registrar un evento asociado al boton
btnIngresar.addEventListener('click', sumaPares);


/**
 * Bueno primero que nada pensaba hacerlos con un simple alert dialog para recibir los datos
 * pero me resultó un tanto incomodo así que decidí extraer los valores a través de un input 
 * y registrar una acción para capturar el evento, lo mismo aplica para los demás ejercicios.
 * 
 * Primero obtengo el valor cierto, luego valido que corresponda a un número.
 * 
 * Si es un número entrará a la función en la cual primero se crea un contador, luego el 
 * ciclo for para hacer los ciclos correspondientes al valor ingresado y valido que 
 * el valor ingresado sea mayor al contador. Dentro del ciclo se crea la validación que 
 * verifica si corresponde a un número par si es así entrará e imprimirá el valor 
 * además de aumentar en 1 el contador así cuando este sea mayor al valor ingresado 
 * se termina el ciclo.
 */

