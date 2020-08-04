
var toggleText = $('#switchClaKg');
var botoesDosClas =  $('input[type=radio][name=cla]');
var botoesDasKgs = $('input[type=radio][name=kg]');
$('#emptyKg').prop('checked', true);
$('#emptyCla').prop('checked', true);

    toggleText.click(
        function claKgToggle () {     
        if (toggleText.html() == 'Mudar para Kekkei Genkais') {
            toggleText.html('Mudar para Clãs');
            $('#emptyKg').prop('checked', true);
            $('#kgs-buttons').toggleClass('close');
            $('#clas-buttons').toggleClass('close');   
        } else {
            toggleText.html('Mudar para Kekkei Genkais');
            $('#emptyKg').prop('checked', true);
            $('#clas-buttons').toggleClass('close');
            $('#kgs-buttons').toggleClass('close');
        }
    });

    $(document).ready(function(){
        $('#semCla').change(
        function semClaHandler(field){
            if ($('#kgs-buttons').hasClass('close')) {
                $('#clas-buttons').toggleClass('close');
            } else {
                $('#kgs-buttons').toggleClass('close');
            }
            clearQualidades();
            clearDefeitos();
            databookAtualizarTexto();
            atualizarTexto();
            $('.atributo span').text('');
            $('.atributo span').hide();
            $('.cla').hide();
            if($('#semCla').is(':checked')){
                $('.qualidadesClas').hide();
                $('#emptyCla').prop('checked', true);
                $('#emptyKg').prop('checked', true);
                $('#switchClaKg').hide();
            } else {
                $('#switchClaKg').show();
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
        bonusNin = bonusTai = bonusGen = bonusInt = bonusForca = bonusVel = bonusSta = 0;
        nerfVel = nerfSta = nerfInt = nerfVel = nerfForca = 0;
        pericia = '';
        primeiraHabilidade = '';
        contadorJutsusGerais = 0;
        jutsusGerais = '';
    }

    function clearNaturezas() {
        $('#segunda-natureza').parent().hide();
        $('#terceira-natureza').parent().hide();
        $('#kg-elemental').parent().hide();
        $('#primeira-natureza').val('--');
        $('#segunda-natureza').val('--');
        $('#terceira-natureza').val('--');
        $('#kg-elemental').val('--');
        $('#afinidade-elemental').text('');
        $('#afinidade-elemental').prop('disabled', false);
    }

    function showNaturezas() {
        $('#segunda-natureza').parent().show();
        $('#terceira-natureza').parent().show();
        $('#kg-elemental').parent().show();
    }

    botoesDosClas.change(
    function bonificarClas(){
        clearQualidades();
        clearDefeitos();
        clearNaturezas();
        clearNerfsBuffs();
        bonusHatake = 0;
        $('#emptyKg').prop('checked', true);
        $('.atributo span').text('');
        $('.atributo span').hide();
        $('.cla').hide();
        
        switch ($('input[name=cla]:checked', '#dados-basicos-ninja').val()) {
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
                $('#ketsuryuganRadio').prop('checked', true);
                break;
            case "Fūma":
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
            case "Hōzuki":
                $('#qualidadesHozuki').show();
                $('#hozukiPericia').addClass('qualidade-escolhida');
                $('#defeitosHozuki').show();
                $('#hozukiVicio').addClass('defeito-escolhido');
                break;
            case "Hyūga":
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
            case "Jūgo":
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
            case "Kedōin":
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
                qualidadeNinjutsu.hide();
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
                $('#qualidadeMemoria').hide();
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

    botoesDasKgs.change(function bonificarKgs(){
        clearQualidades();
        clearDefeitos();
        clearNaturezas();
        clearNerfsBuffs();
        $('#emptyCla').prop('checked', true);
        $('.atributo span').text('');
        $('.atributo span').hide();
        $('.cla').hide();

        switch ($('input[name=kg]:checked', '#dados-basicos-ninja').val()) {
            case 'Akagan':
                $('#qualidadesAkagan').show();
                adicionarQualidade($('#akaganGen'));
                qualidadeGenjutsu.hide();
                break;
            case 'Bakuton':
                $('#qualidadesBakuton').show();
                adicionarQualidade($('#bakutonPericia'));
                pericia = ' +3 Jutsus de Bakuton'
                $('#defeitoElemental').hide();
                showNaturezas();
                $('#primeira-natureza').val('Doton');
                $('#segunda-natureza').val('Raiton');
                $('#kg-elemental').val('Bakuton');
                $('#afinidade-elemental').val('Doton, Raiton e Bakuton');
                $('#afinidade-elemental').prop('disabled', true);
                break;
            case 'Futton':
                $('#qualidadesFutton').show();
                adicionarQualidade($('#futtonPericia'));
                pericia = ' +3 Jutsus de Futton'
                $('#defeitoElemental').hide();
                showNaturezas();
                $('#primeira-natureza').val('Katon');
                $('#segunda-natureza').val('Suiton');
                $('#kg-elemental').val('Futton');
                $('#afinidade-elemental').val('Katon, Suiton e Futton');
                $('#afinidade-elemental').prop('disabled', true);
                break;
            case 'Jinton':
                $('#qualidadesJinton').show();
                adicionarQualidade($('#jintonPericia'));
                pericia = ' +3 Jutsus de Jinton'
                $('#defeitoElemental').hide();
                showNaturezas();
                $('#primeira-natureza').val('Doton');
                $('#segunda-natureza').val('Fūton');
                $('#terceira-natureza').val('Katon');
                $('#kg-elemental').val('Jinton');
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
                pericia = ' +3 Jutsus de Jiton'
                $('#defeitoElemental').hide();
                showNaturezas();
                $('#primeira-natureza').val('Fūton');
                $('#segunda-natureza').val('Doton');
                $('#kg-elemental').val('Jiton');
                $('#afinidade-elemental').val('Fūton, Doton e Jiton');
                $('#afinidade-elemental').prop('disabled', true);
                break;
            case 'Kōton':
                $('#qualidadesKoton').show();
                adicionarQualidade($('#kotonPericia'));
                pericia = ' +3 Jutsus de Kōton'
                showNaturezas();
                $('#afinidade-elemental').on('change', function() {
                    $('#afinidade-elemental').val($('#afinidade-elemental').val() + ' e Kōton');
                });
                $('#kg-elemental').val('Kōton');
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
                pericia = ' +3 Jutsus de Ranton'
                $('#defeitoElemental').hide();
                showNaturezas();
                $('#primeira-natureza').val('Raiton');
                $('#segunda-natureza').val('Suiton');
                $('#kg-elemental').val('Ranton');
                $('#afinidade-elemental').val('Raiton, Suiton e Ranton');
                $('#afinidade-elemental').prop('disabled', true);
                break;
            case 'Shakuton':
                $('#qualidadesShakuton').show();
                adicionarQualidade($('#shakutonPericia'));
                pericia = ' +3 Jutsus de Shakuton'
                $('#defeitoElemental').hide();
                showNaturezas();
                $('#primeira-natureza').val('Katon');
                $('#segunda-natureza').val('Fūton');
                $('#kg-elemental').val('Shakuton');
                $('#afinidade-elemental').val('Raiton, Suiton e Shakuton');
                $('#afinidade-elemental').prop('disabled', true);
                break;
            case 'Shōton':
                $('#qualidadesShoton').show();
                adicionarQualidade($('#shotonPericia'));
                pericia = ' +3 Jutsus de Shōton'
                $('#defeitoElemental').hide();
                showNaturezas();
                $('#primeira-natureza').val('Doton');
                $('#kg-elemental').val('Shōton');
                $('#afinidade-elemental').val('Doton e Shōton');
                $('#afinidade-elemental').prop('disabled', true);
                break;
            case 'Yōton':
                $('#qualidadesYoton').show();
                adicionarQualidade($('#yotonPericia'));
                pericia = ' +3 Jutsus de Yōton'
                $('#defeitoElemental').hide();
                showNaturezas();
                $('#primeira-natureza').val('Katon');
                $('#segunda-natureza').val('Doton');
                $('#kg-elemental').val('Yōton');
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
                pericia = ' +3 Shurikenjutsu'
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
        qualidadesEscolhidas = $('#qualidades .qualidade-escolhida');
        qualidadesEscolhidas.removeClass('qualidade-escolhida');
        qualidadesSelecionadas = '';
        pontosQualidades = 0;
        quantBonus = 0;
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
                removerQualidade(qualidadeNinjutsu);
                qualidadeNinjutsu.hide();
            } else if ($(this).attr('id') == 'hatakeTai') {
                removerQualidade(qualidadeTaijutsu);
                qualidadeTaijutsu.hide();
            } else {
                removerQualidade(qualidadeGenjutsu);
                qualidadeGenjutsu.hide();
            }
        } else {
            removerQualidade($(this));
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