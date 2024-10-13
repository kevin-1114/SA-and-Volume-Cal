let dropdown;
let resultField = document.getElementById("result")

let length;
let width;
let height;

let errorMsg = "Please enter a number..."


function getValue() {
    dropdown = document.getElementById("modes").value;

    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);
    height = parseFloat(document.getElementById("height").value);


    if (dropdown === "1") {
        surfaceArea(length, width, height)
    }
    else {
        calculateVolume(length, width, height)
    }
}

function surfaceArea(length, width, height) {
    if (document.getElementById("length").value && document.getElementById("width").value && document.getElementById("height").value != "") {
        resultField.innerText = (length * width * 2) + (length * height * 2) + (width * height * 2)
        document.getElementById("copy").style.display = "inline";
    }
    else {
        resultField.innerText = errorMsg
    }
}

function calculateVolume(length, width, height) {
    resultField.innerText = length * width * height
    document.getElementById("copy").style.display = "inline";
}

function clear() {
    document.getElementById("copy").style.display = "none";
    document.getElementById("length").value = "";
    document.getElementById("width").value = "";
    document.getElementById("height").value = "";
    document.getElementById("result").innerText = "";
}

document.getElementById("clear").addEventListener("click", clear)
document.getElementById("use").addEventListener("click", getValue)