var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  var z = document.getElementsByClassName("tipTabs")
  x[n].style.display = "flex";
  x[n].style.flexDirection = "column"
  z[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "SALVAR";
  } else {
    document.getElementById("nextBtn").innerHTML = "PRÓXIMO";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  var z = document.getElementsByClassName("tipTabs")
  // Exit the function if any field in the current tab is invalid:
  //if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  z[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    guardarInfo();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  z = document.getElementsByClassName("tipTabs");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalido";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("circulo")[currentTab].className += " finalizado";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("circulo");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" ativo", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " ativo";
}

//Arquetipos

var x = document.getElementsByClassName("hidden-arquetipo");

var arquetipoAtual = document.getElementById("arquetipo-dropdown").value;


x.display = "none";
document.getElementById(arquetipoAtual).style.display = "flex"
document.getElementById(arquetipoAtual).style.flexDirection = "column"
document.getElementById("descricao-" + arquetipoAtual).style.display = "flex";
document.getElementById("descricao-" + arquetipoAtual).style.display = "row";


document.getElementById("arquetipo-dropdown").onchange = function() {arquetipoHelper()};

function arquetipoHelper() {
    console.log(arquetipoAtual)
    document.getElementById(arquetipoAtual).style.display = "none"
    document.getElementById("descricao-" + arquetipoAtual).style.display = "none";
    
    
    arquetipoAtual = document.getElementById("arquetipo-dropdown").value;
    document.getElementById(arquetipoAtual).style.display = "flex"
    document.getElementById(arquetipoAtual).style.flexDirection = "column"
    document.getElementById("descricao-" + arquetipoAtual).style.display = "flex";
    document.getElementById("descricao-" + arquetipoAtual).style.display = "row";
}
