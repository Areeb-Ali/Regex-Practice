const email = document.querySelector("#email");
const username = document.querySelector("#username");
const cnic = document.querySelector("#cnic");
const password = document.querySelector("#password");
const age = document.querySelector("#age");
const form = document.querySelector("#form");

let usernameRegex = /^[a-zA-Z0-9]{4,15}$/;
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordRegex = /^(?=.*[A-Z])(?=.*\W)[a-zA-Z\d\W]{8,}$/;
let cnicPattern = /^[0-4]{1}[0-9]{2}(-\d{7}-\d{3})?$/;
let ageRegex = /^(1[8-9]|[2-5][0-9]|60)$/;
let notSame = "It does not meet the validation.";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (usernameRegex.test(username.value)) {
    console.log(username.value);
  }
  //else {
  //console.log(notSame);
  //}

  if (emailRegex.test(email.value)) {
    console.log(email.value);
  } else {
    console.log(notSame);
  }

  if (passwordRegex.test(password.value)) {
    console.log(password.value);
  } else {
    console.log(notSame);
  }

  if (cnicPattern.test(cnic.value)) {
    console.log(cnic.value);
  } else {
    console.log(notSame);
  }

  if (ageRegex.test(age.value)) {
    console.log(age.value);
  } else {
    console.log(notSame);
  }
});
