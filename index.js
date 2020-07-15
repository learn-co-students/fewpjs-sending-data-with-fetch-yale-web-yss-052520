// Add your code here

// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// };

// let configObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// }

// fetch("http://localhost:3000/dogs", configObject)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     })
//     .catch(function (error) {
//         alert("You've got an error!");
//         console.log(error.message);
//     });

function submitData() {

    let userData = {
        name: "Steve",
        email: "steve@steve.com"
    }

    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userData)
    }

    return fetch("http://localhost:3000/users", configObject)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            document.body.innerHTML = object["id"]
        })
        .catch(function (error) {
            document.body.innerHTML = error.message
        });

}
