let podtytul = document.querySelector(".js-subtitle");
let przycisk = document.querySelector(".js-button");
let tabela = document.querySelector(".table");

przycisk.addEventListener("click", () => {
    tabela.classList.toggle("hideTable");
    przycisk.textContent = tabela.classList.contains("hideTable") ? "Pokaż fajną tabelę" : "Ukryj fajną tabelę";
})