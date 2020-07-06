/*Sistema de Passos para o formulário e para o campo de dicas*/

var passoAtual = 0; // Passo atual vira o primeiro passo (0)
mostrarPasso(passoAtual); // mostra o passo atual

function mostrarPasso(n) {
  // Mostrar um passo específico...
  var x = document.getElementsByClassName("tab");
  var z = document.getElementsByClassName("tipTabs");
  x[n].style.display = "block";
  z[n].style.display = "block";
  // Manipular os botões de navegação
  if (n == 0) {
    document.getElementById("btnVoltar").style.display = "none";
  } else {
    document.getElementById("btnVoltar").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("btnProximo").innerHTML = "SALVAR";
  } else {
    document.getElementById("btnProximo").innerHTML = "PRÓXIMO";
  }
  // Exibir o círculo correto correspondente ao passo atual
  indicadorDePassos(n);
}

function navegar(n) {
  // Essa função é responsável pela navegação entre os passos
  var x = document.getElementsByClassName("tab");
  var z = document.getElementsByClassName("tipTabs");
  // Retornar falso se não validar
  if (n == 1 && !validarForm()) return false;
  // Dar display no passo que foi finalizado
  x[passoAtual].style.display = "none";
  z[passoAtual].style.display = "none";
  // Ir pro próximo passo ou voltar um passo:
  passoAtual = passoAtual + n;
  // Quando terminar todos,
  if (passoAtual >= x.length) {
    // Rodar a função para receber os valores do form
    guardarInfo();
    return false;
  }
  // Caso contrário, mostrar o passo atual:
  mostrarPasso(passoAtual);
}

function validarForm() {
  // Função responsável por validar os campos
  var x,
    y,
    i,
    valido = true;
  x = document.getElementsByClassName("tab");
  y = x[passoAtual].getElementsByTagName("input");
  z = document.getElementsByClassName("tipTabs");
  // Loop pra checar todos os campos
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // adicionar classe que destaca o campo inválido
      y[i].className += " invalido";
      // e deixar o a propriedade "valido" como falso
      valido = false;
    }
  }
  // Se é valido, destacar o passo como finalizado:
  if (valido) {
    document.getElementsByClassName("circulo")[passoAtual].className +=
      " finalizado";
  }
  return valido; // retornar como valido
}

function indicadorDePassos(n) {
  // Remove o indicador de passos de todos os círculos
  var i,
    x = document.getElementsByClassName("circulo");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" ativo", "");
  }
  // E adiciona a classe ativo apenas pro passo atual
  x[n].className += " ativo";
}
