
var toggleText = $('.switch');
var botoesDosClas =  $('input[type=radio][name=cla]');
var botoesDasKgs = $('input[type=radio][name=kg]');
var botoesDasHis = $('input[type=radio][name=hi]');
$('#emptyKg').prop('checked', true);
$('#emptyCla').prop('checked', true);
$('#emptyHi').prop('checked', true);

    toggleText.on('click',
        function claKgToggle () {     
        if ($(this).html() == 'Mudar para KGs') {
            $('#emptyCla').prop('checked', true);
            $('#emptyHi').prop('checked', true);
            $('#kgs-buttons').removeClass('close');
            $('#clas-buttons').addClass('close');
            $('#hi-buttons').addClass('close');
        } else if ($(this).html() == 'Mudar para Clãs') {
            $('#emptyKg').prop('checked', true);
            $('#emptyHi').prop('checked', true);
            $('#clas-buttons').removeClass('close');
            $('#kgs-buttons').addClass('close');
            $('#hi-buttons').addClass('close');
        } else {
            $('#emptyCla').prop('checked', true);
            $('#emptyKg').prop('checked', true);
            $('#hi-buttons').removeClass('close');
            $('#clas-buttons').addClass('close');
            $('#kgs-buttons').addClass('close');  
        }
    });

    $(document).ready(function(){
        $('#semCla').change(
        function semClaHandler(field){
            $('#clas-buttons').addClass('close');
            $('#kgs-buttons').addClass('close');
            $('#hi-buttons').addClass('close');
            clearQualidades();
            clearDefeitos();
            clearNaturezas();
            clearNerfsBuffs();
            databookAtualizarTexto();
            atualizarTexto();
            $('.atributo span').text('');
            $('.atributo span').hide();
            $('.cla').hide();
            if($('#semCla').is(':checked')){
                $('.qualidadesClas').hide();
                $('#emptyCla').prop('checked', true);
                $('#emptyKg').prop('checked', true);
                $('#emptyHi').prop('checked', true);
                $('.switch').hide();
            } else {
                $('#clas-buttons').removeClass('close');
                $('.switch').show();
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
        $('button').prop('disabled', false);
    }

    function clearDefeitos(){
        defeitosEscolhidos = $('.defeito-escolhido');
        defeitosEscolhidos.removeClass('defeito-escolhido');
        defeitosSelecionados = '';
        pontosDefeitos = 0;
        $('button').prop('disabled', false);
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
        $('#afinidade-elemental').val('');
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
        $('#emptyHi').prop('checked', true);
        $('.atributo span').text('');
        $('.atributo span').hide();
        $('.cla').hide();
        
        switch ($('input[name=cla]:checked', '#dados-basicos-ninja').val()) {
            case "Aburame":
                $('#qualidadesAburame').show();
                $('#aburameCientificos').addClass('qualidade-escolhida');
                $('#qualidadeCientifico').prop('disabled', true);
                break;
            case "Akimichi":
                $('#qualidadesAkimichi').show();
                adicionarQualidade($('#akimichiForca'));
                $('#qualidadeForca').prop('disabled', true);
                $('#defeitosAkimichi').show();
                adicionarDefeito($('#akimichiGordo'));
                $('#defeitoGordo').prop('disabled', true);;
                $('#defeitoMagricelo').prop('disabled', true);
                $('#defeitoFraqueza').prop('disabled', true);
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
                $('#qualidadeGCC').prop('disabled', true);
                break;
            case "Hoshigaki":
                $('#qualidadesHoshigaki').show();
                $('#hoshigakiAnfibio').addClass('qualidade-escolhida');
                $('#hoshigakiPericia').addClass('qualidade-escolhida');
                $('#qualidadeAnfibio').prop('disabled', true);
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
                $('#qualidadeGCC').prop('disabled', true);
                qualidadeTaijutsu.hide();
                break;
            case "Inuzuka":
                $('#qualidadesInuzuka').show();
                $('#inuzukaInstintos').addClass('qualidade-escolhida');
                $('#inuzukaOlfato').addClass('qualidade-escolhida');
                $('#qualidadeInstintos').prop('disabled', true);
                $('#qualidadeOlfato').prop('disabled', true);
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
                $('#qualidadeDominio').hide();
                $('#defeitoHabilidadeSocial').prop('disabled', true);
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
                $('#defeitoNin').prop('disabled', true);
                $('#defeitoGen').prop('disabled', true);
                break;
            case "Nara":
                $('#qualidadesNara').show();
                adicionarQualidade($('#naraInt'));
                ('#qualidadeInt').prop('disabled', true);
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
                $('#qualidadeGRC').prop('disabled', true);
                break;
            case "Shiin":
                primeiraHabilidade = 'Oto';
                $('#kg-elemental').val('Ototon');
                break;
            case "Shimura":
                $('#qualidadesShimura').show();
                $('#periciaShimura').addClass('qualidade-escolhida');
                break;
            case "Uchiha":
                $('#qualidadesUchiha').show();
                adicionarQualidade($('#uchihaGRC'));
                $('#qualidadeGRC').prop('disabled', true);
                $('#defeitosUchiha').show();
                adicionarDefeito($('#uchihaAmnesia'));
                adicionarDefeito($('#uchihaMaldicao'));
                $('#defeitoAmnesia').prop('disabled', true);
                $('#qualidadeMemoria').prop('disabled', true);
                $('#afinidade-elemental').val('Katon');
                $('#afinidade-elemental').prop('disabled', true);
                break;
            case "Uzumaki":
                $('#qualidadesUzumaki').show();
                $('#uzumakiGRC').addClass('qualidade-escolhida');
                adicionarQualidade($('#uzumakiVitalidade'));
                $('#qualidadeGRC').prop('disabled', true);
                $('#qualidadeVitalidade').hide();
                break;
            case "Yamanaka":
                $('#qualidadesYamanaka').show();
                $('#yamanakaSensor').addClass('qualidade-escolhida');
                $('#qualidadeSensor').prop('disabled', true);
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
        $('#emptyHi').prop('checked', true);
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
                $('#defeitoElemental').prop('disabled', true);
                showNaturezas();
                $('#primeira-natureza').val('Doton');
                $('#segunda-natureza').val('Raiton');
                $("#primeira-natureza option[value='Suiton']").remove();
                $("#primeira-natureza option[value='Fūton']").remove();
                $("#primeira-natureza option[value='Katon']").remove();
                $("#segunda-natureza option[value='Suiton']").remove();
                $("#segunda-natureza option[value='Fūton']").remove();
                $("#segunda-natureza option[value='Katon']").remove();
                $('terceira-natureza').val('');
                $('terceira-natureza').prop('disabled', true);
                $('#kg-elemental').val('Bakuton');
                $('#afinidade-elemental').val('Doton, Raiton e Bakuton');
                $('#afinidade-elemental').prop('disabled', true);
                break;
            case 'Futton':
                $('#qualidadesFutton').show();
                $('#defeitoElemental').prop('disabled', true);
                showNaturezas();
                $('#primeira-natureza').val('Katon');
                $('#segunda-natureza').val('Suiton');
                $("#primeira-natureza option[value='Doton']").remove();
                $("#primeira-natureza option[value='Fūton']").remove();
                $("#primeira-natureza option[value='Raiton']").remove();
                $("#segunda-natureza option[value='Doton']").remove();
                $("#segunda-natureza option[value='Fūton']").remove();
                $("#segunda-natureza option[value='Raiton']").remove();
                $('terceira-natureza').val('');
                $('terceira-natureza').prop('disabled', true);
                $('#kg-elemental').val('Futton');
                $('#afinidade-elemental').val('Katon, Suiton e Futton');
                $('#afinidade-elemental').prop('disabled', true);
                break;
            case 'Jinton':
                $('#qualidadesJinton').show();
                $('#defeitoElemental').prop('disabled', true);
                showNaturezas();
                $('#primeira-natureza').val('Doton');
                $('#segunda-natureza').val('Fūton');
                $('#terceira-natureza').val('Katon');
                $("#primeira-natureza option[value='Suiton']").remove();
                $("#primeira-natureza option[value='Raiton']").remove();
                $("#segunda-natureza option[value='Suiton']").remove();
                $("#segunda-natureza option[value='Raiton']").remove();
                $("#terceira-natureza option[value='Suiton']").remove();
                $("#terceira-natureza option[value='Raiton']").remove();
                $('#kg-elemental').val('Jinton');
                $('#afinidade-elemental').val('Doton, Fūton, Katon e Jinton');
                $('#afinidade-elemental').prop('disabled', true);
                break;
            case 'Jinton(Velocidade)':
                $('#qualidadesJintonVel').show();
                adicionarQualidade($('#jintonVel'));
                $('#qualidadeVel').prop('disabled', true);
                break;
            case 'Jiton':
                $('#qualidadesJiton').show();
                $('#defeitoElemental').prop('disabled', true);
                showNaturezas();
                $('#primeira-natureza').val('Fūton');
                $('#segunda-natureza').val('Doton');
                $("#primeira-natureza option[value='Katon']").remove();
                $("#primeira-natureza option[value='Suiton']").remove();
                $("#primeira-natureza option[value='Raiton']").remove();
                $("#segunda-natureza option[value='Katon']").remove();
                $("#segunda-natureza option[value='Suiton']").remove();
                $("#segunda-natureza option[value='Raiton']").remove();
                $('terceira-natureza').val('');
                $('terceira-natureza').prop('disabled', true);
                $('#kg-elemental').val('Jiton');
                $('#afinidade-elemental').val('Fūton, Doton e Jiton');
                $('#afinidade-elemental').prop('disabled', true);
                break;
            case 'Kōton':
                $('#qualidadesKoton').show();
                $('#defeitoElemental').prop('disabled', true);
                showNaturezas();
                $('#kg-elemental').val('Kōton');
                break;
            case 'Meiton':
                $('#qualidadesMeiton').show();
                adicionarQualidade($('#meitonComedor'));
                $('#qualidadeComedor').prop('disabled', true);
                primeiraHabilidade = 'Chakra Kyuin';
                break;
            case 'Ranton':
                $('#qualidadesRanton').show();
                $('#defeitoElemental').prop('disabled', true);
                showNaturezas();
                $('#primeira-natureza').val('Raiton');
                $('#segunda-natureza').val('Suiton');
                $("#primeira-natureza option[value='Katon']").remove();
                $("#primeira-natureza option[value='Fūton']").remove();
                $("#primeira-natureza option[value='Doton']").remove();
                $("#segunda-natureza option[value='Katon']").remove();
                $("#segunda-natureza option[value='Fūton']").remove();
                $("#segunda-natureza option[value='Doton']").remove();
                $('terceira-natureza').val('');
                $('terceira-natureza').prop('disabled', true);
                $('#kg-elemental').val('Ranton');
                $('#afinidade-elemental').val('Raiton, Suiton e Ranton');
                $('#afinidade-elemental').prop('disabled', true);
                break;
            case 'Shakuton':
                $('#qualidadesShakuton').show();
                $('#defeitoElemental').prop('disabled', true);
                showNaturezas();
                $('#primeira-natureza').val('Katon');
                $('#segunda-natureza').val('Fūton');
                $("#primeira-natureza option[value='Raiton']").remove();
                $("#primeira-natureza option[value='Suiton']").remove();
                $("#primeira-natureza option[value='Doton']").remove();
                $("#segunda-natureza option[value='Raiton']").remove();
                $("#segunda-natureza option[value='Suiton']").remove();
                $("#segunda-natureza option[value='Doton']").remove();
                $('terceira-natureza').val('');
                $('terceira-natureza').prop('disabled', true);
                $('#kg-elemental').val('Shakuton');
                $('#afinidade-elemental').val('Katon, Fūton e Shakuton');
                $('#afinidade-elemental').prop('disabled', true);
                break;
            case 'Shōton':
                $('#qualidadesShoton').show();
                $('#defeitoElemental').prop('disabled', true);
                showNaturezas();
                $('#primeira-natureza').val('Doton');
                $('#kg-elemental').val('Shōton');
                $('#afinidade-elemental').val('Doton e Shōton');
                $('#afinidade-elemental').prop('disabled', true);
                break;
            case 'Yōton':
                $('#qualidadesYoton').show();
                $('#defeitoElemental').prop('disabled', true);
                showNaturezas();
                $('#primeira-natureza').val('Katon');
                $('#segunda-natureza').val('Doton');
                $("#primeira-natureza option[value='Raiton']").remove();
                $("#primeira-natureza option[value='Suiton']").remove();
                $("#primeira-natureza option[value='Fūton']").remove();
                $("#segunda-natureza option[value='Raiton']").remove();
                $("#segunda-natureza option[value='Suiton']").remove();
                $("#segunda-natureza option[value='Fūton']").remove();
                $('terceira-natureza').val('');
                $('terceira-natureza').prop('disabled', true);
                $('#kg-elemental').val('Yōton');
                $('#afinidade-elemental').val('Katon, Doton e Yōton');
                $('#afinidade-elemental').prop('disabled', true);
                break;
            default:
                break;
        }
    });

    botoesDasHis.change(function bonificarKgs(){
        clearQualidades();
        clearDefeitos();
        clearNaturezas();
        clearNerfsBuffs();
        $('#emptyCla').prop('checked', true);
        $('#emptyKg').prop('checked', true);
        $('.atributo span').text('');
        $('.atributo span').hide();
        $('.cla').hide();

        switch ($('input[name=hi]:checked', '#dados-basicos-ninja').val()) {
            case 'Kumo Nenkin':
                $('#qualidadesKumoNenkin').show();
                adicionarQualidade($('#kumoAracnideo'));
                adicionarQualidade($('#kumoAmbidestria'));
                break;
            case 'Kugutsu':
                $('#qualidadesKugutsu').show();
                adicionarQualidade($('#kugutsuAmbidestria'));
                adicionarQualidade($('#kugutsuPericia'));
                $('#defeitoCoordenacao').prop('disabled', true);
                break;
            case 'Sōma no Kō':
                $('#qualidadesSoma').show();
                adicionarQualidade($('#somaVel'));
                $('#qualidadeVel').prop('disabled', true);
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

    function adicionarPericia(){
        switch ($('input[name=kg]:checked', '#dados-basicos-ninja').val()) {
            case 'Bakuton':
                adicionarQualidade($('#bakutonPericia'));
                pericia = ', +3 Jutsus de Bakuton';
                break;
            case 'Futton':
                adicionarQualidade($('#futtonPericia'));
                pericia = ', +3 Jutsus de Futton';
                break;
            case 'Jinton':
                adicionarQualidade($('#jintonPericia'));
                pericia = ', +3 Jutsus de Jinton';
                break;
            case 'Jiton':
                adicionarQualidade($('#jitonPericia'));
                pericia = ', +3 Jutsus de Jiton';
                break;
            case 'Kōton':
                adicionarQualidade($('#kotonPericia'));
                pericia = ', +3 Jutsus de Kōton';
                break;
            case 'Ranton':
                adicionarQualidade($('#rantonPericia'));
                pericia = ', +3 Jutsus de Ranton';
                break;
            case 'Shakuton':
                adicionarQualidade($('#shakutonPericia'));
                pericia = ', +3 Jutsus de Shakuton';
                break;
            case 'Shōton':
                adicionarQualidade($('#shotonPericia'));
                pericia = ', +3 Jutsus de Shōton';
                break;
            case 'Yōton':
                adicionarQualidade($('#yotonPericia'));
                pericia = ', +3 Jutsus de Yōton';
                break;
            default:
                break;
        }
    }