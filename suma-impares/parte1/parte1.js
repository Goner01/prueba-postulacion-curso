
const btnIngresar = document.querySelector('#ingresar');


const sumaImpares = (e) => {
    e.preventDefault();

    let num = document.getElementById('numero').value;
    num = parseInt(num);

    if (isNaN(num)) {
        console.log('El valor ingresado no es un número válido');
    }else{
        console.log(`Para el número ${num} la suma de sus impares es: `);
        const parte1 = () => {
            let suma = 0;
            for (let i = 0; i <= num; i++) {
                if (i%2!=0) {
                    // += me permite hacer algo como esto suma = suma + i
                    suma += i;
                }
            }

            console.log(suma);
        };

        parte1();
    }
}

btnIngresar.addEventListener('click', sumaImpares);

/**
 * Bueno lo primero que hago es generar una varible para la suma de los 
 * impares, simplemente inicia el ciclo con el n de iteraciones   
 * según el numero ingresado, luego válido que el numero sea impar y 
 * simplemente se lo sumo a la variable.
 * 
 * Luego cuando termina el ciclo se imprime el resultado.
 *
 */

