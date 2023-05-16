function submitAnswers() {
  document.getElementById("resultDisplay").style.display = "block";
document.getElementById("scoreDisplay").style.display = "block";
document.getElementById("resultDisplay").scrollIntoView({ behavior: 'smooth', block: 'start' });
  let answers = [];
  let correct = 0;
  let allFilledOut = true;
  // Multiple Choice (radio button)
  for (let i = 1; i < 16; i++) {
    let currentSelected = document.querySelector('input[name=q' + i + ']:checked');
    // Check if no value selected
    if (currentSelected == null) {
      allFilledOut = false;
      break;
    } else {
      answers.push([(currentSelected.value).charAt(0), (currentSelected.value).charAt(2)]);
    }
  }
  // Identification (text input fields)
  for (let i = 16; i < 21; i++) {
    let currentSelected = (document.getElementById("q" + i).value).trim().toLowerCase();
    // Check if empty
    if (currentSelected == "") {
      allFilledOut = false;
      break;
    } else {
      let text = "";
      switch (i) {
        case 16:
          text = "lightbulb";
          break;
        case 17:
          text = "evolution";
          break;
        case 18:
          text = "neptune";
          break;
        case 19:
          text = "periodic table";
          break;
        case 20:
          text = "battery";
          break;
      }
      answers.push([currentSelected, text]);
    }
  }

  // Missing input
  if (allFilledOut == false) {
    alert("Warning! One or more questions haven't been answered yet!");
  }
  // Output
  else {
    // Disable submit button
    document.getElementById("submit").disabled = true;
    // Print results
    for (let i = 0; i < 20; i++) {
      let newRow = document.createElement("tr");
      let numberDisplay = document.createElement("td");
      let userAnswerDisplay = document.createElement("td");
      let correctAnswerDisplay = document.createElement("td");
      numberDisplay.innerHTML = i + 1;
      userAnswerDisplay.innerHTML = answers[i][0];
      correctAnswerDisplay.innerHTML = answers[i][1];
      if (answers[i][0] == answers[i][1]) {
        userAnswerDisplay.style.color = "rgb(50, 255, 50)";
        correct++;
      } else {
        userAnswerDisplay.style.color = "rgb(255, 50, 50)";
      }
      newRow.appendChild(numberDisplay);
      newRow.appendChild(userAnswerDisplay);
      newRow.appendChild(correctAnswerDisplay);
      document.getElementById("resultDisplay").appendChild(newRow);
    }
  }

  document.getElementById("scoreDisplay").innerHTML = "Your Score: " + correct + " out of 20";
  
}

function resetForm() {
  clearRadioGroup("q1");
  clearRadioGroup("q2");
  clearRadioGroup("q3");
  clearRadioGroup("q4");
  clearRadioGroup("q5");
  clearRadioGroup("q6");
  clearRadioGroup("q7");
  clearRadioGroup("q8");
  clearRadioGroup("q9");
  clearRadioGroup("q10");
  clearRadioGroup("q11");
  clearRadioGroup("q12");
  clearRadioGroup("q13");
  clearRadioGroup("q14");
  clearRadioGroup("q15");
  document.getElementById("q16").value = "";
  document.getElementById("q17").value = "";
  document.getElementById("q18").value = "";
  document.getElementById("q19").value = "";
  document.getElementById("q20").value = "";
  document.getElementById("resultDisplay").innerHTML = "";
  document.getElementById("scoreDisplay").innerHTML = "";
  document.getElementById("submit").disabled = false;
  document.getElementById("scoreDisplay").innerHTML = "Your Score:";
}

function clearRadioGroup(question) {
    var qst = document.getElementsByName(question);
    for (var i = 0; i < qst.length; i++)
      qst[i].checked = false;
  }