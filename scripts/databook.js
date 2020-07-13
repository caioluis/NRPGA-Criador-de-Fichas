var pontosDistribuidos = 0;

// Máximo de pontos Databook
var maxPontosDatabook = getDatabookMaxPoints();

$('#pontos-label').html('Pontos a distribuir: ' + maxPontosDatabook);


function databookAtualizarTexto() {
    $('#pontos-label').html('Pontos a distribuir: ' + getDatabookMaxPoints());
}

// Manipulação Databook

function addPointsToDatabook(field){
    this.maxPontosDatabook = getDatabookMaxPoints();
    
    if(this.maxPontosDatabook < 0){
        var reduction = (parseInt(this.maxPontosDatabook) == 0) ? -1 : 0
        field.value = parseInt(field.value) + (parseInt(this.maxPontosDatabook) - reduction);
        this.maxPontosDatabook = 0;
    } 
    databookAtualizarTexto();
}


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

    return (7 + Number($('#semCla').is(':checked'))) - somaDosAtributos;
    
}
