// Get references to the HTML elements
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

// Listen for clicks on the calculate button
calculateBtn.addEventListener('click', function() {
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    // Validate the inputs
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.innerHTML = 'Please enter valid values for weight and height.';
        return;
    }

    // Convert height from cm to meters
    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = weight / (heightInMeters * heightInMeters);

    // Round the BMI to one decimal place
    const bmiRounded = bmi.toFixed(1);

    // Determine the BMI category
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = 'Normal weight , you are a cutie';
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    // Display the result
    resultDiv.innerHTML = `Your BMI is <strong>${bmiRounded}</strong>. <br> This is considered: <strong>${category}</strong>.`;
});
