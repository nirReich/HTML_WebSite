// content to enter the model for each card
const treatContent = [
    "this is תקשורת card text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    "this is שפה ודיבור card text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    "this is הפרעות קול card text : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    "this is תפקודי פה card text : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    "this is הדרכה מקצועית card text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
];

//opens the modal and match content by pressed card
const openTreatModal = (num) => {
    switch (num) {
        case 1:
            document.getElementById("modalPContent").innerHTML = treatContent[num - 1];
            displayModal()

            break;
        case 2:
            document.getElementById("modalPContent").innerHTML = treatContent[num - 1];
            displayModal()

            break;
        case 3:
            document.getElementById("modalPContent").innerHTML = treatContent[num - 1];
            displayModal()

            break;
        case 4:
            document.getElementById("modalPContent").innerHTML = treatContent[num - 1];
            displayModal()

            break;
        case 5:
            document.getElementById("modalPContent").innerHTML = treatContent[num - 1];
            displayModal()

            break;
        default:
            modal.style.display = "none";
    }
}

// Get the modal
var modal = document.getElementById("treatModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("treatCards");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
const displayModal = () => {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), clean text content and close the modal
span.onclick = function () {
    document.getElementById("modalPContent").innerHTML = "";
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        document.getElementById("modalPContent").innerHTML = "";
        modal.style.display = "none";
    }
}

// toggle side menu
const openNav = () => {

    const sideMenuOpen = document.getElementById("sideMenuDiv").style.display;
    const displayDiv = () => document.getElementById("sideMenuDiv").style.display = "block";
    const removeDiv = () => document.getElementById("sideMenuDiv").style.display = "none";

    if (sideMenuOpen === "none" || sideMenuOpen === "") {

        document.getElementById("sideMenuDiv").style.animationName = "sideMenuOpen";
        displayDiv()
        document.getElementById("sideMenuDiv").style.animationDirection = "normal";
        document.getElementById("sideBarsIcon").style.color = "rgb(108, 108, 228)";
    }
    else {

        document.getElementById("sideMenuDiv").style.animationName = "sideMenuClose";
        setTimeout(removeDiv, 250)
        document.getElementById("sideBarsIcon").style.color = "white";
    }

}

// closing side menu
const closeNav = () => {
    const removeDiv = () => document.getElementById("sideMenuDiv").style.display = "none";

    document.getElementById("sideMenuDiv").style.animationName = "sideMenuClose";
    setTimeout(removeDiv, 250)
    document.getElementById("sideBarsIcon").style.color = "white";
    document.getElementById("sideBarsIcon:hover").style.color = "rgb(108, 108, 228)";

}