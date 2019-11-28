function limpar() {
    document.getElementById('visorCalc').value = '';
}

function number(valor) {
    document.getElementById('visorCalc').value += valor;
}

function calcular() {
    var resultado = 0;
    resultado = document.getElementById('visorCalc').value;

    document.getElementById('visorCalc').value = ''

    document.getElementById('visorCalc').value = eval(resultado);
}

var factor = document.getElementById('visorCalc').value

function fatorial(factor) {
    var factor = document.getElementById('visorCalc').value

    for (var i = factor - 1; i < factor; i--) {
        factor = factor * i;
        if (i == 1) {
            break;
        }
        document.getElementById('visorCalc').value = factor

    }
}
function raizQuadrada() {
    var raiz = 0
    raiz = document.getElementById('visorCalc').value
    result = Math.sqrt(raiz)
    document.getElementById('visorCalc').value = result

}