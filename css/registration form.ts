const form = document.querySelector("#registration-form");
const errorDiv = document.querySelector("#error-message");
const successDiv = document.querySelector("#success-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const fname = formData.get("fname");
  const lname = formData.get("lname");
  const email = formData.get("email");
  const password = formData.get("password");

  if (fname.trim() === "" || lname.trim() === "" || email.trim() === "" || password.trim() === "") {
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "Please fill out all fields.";
    successDiv.style.display = "none";
    return;
  }

  if (!email.includes("@")) {
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "Please enter a valid email address.";
    successDiv.style.display = "none";
    return;
  }

  if (password.length < 8) {
    errorDiv.style.display = "block";
    errorDiv.innerHTML = "Password must be at least 8 characters long.";
    successDiv.style.display = "none";
    return;
  }

  errorDiv.style.display = "none";
  successDiv.style.display = "
