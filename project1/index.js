const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
        body.style.background = `${button.id}`;
    });
});