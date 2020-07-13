// Add your code here
function submitData(name, email) {
    const url = `http://localhost:3000/users`

   

    let configObject = {
        method: "POST",
        headers: {
            'Content-type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify({
            name,
            email 
        })
    }
    return fetch(url, configObject)
    .then(response => response.json())
    .then(data => {
        // let newName = document.createElement('p')
        // newName.innerText = data.name
        // let newEmail = document.createElement('p')
        // newEmail.innerText = data.email
        let newId = document.createElement('p')
        newId.innerHTML = data.id 
        document.querySelector('body').append(newId) })
        .catch(error => {
            let messages = document.createElement('p')
            messages.innerHTML = error.message
            return document.querySelector('body').append(messages)
        })
}