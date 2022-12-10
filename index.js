{
    const onClick = () => {
        let buttonElement = document.querySelector(".js-button");
        let tableElement = document.querySelector(".table");

        tableElement.classList.toggle("hideTable");
        buttonElement.textContent = tableElement.classList.contains("hideTable") ? "Pokaż fajną tabelę" : "Ukryj fajną tabelę";
    }

    const init = () => {
        let buttonElement = document.querySelector(".js-button");

        buttonElement.addEventListener("click", onClick);
    }

    init();
}