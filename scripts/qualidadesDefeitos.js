var pontosQualidades = 0;
var pontosDefeitos = 0;
var quantBonus = 0;
var maxPontosQualidades = getQualidadesMaxPoints();
var minPontosDefeitos = getDefeitosMinPoints();

$('#qualidades-contador').html('Qualidades - Pontos restantes: ' + (maxPontosQualidades));


function atualizarTexto() {
    $('#qualidades-contador').html('Qualidades - Pontos restantes: ' + getQualidadesMaxPoints());
    $('#defeitos-contador').html('Defeitos - Pontos necessários: ' + getDefeitosMinPoints());
}


function adicionarQualidade(botão) {
    botão.addClass('qualidade-escolhida'); 
    valorQualidade = parseInt(botão.val());
    pontosQualidades += valorQualidade;
    adicionarBonusDatabook(botão);
}

function removerQualidade(botão) {
    if(botão.hasClass('qualidade-escolhida')){
        botão.removeClass('qualidade-escolhida');
        valorQualidade = parseInt(botão.val());
        pontosQualidades -= valorQualidade;
        removerBonusDatabook(botão);
    }
}
    

function adicionarDefeito(botão) {
    botão.addClass('defeito-escolhido');
    valorDefeito = parseInt(botão.val());
    pontosDefeitos += valorDefeito;
    adicionarNerfDatabook(botão);
}

function removerDefeito(botão) {
    if(botão.hasClass('defeito-escolhido')){
        botão.removeClass('defeito-escolhido');
        valorDefeito = parseInt(botão.val());
        pontosDefeitos -= valorDefeito;
        removerNerfDatabook(botão);
    }
}


$('#qualidades .qualidades-defeitos :button').click(function(){
    var botão = $(this);
    maxPontosQualidades = getQualidadesMaxPoints();
    valorQualidade = parseInt(botão.val());
    if (botão.hasClass('qualidade-escolhida') == false){
        if (valorQualidade > maxPontosQualidades) {
            return false;
        } else{          
            adicionarQualidade(botão);
            if (botão.attr('id') == 'qualidadeNinjutsu') {
                qualidadeGenjutsu.prop('disabled', true);
                qualidadeTaijutsu.prop('disabled', true);
            } else if (botão.attr('id') == 'qualidadeTaijutsu') {
                qualidadeGenjutsu.prop('disabled', true);
                qualidadeNinjutsu.prop('disabled', true);
            } else if (botão.attr('id') == 'qualidadeGenjutsu') {
                qualidadeNinjutsu.prop('disabled', true);
                qualidadeTaijutsu.prop('disabled', true);
            }
        }
    } else {
        removerQualidade(botão);
        if (botão.attr('id') == 'qualidadeNinjutsu') {
            qualidadeGenjutsu.prop('disabled', false);
            qualidadeTaijutsu.prop('disabled', false);
        } else if (botão.attr('id') == 'qualidadeTaijutsu') {
            qualidadeGenjutsu.prop('disabled', false);
            qualidadeNinjutsu.prop('disabled', false);
        } else if (botão.attr('id') == 'qualidadeGenjutsu') {
            qualidadeNinjutsu.prop('disabled', false);
            qualidadeTaijutsu.prop('disabled', false);
        }
    }
    atualizarTexto();
});

$('#defeitos .qualidades-defeitos :button').click(function(){
    var botão = $(this);
    minPontosDefeitos = getDefeitosMinPoints();
    valorDefeito = parseInt(botão.val());
    if((botão.attr('class') == undefined) || (botão.attr('class') == '')){
        adicionarDefeito(botão)
    } else {
        removerDefeito(botão)
    }
    
    atualizarTexto();
});



function getQualidadesMaxPoints()
{
    return (4 + Number($('#semCla').is(':checked')) - pontosQualidades);   
}

function getDefeitosMinPoints() {
    if (pontosQualidades > 4) {
        return 4 - pontosDefeitos;
    } else{
        return pontosQualidades - pontosDefeitos;
    }    
}

