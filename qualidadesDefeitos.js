var pontosDistribuidos = 0;

var maxPontosQualidades = getQualidadesMaxPoints();

document.getElementById("qualidades-contador").innerHTML = "Qualidades - Pontos restantes: " + (maxPontosQualidades);


function adicionarQualidade(element) {

    this.maxPontosQualidades = getQualidadesMaxPoints();
    var valorQualidade = parseInt(element.value);

    if(element.className == ""){
        if(valorQualidade > maxPontosQualidades) {
            return false;
        } else{
            element.classList.add("escolhido");
            pontosDistribuidos += valorQualidade;
        }
    } else {
        element.classList.remove("escolhido");
        pontosDistribuidos -= valorQualidade;
    }

    document.getElementById("qualidades-contador").innerHTML = "Qualidades - Pontos restantes: " + getQualidadesMaxPoints();

}

function semClaHandler2(field){
    document.getElementById("qualidades-contador").innerHTML = "Qualidades - Pontos restantes: " + getQualidadesMaxPoints();
    
    if(field.checked){
        document.getElementById('kg').disabled = true;
        document.getElementById('cla').disabled = true;
    }else {
        document.getElementById('kg').disabled = false;
        document.getElementById('cla').disabled = false;
    }
}

function getQualidadesMaxPoints()
{
    
    return (4 + Number(document.getElementById('semCla').checked) - pontosDistribuidos);
    
}