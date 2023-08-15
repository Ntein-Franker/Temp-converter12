//SCRIPT CODE
let celciusValue = document.querySelector("#celcius > input");
let fahrenheitValue = document.querySelector("#fahrenheit > input");
let kelvinValue = document.querySelector("#kelvin > input");
//Paschal casing
let btn = document.querySelector(".button > button");

function roundNumber(number) {
    return Math.round(number * 100) / 100;
}
celciusValue.addEventListener('input', function() {
    let celTemp = parseFloat(celciusValue.value);
    let fahTemp = (celTemp * 1.8) + 32;
    let kelTemp = celTemp + 237.15;
 
    fahrenheitValue.value = roundNumber(fahTemp);
    kelvinValue.value = roundNumber(kelTemp);
}
)

fahrenheitValue.addEventListener('input', function() {
    let fahTemp = parseFloat(fahrenheitValue.value);
    let celTemp = (fahTemp - 32) + 1.8 ;
    let kelTemp = celTemp + 237.15;
 
    celciusValue.value = roundNumber(celTemp);
    kelvinValue.value = roundNumber(kelTemp);
}
)

kelvinValue.addEventListener('input', function() {
    let kelTemp = parseFloat(kelvinValue.value);
    let celTemp = kelTemp - 273.15;
    let fahTemp = (celTemp * 1.8) + 32;
 
    celciusValue.value = roundNumber(celTemp);
    fahrenheitValue.value = roundNumber(fahTemp);
}
)

btn.addEventListener('click', () => {
    celciusValue.value = "";
    fahrenheitValue.value= "";
    kelvinValue.value="";
})