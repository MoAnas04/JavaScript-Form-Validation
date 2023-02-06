"use strict";

var form = document.getElementById("registration-form");

form.addEventListener("submit", formValidation);

if (formValidation) {
  let email = document.getElementById("e-mail").value;
  setEmail(email);
}

function formValidation() {
  var fname = document.getElementById("firstName").value;
  var lname = document.getElementById("lastName").value;
  var dateOfBirth = new date(document.getElementById("date-of-birth").value);
  var email = document.getElementById("e-mail").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;
  var text = "";

  if (FirstName(fname)) {
  }
  if (LastName(lname)) {
  }
  if (Email(email)) {
  }
  if (DateOfBirth(dateOfBirth)) {
  }
  if (Password(password)) {
  }
  if (ConfirmPassword(confirmPassword)) {
  }
  return false;
}

/*first name input validation*/
function FirstName(fname) {
  var message = document.getElementsByClassName("error-message");
  var letters = /^[A-Za-z]+$/;
  if (fname == "" || fname.match(letters)) {
    text = "";
    message[0].innerHTML = text;
    return true;
  } else {
    text = "First name should contain only letters";
    message[0].innerHTML = text;
    return false;
  }
}

/*last name input validation*/
function LastName(lname) {
  var message = document.getElementsByClassName("error-message");
  var letters = /^[A-Za-z]+$/;
  if (lname == "" || lname.match(letters)) {
    text = "";
    message[1].innerHTML = text;
    return true;
  } else {
    text = "Last name should contain only letters";
    message[1].innerHTML = text;
    return false;
  }
}

function setEmail(email) {
  let emails = JSON.parse(localStorage.getItem("email"));
  emails.push(email);
  localStorage.setItem("email", JSON.stringify(emails));
}

/*email address input validation*/
function Email(email) {
  var message = document.getElementsByClassName("error-message");
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var atpos = email.indexOf("@");
  var dotpos = email.lastIndexOf(".");

  if (
    email == "" ||
    email.match(mailformat) ||
    (atpos > 1 && dotpos - atpos > 2)
  ) {
    text = "";
    message[2].innerHTML = text;
    return true;
  } else if (JSON.parse(localStorage.getItem("email")).includes(email)) {
    text = "email address already exists";
    message[2].innerHTML = text;
  } else {
    text = "Wrong email format";
    message[2].innerHTML = text;
    return false;
  }
}

/*validate date of birth */
function DateOfBirth(date) {
  var message = document.getElementsByClassName("error-message");
  var today = new Date();
  if (today.getFullYear() - date.getFullYear() < 18) {
    text = "you must be at least 18 years old";
    message[3].innerHTML = text;
    return false;
  }
}

/*validate password*/
function Password(password) {
  var message = document.getElementsByClassName("error-message");
  var illegalChars = /[\W_]/; // allow only letters and numbers
  if (illegalChars.test(password)) {
    text = "Password contains illegal characters";
    message[4].innerHTML = text;
    return false;
  } else if (password.search(/[0-9]+/) == -1) {
    text = "Password should contain at least one number";
    message[4].innerHTML = text;
    return false;
  } else {
    text = "";
    message[4].innerHTML = text;
    return true;
  }
}

/*validate confirm-password*/
function ConfirmPassword(confirmPassword) {
  var message = document.getElementsByClassName("error-message");
  var illegalChars = /[\W_]/;
  if (confirmPassword !== password) {
    text = "Passwords don't match";
    message[5].innerHTML = text;
  } else if (illegalChars.test(password)) {
    text = "Password contains illegal characters";
    message[5].innerHTML = text;
    return false;
  } else if (password.search(/[0-9]+/) == -1) {
    text = "Password should contain at least one number";
    message[5].innerHTML = text;
    return false;
  } else {
    text = "";
    message[5].innerHTML = text;
    return true;
  }
}
