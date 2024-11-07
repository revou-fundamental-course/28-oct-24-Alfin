// function create for calculate the BMI
function calculateBMI() {
    // get height and weight input value
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    if (height == "" || weight == "") {
        alert("Please enter both height and weight values")
        
    } else {
        const heightMeter = height / 100;
        const bmi = weight / (heightMeter ** 2);
        console.log(bmi.toFixed(2));
        
        if (bmi < 18.5) {
            alert("Kekurangan Berat Badan")
        } else if (bmi > 18.5 && bmi < 24.9) {
            alert("Ideal")
        } else if (bmi > 25.0 && bmi < 29.9) {
            alert("Kelebihan Berat Badan")
        } else if (bmi > 30) {
            alert("Obesitas")
        }
        return bmi.toFixed(2)
    }
};

function reset() {
    document.getElementById("height").value = '';
    document.getElementById("weight").value = '';
    document.getElementById("age").value = '';

}