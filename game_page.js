var player1 = localStorage.getItem("Jugador_1")
var player2 = localStorage.getItem("Jugador_2")
var player1_points = 0
var player2_points = 0
var question = player1
answer = player2
document.getElementById("player1_name").innerHTML = player1 + " : "
document.getElementById("player2_name").innerHTML = player2 + " : "
document.getElementById("player1_points").innerHTML = player1_points + " puntos"
document.getElementById("player2_points").innerHTML = player2_points + " puntos"
document.getElementById("player_question").innerHTML = question + " tiene el turno para preguntar"
document.getElementById("player_answer").innerHTML = answer + " tiene el turno para responder"
function Send() {
    word = document.getElementById("word").value
    secondletter = word.charAt(1)
    middleletter = word.charAt(Math.ceil(word.length / 2))
    finalletter = word.charAt(word.length - 1)
    hiddenword = word.replace(secondletter, "_").replace(middleletter, "_").replace(finalletter, "_");
    output = '<h4 id="word_display">' + hiddenword + '</h4><br><br><input type="text" id="answer" placeholder="respuesta"><br><br><button onclick="check ()" class="btn btn-info">Comprobar</button><br>'
    document.getElementById("output").innerHTML = output
    document.getElementById("word").value = ""
}
function check() {
    var response = document.getElementById("answer").value
    if (response.toLowerCase() == word.toLowerCase()) {
        if (answer == player1) {
            player1_points++
        } else {
            player2_points++
        }
    }
    if (answer == player1) {
        answer = player2
        question = player1
    }
    else {
        answer = player1
        question = player2
    }
    document.getElementById("player1_name").innerHTML = player1 + " : "
    document.getElementById("player2_name").innerHTML = player2 + " : "
    document.getElementById("player1_points").innerHTML = player1_points + " puntos"
    document.getElementById("player2_points").innerHTML = player2_points + " puntos"
    document.getElementById("player_question").innerHTML = question + " tiene el turno para preguntar"
    document.getElementById("player_answer").innerHTML = answer + " tiene el turno para responder"
}