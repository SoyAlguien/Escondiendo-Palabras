function adduser(){
    J1=document.getElementById("J1").value;
    J2=document.getElementById("J2").value;
localStorage.setItem("Jugador_1",J1)
localStorage.setItem("Jugador_2",J2)
window.location = "game_page.html"
 }