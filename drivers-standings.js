window.addEventListener("load", function () {
    this.document.getElementById("loader").style.display = "none";
})
const firstDropdownButton = document.getElementById("first-dropdown");
const firstDiv1 = document.getElementById("first-div1");
const firstDiv2 = document.getElementById("first-div2");
const secondDropdownButton = document.getElementById("second-dropdown");
const secondDiv1 = document.getElementById("second-div1");
const secondDiv2 = document.getElementById("second-div2");
const thirdDropdownButton = document.getElementById("third-dropdown");
const thirdDiv1 = document.getElementById("third-div1");
const thirdDiv2 = document.getElementById("third-div2");
function firstDropdown() {
    if (firstDropdownButton.classList.contains("active")) {
        firstDropdownButton.classList.remove("active");
        firstDropdownButton.classList.add("close");
    } else {
        firstDropdownButton.classList.remove("close");
        firstDropdownButton.classList.add("active");
    }
    if (firstDiv1.classList.contains("active")) {
        firstDiv1.classList.remove("active");
        firstDiv1.classList.add("close");
    } else {
        firstDiv1.classList.remove("close");
        firstDiv1.classList.add("active");
    }
    if (firstDiv2.classList.contains("active")) {
        firstDiv2.classList.remove("active");
        firstDiv2.classList.add("close");
    } else {
        firstDiv2.classList.remove("close");
        firstDiv2.classList.add("active");
    }
}
function secondDropdown() {
    if (secondDropdownButton.classList.contains("active")) {
        secondDropdownButton.classList.remove("active");
        secondDropdownButton.classList.add("close");
    } else {
        secondDropdownButton.classList.remove("close");
        secondDropdownButton.classList.add("active");
    }
    if (secondDiv1.classList.contains("active")) {
        secondDiv1.classList.remove("active");
        secondDiv1.classList.add("close");
    } else {
        secondDiv1.classList.remove("close");
        secondDiv1.classList.add("active");
    }
    if (secondDiv2.classList.contains("active")) {
        secondDiv2.classList.remove("active");
        secondDiv2.classList.add("close");
    } else {
        secondDiv2.classList.remove("close");
        secondDiv2.classList.add("active");
    }
}
function thirdDropdown() {
    if (thirdDropdownButton.classList.contains("active")) {
        thirdDropdownButton.classList.remove("active");
        thirdDropdownButton.classList.add("close");
    } else {
        thirdDropdownButton.classList.remove("close");
        thirdDropdownButton.classList.add("active");
    }
    if (thirdDiv1.classList.contains("active")) {
        thirdDiv1.classList.remove("active");
        thirdDiv1.classList.add("close");
    } else {
        thirdDiv1.classList.remove("close");
        thirdDiv1.classList.add("active");
    }
    if (thirdDiv2.classList.contains("active")) {
        thirdDiv2.classList.remove("active");
        thirdDiv2.classList.add("close");
    } else {
        thirdDiv2.classList.remove("close");
        thirdDiv2.classList.add("active");
    }
}