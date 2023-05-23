let numberInput = document.getElementById("numberInput");
let averageBtn = document.getElementById("averageBtn");
let resultDiv = document.getElementById("result");

averageBtn.addEventListener("click", function() {
  let numbers = numberInput.value.split(":");
  let sum = 0;
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    let number = parseInt(numbers[i]);

    if (!isNaN(number)) {
      sum += number;
      count++;
    }
  }

  if (count > 0) {
    let average = sum / count;
    resultDiv.textContent = "Medium: " + average;
  } else {
    resultDiv.textContent = "Wrong number";
  }

  numberInput.value = "";
});
