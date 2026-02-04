
// declareer en initialiseer variabelen
let weight = document.getElementById("gewicht");
let length = document.getElementById("lengte");
let bmi = 0;

// maak HTML elementen aan of haal ze binnen
output = document.getElementById("output");
form = document.getElementById("bmiForm");
explain = document.createElement("p");
output.appendChild(explain);

// schrijf de submit actie uit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    bmi = weight.value/(length.value**2);

    output.textContent = `Jouw BMI is ${bmi.toFixed(2)}`;
    output.appendChild(explain) // voeg opnieuw toe => veilig

    explain.classList = ""; // reset classList

    if (bmi < 22) {
        explain.textContent = "Je bent te mager."
        explain.classList.add("orange")
    } else if (bmi < 25) {
        explain.textContent = "Je bent gezond."
        explain.classList.add("green")
    } else {
        explain.textContent = "Je bent te zwaar."
        explain.classList.add("red")
    };
});

