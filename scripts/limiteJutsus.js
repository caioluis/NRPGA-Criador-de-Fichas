var limiteNin = limiteGen = limiteTai = '';
var pontosNin = pontosTai = pontosGen = 0;
var pericia = '';
var contadorJutsusGerais = 0;
var jutsusGerais = '';
var menteImplacavel = '';

$('#segunda-natureza').parent().hide();
$('#terceira-natureza').parent().hide();
$('#kg-elemental').parent().hide();

$('#primeira-natureza').val('');
$('#segunda-natureza').val('');
$('#terceira-natureza').val('');
$('#kg-elemental').val('');

function atualizarLimites() {
    pontosNin = parseInt($('#ninjutsu').val()) + bonusNin;
    pontosTai = parseInt($('#taijutsu').val()) + bonusTai;
    pontosGen = parseInt($('#genjutsu').val()) + bonusGen;
    pontosSelos = parseInt($('#selos').val());
    pontosInt = parseInt($('#int').val()) + bonusInt;

    limiteNin = `, +${pontosNin + habilidadeNin} Ninjutsus`
    limiteTai = `, +${pontosTai + habilidadeTai} Taijutsus`
    limiteGen = `, +${pontosGen + habilidadeGen} Genjutsus`
    if (pontosNin == 6) {
        limiteNin += ', +1 Ninjutsu de todos os ranks'
    }
    if (pontosNin == 0 && habilidadeNin == 0) {
        limiteNin = '';
    }

    if (pontosTai == 6) {
        limiteTai += ', +1 Taijutsu de todos os ranks'
    }
    if (pontosTai == 0 && habilidadeTai == 0) {
        limiteTai = '';
    }  

    if (pontosGen == 6) {
        limiteGen += ', +1 Genjutsu de todos os ranks'
    }
    if (pontosGen == 0 && habilidadeGen == 0) {
        limiteGen = '';
    }

    if (contadorJutsusGerais != 0){
        jutsusGerais = `, +${contadorJutsusGerais} Jutsus Gerais`;
    }

    if (pontosNin > 2) {
        adicionarPericia();
        $('#qualidadeElemental').prop('disabled', false);
    } else {
        $('#qualidadeElemental').prop('disabled', true);
        removerQualidade($('#qualidadeElemental'));
        removerQualidade($('#qualidadesKg :button'));
        pericia = '';
    }

    if (pontosNin > 4 && $('#qualidadeElemental').hasClass('qualidade-escolhida')) {
        $('#qualidadeMestre').prop('disabled', false);
    } else {
        $('#qualidadeMestre').prop('disabled', true);
        removerQualidade($('#qualidadeElemental'));
    }

    if (pontosNin > 2 && pontosSelos > 0 && pontosInt > 2 && $('#qualidadeGCC').hasClass('qualidade-escolhida')){
        $('#qualidadeFuin').prop('disabled', false);
    } else {
        $('#qualidadeFuin').prop('disabled', true);
        removerQualidade($('#qualidadeFuin'));
    }

    if (pontosTai > 2) {
        $('#qualidadeArmamentista').prop('disabled', false);
    } else {
        $('#qualidadeArmamentista').prop('disabled', true);
        removerQualidade($('#qualidadeArmamentista'));
    }

    $('#limite-jutsus').val('5 Jutsus & +1 Rank S' + jutsusGerais + limiteNin + limiteTai + limiteGen + menteImplacavel + pericia);
    atualizarElementos();
};

function atualizarElementos(){
    $('#primeira-natureza').val('');
    $('#segunda-natureza').val('');
    $('#terceira-natureza').val('');
    $('#primeira-natureza').prop('disabled',true);
    $('#segunda-natureza').prop('disabled',true);
    $('#terceira-natureza').prop('disabled',true);

    if ($('#kg-elemental').val() != '--' && $('#kg-elemental').val() != '') {
        if ($('#kg-elemental').val() == 'Jinton') {
            if (pontosNin > 0) {
                $('#primeira-natureza').prop('disabled', false);
            }
            if (pontosNin > 1) {
                $('#segunda-natureza').prop('disabled', false);
            }
            if (pontosNin > 2) {
                $('#terceira-natureza').prop('disabled', false);
            }
        } else if ($('#kg-elemental').val() != 'Shōton' && $('#kg-elemental').val() != 'Kōton') {
            if (pontosNin > 0) {
                $('#primeira-natureza').prop('disabled', false);
            }
            if (pontosNin > 1) {
                $('#segunda-natureza').prop('disabled', false);
            }
        } else {
            if ($('#kg-elemental').val() == 'Kōton') {
                if (pontosNin > 0) {
                    $('#primeira-natureza').val($('#afinidade-elemental').val());
                    $('#afinidade-elemental').change(function() {
                        $('#primeira-natureza').val($('#afinidade-elemental').val());
                    });  
                }
            } else {
                if (pontosNin > 0) {
                    $('#primeira-natureza').val('Doton');
                }
            }
        }
    } else {
        if (pontosNin > 1) {
            $('#primeira-natureza').val($('#afinidade-elemental').val());
            $('#afinidade-elemental').change(function() {
                $('#primeira-natureza').val($('#afinidade-elemental').val());
            });  
        }
    }
}

$("select.naturezaDrop").change(function () {
    $(`select.naturezaDrop option[value='${$(this).data('index')}']`).prop('disabled', false);
    $(this).data('index', this.value);
    $(`select.naturezaDrop option[value='${this.value}']:not([value='0'])`).prop('disabled', true);
});