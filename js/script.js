{
    const welcome = () => {
        console.log("Hej!");
    }

    const toggleBackground = () => {
        const containerElement = document.querySelector(".js-container");
        const colorNameElement = document.querySelector(".js-colorName");

        containerElement.classList.toggle("secondBackground");
        colorNameElement.innerText = containerElement.classList.contains("secondBackground") ? "szary" : "niebieski";
    };

    const deletePhoto = () => {
        const photoMeElement = document.querySelector(".js-photoMe");

        photoMeElement.remove();
    }

    const init = () => {

        const backgroundElement = document.querySelector(".js-background");
        const deleteButtonElement = document.querySelector(".js-deleteButton");

        deleteButtonElement.addEventListener("click", deletePhoto);
        backgroundElement.addEventListener("click", toggleBackground);

        welcome();
    };

    init();

}