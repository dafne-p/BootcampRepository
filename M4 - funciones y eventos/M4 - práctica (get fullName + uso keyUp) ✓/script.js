function getName() {
    return document.getElementById("input-name").value;
}

function getSurname1() {
    return document.getElementById("input-surname1").value;
}

function getSurname2() {
    return document.getElementById("input-surname2").value;
}

function getFullName() {
    return getName() + " " + getSurname1() + " " + getSurname2();
}

function submitName() {
    document.getElementById("full-name").innerText = getFullName();
}

document.getElementById("input-name").addEventListener("keyup", submitName);
document.getElementById("input-surname1").addEventListener("keyup", submitName);
document.getElementById("input-surname2").addEventListener("keyup", submitName);