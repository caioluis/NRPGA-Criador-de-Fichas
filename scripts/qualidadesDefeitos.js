var pontosQualidades = 0;
var pontosDefeitos = 0;

var maxPontosQualidades = getQualidadesMaxPoints();
var minPontosDefeitos = getDefeitosMinPoints();

$("#qualidades-contador").html("Qualidades - Pontos restantes: " + (maxPontosQualidades));


function atualizarTexto() {
    $("#qualidades-contador").html("Qualidades - Pontos restantes: " + getQualidadesMaxPoints());
    $("#defeitos-contador").html("Defeitos - Pontos necessários: " + getDefeitosMinPoints());
}

function adicionarQualidade(element) {

    this.maxPontosQualidades = getQualidadesMaxPoints();
    var valorQualidade = parseInt(element.value);

    if(element.className == ""){
        if(valorQualidade > maxPontosQualidades) {
            return false;
        } else{
            element.classList.add("qualidade-escolhida");
            pontosQualidades += valorQualidade;
        }
    } else {
        element.classList.remove("qualidade-escolhida");
        pontosQualidades -= valorQualidade;
    }
    atualizarTexto();
}

function adicionarDefeito(element) {
    this.minPontosDefeitos = getDefeitosMinPoints();
    var valorDefeito = parseInt(element.value);
    
    if(element.className == ""){
        element.classList.add("defeito-escolhido");
        pontosDefeitos += valorDefeito;
    } else {
        element.classList.remove("defeito-escolhido");
        pontosDefeitos -= valorDefeito;
    }

    atualizarTexto();
    
}


function getQualidadesMaxPoints()
{
    return (4 + Number($("#semCla").is(":checked")) - pontosQualidades);   
}

function getDefeitosMinPoints() {
    if (pontosQualidades > 4) {
        return 4 - pontosDefeitos;
    } else{
        return pontosQualidades - pontosDefeitos;
    }    
}