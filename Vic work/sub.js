const form = document.getElementById("form")

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    const formData = new FormData(form); 
    const data = Object.fromEntries(formData)
    // console.log(data)

    // add subscriber
    fetch("https://carwash-y5hu.onrender.com/documentation/", {
        method: "POST",
        headers: {
        "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })

})

