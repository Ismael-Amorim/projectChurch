const dizimo = document.querySelector('#valor-dizimo');
const valor_dizimo = document.querySelector('#dizimo');
const valor_pacto = document.querySelector('#pacto');
const valor_total = document.querySelector('#total');
const botao = document.querySelector('#botao');
const percentual_dizimo = 0.10;
const percentual_pacto = 0.01;

botao.addEventListener('click', () => {
    valor_dizimo.innerHTML = resultado_dizimo();
    valor_pacto.innerHTML = resultado_pacto();
    valor_total.innerHTML = resultado_total();
})

function resultado_dizimo() {
    var valorDizimo = dizimo.value * percentual_dizimo;
  
    var valorFormatado = valorDizimo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
    return valorFormatado;
}

function resultado_pacto() {
    var valorPacto =  dizimo.value * percentual_pacto;

    var pactoFormatado = valorPacto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});

    return pactoFormatado;
}

function resultado_total() {
    var valorDizimo = parseFloat(resultado_dizimo().replace(/\D/g, '').replace(',', '.')) / 100;
    var valorPacto = parseFloat(resultado_pacto().replace(/\D/g, '').replace(',', '.')) / 100;

    var valorTotal = valorDizimo + valorPacto;

    var totalFormatado = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return totalFormatado;
}
