const btnIngresar = document.querySelector('#ingresar');

const fibonacci = (e) => {
    e.preventDefault();

    let num = document.getElementById('numero').value;
    num = parseInt(num);

    if (isNaN(num)) {
        console.log('El valor ingresado no es un numero válido')
    }else{
        const fibonacciResult = () => {
            let valores = [0];
        
            for (let i = 0; i < num; i++) {
                if (i < 2) {
                    valores.push(1);
                }else{
                    valores.push(valores[i-1] + valores[i]);
                }
            }
            
            console.log(valores);
        }
        
        fibonacciResult();
    }
}

btnIngresar.addEventListener('click', fibonacci);


/**
 * Primero que nada, capturo el valor y valido que sea un número como en todas las anteriores.
 * 
 * Una vez se verifica que es número, entra a la función para calcular la serie de Fibonacci correspondiente.
 * Dentro de la función se crea un arreglo inicializado con el primer valor por defecto de cero, 
 * este arreglo me servirá para almacenar los resultados de la serie y para sacar el cálculo del 
 * próximo elemento con los valores anteriores.
 * 
 * Luego se inicia el ciclo, primero valido que el valor de i sea menor que 2 ya que para la 
 * serie de Fibonacci en estos casos siempre corresponde a 1, si es así agrego el valor 
 * de 1 al arreglo.
 * 
 * Luego en el segundo caso entrará siempre que i sea mayor que 2, en el cual lo único que 
 * hago es agregar al arreglo la suma de la última posición del arreglo con la penúltima.
 */

