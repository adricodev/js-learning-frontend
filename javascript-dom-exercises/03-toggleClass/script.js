const btnChange=document.body.querySelector("#btn-1-3");
const boxChange=document.body.querySelector(".card");

btnChange.addEventListener("click",()=>{
   boxChange.classList.toggle("activa");
})