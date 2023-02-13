// const refs = {
//   form: document.querySelector(".login-form"),
//   inputEmail: document.querySelector('input[type="email"]'),
//   inputPass: document.querySelector('input[type="password"]'),
//   submitBtn: document.querySelector('button[type="submit"]'),
// };
// refs.form.addEventListener("submit", submitRegistrForm);

// function submitRegistrForm(event) {
//   event.preventDefault();

//   if (refs.inputEmail.value == "" || refs.inputPass.value == "") {
//     alert("Bсі поля повинні бути заповнені.");
//   }

//   const email = event.currentTarget.elements.email.value;
//   const password = event.currentTarget.elements.password.value;
//   const formData = {
//     email,
//     password,
//   };
//   //   const formData = new FormData(event.currentTarget);
//   console.log(formData);
//   event.currentTarget.reset();
// }

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заповни всі поля!");
  }

  const userInfo = {
    email: email.value,
    password: password.value,
  };

  console.log(userInfo);

  event.currentTarget.reset();
}
