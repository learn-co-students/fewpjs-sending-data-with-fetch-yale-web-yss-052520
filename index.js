// Add your code here
function formData(name, email) {
    return {
    name: name ,
    email: email
    }
}
   
function configObj(name, email) {
    return {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData(name, email))
    }
}
 
function submitData(name, email) {
    const theObj = configObj(name, email)
    debugger
    return fetch("http://localhost:3000/users", theObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
        const h1 = document.createElement('h1')
        document.body.innerText = object.id
        // document.body.append(h1)
        debugger
        // console.log(object);
    })
    .catch(function(error) {
    //   alert("Bad things! Ragnarők!");
    //   console.log(error.message);
        debugger
        const h2 = document.createElement('h2')
        document.body.innerText = error.message
        // document.body.append(h2)
        debugger
        // console.log(object);
    })
}