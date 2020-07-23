var pontosQualidades = 0;
var pontosDefeitos = 0;

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
    bonusDatabook(botão);
}

function removerQualidade(botão) {
    botão.removeClass('qualidade-escolhida');
    valorQualidade = parseInt(botão.val());
    pontosQualidades -= valorQualidade;
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

function bonusDatabook(botão) {
    console.log('bonus')
    if (botão.text().includes('Força Aguçada')) {
        console.log('teste')
        $('#forca-label span').show();
        $('#forca-label span').text('+1');
    }
}