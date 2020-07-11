// Add your code here





function submitData(user_name, user_email) {
    return fetch('http://localhost:3000/users', configurer(user_name, user_email))
    .then(function(response) {
        return response.json()
    })
    .then(function(object) {
        document.body.innerHTML = object["id"]
    })
    .catch(function(error){
        document.body.append(error.message)
    })
}

function configurer(user_name, user_email) {
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData(user_name, user_email))
      };
    return configObj
}


function formData(user_name, user_email) {
    let data = {
        name: user_name,
        email: user_email
    };
    return data
}

  