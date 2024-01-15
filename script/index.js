// index.js

document.addEventListener("DOMContentLoaded", function () {

    var inputAge = document.getElementById("inputAge");
    var verificationButton = document.getElementById("verification");
    var returnDiv = document.querySelector(".return");

    verificationButton.addEventListener("click", function () {
        var age = parseInt(inputAge.value); // Converte o valor do input para um número inteiro

        var messageElement = document.createElement("div");
        messageElement.classList.add("message");

        if (age >= 18) {
            messageElement.textContent = "Entrada permitida";
            messageElement.style.backgroundColor = "#5A7B45";
            messageElement.style.color = "white";
            messageElement.style.fontSize = "36px";
            messageElement.style.border = "9px solid #A3DF7E";
            messageElement.style.padding = "25px 25px";
            messageElement.style.borderRadius = "100px";
        } else {
            messageElement.textContent = "Entrada NÃO permitida";
            messageElement.style.backgroundColor = "#8C4040";
            messageElement.style.color = "white";
            messageElement.style.fontSize = "36px";
            messageElement.style.border = "9px solid #FF7474";
            messageElement.style.padding = "25px 25px";
            messageElement.style.borderRadius = "100px";
        }

        returnDiv.innerHTML = "";

        returnDiv.appendChild(messageElement);
    });
});