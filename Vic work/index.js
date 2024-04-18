// login 
const lock = document.querySelector("i");
const username = document.getElementById("user")
const password = document.getElementById("pwrd");
const submit = document.querySelector(".butt a")

lock.addEventListener("click", () => {
    if (password.type != "text") {
        password.type = "text"
        password.style.color = "white"
        password.style.fontSize="16px"
        lock.classList.remove("fa-eye")
        lock.classList.add("fa-eye-slash")
    }
    else {
        password.type ="password"
        lock.classList.add("fa-eye")
        lock.classList.remove("fa-eye-slash")
    }
})

// submit
// submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (password === "" || username === "") {

//     } else {
        
//     }
// })

// add subscriber
