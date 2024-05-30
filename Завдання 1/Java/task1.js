function addSuffix(input) {
    input.value = input.value.replace(/\D/g, "");
    if (input.value !== "") {
        input.value += " грн";
    }
}

function calculate() {
    var kurs = parseFloat(document.querySelector('input[type="text"]').value);
    var sum = parseFloat(document.getElementById('amountInput').value.replace(/\D/g, ""));
    var result = (sum / kurs).toFixed(2) + " $";
    document.getElementById('result').value = result;
}


function clearFields() {
    document.getElementById('amountInput').value = "";
    document.getElementById('result').value = "";
}