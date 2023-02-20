const form = document.querySelector('.login-form');
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const {
      elements: { email, password }
    } = event.currentTarget;
  
    if (email.value === "" || password.value === "") {
      return alert("всі поля повинні бути заповнені.");
    }

    const objForm = {
        email: email.value,
        password: password.value
    }
    console.log(objForm);

    event.currentTarget.reset();
}

