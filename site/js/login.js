function check() {
  
    if(document.getElementById('userid').value == "AliSubhani" && document.getElementById('pss').value == "sem020") {
        window.open('Cases.html')
    }
    else if(document.getElementById('userid').value  == "Hammad" && document.getElementById('pss').value == "sem025") {
        window.open('Police Managment.html')
    }
    else {
        alert("Error Password or Username")
    }
}
