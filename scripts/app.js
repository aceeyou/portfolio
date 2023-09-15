const navOpenBtn = document.querySelector("#menu-mobile");
const navCloseBtn = document.querySelector("#menu-mobile-close");
const navMobieMenuOpen = document.querySelector(".overlay__mobile_nav_open");
const navContainer = document.querySelector(".mobile__nav");
const cvBtn = document.querySelector(".resume-btn");
const aNav = document.querySelectorAll("a");

const formContact = document.querySelector("#formContact");
const formSubmitBtn = document.querySelector("#contact-form-submit");
const formName = document.querySelector("#name");
const formEmail = document.querySelector("#email");
const formSubject = document.querySelector("#subject");
const formMessage = document.querySelector("#message");

let isNavOpen = false;

navOpenBtn.addEventListener("click", () => {
  isNavOpen = true;
  navContainer.classList.toggle("mobile__nav-close");
  navMobieMenuOpen.style.display = "block";
});

// function closeMobileNav() {
//   isNavOpen = false;
//   navContainer.classList.toggle("mobile__nav-close");
//   navMobieMenuOpen.style.display = "none";
// }

navCloseBtn.addEventListener("click", () => {
  isNavOpen = false;
  navContainer.classList.toggle("mobile__nav-close");
  navMobieMenuOpen.style.display = "none";
});

function sendMail(e) {
  e.preventDefault();
  const serviceID = "service_ay1kwzj";
  const templateID = "template_pjwtrql";

  let emailTemplate = {
    name: formName.value,
    email: formEmail.value,
    subject: formSubject.value,
    message: formMessage.value,
  };

  console.log(emailTemplate);

  // emailjs.send(serviceID, templateID, emailTemplate).then((res) => {
  //   formName.value = "";
  //   formEmail.value = "";
  //   formSubject.value = "";
  //   formMessage.value = "";
  //   console.log("email sent");
  // });
}
