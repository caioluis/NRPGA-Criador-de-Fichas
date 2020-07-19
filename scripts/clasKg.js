
var toggleText = $('#clakg-label');
var claEscolhido =  $('#cla-dropdown');
var kgEscolhida = $('#kg-dropdown');
    toggleText.click(
        function claKgToggle () {     
        if (toggleText.html() == '<mark>Clã</mark>/Kekkei Genkai') {
            toggleText.html('Clã/<mark>Kekkei Genkai</mark>');
            claEscolhido.val('--');
            claEscolhido.hide();
            kgEscolhida.show();
            
        } else {
            toggleText.html('<mark>Clã</mark>/Kekkei Genkai');
            kgEscolhida.val('--');
            kgEscolhida.hide();
            claEscolhido.show();
        }
    });

    $(document).ready(function(){
        $('#semCla').change(
        function semClaHandler(field){
            databookAtualizarTexto();
            atualizarTexto();
            if($('#semCla').is(':checked')){
                $('.qualidadesClas').hide();
                $('#cla-dropdown').val('--'); 
                $('#cla-dropdown').attr("disabled", true);
                $('#kg-dropdown').val('--'); 
                $('#kg-dropdown').attr("disabled", true);
            }else {
                $('#cla-dropdown').attr("disabled", false);
                $('#kg-dropdown').attr("disabled", false);
            }
        })
    });
    

    qualidadeNinjutsu = $('#qualidadeNinjutsu')
    qualidadeTaijutsu = $('#qualidadeTaijutsu')
    qualidadeGenjutsu = $('#qualidadeGenjutsu')

    function clearQualidades() {
        qualidadesEscolhidas = $('.qualidade-escolhida');
        qualidadesEscolhidas.removeClass('qualidade-escolhida');
        qualidadesSelecionadas = '';
        pontosQualidades = 0;
    }

    function clearDefeitos(){
        defeitosEscolhidos = $('.defeito-escolhido');
        defeitosEscolhidos.removeClass('defeito-escolhido');
        defeitosSelecionados = '';
        pontosDefeitos = 0;
    }

    claEscolhido.change(
    function bonificarClasKgs(){
        
        clearQualidades();
        clearDefeitos();
        
        $('#qualidadesClas').hide();
        
        switch (claEscolhido.val()) {
            case "Aburame":
                qualidadesSelecionadas = "&ltb&gt+&lt/b&gtConhecimentos Científicos (0) \n";
            break;
            case "Akimichi":
                document.getElementById("qualidadeForca").classList.add("qualidade-escolhida")
                document.getElementById("qualidadeForca").innerHTML = "Força Aguçada (0)"
                document.getElementById("qualidadeForca").disabled = true;
                document.getElementById("defeitoGordo").disabled = true;
            break;
            case "Chinoike":
                qualidadeGenjutsu.addClass('qualidade-escolhida');
                qualidadeGenjutsu.html('Habilidade em Genjutsu (0)');
                qualidadeGenjutsu.prop('disabled', true);
                document.getElementById("kg-dropdown").value = "Ketsuryūgan";
            break;
            case "Fuuma":
                qualidadeNinjutsu.addClass('qualidade-escolhida');
                qualidadeNinjutsu.html('Habilidade em Ninjutsu (0)');
                qualidadeNinjutsu.prop('disabled', true);
            break;
            case "Hatake":
                $('#qualidadeVersatil').addClass('qualidade-escolhida');
                $('#qualidadesHatake').show();
            case "Hōki":
                $('#qualidadeGCC').addClass('qualidade-escolhida');
                $('#qualidadeGCC').html('Grande Controle de Chakra (0)');
                $('#qualidadeGCC').prop('disabled', true);
            default:
            break;
            
        }
        document.getElementById("qualidades-contador").innerHTML = "Qualidades - Pontos restantes: " + getQualidadesMaxPoints();
        document.getElementById("defeitos-contador").innerHTML = "Defeitos - Pontos necessários: " + getDefeitosMinPoints();
    });

    $('#qualidadesHatake .qualidades-defeitos :button').click(function(){

        qualidadesEscolhidas = $('#qualidades .qualidade-escolhida');
        qualidadesEscolhidas.removeClass('qualidade-escolhida');
        qualidadesSelecionadas = '';
        pontosQualidades = 0;
        qualidadeNinjutsu.prop("disabled", false);
        qualidadeTaijutsu.prop('disabled', false);
        qualidadeGenjutsu.prop('disabled', false);

        if ( ($(this).attr('class') == undefined) || ($(this).attr('class') == '') ) {
            $(this).addClass('qualidade-escolhida');
            $('#hatakeNin').prop('disabled', true);
            $('#hatakeTai').prop('disabled', true);
            $('#hatakeGen').prop('disabled', true);
            $(this).prop('disabled', false);
            $('#qualidades').show();
            if ($(this).attr('id') == 'hatakeNin') {
                qualidadeNinjutsu.removeClass('qualidade-escolhida')
                qualidadeNinjutsu.hide();
            } else if ($(this).attr('id') == 'hatakeTai') {
                qualidadeTaijutsu.removeClass('qualidade-escolhida')
                qualidadeTaijutsu.hide()
            } else {
                qualidadeGenjutsu.removeClass('qualidade-escolhida')
                qualidadeGenjutsu.hide()
            }
        } else {
            $(this).removeClass('qualidade-escolhida');
            $('#hatakeNin').prop('disabled', false);
            $('#hatakeTai').prop('disabled', false);
            $('#hatakeGen').prop('disabled', false);
            $(this).prop('disabled', false);
            if ($(this).attr('id') == 'hatakeNin') {
                qualidadeNinjutsu.show();
            } else if ($(this).attr('id') == 'hatakeTai') {
                qualidadeTaijutsu.show()
            } else {
                qualidadeGenjutsu.show()
            }
        }
        atualizarTexto();
    });