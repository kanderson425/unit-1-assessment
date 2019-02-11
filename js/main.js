var input;
var count;

var input = parseInt(document.getElementById('inputWindow').value);
var count = parseInt(document.getElementById('countSection').textContent);

document.getElementById('plus-btn').addEventListener('click', addInput);
document.getElementById('minus-btn').addEventListener('click', subtractInput);

function addInput() {
    count += parseInt(document.getElementById('inputWindow').value);
    document.getElementById("countSection").innerHTML = count;
    if (count < 0) {
        document.getElementById('countSection').style.color = "red";
    } else {
        document.getElementById('countSection').style.color = "black";
    }
}

function subtractInput() {
    count -= parseInt(document.getElementById('inputWindow').value);
    document.getElementById("countSection").innerHTML = count;
    if (count < 0) {
        document.getElementById('countSection').style.color = "red";
    } else {
        document.getElementById('countSection').style.color = "black";
    }
}
