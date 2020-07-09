// // Add your code here

function submitData(inName, inEmail){
    const personData = {
        name: inName, 
        email: inEmail
    }
    const configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }, 
        body: JSON.stringify(personData)
    }
    return fetch("http://localhost:3000/users", configObj)
    .then(function(resp){
        return resp.json()
    }).then(function(obj){
        document.body.innerHTML = obj[ 'id' ]
    }).catch(function(error){ 
        document.body.innerHTML= error.message
    })
}