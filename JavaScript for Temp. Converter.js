/**
 * Created by ulyses.parra488 on 10/18/16.
 */
function convert(degree) {
    var x;
    if (degree == "Celsius") {
        x = document.getElementById("Celsius").value * 9 / 5 + 32;
        document.getElementById("Fahrenheit").value = Math.round(x);
    } else {
        x = (document.getElementById("Fahrenheit").value -32) * 5 / 9;
        document.getElementById("Celsius").value = Math.round(x);
    }
}