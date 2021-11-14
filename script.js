const DEFAULT_PRINCIPAL = 100000;
const DEFAULT_RATE = 10.25;
const DEFAULT_YEARS = 1;

function resultString(principal, rate, interest, year) {
    // Separate this out to simplify code.
    // <mark> highlights the result in yellow.
    return (
        "If you deposit <mark>" + `${principal}` + "</mark><br/>" +
        "at an interest rate of <mark>" + `${rate}%` + ",</mark><br/>" +
        "You will receive an amount of <mark>" + `${interest}` + "</mark><br/>" +
        "in the year <mark>" + `${year}` + ".</mark><br/>"
    )
}
function compute()
{
    var principalElement = document.getElementById("principal");
    var principal = principalElement.value;
    if (principal <= 0) {
        alert("Enter a positive number for the amount.");
        principalElement.value = null;
        principalElement.focus();
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    document.getElementById("result").innerHTML = resultString(principal, rate, interest, year);
}

function updateRate() {
    var rate_val = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = `${rate_val}%`;
}

// Added this so that ctrl-R resets the defaults.
function resetDefaults() {
    document.getElementById("principal").value = DEFAULT_PRINCIPAL;
    document.getElementById("rate").value = DEFAULT_RATE;
    document.getElementById("years").value = DEFAULT_YEARS;
}