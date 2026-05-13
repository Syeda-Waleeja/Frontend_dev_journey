let card = document.querySelector(".profile-card");
let button = document.querySelector("#toggleButton");

button.addEventListener("click", function () {

    // check current background color
    if (card.style.backgroundColor === "black") {

        // light mode
        card.style.backgroundColor = "white";
        card.style.color = "black";

        button.style.backgroundColor = "black";
        button.style.color = "white";

    } else {

        // dark mode
        card.style.backgroundColor = "black";
        card.style.color = "white";

        button.style.backgroundColor = "white";
        button.style.color = "black";
    }

});