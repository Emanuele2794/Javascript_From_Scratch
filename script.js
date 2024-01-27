const generateBio = document.getElementById("submit");



window.onload = generateBio.addEventListener("click", function() {
let persona = document.getElementById("nomeCognome").value;
let job = document.getElementById("ruolo").value;
let competenzeTecniche = document.getElementById("competenze").value;
let competenzeTrasversali = document.getElementById("trasversali").value;
let descrizione = document.getElementById("shortBio").value;
let esperienze = document.getElementById("esperienze").value;
let formazione = document.getElementById("formazione").value;
let contatti = document.getElementById("contatti").value;
    document.getElementById("tabellaBio").innerHTML = "Nome e Cognome : " + persona + "<br>" + "Ruolo: " + job;
});
