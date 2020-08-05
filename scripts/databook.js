var pontosDistribuidos = 0;
var bonusHatake = 0;
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
    limiteDatabook = (7 + Number($('#semCla').is(':checked')) + bonusHatake) - somaDosAtributos;

    return limiteDatabook;   
}



document.addEventListener('DOMContentLoaded', function() {
	var inputs = document.getElementsByClassName('input-number-wrapper')
	Array.prototype.forEach.call(inputs, function(el) {
		var input = el.getElementsByTagName('input')[0]
		
		el.getElementsByClassName('increase')[0].addEventListener('click', function() {
            maxPontosDatabook = getDatabookMaxPoints();
            var val = +input.value;
            if (maxPontosDatabook == 0 || input.getAttribute('max') == input.value) {
                return false;
            }
            val++;
            input.value = val
            databookAtualizarTexto();
            atualizarGrafico();
        });

		el.getElementsByClassName('decrease')[0].addEventListener('click', function() {
            var val = +input.value
            val--;
            input.value = val > 0 ? val: 0
            databookAtualizarTexto();
            atualizarGrafico();
        });
	});
});

$( ".spinner" ).spinner();