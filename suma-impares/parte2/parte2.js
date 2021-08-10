const btnIngresar = document.querySelector('#ingresar');


const sumaIntervalo = (e) => {
    e.preventDefault();

    let min = document.getElementById('min').value;
    let max = document.getElementById('max').value;

    min = parseInt(min);
    max = parseInt(max);

    if (isNaN(min) || isNaN(max)) {
        console.log('El valor ingresado no es un número válido');
    }else{
        console.log(`La suma de los impares del intervalo entre ${min} y ${max} es: `);
        const parte2 = () => {

            let suma = 0;

            for (let i = min; i < max; i++) {
                if (i%2!=0) {
                    suma += i;
                }
            }

            console.log(suma);
        }

        parte2();
    }

}

btnIngresar.addEventListener('click', sumaIntervalo);

/**
 * Primero obtengo los valores min y max, al entrar en la función creo la variable que 
 * contendrá la suma de los impares en el intervalo. Luego inicio el ciclo asignándole 
 * a i el valor de min y se ejecutará mientras i sea menor a max, entonces con esto tendrá 
 * n iteraciones que corresponde a la cantidad de valores que se encuentra en el intervalo.
 * 
 * Dentro del ciclo se verifica que corresponda a un impar de ser así se sumara el valor.
 *
 */
