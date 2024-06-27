const dizimo = document.querySelector('#valor-dizimo');
const valor_dizimo = document.querySelector('#dizimo');
const valor_oferta = document.querySelector('#oferta');
const botao = document.querySelector('#botao');
const percentual_dizimo = 0.10;
const percentual_oferta = 0.01;

botao.addEventListener('click', () => {
    valor_dizimo.innerHTML = resultado_dizimo();
    valor_oferta.innerHTML = resultado_oferta();
})

function resultado_dizimo() {
    // Calcular o valor do dízimo
    var valorDizimo = dizimo.value * percentual_dizimo;
  
    // Formatar o valor em reais
    var valorFormatado = valorDizimo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
    // Retornar o valor formatado
    return valorFormatado;
  }

function resultado_oferta(){
    var valorOferta =  dizimo.value * percentual_oferta;

    var ofertaFormatado = valorOferta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});

    return ofertaFormatado;
}

function formatarReal(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
