const btnChangueText = document.body.querySelector("#btn-1-1");
const parapChangeText = document.body.querySelector("#parrafo-1-1");

btnChangueText.addEventListener("click", () => {
    parapChangeText.innerText = "El texto ha quedado modificado";
});