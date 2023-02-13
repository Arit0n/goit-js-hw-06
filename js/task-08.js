const refs = {
  form: document.querySelector(".login-form"),
  inputEmail: document.querySelector('input[type="email"]'),
  inputPass: document.querySelector('input[type="password"]'),
  submitBtn: document.querySelector('button[type="submit"]'),
};
refs.form.addEventListener("submit", submitRegistrForm);

function submitRegistrForm(event) {
  event.preventDefault();
  if (refs.inputEmail.value == "" || refs.inputPass.value == "") {
    alert("Bсі поля повинні бути заповнені.");
  }

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const formData = {
    email,
    password,
  };
  //   const formData = new FormData(event.currentTarget);
  console.log(formData);
  refs.form.reset();
}
