// Add your code here
function submitData(userName, userEmail) {
    
    let url = 'http://localhost:3000/users'
    
    let data = {
        name: userName,
        email: userEmail
    }
    
    let configObject = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    }
    
    return fetch(url, configObject)
    .then(res => res.json())
    .then(object => {
        document.body.append(object.id)
    })
    .catch(err => document.body.append(err.message))
}