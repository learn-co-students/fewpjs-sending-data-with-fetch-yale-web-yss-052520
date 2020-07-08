function submitData(name, email){
    return fetch("http://localhost:3000/users", configObj(name, email))
    .then(response => response.json())
    .then(object => document.body.innerHTML = object.id)
    .catch(error => document.body.innerHTML = error.message);
}

function configObj(name, email){
    return {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData(name, email))
      };
}

function formData(name, email){
    return {
        name: name,
        email: email
      };
}


