"use strict";

const passwordField = document.getElementById("pass");
const confirmPasswordField = document.getElementById("con_pass")

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    if(passwordField.value !== confirmPasswordField.value){
        e.preventDefault();
        alert("Password do not match!")
    }
})