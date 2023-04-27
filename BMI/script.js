document.getElementById('bmiForm').addEventListener('submit', function(e) {
    
    
    // Get weight and height inputs
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    
    // Calculate BMI
    let bmi = weight / (height * height);
    
    // Display result
    document.getElementById('result').innerText = 'Your BMI: ' + bmi.toFixed(2);
  });
  
