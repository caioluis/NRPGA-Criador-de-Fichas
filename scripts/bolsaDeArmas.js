var armasEscolhidas = [];
var packSenbon = packKibaku = packAmpola = packFio = packMakibishi = kunai = shuriken = kemuridama = hikaridama = fumaShuriken = 0;

function getBolsaMaxSlots() {
    var slotsOcupados = 0;

    packSenbon = Math.ceil(parseFloat($('#senbon-quantidade').val()) * 0.5);
    packKibaku = Math.ceil(parseFloat($('#kibaku-quantidade').val()) * 0.25);
    packAmpola = Math.ceil(parseFloat($('#ampola-quantidade').val()) * 0.25);
    packFio = Math.ceil(parseFloat($('#fiosdeaco-quantidade').val()) * 0.2);
    packMakibishi = Math.ceil(parseFloat($('#makibishi-quantidade').val()) * 0.2);
    fumaShuriken = Math.ceil(parseFloat($('#fumaShuriken-quantidade').val()) * 4);
    kunai = parseFloat($('#kunai-quantidade').val());
    shuriken = parseFloat($('#shuriken-quantidade').val());
    kemuridama = parseFloat($('#kemuridama-quantidade').val());
    hikaridama = parseFloat($('#hikaridama-quantidade').val());
    
    slotsOcupados = packSenbon + packKibaku + packAmpola + packFio + packMakibishi + kunai + shuriken + kemuridama + hikaridama + fumaShuriken;

    return (20 - slotsOcupados).toFixed(2).replace(/\.00$/, '');
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
            alert('Escolha uma arma mais leve OU retire uma arma para ter mais espaço na bolsa.');
    } else {
        if(pesoArma < 1){
            quantidadeArma.val(parseFloat(quantidadeArma.val()) + 1);
            index = armasEscolhidas.findIndex(a => a.includes(textoArma));
            if(index == -1) {
                armasEscolhidas.push(`+${quantidadeArma.val()} ${textoArma} - ${(parseFloat(quantidadeArma.val()) * pesoArma).toFixed(2).replace(/\.00$/, '')} de [${Math.ceil(parseFloat(quantidadeArma.val()) * pesoArma)}]`);
            } else {
                armasEscolhidas[index] = `+${quantidadeArma.val()} ${textoArma} - ${(parseFloat(quantidadeArma.val()) * pesoArma).toFixed(2).replace(/\.00$/, '')} de [${Math.ceil(parseFloat(quantidadeArma.val()) * pesoArma)}]`;
            }
        } else {
                quantidadeArma.val(parseFloat(quantidadeArma.val()) + 1);
                index = armasEscolhidas.findIndex(a => a.includes(`+${quantidadeArma.val()-1} ${textoArma} [${Math.ceil(parseFloat(quantidadeArma.val()-1) * pesoArma)}]`));
                if(index == -1) {
                    armasEscolhidas.push(`+${quantidadeArma.val()} ${textoArma} [${Math.ceil(parseFloat(quantidadeArma.val()) * pesoArma)}]`);
                } else {
                    armasEscolhidas[index] = `+${quantidadeArma.val()} ${textoArma} [${Math.ceil(parseFloat(quantidadeArma.val()) * pesoArma)}]`;
                }
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
        if(pesoArma < 1) {
            index = armasEscolhidas.findIndex(a => a.includes(textoArma));
            if (quantidadeArma.val() > 1) {
                quantidadeArma.val(parseFloat(quantidadeArma.val()) - 1);
                armasEscolhidas[index] = `+${quantidadeArma.val()} ${textoArma} - ${(parseFloat(quantidadeArma.val()) * pesoArma).toFixed(2).replace(/\.00$/, '')} de [${Math.ceil(parseFloat(quantidadeArma.val()) * pesoArma)}]`;
            } else {
                armasEscolhidas.splice(index, 1);
                quantidadeArma.val(parseFloat(quantidadeArma.val()) - 1);
            } 
        } else {
            index = armasEscolhidas.findIndex(a => a.includes(`+${quantidadeArma.val()} ${textoArma} [${Math.ceil(parseFloat(quantidadeArma.val()) * pesoArma)}]`));
            if (quantidadeArma.val() > 1) {
                quantidadeArma.val(parseFloat(quantidadeArma.val()) - 1);
                armasEscolhidas[index] = `+${quantidadeArma.val()} ${textoArma} [${Math.ceil(parseFloat(quantidadeArma.val()) * pesoArma)}]`;  
            } else {
                armasEscolhidas.splice(index, 1);
                quantidadeArma.val(parseFloat(quantidadeArma.val()) - 1);
            }
        
        }
    }

    atualizarBolsa();
    atualizarCarrinhoArmas();
});

function atualizarCarrinhoArmas() {
    $('#bolsa-de-armas').text(armasEscolhidas.join('\n'));
}