var pontosDistribuidos = 0;

// Máximo de pontos Databook
var maxPontosDatabook = getDatabookMaxPoints();

document.getElementById("pontos-label").innerHTML = "Pontos a distribuir: " + (maxPontosDatabook);


// Manipulação Databook

function addPointsToDatabook(field){
    this.maxPontosDatabook = getDatabookMaxPoints();
    
    if(this.maxPontosDatabook < 0){
        var reduction = (parseInt(this.maxPontosDatabook) == 0) ? -1 : 0
        field.value = parseInt(field.value) + (parseInt(this.maxPontosDatabook) - reduction);
        this.maxPontosDatabook = 0;
    }
    
    document.getElementById("pontos-label").innerHTML = "Pontos a distribuir: " + getDatabookMaxPoints();
}


function semClaHandler(field){
    document.getElementById("pontos-label").innerHTML = "Pontos a distribuir: " + getDatabookMaxPoints();
    
    if(field.checked){
        document.getElementById('kg').disabled = true;
        document.getElementById('cla').disabled = true;
    }else {
        document.getElementById('kg').disabled = false;
        document.getElementById('cla').disabled = false;
    }
}

function getDatabookMaxPoints()
{
    var nin = document.getElementById("ninjutsu").value;
    var tai = document.getElementById("taijutsu").value;
    var gen = document.getElementById("genjutsu").value;
    var int = document.getElementById("int").value;
    var forca = document.getElementById("forca").value;
    var vel = document.getElementById('vel').value;
    var sta = document.getElementById('sta').value;
    var selos = document.getElementById('selos').value;
    
    return (7 + Number(document.getElementById('semCla').checked)) - (parseInt(nin) + parseInt(tai) + parseInt(gen) + parseInt(int) + parseInt(forca) + parseInt(vel) + parseInt(sta) + parseInt(selos));
    
}
