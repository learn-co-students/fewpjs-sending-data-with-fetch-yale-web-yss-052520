// Add your code here
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then(response => response.json())
    .then(user => {
        console.log(user)
        const p = document.createElement("p")
        document.body.appendChild(p)
        p.innerHTML = user.id
    })
    .catch(function(error) {
        alert("Bad things! Ragnarők!");
        document.body.innerHTML = error.message;
    });
}