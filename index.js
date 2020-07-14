// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };
   
//   let configObj = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
   
//   fetch("http://localhost:3000/dogs", configObj)
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(object) {
//     console.log(object);
//   })
//   .catch(function(error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   });

  function submitData(name, email){
    let configObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    };

    return fetch("http://localhost:3000/users", configObj)
    .then(res => res.json())
    .then(obj => display(obj.id))
    .catch(function(error) {
          // alert("Bad things! Ragnarők!");
          display(error.message)
          console.log(error.message);
    })
  }

  function display(info){
    // debugger;
    console.log(info)
    let h1 = document.createElement("h1")
    h1.innerHTML = info

    let body = document.querySelector("body")
    body.append(h1)

  }

  submitData("joe", "email")
