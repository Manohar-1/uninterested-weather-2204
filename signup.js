document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  document.querySelector("#submit").style.cursor = "pointer";

  localStorage.setItem(
    "full-name",
    document.querySelector("form").fullname.value
  );
  localStorage.setItem("emailID", document.querySelector("form").email.value);
  localStorage.setItem(
    "password",
    document.querySelector("form").password.value
  );

  alert("SignedUp Successfully");
  document.location.href = "signin.html";
});