function adicionarBonusDatabook(botão) {
    if (quantBonus == 2 && botão.hasClass('temBonus')) {
        alert("Você já atingiu o máximo de pontos adquiríveis através das qualidades. Esta qualidade será adicionada, mas não dará pontos extra.")
    } else {
        if (botão.text().includes('Habilidade em Ninjutsu')) {
            $('#ninjutsu-label span').show();
            $('#defeitoNin').prop('disabled', true);
            removerDefeito($('#defeitoNin'));
            $('#ninjutsu-label span').text('+1');
            bonusNin++;
            quantBonus++;
        }

        if (botão.text().includes('Habilidade em Taijutsu')) {
            $('#taijutsu-label span').show();
            $('#taijutsu-label span').text('+1');
            removerDefeito($('#defeitoCoordenacao'));
            $('#defeitoCoordenacao').prop('disabled', true);
            bonusTai++;
            quantBonus++;
        }

        if (botão.text().includes('Habilidade em Genjutsu')) {
            $('#genjutsu-label span').show();
            $('#genjutsu-label span').text('+1');
            removerDefeito($('#defeitoGen'));
            $('#defeitoGen').prop('disabled', true);
            bonusGen++;
            quantBonus++;
        }

        if (botão.text().includes('Força Aguçada')) {
            $('#forca-label span').show();
            $('#forca-label span').text('+1')
            removerDefeito($('#defeitoFraqueza'));
            $('#defeitoFraqueza').prop('disabled', true);
            bonusForca++;
            quantBonus++;
        }

        if (botão.text().includes('Inteligência Aguçada')) {
            $('#int-label span').show();
            $('#int-label span').text('+1')
            bonusInt++;
            quantBonus++;
        }

        if (botão.text().includes('Agilidade Aguçada')) {
            $('#vel-label span').show();
            $('#vel-label span').text('+1')
            removerDefeito($('#defeitoReflexos'));
            $('#defeitoReflexos').prop('disabled', true);
            bonusVel++;
            quantBonus++;
        }

        if (botão.text().includes('Grande Durabilidade')) {
            $('#sta-label span').show();
            $('#sta-label span').text('+1')
            bonusSta++;
            quantBonus++;
        }
    }

    if (botão.text().includes('Olfato Aguçado')) {
        removerDefeito($('#defeitoOlfato'));
        $('#defeitoOlfato').prop('disabled', true);
    }

    if (botão.text().includes('Audição Aguçada')) {
        removerDefeito($('#defeitoSurdez'));
        $('#defeitoSurdez').prop('disabled', true);
        removerDefeito($('#defeitoAudicao'));
        $('#defeitoAudicao').prop('disabled', true);
    }

    if (botão.text().includes('Visão Aguçada')) {
        removerDefeito($('#defeitoVisao'));
        $('#defeitoVisao').prop('disabled', true);
    }
   
    if (botão.text().includes('Prodígio')) {
        $('#defeitoDificuldade').prop('disabled', true);
        removerDefeito($('#defeitoDificuldade'));
        contadorJutsusGerais += 2;
    }

    if (botão.text().includes('Memória Eidética')) {
        $('#defeitoAmnesia').prop('disabled', true);
        removerDefeito($('#defeitoAmnesia'));
        contadorJutsusGerais += 1;
    }

    if (botão.text().includes('Mente Implacável')) {
        menteImplacavel = ' +10 Jutsus de rank-E a rank-A';
    }
}

function removerBonusDatabook(botão) {
    if (botão.text().includes('Habilidade em Ninjutsu')) {
        if ($('#ninjutsu-label span').text() == '+1') {
            $('#defeitoNin').prop('disabled', false);
            $('#ninjutsu-label span').hide();
            bonusNin--;
            quantBonus--;
        }
    }

    if (botão.text().includes('Habilidade em Taijutsu')) {
        if ($('#taijutsu-label span').text() == '+1') {
            $('#taijutsu-label span').hide();
            bonusTai--;
            quantBonus--;
        }
    }

    if (botão.text().includes('Habilidade em Genjutsu')) {
        if ($('#genjutsu-label span').text() == '+1') {
            $('#defeitoGen').show();
            $('#genjutsu-label span').prop('disabled', false);
            bonusGen--;
            quantBonus--;
        }
    }

    if (botão.text().includes('Força Aguçada')) {
        if ($('#forca-label span').text() == '+1' || $('#forca-label span').text() == '0') {
            $('#forca-label span').hide();
            $('#defeitoFraqueza').prop('disabled', false);
            bonusForca--;
            quantBonus--;
        }
    }

    if (botão.text().includes('Inteligência Aguçada')) {
        if ($('#int-label span').text() == '+1') {
            $('#int-label span').hide();
            bonusInt--;
            quantBonus--;
        }   
    }

    if (botão.text().includes('Agilidade Aguçada')) {
        if ($('#vel-label span').text() == '+1') {
            $('#vel-label span').hide();
            $('#defeitoReflexos').prop('disabled', false);
            bonusVel--;
            quantBonus--;
        }
    }

    if (botão.text().includes('Grande Durabilidade')) {
        if ($('#sta-label span').text() == '+1') {
            $('#sta-label span').hide();
            bonusSta--;
            quantBonus--; 
        }
    }

    if (botão.text().includes('Olfato Aguçado')) {
        $('#defeitoOlfato').prop('disabled', false);
    }

    if (botão.text().includes('Audição Aguçada')) {
        $('#defeitoSurdez').prop('disabled', false);
        $('#defeitoAudicao').prop('disabled', false);
    }

    if (botão.text().includes('Visão Aguçada')) {
        $('#defeitoVisao').prop('disabled', false);
    }

    if (botão.text().includes('Prodígio')) {
        $('#defeitoDificuldade').prop('disabled', false);
        contadorJutsusGerais -= 2;
    }
    
    if (botão.text().includes('Memória Eidética')) {
        $('#defeitoAmnesia').prop('disabled', false);
        contadorJutsusGerais -= 1;
    }

    if (botão.text().includes('Mente Implacável')) {
        menteImplacavel = '';
    }
}

