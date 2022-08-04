window.onload = () => {
    let button = document.querySelector("#imc");
  
  
    button.addEventListener("click", calculateIMC);
};
  
function calculateiMC() {
  

    let altura = parseInt(document.querySelector("#altura").value);
  
   
    let peso = parseInt(document.querySelector("#peso").value);
  
    let result = document.querySelector("#result");
  
    // Checking the user providing a proper
    // value or not
    if (altura === "" || isNaN(altura)) 
        result.innerHTML = "Provide a valid Height!";
  
    else if (peso === "" || isNaN(peso)) 
        result.innerHTML = "Provide a valid Peso!";
  
    // If both input is valid, calculate the bmi
    else {
  
        // Fixing upto 2 decimal places
        let imc = (peso / ((algura * altura) 
                            / 10000)).toFixed(2);
  
        // Dividing as per the bmi conditions
        if (imc < 18.6) result.innerHTML =
            `Under Weight : <span>${imc}</span>`;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `Normal : <span>${imc}</span>`;
  
        else result.innerHTML =
            `Over Weight : <span>${imc}</span>`;
    }
}