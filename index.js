function check() {
    let weight = +document.getElementById("weight").value;
    let height = +document.getElementById("height").value;
    let bmi = weight / (height ** 2)
    if (0 < bmi && bmi < 18.5) {
        document.getElementById("result").innerHTML = "Underweight"
    } else if (bmi == 18.5 || bmi < 25) {
        document.getElementById("result").innerHTML = "Normal"
    } else if (bmi == 25 || bmi < 30) {
        document.getElementById("result").innerHTML = "Overweight"
    } else if (bmi >= 30) {
        document.getElementById("result").innerHTML = "Obese"
    } else {
        document.getElementById("result").innerHTML = "Not human"
    }
}