var armasEscolhidas = [];

function getBolsaMaxSlots() {
    var slotsOcupados = 0;
    $('.item').each(function() {
        pesoArma = parseFloat($(this).find('.peso').val());
        quantidadeArma = parseFloat($(this).find('.quantidade').val());
        slotsOcupados += quantidadeArma * pesoArma;
    });
    return (20 - slotsOcupados).toFixed(2).replace(/\.00$/, '');;
}



var espacoBolsa = getBolsaMaxSlots();

$('#bolsa-de-armas-label').text(`Bolsa de Armas - ${espacoBolsa} espaços disponíveis`);

function atualizarBolsa() {
    $('#bolsa-de-armas-label').text(`Bolsa de Armas - ${getBolsaMaxSlots()} espaços disponíveis`)
}


$('.adicionarArma').click(function adicionarArma() {
    espacoBolsa = getBolsaMaxSlots();

    textoArma = $(this).parent().prev('.item').find('p').text();
    pesoArma = parseFloat($(this).parent().prev('.item').find('.peso').val());
    quantidadeArma = $(this).parent().prev('.item').find('.quantidade');

    if (pesoArma > espacoBolsa) {
        alert('Escolha uma arma mais leve OU retire uma arma para ter mais espaço na bolsa.')
    } else {
        quantidadeArma.val(parseFloat(quantidadeArma.val()) + 1);
        index = armasEscolhidas.findIndex(a => a.includes(textoArma));
        if(index == -1) {
            armasEscolhidas.push(`+${quantidadeArma.val()} ${textoArma}`);
        } else {
            armasEscolhidas[index] = `+${quantidadeArma.val()} ${textoArma}`;
        }
    }
    atualizarBolsa();
    atualizarCarrinhoArmas();
});


$('.removerArma').click(function removerArma(){
    espacoBolsa = getBolsaMaxSlots();
    textoArma = $(this).parent().prev('.item').find('p').text();
    pesoArma = parseFloat($(this).parent().prev('.item').find('.peso').val());
    quantidadeArma = $(this).parent().prev('.item').find('.quantidade');

    if (quantidadeArma.val() == 0) {
        alert('Tá doidão, nem tem essa arma aqui')
    } else {
        index = armasEscolhidas.findIndex(a => a.includes(textoArma));
        if (quantidadeArma.val() > 1) {
            quantidadeArma.val(parseFloat(quantidadeArma.val()) - 1);
            armasEscolhidas[index] = `+${quantidadeArma.val()} ${textoArma}`;  
        } else {
            
            armasEscolhidas.splice(index, 1);
            quantidadeArma.val(parseFloat(quantidadeArma.val()) - 1);
        }
        
    }
    
    atualizarBolsa();
    atualizarCarrinhoArmas();
});

function atualizarCarrinhoArmas() {
    $('#bolsa-de-armas').text(armasEscolhidas.join('\n'));
}