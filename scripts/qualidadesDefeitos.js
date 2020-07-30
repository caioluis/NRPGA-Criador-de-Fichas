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
    if( (botão.attr('class') == undefined) || (botão.attr('class') == '') ){
        if(valorQualidade > maxPontosQualidades) {
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
        qualidadeNinjutsu.prop('disabled', false);
        qualidadeTaijutsu.prop('disabled', false);
        qualidadeGenjutsu.prop('disabled', false);  
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
    if (quantBonus == 2) {
        alert("Você já atingiu o máximo de pontos adquiríveis através das qualidades. Esta qualidade será adicionada, mas não dará pontos extra.")
    } else {
        if (botão.text().includes('Habilidade em Ninjutsu')) {
            $('#ninjutsu-label span').show();
            $('#ninjutsu-label span').text('+1');
            bonusNin++;
            quantBonus++;
            limiteNin += 2;
        }

        if (botão.text().includes('Habilidade em Taijutsu')) {
            $('#taijutsu-label span').show();
            $('#taijutsu-label span').text('+1');
            bonusTai++;
            quantBonus++;
        }

        if (botão.text().includes('Habilidade em Genjutsu')) {
            $('#genjutsu-label span').show();
            $('#genjutsu-label span').text('+1');
            bonusGen++;
            quantBonus++;
        }

        if (botão.text().includes('Força Aguçada')) {
            $('#forca-label span').show();
            $('#forca-label span').text('+1')
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

    if (botão.text().includes('Habilidade em Ninjutsu')) {
        $('#defeitoNin').hide();
    }

    if (botão.text().includes('Habilidade em Genjutsu')) {
        $('#defeitoGen').hide();
    }

    if (botão.text().includes('Prodígio')) {
        $('#defeitoDificuldade').hide();
    } 
}

function removerBonusDatabook(botão) {
    if (botão.text().includes('Habilidade em Ninjutsu')) {
        if ($('#ninjutsu-label span').text() == '+1') {
            $('#ninjutsu-label span').hide();
            bonusNin--;
            quantBonus--;
            limiteNin -= 2;
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
            $('#genjutsu-label span').hide();
            bonusGen--;
            quantBonus--;
        }
    }

    if (botão.text().includes('Força Aguçada')) {
        if ($('#forca-label span').text() == '+1' || $('#forca-label span').text() == '0') {
            $('#forca-label span').hide();
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

    if (botão.text().includes('Habilidade em Ninjutsu')) {
        $('#defeitoNin').show();
    }

    if (botão.text().includes('Habilidade em Genjutsu')) {
        $('#defeitoGen').show();
    }


    if (botão.text().includes('Prodígio')) {
        $('#defeitoDificuldade').show();
    } 
}

function adicionarNerfDatabook(botão) {
    if (botão.text().includes('Fraqueza Muscular')) {
        $('#forca-label span').show();
        $('#forca-label span').text('0');
        $('#forca').val(0);
        $('#forca').prop('disabled', true);
        removerQualidade($('#qualidadeForca'));
        $('#qualidadeForca').hide();
    }

    if (botão.text().includes('Baixa Coordenação Motora')) {
        removerQualidade(qualidadeTaijutsu);
        qualidadeTaijutsu.hide();
    }

    if (botão.text().includes('Reflexos Retardados')) {
        removerQualidade($('#qualidadeVel'));
        $('#qualidadeVel').hide();
    }

    if (botão.text().includes('Visão Prejudicada')) {
        removerQualidade($('#qualidadeVisao'));
        $('#qualidadeVisao').hide();
    }

    if (botão.text().includes('Audição Prejudicada')) {
        removerQualidade($('#qualidadeAudicao'));
        $('#qualidadeAudicao').hide();
    }

    if (botão.text().includes('Audição Prejudicada')) {
        removerQualidade($('#qualidadeAudicao'));
        $('#qualidadeAudicao').hide();
    }

    if (botão.text().includes('Gordo')) {
        $('#vel-label span').show();
        $('#vel-label span').text('-1');
        $('#defeitoMagricelo').hide();
        nerfVel++;
    }

    if (botão.text().includes('Magricelo')) {
        $('#sta-label span').show();
        $('#sta-label span').text('-1');
        $('#defeitoGordo').hide();
        nerfSta++;
    }

    if (botão.text().includes('Nanismo')) {
        $('#forca-label span').show();
        $('#forca-label span').text('0');
        $('#forca').val(0);
        $('#forca').prop('disabled', true);
        removerQualidade($('#qualidadeForca'));
        $('#qualidadeForca').hide();
        $('#defeitoGigantismo').hide();
    }

    if (botão.text().includes('Gigantismo')) {
        $('#defeitoNanismo').hide();
    }

    if (botão.text().includes('Amnésia Dissociativa')) {
        removerQualidade($('#qualidadeMemoria'));
        $('#qualidadeMemoria').hide();
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
        $('#qualidadeProdigio').hide()
    }
}

function removerNerfDatabook(botão) {
    if (botão.text().includes('Fraqueza Muscular')) {
        if($('#forca-label span').text() == '0') {
            $('#forca-label span').hide();
            $('#forca').prop('disabled', false);
            $('#qualidadeForca').show();
        }
    }

    if (botão.text().includes('Baixa Coordenação Motora')) {
            qualidadeTaijutsu.show();
    }

    if (botão.text().includes('Reflexos Retardados')) {    
            $('#qualidadeVel').show();
    }

    if (botão.text().includes('Visão Prejudicada')) {
        $('#qualidadeVisao').show();
    }

    if (botão.text().includes('Audição Prejudicada')) {
        $('#qualidadeAudicao').show();
    }

    if (botão.text().includes('Gordo')) {
        if($('#vel-label span').text() == '-1') {
            $('#vel-label span').hide();
            $('#defeitoMagricelo').show();
            nerfVel--;
        }
    }

    if (botão.text().includes('Magricelo')) {
        if($('#sta-label span').text() == '-1') {
            $('#sta-label span').hide();
            $('#defeitoGordo').show();
            nerfSta--;
        }
    }

    if (botão.text().includes('Nanismo')) {
        if($('#forca-label span').text() == '0') {
            $('#forca-label span').hide();
            $('#forca').prop('disabled', false);
            $('#qualidadeForca').show();
            $('#defeitoGigantismo').show();
        }
    }

    if (botão.text().includes('Gigantismo')) {
        $('#defeitoNanismo').show();
    }

    if (botão.text().includes('Amnésia Dissociativa')) {
        $('#qualidadeMemoria').show();
    }

    if (botão.text().includes('Impulsivos')) {
        if($('#int-label span').text() == '-1') {
            $('#int-label span').hide();
            nerfVel--;
        }
    }

    if (botão.text().includes('Imunidade Baixa')) {
        if ($('#vel-label span').text() == '-2') {
            $('#vel-label span').text('-1');
        } else {
            $('#vel-label span').hide();
        }

        if ($('#forca-label span').text() == '-2') {
            $('#forca-label span').text('-1');
        } else {
            $('#forca-label span').hide();
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
        $('#qualidadeProdigio').show()
    }
}
