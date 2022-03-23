console.log("Hej!");

let backgroundElement = document.querySelector(".js-background");
let containerElement = document.querySelector(".js-container");
let deleteButtonElement = document.querySelector(".js-deleteButton");
let photoMeElement = document.querySelector(".js-photoMe");
let secondBackground = document.querySelector(".secondBackground")
let colorNameElement = document.querySelector(".js-colorName")


deleteButtonElement.addEventListener("click", () => {
    photoMeElement.remove();

});

backgroundElement.addEventListener("click", () => {
    containerElement.classList.toggle("secondBackground");

    colorNameElement.innerText = containerElement.classList.contains("secondBackground") ? "szary" : "niebieski";

});



