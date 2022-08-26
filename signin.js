document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.querySelector("#submit").style.cursor = "pointer";
  let em = localStorage.getItem("emailID");
  let pass = localStorage.getItem("password");

  let form = document.querySelector("form");

  if (em == form.email.value && pass == form.password.value) {
    alert("Signed In Successfully");
    document.location.href = "index.html";
  } else {
    alert("Wrong Email or Password");
  }
});