function adicionarNerfDatabook(botão) {
    if (botão.text().includes('Fraqueza Muscular')) {
        $('#forca-label span').show();
        $('#forca-label span').text('0');
        $('#forca').val(0);
        $('#forca').prop('disabled', true);
        removerQualidade($('#qualidadeForca'));
        $('#qualidadeForca').prop('disabled', true);
    }

    if (botão.text().includes('Baixa Coordenação Motora')) {
        removerQualidade(qualidadeTaijutsu);
        qualidadeTaijutsu.hide();
    }

    if (botão.text().includes('Reflexos Retardados')) {
        removerQualidade($('#qualidadeVel'));
        $('#qualidadeVel').prop('disabled', true);
    }

    if (botão.text().includes('Visão Prejudicada')) {
        removerQualidade($('#qualidadeVisao'));
        $('#qualidadeVisao').prop('disabled', true);
    }

    if (botão.text().includes('Audição Prejudicada')) {
        removerQualidade($('#qualidadeAudicao'));
        $('#qualidadeAudicao').prop('disabled', true);
    }

    if (botão.text().includes('Olfato Prejudicado')) {
        removerQualidade($('#qualidadeOlfato'));
        $('#qualidadeOlfato').prop('disabled', true);
    }

    if (botão.text().includes('Surdez')) {
        removerQualidade($('#qualidadeAudicao'));
        $('#qualidadeAudicao').prop('disabled', true);
    }

    if (botão.text().includes('Gordo')) {
        $('#vel-label span').show();
        $('#vel-label span').text('-1');
        removerDefeito('#defeitoMagricelo');
        $('#defeitoMagricelo').prop('disabled', true);
        nerfVel++;
    }

    if (botão.text().includes('Magricelo')) {
        $('#sta-label span').show();
        $('#sta-label span').text('-1');
        removerDefeito('#defeitoGordo');
        $('#defeitoGordo').prop('disabled', true);
        nerfSta++;
    }

    if (botão.text().includes('Nanismo')) {
        $('#forca-label span').show();
        $('#forca-label span').text('0');
        $('#forca').val(0);
        $('#forca').prop('disabled', true);
        removerQualidade($('#qualidadeForca'));
        $('#qualidadeForca').prop('disabled', true);
        $('#defeitoGigantismo').prop('disabled', true);
    }

    if (botão.text().includes('Gigantismo')) {
        removerDefeito('#defeitoNanismo');
        $('#defeitoNanismo').prop('disabled', true);
    }

    if (botão.text().includes('Amnésia Dissociativa')) {
        removerQualidade($('#qualidadeMemoria'));
        $('#qualidadeMemoria').prop('disabled', true);
    }

    if (botão.text().includes('Impulsivos')) {
        $('#int-label span').show();
        $('#int-label span').text('-1');
        nerfInt++;
    }

    if (botão.text().includes('Imunidade Baixa')) {
        $('#vel-label span').show();
        if ($('#vel-label span').text() == '-1') {
            $('#vel-label span').text('-2');
        } else {
            $('#vel-label span').text('-1');
        }

        $('#forca-label span').show();
        if ($('#forca-label span').text() == '-1') {
            $('#forca-label span').text('-2');
        } else {
            $('#forca-label span').text('-1');
        }
        nerfVel++;
        nerfForca++;
    }

    if (botão.text().includes('Inabilidade em Ninjutsu')) {
        $('#ninjutsu-label span').show();
        $('#ninjutsu-label span').text('0');
        $('#ninjutsu').val(0);
        $('#ninjutsu').prop('disabled', true);
        removerQualidade($(qualidadeNinjutsu));
        $(qualidadeNinjutsu).hide();
    }

    if (botão.text().includes('Inabilidade em Genjutsu')) {
        $('#genjutsu-label span').show();
        $('#genjutsu-label span').text('0');
        $('#genjutsu').val(0);
        $('#genjutsu').prop('disabled', true);
        removerQualidade($(qualidadeGenjutsu));
        $(qualidadeGenjutsu).hide();
    }

    if (botão.text().includes('Dificuldade em Aprender')) {
        removerQualidade($('#qualidadeProdigio'));
        $('#qualidadeProdigio').prop('disabled', true);
    }
}

