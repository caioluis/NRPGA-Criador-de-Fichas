
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


    claEscolhido.change(
    function bonificarClasKgs(){
        
        var qualidadesEscolhidas = document.getElementsByClassName('qualidade-escolhida');
        var defeitosEscolhidos = document.getElementsByClassName('defeito-escolhido');
        
        while (qualidadesEscolhidas.length > 0){
            qualidadesEscolhidas[0].classList.remove('qualidade-escolhida');
        }
        while (defeitosEscolhidos.length > 0) {
            defeitosEscolhidos[0].classList.remove('defeito-escolhido');
        }
        
        qualidadesSelecionadas = "";
        defeitosSelecionados = "";
        pontosQualidades = 0;
        pontosDefeitos = 0;
        $('.qualidadesClas').hide();
        
        switch (claEscolhido.val()) {
            case "Aburame":
            qualidadesSelecionadas = "&ltb&gt+&lt/b&gtConhecimentos Científicos (0) \n";
            break;
            case "Akimichi":
            document.getElementById("qualidadeForca").classList.add("qualidade-escolhida")
            document.getElementById("qualidadeForca").innerHTML = "Força Aguçada (0)"
            document.getElementById("qualidadeForca").disabled = true;
            document.getElementById("defeitoGordo").classList.add("defeito-escolhido");
            pontosDefeitos++;
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
            default:
            break;
            
        }
        document.getElementById("qualidades-contador").innerHTML = "Qualidades - Pontos restantes: " + getQualidadesMaxPoints();
        document.getElementById("defeitos-contador").innerHTML = "Defeitos - Pontos necessários: " + getDefeitosMinPoints();
    });

    $('#qualidadesHatake .qualidades-defeitos :button').click(function(){
        if ( ($(this).attr('class') == undefined) || ($(this).attr('class') == '') ) {
            $(this).addClass('qualidade-escolhida');
            $('#hatakeNin').prop('disabled', true);
            $('#hatakeTai').prop('disabled', true);
            $('#hatakeGen').prop('disabled', true);
            qualidadeNinjutsu.prop('disabled', false);
            qualidadeTaijutsu.prop('disabled', false);
            qualidadeGenjutsu.prop('disabled', false);
            $(this).prop('disabled', false);
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
                qualidadeNinjutsu.prop('disabled', false);
            } else if ($(this).attr('id') == 'hatakeTai') {
                qualidadeTaijutsu.show()
                qualidadeTaijutsu.prop('disabled', false);
            } else {
                qualidadeGenjutsu.show()
                qualidadeGenjutsu.prop('disabled', false);
            }
        }
        atualizarTexto();
    });