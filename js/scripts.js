function hideResults() {
  document.getElementById("match1").setAttribute("class", "hidden");
  document.getElementById("match2").setAttribute("class", "hidden");
  document.getElementById("match3").setAttribute("class", "hidden");
}

window.onload = function () {
  document.querySelector("form").onsubmit = function (event) {
    event.preventDefault();
    hideResults();
    const age = parseInt(document.querySelector("input#age").value);
    const eyeColor = document.getElementById("eyeColor").value;
    const hairColor = document.querySelector("input#hairColor").value;
    console.log(hairColor + " " + eyeColor + " " + age);
    if (age > 0 && age && eyeColor && hairColor){
      if (age >= 43 && eyeColor === "brown" && hairColor === "brown") {
        console.log("you got fred");
        document.getElementById("match1").removeAttribute("class");

      }
      else if (age >= 32 && eyeColor === "green" && hairColor === "black") {
        console.log("you got fred");
        document.getElementById("match2").removeAttribute("class");

      }
      else {
        console.log("you got fred");
        document.getElementById("match3").removeAttribute("class");

      }
    }
    else {
      document.getElementById("error-message").removeAttribute("class");
    }

  }
}
