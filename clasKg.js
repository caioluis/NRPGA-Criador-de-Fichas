
var toggleText = document.getElementById("clakg-label");

toggleText.addEventListener("click", function claKgToggle () {
    console.log("opa")
    
    if (toggleText.innerHTML == "Clã") {
        toggleText.innerHTML = "Kekkei Genkai";
        document.getElementById("cla-dropdown").value = "--"
        document.getElementById("cla-dropdown").style.display = "none";
        document.getElementById("kg-dropdown").style.display = "inline-block";
        
    } else {
        toggleText.innerHTML = "Clã";
        document.getElementById("kg-dropdown").value = "--"
        document.getElementById("kg-dropdown").style.display = "none";
        document.getElementById("cla-dropdown").style.display = "inline-block";
    }
    });