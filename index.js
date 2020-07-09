// Add your code here
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "content-Type": "application/json", 
            "accept": "application/json"
        }, 
        body: JSON.stringify({
            name, 
            email 
        })
    })
    .then (response => response.json())
    .then (function(obj) {
        document.body.innerHTML += obj["id"]
    })
    .catch(function(error) {
        document.body.innerHTML += error
    })
}