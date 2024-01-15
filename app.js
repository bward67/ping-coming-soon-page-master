const form = document.querySelector("form");
console.log(form);
const btn = document.querySelector("button");
console.log(btn);
const errorMsg = document.querySelector("small");
console.log(errorMsg);
const email = document.querySelector(".email");
console.log(email);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = email.value.trim();

  if (emailValue === "") {
    form.classList.add("error");
    errorMsg.innerHTML = "Whoops! It looks like you forgot to add your email";
  } else if (!isEmailValid(emailValue)) {
    form.classList.add("error");
    errorMsg.innerHTML = "That is not a valid email address";
  } else {
    form.innerHTML = `<h1 style="color:green;text-align:center">Thank You!</h1><p style="color:green;text-align:center">You have successfully subscribed.</p>`;
  }
});

const isEmailValid = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
};
