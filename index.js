// Add your code here
function submitData(name, email){

    let formData = {
        name,
        email
    };

    let configObj = {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then (res => res.json())
        .then(json => {
            document.body.innerHTML = json.id
        })
        .catch(function(error) {
            document.body.innerHTML = error.message
        })
}