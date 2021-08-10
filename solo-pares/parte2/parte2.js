
const btnIngresar = document.querySelector('#ingresar');

const sumaPares = (e) => {
    e.preventDefault();

    let num = document.getElementById('numero').value;
    num = parseInt(num);
    
    if (isNaN(num)) {
        console.log('El valor ingresado no es un número válido')
    }else{
        console.log(`Para el número ${num} los pares son sin incluir el 0 son: `);
        const parte2 = () => {
            let cont = 0;
            for (let i = 0; num > cont; i++) {
                if (i%2==0 && i != 0) {
                    console.log(i);
                    cont++;
                }
        }};

        parte2();
    }
}

btnIngresar.addEventListener('click', sumaPares);


/**
 * Esta parte es basicamente lo mismo que la anterior, lo único que cambia es 
 * dentro del ciclo for en la validación para ver si es par se le agrega que
 * tiene que ser distinto de cero, así cuando ciclo este en su primera iteración 
 * no entrara por ende no se imprimirá y el contador no aumentará. 
 */
