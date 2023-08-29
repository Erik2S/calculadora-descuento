const inputNumero = document.querySelector('#input-numero')
const inputDescuento = document.querySelector('#input-descuento')
const buttonEnviar = document.querySelector('#input-enviar')
let espacioResultado = document.querySelector('#resultado-operacion')
let resultado = undefined
let cuponDescuento = document.querySelector('#cupon-descuento')

const descuentos = {
    'TUMADRELAGORDA': 100,
    '15DESCUENTO': 15,
    '25DESCUENTO': 25,
    '50DESCUENTO': 50,
    '': 0,
}

buttonEnviar.addEventListener('click', precioConDescuento)

function precioConDescuento() {

    const numero = Number(inputNumero.value)
    const porcentaje = Number(inputDescuento.value)
    let sintaxisCupon = cuponDescuento.value
    let cupon = descuentos[sintaxisCupon]
    
    cupon == undefined ? cupon = 0 : cupon = cupon;

    console.log("cupon igual a: " + cupon, typeof(cupon))

    if (porcentaje > 100 || cupon > 100 || (cupon + porcentaje) > 100) {
        espacioResultado.innerText = 'Escriba un porcentaje valido (menor a 100)'
    }
    else if (!numero || !porcentaje && !cupon) {
        espacioResultado.innerText = 'Antes agregue los numeros...'
    }
    else { 
        resultado = (numero * (100 - porcentaje - cupon)) / 100; 
        resultado = resultado.toFixed(2)
        
        espacioResultado.innerText = 'El resultado con descuento es: ' + resultado
    }

}