var result = document.getElementById("result")

function display(number) {
    result.value += number;
}

function calculater() {
    var resultInput = document.getElementById('result');
    var finalResult = resultInput.value;

    if (finalResult.includes('%')) {
        var parts = finalResult.split('%');
        var baseValue = parseFloat(parts[0]);
        var percentage = parseFloat(parts[1]);
        var percentageValue = (baseValue * percentage) / 100;

        resultInput.value = percentageValue;
    } else {
        var finalValue = eval(finalResult);
        resultInput.value = finalValue;
    }
}


function clrc() {
    result.value = "";

}
function dele() {
    result.value = result.value.slice(0, -1)
}



function modals(percentage) {
    var inputValue = result.value;
    var percentageValue = (parseFloat(inputValue) * parseFloat(percentage)) / 100;
    result.value = percentageValue;
}