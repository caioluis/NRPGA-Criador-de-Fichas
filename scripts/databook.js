var pontosDistribuidos = 0;
var bonus = 0;
// Máximo de pontos Databook
var maxPontosDatabook = getDatabookMaxPoints();

$('#pontos-label').html('Pontos a distribuir: ' + maxPontosDatabook);


function databookAtualizarTexto() {
    $('#pontos-label').html('Pontos a distribuir: ' + getDatabookMaxPoints());
}

// Manipulação Databook

$('.atributo :input').on('input', function() {
    maxPontosDatabook = getDatabookMaxPoints();
    if(maxPontosDatabook < 0) {
        $(this).val($(this).val() -1);
    }
    databookAtualizarTexto();
}); 

function getDatabookMaxPoints()
{
    nin = parseInt($('#ninjutsu').val());
    tai = parseInt($('#taijutsu').val());
    gen = parseInt($('#genjutsu').val());
    int = parseInt($('#int').val());
    forca = parseInt($('#forca').val());
    vel = parseInt($('#vel').val());
    sta = parseInt($('#sta').val());
    selos = parseInt($('#selos').val());
    
    somaDosAtributos = nin + tai + gen + int + forca + vel + sta + selos;
    limiteDatabook = (7 + Number($('#semCla').is(':checked')) + bonus) - somaDosAtributos;

    return limiteDatabook;
    
}
