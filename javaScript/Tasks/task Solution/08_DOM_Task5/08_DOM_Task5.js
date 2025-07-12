let celsius = document.getElementById("Celsius");
let fahrenheit = document.getElementById("Fahrenheit");
let kelvin = document.getElementById("Kelvin");

celsius.addEventListener('input', () => {
    let celsiValue = celsius.value;
    console.log(typeof celsiValue);

    let Cel_To_fahren = (Number(celsiValue) * (9 / 5)) + 32; //here we don't need to convert into number,bcz multiply thy ske string no
    console.log("fahrenheit:", Cel_To_fahren);
    fahrenheit.value = Cel_To_fahren.toFixed(2);

    let Cel_To_kelvin = Number(celsiValue) + 273.15;
    console.log("celsius after fahren: ", celsiValue); //Number ma convert krvu pde because string ma addition alg j ans apse.
    console.log("kelvin:", Cel_To_kelvin);
    kelvin.value = Cel_To_kelvin;
});

fahrenheit.addEventListener('input', () => {
    let fahrenValue = fahrenheit.value;

    let Fahren_To_Celsi = (Number(fahrenValue) - 32) * (5 / 9);
    celsius.value = Fahren_To_Celsi.toFixed(2);

    let Fahren_To_kelvin = (Number(fahrenValue) - 32) * (5 / 9) + 273.15;
    kelvin.value = Fahren_To_kelvin.toFixed(2);
});

kelvin.addEventListener('input', () => {
    let KelvinValue = kelvin.value;

    let Kelvin_To_Celsi = (KelvinValue - 273.15);
    celsius.value = Kelvin_To_Celsi.toFixed(2);

    let Kelvin_To_Fahren = (KelvinValue - 273.15) * (9 / 5) + 32;
    fahrenheit.value = Kelvin_To_Fahren.toFixed(2);
})