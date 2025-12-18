// function welcomeMessage() {
//     const userInput = prompt('Please Enter Your Name!')
//     const weclomeDOM = document.getElementById('welcome')
//     weclomeDOM.innerHTML = 'welcome ' + userInput + ''
// }

// welcomeMessage()

// function validationForm() {

// }


const btn = document.getElementById("hamburger");
const nav = document.getElementById("main-nav");

btn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  btn.classList.toggle("is-open", isOpen);
  btn.setAttribute("aria-expanded", String(isOpen));
});


const form = document.getElementById("contact-form");

const nameInput = document.getElementById("name");
const birthdayInput = document.getElementById("birthday");
const messageInput = document.getElementById("message");

const outTime = document.getElementById("out-time");
const outName = document.getElementById("out-name");
const outBirthday = document.getElementById("out-birthday");
const outGender = document.getElementById("out-gender");
const outMessage = document.getElementById("out-message");

function getGender() {
  const checked = document.querySelector('input[name="gender"]:checked');
  return checked ? checked.value : "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // penting: biar halaman tidak refresh

  const now = new Date();
  outTime.textContent = now.toLocaleString();

  outName.textContent = nameInput.value.trim() || "-";
  outBirthday.textContent = birthdayInput.value || "-";
  outGender.textContent = getGender() || "-";
  outMessage.textContent = messageInput.value.trim() || "-";
});
