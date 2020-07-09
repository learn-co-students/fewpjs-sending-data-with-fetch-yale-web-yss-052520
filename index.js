// Add your code here
// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   })
// })
// .then( res => res.json())
// .then( json => console.log(json))
// .catch(function(error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   })

function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name, email
        })
    })
    .then(res => res.json())
    .then( json => document.body.innerHTML = json["id"])
    .catch( error => document.body.append(error.message))
}