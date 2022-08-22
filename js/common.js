// =============common function=============//
function inputValueById(targetedElementId) {
    const inputFieldElement = document.getElementById(targetedElementId);
    const inputFieldValue = inputFieldElement.value;
    const inputValue = parseFloat(inputFieldValue);
    return inputValue;
}

const totalPlayer = 5;

const playerExpensiveCalculate = document.getElementById('calculate-player-expensive-js')
playerExpensiveCalculate.addEventListener("click", function () {
    const perPlayerExpensive = inputValueById('per-player-expensive-js')
    if (perPlayerExpensive >= 0) {
        const calculate = totalPlayer * perPlayerExpensive;
        const totalPlayerExpensive = document.getElementById('total-player-expensive-js');
        totalPlayerExpensive.innerText = calculate;
    }
    else {
        alert("Please Fill Input Field !!! Note:Input Field Can't Contain With Negative Number or 00")

    }
})

