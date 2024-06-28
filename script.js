const dizimo = document.querySelector('#valor-dizimo');
const valor_dizimo = document.querySelector('#dizimo');
const valor_pacto = document.querySelector('#pacto');
const botao = document.querySelector('#botao');
const percentual_dizimo = 0.10;
const percentual_pacto = 0.01;

botao.addEventListener('click', () => {
    valor_dizimo.innerHTML = resultado_dizimo();
    valor_pacto.innerHTML = resultado_pacto();
})

function resultado_dizimo() {
    // Calcular o valor do dízimo
    var valorDizimo = dizimo.value * percentual_dizimo;
  
    // Formatar o valor em reais
    var valorFormatado = valorDizimo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
    // Retornar o valor formatado
    return valorFormatado;
  }

function resultado_pacto(){
    var valorPacto =  dizimo.value * percentual_pacto;

    var pactoFormatado = valorPacto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});

    return pactoFormatado;
}

function formatarReal(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
