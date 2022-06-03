import {switchColor} from "./colorSwitch.js";

function setupListeners () {
    let switch_button_elt = document.querySelector(".switch-button");
    switch_button_elt.addEventListener("click", () => {
        switchColor();
    });
};

function Main () {
    setupListeners();
    console.log("Setup done!");
};

Main();