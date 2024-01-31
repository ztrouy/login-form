const formElement = document.querySelector("#login")
const usernameField = document.querySelector("#username")
const passwordField = document.querySelector("#password")
const submitButton = document.querySelector("#submit")

formElement.addEventListener("keyup", (event) => {
    // check if username and password are both not empty
    
    // if either or both are empty, then disable the button
    if (usernameField.value === "" || passwordField.value === "") {
        // console.log("disable button")
        formElement.classList.remove("valid")
        submitButton.innerHTML = "Invalid"
    } else {
        // otherwise, enable the button
        // console.log("enable the button")
        formElement.classList.add("valid")
        submitButton.innerHTML = "Submit"
    }
    
})