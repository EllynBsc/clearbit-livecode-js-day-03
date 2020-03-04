const authorization = "Bearer sk_a778d7c1ea8568844bfc45df5f51ff94";


const input = document.getElementById("clearbitEmail");
// 1. Add listener on the form
const form = document.getElementById("clearbitForm");

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userBio = document.getElementById("userBio");
const userLocation = document.getElementById("userLocation");

// form.addEventListener("submit", (event) => {
// // 2. Prevent the submission of the form with .preventDefault()
//   console.log(event);
//   console.log(event.currentTarget);
//   event.preventDefault()
// // 3. Send an AJAX request to the Clearbit API using the fetch API
//   fetch(`https://person-stream.clearbit.com/v2/combined/find?email=${input.value}`, { headers: { Authorization: authorization}})
//   .then((response) => response.json())
// // 4. Read the json returned and display the results in a div/table/ul
//   .then((data) => {
//     // console.log(typeof(data));
//     console.log(data);
//     userName.innerText = data.person.name.fullName;
//     userEmail.innerText = data.person.email;
//     userLocation.innerText = data.person.location;
//     userBio.innerText = data.person.bio;
//   })
// })


//REFACTORING
const setUserInfo = (data) => {
   // console.log(data);
    userName.innerText = data.person.name.fullName;
    userEmail.innerText = data.person.email;
    userLocation.innerText = data.person.location;
    userBio.innerText = data.person.bio;
}

const apiCallClearBit = (userInput, authorization) => {
  fetch(`https://person-stream.clearbit.com/v2/combined/find?email=${input.value}`, { headers: { Authorization: authorization}})
  .then((response) => response.json())
  .then((data) => {
      setUserInfo(data);
  })
}

form.addEventListener("submit", (event) => {
  event.preventDefault()
  apiCallClearBit(input, authorization)
})


