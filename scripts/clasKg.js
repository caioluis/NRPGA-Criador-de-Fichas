
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
            clearQualidades();
            clearDefeitos();
            databookAtualizarTexto();
            atualizarTexto();
            $('.atributo span').text('');
            $('.atributo span').hide();
            $('.cla').hide();
            if($('#semCla').is(':checked')){
                $('.qualidadesClas').hide();
                $('#cla-dropdown').val('--'); 
                $('#cla-dropdown').attr("disabled", true);
                $('#kg-dropdown').val('--'); 
                $('#kg-dropdown').attr("disabled", true);
            } else {
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
        $('button').show();
    }

    function clearDefeitos(){
        defeitosEscolhidos = $('.defeito-escolhido');
        defeitosEscolhidos.removeClass('defeito-escolhido');
        defeitosSelecionados = '';
        pontosDefeitos = 0;
        $('button').show();
    }

    function clearNerfsBuffs(){
        quantBonus = 0;
        bonusDatabook.forEach(atributo => {
            atributo = 0;
        });
        nerfsDatabook.forEach(atributo => {
            atributo = 0;
        });
    }

    function clearNaturezas() {
        $('#primeira-natureza').text('');
        $('#primeira-natureza').prop('disabled', false);
        $('#segunda-natureza').text('');
        $('#segunda-natureza').prop('disabled', false);
        $('#kg-elemental').text('');
        $('#kg-elemental').prop('disabled', false);
        $('#afinidade-elemental').text('');
        $('#afinidade-elemental').prop('disabled', false);
    }

    claEscolhido.change(
    function bonificarClas(){
        
        clearQualidades();
        clearDefeitos();
        clearNaturezas();
        clearNerfsBuffs();
        bonusHatake = 0;
        $('.atributo span').text('');
        $('.atributo span').hide();
        $('.cla').hide();
        
        switch (claEscolhido.val()) {
            case "Aburame":
                $('#qualidadesAburame').show();
                $('#aburameCientificos').addClass('qualidade-escolhida');
                break;
            case "Akimichi":
                $('#qualidadesAkimichi').show();
                adicionarQualidade($('#akimichiForca'));
                $('#qualidadeForca').hide();
                $('#defeitosAkimichi').show();
                adicionarDefeito($('#akimichiGordo'));
                $('#defeitoGordo').hide();
                $('#defeitoMagricelo').hide();
                $('#defeitoFraqueza').hide();
                break;
            case "Chinoike":
                $('#qualidadesChinoike').show();
                adicionarQualidade($('#chinoikeGen'));
                qualidadeGenjutsu.hide();
                kgEscolhida.val('Ketsuryūgan');
                break;
            case "Fuuma":
                $('#qualidadesFuuma').show();
                $('#fuumaNin').addClass('qualidade-escolhida');
                qualidadeNinjutsu.hide();
                break;
            case "Hatake":
                $('#qualidadesHatake').show();
                $('#qualidadeVersatil').addClass('qualidade-escolhida');
                bonusHatake = 1;
                break;
            case "Hōki":
                $('#qualidadesHoki').show();
                $('#hokiGCC').addClass('qualidade-escolhida');
                $('#qualidadeGCC').hide();
                break;
            case "Hoshigaki":
                $('#qualidadesHoshigaki').show();
                $('#hoshigakiAnfibio').addClass('qualidade-escolhida');
                $('#hoshigakiPericia').addClass('qualidade-escolhida');
                $('#qualidadeAnfibio').hide();
                break;
            case "Hozuki":
                $('#qualidadesHozuki').show();
                $('#hozukiPericia').addClass('qualidade-escolhida');
                $('#defeitosHozuki').show();
                $('#hozukiVicio').addClass('defeito-escolhido');
                break;
            case "Hyuuga":
                $('#qualidadesHyuuga').show();
                adicionarQualidade($('#hyuugaTai'));
                adicionarQualidade($('#hyuugaGCC'));
                $('#qualidadeGCC').hide();
                qualidadeTaijutsu.hide();
                break;
            case "Inuzuka":
                $('#qualidadesInuzuka').show();
                $('#inuzukaInstintos').addClass('qualidade-escolhida');
                $('#inuzukaOlfato').addClass('qualidade-escolhida');
                $('#qualidadeInstintos').hide();
                $('#qualidadeOlfato').hide();
                break;
            case "Juugo":
                $('#qualidadesJuugo').show();
                $('#juugoNatural').addClass('qualidade-escolhida');
                $('#defeitosJuugo').show();
                $('#juugoInsanidade').addClass('defeito-escolhido');
                break;
            case "Kaguya":
                $('#qualidadesKaguya').show();
                adicionarQualidade($('#kaguyaTai'));
                qualidadeTaijutsu.hide();
                break;
            case "Kamizuru":
                $('#qualidadesKamizuru').show();
                $('#kamizuruCientificos').addClass('qualidade-escolhida');
                break;
            case "Kedoin":
                $('#qualidadesKedoin').show();
                $('#kedoinDominio').addClass('qualidade-escolhida');
                $('#defeitoHabilidadeSocial').hide();
                break;
            case "Kurama":
                $('#qualidadesKurama').show();
                adicionarQualidade($('#kuramaGen'));
                qualidadeGenjutsu.hide();
                break;
            case "Lee":
                $('#qualidadesLee').show();
                adicionarQualidade($('#leeTai'));
                $('#defeitosLee').show();
                adicionarDefeito($('#leeInabilidadeTai'));
                adicionarDefeito($('#leeInabilidadeGen'));
                qualidadeGenjutsu.hide();
                qualidadeTaijutsu.hide();
                qualidadeNinjutsu.hide();
                $('#defeitoNin').hide();
                $('#defeitoGen').hide()
                break;
            case "Nara":
                $('#qualidadesNara').show();
                adicionarQualidade($('#naraInt'));
                ('#qualidadeInt').hide();
                break;
            case "Sarutobi":
                $('#qualidadesSarutobi').show();
                adicionarQualidade($('#sarutobiNin'));
                qualiadadeNinjutsu.hide();
            break;
            case "Senju":
                $('#qualidadesSenju').show();
                $('#senjuVitalidade').addClass('qualidade-escolhida');
                $('#senjuGRC').addClass('qualidade-escolhida');
                $('#qualidadeGRC').hide();
                break;
            case "Shimura":
                $('#qualidadesShimura').show();
                $('#periciaShimura').addClass('qualidade-escolhida');
                break;
            case "Uchiha":
                $('#qualidadesUchiha').show();
                adicionarQualidade($('#uchihaGRC'));
                $('#qualidadeGRC').hide();
                $('#defeitosUchiha').show();
                adicionarDefeito($('#uchihaAmnesia'));
                adicionarDefeito($('#uchihaMaldicao'));
                $('#defeitoAmnesia').hide();
                break;
            case "Uzumaki":
                $('#qualidadesUzumaki').show();
                $('#uzumakiGRC').addClass('qualidade-escolhida');
                adicionarQualidade($('#uzumakiVitalidade'));
                $('#qualidadeGRC').hide();
                $('#qualidadeVitalidade').hide();
                break;
            case "Yamanaka":
                $('#qualidadesYamanaka').show();
                $('#yamanakaSensor').addClass('qualidade-escolhida');
                $('#qualidadeSensor').hide();
                break;
            case "Yotsuki":
                $('#qualidadesYotsuki').show();
                $('#yotsukiPericia').addClass('qualidade-escolhida');
                break;
            case "Yuki":
                $('#qualidadesYuki').show();
                $('#yukiPericia').addClass('qualidade-escolhida');
                break;
            default:
                break;
            
        }
        databookAtualizarTexto();
        atualizarTexto();
    });

    kgEscolhida.change(function bonificarKgs(){
        clearQualidades();
        clearDefeitos();
        clearNaturezas();
        clearNerfsBuffs();
        $('.atributo span').text('');
        $('.atributo span').hide();
        $('.cla').hide();

        switch (kgEscolhida.val()) {
            case 'Akagan':
                $('#qualidadesAkagan').show();
                adicionarQualidade($('#akaganGen'));
                qualidadeGenjutsu.hide();
                break;
            case 'Bakuton':
                $('#qualidadesBakuton').show();
                adicionarQualidade($('#bakutonPericia'));
                $('#defeitoElemental').hide();
                $('#primeira-natureza').val('Doton');
                $('#primeira-natureza').prop('disabled', true);
                $('#segunda-natureza').val('Raiton');
                $('#segunda-natureza').prop('disabled', true);
                $('#kg-elemental').val('Bakuton');
                $('#kg-elemental').prop('disabled', true);
                $('#afinidade-elemental').val('Doton, Raiton e Bakuton');
                $('#afinidade-elemental').prop('disabled', true);
                break;
            case 'Futton':
                $('#qualidadesFutton').show();
                adicionarQualidade($('#futtonPericia'));
                $('#defeitoElemental').hide();
                $('#primeira-natureza').val('Katon');
                $('#primeira-natureza').prop('disabled', true);
                $('#segunda-natureza').val('Suiton');
                $('#segunda-natureza').prop('disabled', true);
                $('#kg-elemental').val('Futton');
                $('#kg-elemental').prop('disabled', true);
                $('#afinidade-elemental').val('Katon, Suiton e Futton');
                $('#afinidade-elemental').prop('disabled', true);
                break;
            case 'Jinton':
                $('#qualidadesJinton').show();
                adicionarQualidade($('#jintonPericia'));
                $('#defeitoElemental').hide();
                $('#primeira-natureza').val('Doton');
                $('#primeira-natureza').prop('disabled', true);
                $('#segunda-natureza').val('Fūton');
                $('#segunda-natureza').prop('disabled', true);
                $('#terceira-natureza').val('Katon');
                $('#terceira-natureza').prop('disabled', true);
                $('#kg-elemental').val('Jinton');
                $('#kg-elemental').prop('disabled', true);
                $('#afinidade-elemental').val('Doton, Fūton, Katon e Jinton');
                $('#afinidade-elemental').prop('disabled', true);
                break;
            case 'Jinton(Velocidade)':
                $('#qualidadesJintonVel').show();
                adicionarQualidade($('#jintonVel'));
                $('#qualidadeVel').hide();
                break;
            case 'Jiton':
                $('#qualidadesJiton').show();
                adicionarQualidade($('#jitonPericia'));
                $('#defeitoElemental').hide();
                $('#primeira-natureza').val('Fūton');
                $('#primeira-natureza').prop('disabled', true);
                $('#segunda-natureza').val('Doton');
                $('#segunda-natureza').prop('disabled', true);
                $('#kg-elemental').val('Jiton');
                $('#kg-elemental').prop('disabled', true);
                $('#afinidade-elemental').val('Fūton, Doton e Jiton');
                $('#afinidade-elemental').prop('disabled', true);
                break;
            case 'Kōton':
                $('#qualidadesKoton').show();
                adicionarQualidade($('#kotonPericia'));
                $('#primeira-natureza').on('keyup', function() {
                    $('#afinidade-elemental').val($('#primeira-natureza').val() + ' e Kōton');
                });
                $('#afinidade-elemental').prop('disabled', true);
                break;
            case 'Meiton':
                $('#qualidadesMeiton').show();
                adicionarQualidade($('#meitonComedor'));
                $('#qualidadeComedor').hide();
                primeiraHabilidade = 'Habilidade Secundária: Chakra Kyuin';
                break;
            case 'Ranton':
                $('#qualidadesRanton').show();
                adicionarQualidade($('#rantonPericia'));
                $('#defeitoElemental').hide();
                $('#primeira-natureza').val('Raiton');
                $('#primeira-natureza').prop('disabled', true);
                $('#segunda-natureza').val('Suiton');
                $('#segunda-natureza').prop('disabled', true);
                $('#kg-elemental').val('Ranton');
                $('#kg-elemental').prop('disabled', true);
                $('#afinidade-elemental').val('Raiton, Suiton e Ranton');
                $('#afinidade-elemental').prop('disabled', true);
                break;
            case 'Shakuton':
                $('#qualidadesShakuton').show();
                adicionarQualidade($('#shakutonPericia'));
                $('#defeitoElemental').hide();
                $('#primeira-natureza').val('Katon');
                $('#primeira-natureza').prop('disabled', true);
                $('#segunda-natureza').val('Fūton');
                $('#segunda-natureza').prop('disabled', true);
                $('#kg-elemental').val('Shakuton');
                $('#kg-elemental').prop('disabled', true);
                $('#afinidade-elemental').val('Raiton, Suiton e Shakuton');
                $('#afinidade-elemental').prop('disabled', true);
                break;
            case 'Shōton':
                $('#qualidadesShoton').show();
                adicionarQualidade($('#shotonPericia'));
                $('#defeitoElemental').hide();
                $('#primeira-natureza').val('Doton');
                $('#primeira-natureza').prop('disabled', true);
                $('#kg-elemental').val('Shōton');
                $('#kg-elemental').prop('disabled', true);
                $('#afinidade-elemental').val('Doton e Shōton');
                $('#afinidade-elemental').prop('disabled', true);
                break;
            case 'Yōton':
                $('#qualidadesYoton').show();
                adicionarQualidade($('#yotonPericia'));
                $('#defeitoElemental').hide();
                $('#primeira-natureza').val('Katon');
                $('#primeira-natureza').prop('disabled', true);
                $('#segunda-natureza').val('Doton');
                $('#segunda-natureza').prop('disabled', true);
                $('#kg-elemental').val('Yōton');
                $('#kg-elemental').prop('disabled', true);
                $('#afinidade-elemental').val('Katon, Doton e Yōton');
                $('#afinidade-elemental').prop('disabled', true);
                break;
            case 'Kumo Nenkin':
                $('#qualidadesKumoNenkin').show();
                adicionarQualidade($('#kumoAracnideo'));
                adicionarQualidade($('#kumoAmbidestria'));
                break;
            case 'Kugutsu':
                $('#qualidadesKugutsu').show();
                adicionarQualidade($('#kugutsuAmbidestria'));
                adicionarQualidade($('#kugutsuPericia'));
                break;
            case 'Sōma no Kō':
                $('#qualidadesSoma').show();
                adicionarQualidade($('#somaVel'));
                $('#qualidadeVel').hide();
                break;
            default:
                break;
        }
    });

    $('#qualidadesHatake .qualidades-defeitos :button').click(function(){
        botão = $(this);
        clearQualidades();
        clearDefeitos();
        clearNaturezas();
        clearNerfsBuffs();
        qualidadeNinjutsu.prop("disabled", false);
        qualidadeTaijutsu.prop('disabled', false);
        qualidadeGenjutsu.prop('disabled', false);

        if ( ($(this).attr('class') == undefined) || ($(this).attr('class') == '') ) {
            adicionarQualidade(botão);
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