function removerNerfDatabook(botão) {
    if (botão.text().includes('Fraqueza Muscular')) {
        if($('#forca-label span').text() == '0') {
            $('#forca-label span').hide();
            $('#forca').prop('disabled', false);
            $('#qualidadeForca').prop('disabled', false);
        }
    }

    if (botão.text().includes('Baixa Coordenação Motora')) {
            qualidadeTaijutsu.show();
    }

    if (botão.text().includes('Reflexos Retardados')) {    
            $('#qualidadeVel').prop('disabled', false);
    }

    if (botão.text().includes('Visão Prejudicada')) {
        $('#qualidadeVisao').prop('disabled', false);
    }

    if (botão.text().includes('Audição Prejudicada')) {
        $('#qualidadeAudicao').prop('disabled', false);
    }

    if (botão.text().includes('Gordo')) {
        if($('#vel-label span').text() == '-1') {
            $('#vel-label span').hide();
            $('#defeitoMagricelo').prop('disabled', false);
            nerfVel--;
        }
    }

    if (botão.text().includes('Magricelo')) {
        if($('#sta-label span').text() == '-1') {
            $('#sta-label span').hide();
            $('#defeitoGordo').prop('disabled', false);
            nerfSta--;
        }
    }

    if (botão.text().includes('Nanismo')) {
        if($('#forca-label span').text() == '0') {
            $('#forca-label span').hide();
            $('#forca').prop('disabled', false);
            $('#qualidadeForca').prop('disabled', false);
            $('#defeitoGigantismo').prop('disabled', false);
        }
    }

    if (botão.text().includes('Gigantismo')) {
        $('#defeitoNanismo').prop('disabled', false);
    }

    if (botão.text().includes('Amnésia Dissociativa')) {
        $('#qualidadeMemoria').prop('disabled', false);
    }

    if (botão.text().includes('Impulsivos')) {
        if($('#int-label span').text() == '-1') {
            $('#int-label span').prop('disabled', false);
            nerfVel--;
        }
    }

    if (botão.text().includes('Imunidade Baixa')) {
        if ($('#vel-label span').text() == '-2') {
            $('#vel-label span').text('-1');
        } else {
            $('#vel-label span').prop('disabled', false);
        }

        if ($('#forca-label span').text() == '-2') {
            $('#forca-label span').text('-1');
        } else {
            $('#forca-label span').prop('disabled', false);
        }
        nerfVel--;
        nerfForca--;
    }

    if (botão.text().includes('Inabilidade em Ninjutsu')) {
        if ($('#ninjutsu-label span').text() == '0') {
            $('#ninjutsu-label span').hide();
            $('#ninjutsu').prop('disabled', false);
            $(qualidadeNinjutsu).show();
        }
    }

    if (botão.text().includes('Inabilidade em Genjutsu')) {
        if ($('#genjutsu-label span').text() == '0') {
            $('#genjutsu-label span').show();
            $('#genjutsu').prop('disabled', false);
            $(qualidadeGenjutsu).show();
        }
    }

    if (botão.text().includes('Dificuldade em Aprender')) {
        $('#qualidadeProdigio').prop('disabled', false);
    }
}

$('#qualidadeElemental').prop('disabled', true);
$('#qualidadeMestre').prop('disabled', true);
$('#qualidadeFuin').prop('disabled', true);
$('#qualidadeArmamentista').prop('disabled', true);