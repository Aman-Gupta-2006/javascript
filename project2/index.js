const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const weightInput = document.getElementById("weight").value;
    const heightInput = document.getElementById("height").value;
    const buttonClick = document.querySelector("button");
    const result = document.querySelector("#result");

    buttonClick.addEventListener("click", () => {
        const heightInputSquare = Math.pow(heightInput, 2);

        const BMI = weightInput / heightInputSquare;

        let status = "";

        if (BMI < 18.6) {
            status = "Under Weight"
        } else if (BMI >= 18.6 && BMI <= 24.9) {
            status = "Normal Weight"
        } else {
            status = "Over Weight"
        }

        result.innerText = `Your BMI is, ${BMI} and you fall in ${status} category`;
    });
});

