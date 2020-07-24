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
    botão.removeClass('qualidade-escolhida');
    valorQualidade = parseInt(botão.val());
    pontosQualidades -= valorQualidade;
    removerBonusDatabook(botão);
}

function adicionarDefeito(botão) {
    botão.addClass('defeito-escolhido');
    valorDefeito = parseInt(botão.val());
    pontosDefeitos += valorDefeito;
}

function removerDefeito(botão) {
    botão.removeClass('defeito-escolhido');
    valorDefeito = parseInt(botão.val());
    pontosDefeitos -= valorDefeito;
}


$('#qualidades .qualidades-defeitos :button').click(function(){
    botão = $(this);
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
    botão = $(this);
    minPontosDefeitos = getDefeitosMinPoints();
    valorDefeito = parseInt(botão.val());
    botão = $(this)
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
            bonusTai++;
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
}

function removerBonusDatabook(botão) {
    if (botão.text().includes('Habilidade em Ninjutsu')) {
        if ($('#ninjutsu-label span').text() == '+1') {
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
            $('#genjutsu-label span').hide();
            bonusTai--;
            quantBonus--;
        }
    }

    if (botão.text().includes('Força Aguçada')) {
        if ($('#forca-label span').text() == '+1') {
            $('#forca-label span').hide();
            bonusForca--;
            quantBonus--;   
        }
    }

    if (botão.text().includes('Inteligência Aguçada')) {
        if ($('#int-label span').text() == '+1') {
            $('#int-label span').show();
            $('#int-label span').text('+1')
            bonusInt--;
            quantBonus--;
        }   
    }

    if (botão.text().includes('Agilidade Aguçada')) {
        if ($('#vel-label span').text() = '+1') {
            $('#vel-label span').show();
            bonusVel++;
            quantBonus++;
        }
    }

    if (botão.text().includes('Grande Durabilidade')) {
        if ($('#sta-label span').text() = '+1') {
            $('#sta-label span').show();
            bonusSta--;
            quantBonus--; 
        }
    }
}