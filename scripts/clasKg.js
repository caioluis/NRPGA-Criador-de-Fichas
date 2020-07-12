
var toggleText = document.getElementById("clakg-label");
var claEscolhido =  document.getElementById("cla-dropdown");
var kgEscolhida = document.getElementById("kg-dropdown");

toggleText.addEventListener("click", function claKgToggle () {
    
    if (toggleText.innerHTML == "<mark>Clã</mark>/Kekkei Genkai") {
        toggleText.innerHTML = "Clã/<mark>Kekkei Genkai</mark>";
        claEscolhido.value = "--"
        claEscolhido.style.display = "none";
        kgEscolhida.style.display = "inline-block";
        
    } else {
        toggleText.innerHTML = "<mark>Clã</mark>/Kekkei Genkai";
        kgEscolhida.value = "--"
        kgEscolhida.style.display = "none";
        claEscolhido.style.display = "inline-block";
    }
    });

claEscolhido.addEventListener("change",
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

switch (claEscolhido.value) {
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
        document.getElementById("qualidadeGenjutsu").classList.add("qualidade-escolhida")
        document.getElementById("qualidadeGenjutsu").innerHTML = "Habilidade em Genjutsu (0)"
        document.getElementById("qualidadeGenjutsu").disabled = true;
        document.getElementById("kg-dropdown").value = "Ketsuryūgan";
        break;
    case "Fuuma":
        document.getElementById("qualidadeNinjutsu").classList.add("qualidade-escolhida")
        document.getElementById("qualidadeNinjutsu").innerHTML = "Habilidade em Ninjutsu (0)"
        document.getElementById("qualidadeNinjutsu").disabled = true;
        break;
    default:
        break;

    }
    document.getElementById("qualidades-contador").innerHTML = "Qualidades - Pontos restantes: " + getQualidadesMaxPoints();
    document.getElementById("defeitos-contador").innerHTML = "Defeitos - Pontos necessários: " + getDefeitosMinPoints();
});