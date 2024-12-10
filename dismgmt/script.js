function findReliefCentre() {
    const location = document.getElementById("current-location").value;
    const reliefResult = document.getElementById("relief-result");
  
    if (location) {
      reliefResult.innerHTML = `Searching for relief centers near "${location}"... (Mock data here)`;
    } else {
      reliefResult.innerHTML = "Please enter a location.";
    }
  }
  