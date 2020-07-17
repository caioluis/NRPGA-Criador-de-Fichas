var pontosQualidades = 0;
var pontosDefeitos = 0;

var maxPontosQualidades = getQualidadesMaxPoints();
var minPontosDefeitos = getDefeitosMinPoints();

$('#qualidades-contador').html('Qualidades - Pontos restantes: ' + (maxPontosQualidades));


function atualizarTexto() {
    $('#qualidades-contador').html('Qualidades - Pontos restantes: ' + getQualidadesMaxPoints());
    $('#defeitos-contador').html('Defeitos - Pontos necessários: ' + getDefeitosMinPoints());
}


$('#qualidades .qualidades-defeitos :button').click(function(){
    maxPontosQualidades = getQualidadesMaxPoints();
    valorQualidade = parseInt($(this).val());

    if( ($(this).attr('class') == undefined) || ($(this).attr('class') == '') ){
        if(valorQualidade > maxPontosQualidades) {
            return false;
        } else{
            $(this).addClass('qualidade-escolhida');
            pontosQualidades += valorQualidade;
            if ($(this).attr('id') == 'qualidadeNinjutsu') {
                qualidadeGenjutsu.prop('disabled', true);
                qualidadeTaijutsu.prop('disabled', true);
            } else if ($(this).attr('id') == 'qualidadeTaijutsu') {
                qualidadeGenjutsu.prop('disabled', true);
                qualidadeNinjutsu.prop('disabled', true);
            } else if ($(this).attr('id') == 'qualidadeGenjutsu') {
                qualidadeNinjutsu.prop('disabled', true);
                qualidadeTaijutsu.prop('disabled', true);
            }
        }
    } else {
        $(this).removeClass('qualidade-escolhida');
        pontosQualidades -= valorQualidade;
        qualidadeNinjutsu.prop('disabled', false);
        qualidadeTaijutsu.prop('disabled', false);
        qualidadeGenjutsu.prop('disabled', false);
    }
    atualizarTexto();
});

$('#defeitos .qualidades-defeitos :button').click(function(){
    minPontosDefeitos = getDefeitosMinPoints();
    valorDefeito = parseInt($(this).val());
    
    if(($(this).attr('class') == undefined) || ($(this).attr('class') == '')){
        $(this).addClass('defeito-escolhido');
        pontosDefeitos += valorDefeito;
    } else {
        $(this).removeClass('defeito-escolhido');
        pontosDefeitos -= valorDefeito;
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