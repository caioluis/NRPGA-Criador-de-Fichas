var pontosQualidades = 0;
var pontosDefeitos = 0;

var maxPontosQualidades = getQualidadesMaxPoints();
var minPontosDefeitos = getDefeitosMinPoints();

document.getElementById("qualidades-contador").innerHTML = "Qualidades - Pontos restantes: " + (maxPontosQualidades);


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

    document.getElementById("qualidades-contador").innerHTML = "Qualidades - Pontos restantes: " + getQualidadesMaxPoints();
    document.getElementById("defeitos-contador").innerHTML = "Defeitos - Pontos necessários: " + getDefeitosMinPoints();

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

    document.getElementById("defeitos-contador").innerHTML = "Defeitos - Pontos necessários: " + getDefeitosMinPoints();
    
}

function semClaHandler2(field){
    document.getElementById("qualidades-contador").innerHTML = "Qualidades - Pontos restantes: " + getQualidadesMaxPoints();
    document.getElementById("defeitos-contador").innerHTML = "Defeitos - Pontos necessários: " + getDefeitosMinPoints();

    
    if(field.checked){
        document.getElementById('cla-dropdown').disabled = true;
    }else {
        document.getElementById('cla-dropdown').disabled = false;
    }
}

function getQualidadesMaxPoints()
{
    return (4 + Number(document.getElementById('semCla').checked) - pontosQualidades);   
}

function getDefeitosMinPoints() {
    if (pontosQualidades > 4) {
        return 4 - pontosDefeitos;
    } else{
        return pontosQualidades - pontosDefeitos;
    }
    
}


